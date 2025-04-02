import { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios'
import PaginationCompo from '../../component/PaginationCompo';
import ProductModal from '../../component/ProductModal';
import DeleteProductModal from '../../component/DeleteProductModal';
import Toast from "../../layout/Toast";
import { Link, useNavigate } from 'react-router';
import IsScreenLoading from '../../component/IsScreenLoading';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const defaultModalState = {
    imageUrl: "",
    title: "",
    category: "",
    unit: "",
    origin_price: "",
    price: "",
    description: "",
    content: "",
    is_enabled: 0,
    imagesUrl: [""],
    product_code: " ", // 新增商品編號
    product_stock: ""  // 新增商品庫存
};

function AdminProductPage() {
    const [products, setProducts] = useState([]);
    const [pageInfo, getPageInfo] = useState({});
    const [modalMode, setModalMode] = useState(null);
    const [tempProduct, setTempProduct] = useState(defaultModalState);
    const modelRef = useRef(null);
    const delModelRef = useRef(null);
    const navigate = useNavigate()
    const [isScreenLoading, setIsScreenLoading] = useState(false)
    const [totalProducts, setTotalProducts] = useState(0);  // 全部商品數
    const [totalOnSale, setTotalOnSale] = useState(0);      // 上架商品數
    const [totalNoOnSale, setTotalNoOnSale] = useState(0);  // 未上架商品數
    const [searchTerm, setSearchTerm] = useState(""); // 搜尋字串
    const [status] = useState("all"); // 當前篩選的狀態（全部 / 上架 / 未上架）
    const [isInputFocused, setIsInputFocused] = useState(false); // 控制放大鏡顯示
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // 清除監聽器
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const getTotalProducts = async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/products/all`);
            const allProducts = Object.values(res.data.products); // 取得所有商品陣列
            setTotalProducts(allProducts.length);  // 計算全部商品數
            setTotalOnSale(allProducts.filter(product => product.is_enabled === 1).length); // 上架中
            setTotalNoOnSale(allProducts.filter(product => product.is_enabled === 0).length); // 未上架
        } catch (error) {
            console.error("取得所有商品數量失敗", error);
        }
    };

    const checkLogin = useCallback(async () => {
        try {
            await axios.post(`${baseUrl}/v2/api/user/check`)
        } catch (error) {
            alert("請登入管理員帳號", error.response)
            navigate('/adminlogin')
        }
    }, [navigate]);

    useEffect(() => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            checkLogin()
        }
    }, [checkLogin])

    const getProductList = useCallback(async (page = 1) => {
        setIsScreenLoading(true)
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/products?page=${page}`);
            setProducts(res.data.products);
            getPageInfo(res.data.pagination)
        } catch (error) {
            alert('取得資料失敗', error.response)
            navigate('/adminlogin')
        } finally {
            setIsScreenLoading(false)
        }
    }, [navigate]);

    const btnChangePage = (page) => {
        getProductList(page);
    }

    const openModal = (mode, product) => {
        setModalMode(mode);
        switch (mode) {
            case 'create':
                setTempProduct(defaultModalState);
                break;
            case 'edit':
                setTempProduct(product);
                break;
            default:
                break;
        }
        modelRef.current.show()
    }
    const openDelModal = (product) => {
        setTempProduct(product);
        delModelRef.current.show()
    }

    const filterProducts = (status) => {
        let filtered = products;

        // 篩選上架狀態
        if (status === "onSale") {
            filtered = filtered.filter((product) => product.is_enabled === 1);
        } else if (status === "noOnSale") {
            filtered = filtered.filter((product) => product.is_enabled === 0);
        }

        // 套用搜尋條件
        if (searchTerm) {
            filtered = filtered.filter(
                (product) =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (product.product_code && product.product_code.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        return filtered;
    };

    useEffect(() => {
        getProductList();
        getTotalProducts();
    }, [getProductList])
    return (
        <>
            <div className="container  rounded-3 py-5" >
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between mb-6">
                            <h3>商品管理</h3>
                            <button type="button" className="btn btn-primary py-1 text-white f-6" onClick={() => openModal('create')}>
                                <i className="bi bi-plus-circle me-1"></i>
                                新增產品
                            </button>
                        </div>
                        <div className='bg-white  rounded-3 p-3'>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link products-nav-link border-0 active" id="products-tab" data-bs-toggle="tab" data-bs-target="#products-tab-pane" type="button" role="tab" aria-controls="products-tab-pane" aria-selected="true"> 全部({totalProducts})</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link products-nav-link border-0" id="onSale-tab" data-bs-toggle="tab" data-bs-target="#onSale-tab-pane" type="button" role="tab" aria-controls="onSale-tab-pane" aria-selected="false">上架中({totalOnSale})</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link products-nav-link border-0" id="noOnSale-tab" data-bs-toggle="tab" data-bs-target="#noOnSale-tab-pane" type="button" role="tab" aria-controls="noOnSale-tab-pane" aria-selected="false">未上架({totalNoOnSale})</button>
                                </li>
                            </ul>

                            <form role="search" className="position-relative d-flex py-5" style={{ width: screenWidth > 767 ? "50%" : "100%" }}>
                                <div className="dropdown position-absolute top-50 start-0 translate-middle-y z-2">
                                    <button className="btn btn-white btn-sm fw-semibold fs-lg-6 fs-7 border-end border-1 rounded-0 text-nowrap ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        全部商品 <span className="material-symbols-outlined text-primary align-bottom">keyboard_arrow_down</span>
                                    </button>
                                    <ul className="dropdown-menu py-0">
                                        <li><Link className="dropdown-item fw-semibold" >全部商品</Link></li>
                                    </ul>
                                </div>
                                <input
                                    className="form-control form-control-lg fs-7 ps-11"
                                    type="search"
                                    placeholder="可輸入商品編號、名稱"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onFocus={() => setIsInputFocused(true)}  // 當 input 聚焦時隱藏放大鏡
                                    onBlur={() => setIsInputFocused(false)} // 當 input 失焦時，如果沒有輸入內容，就顯示放大鏡
                                    aria-label="Search"
                                />
                                {!isInputFocused && !searchTerm && (
                                    <span className="material-symbols-outlined text-primary fs-2 position-absolute top-50 end-0 translate-middle-y me-2">
                                        search
                                    </span>
                                )}
                            </form>
                            <div className="tab-content " id="myTabContent">
                                <div className="tab-pane fade show active" id="products-tab-pane" role="tabpanel" aria-labelledby="products-tab" tabIndex="0">
                                    {renderProductTable(filterProducts('all'))}
                                </div>
                                <div className="tab-pane fade" id="onSale-tab-pane" role="tabpanel" aria-labelledby="onSale-tab" tabIndex="0">
                                    {renderProductTable(filterProducts('onSale'))}
                                </div>
                                <div className="tab-pane fade" id="noOnSale-tab-pane" role="tabpanel" aria-labelledby="noOnSale-tab" tabIndex="0">
                                    {renderProductTable(filterProducts('noOnSale'))}
                                </div>
                            </div>

                            <PaginationCompo pageInfo={pageInfo} btnChangePage={btnChangePage} />
                        </div>
                    </div>
                </div>
            </div>
            <ProductModal modalMode={modalMode} setTempProduct={setTempProduct} tempProduct={tempProduct} getProductList={getProductList} modelRef={modelRef} />

            <DeleteProductModal tempProduct={tempProduct} getProductList={getProductList} delModelRef={delModelRef} />

            <Toast />

            <IsScreenLoading isScreenLoading={isScreenLoading} />
        </>
    )
    function renderProductTable(filteredProducts) {
        return (<>
            {/* 電腦版 */}
            <table className="table d-none d-sm-table">
                <thead>
                    <tr>
                        <th className="bg-secondary-200 text-gray text-center fs-7">編號</th>
                        <th className="bg-secondary-200 text-gray fs-7">商品</th>
                        <th className="bg-secondary-200 text-gray fs-7"></th>
                        <th className="bg-secondary-200 text-gray fs-7 text-center">售價</th>
                        <th className="bg-secondary-200 text-gray fs-7 text-center text-nowrap">庫存</th>
                        <th className="bg-secondary-200 text-gray fs-7"></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <tr key={product.id}>
                                <td className="text-center text-nowrap fw-normal ">{product.product_code || '無編號'}</td>
                                <td>
                                    <img className="rounded-3" style={{ width: "60px", height: "60px", objectFit: "cover" }} src={product.imageUrl} alt="商品圖片" />
                                </td>
                                <td>
                                    <p className='text-nowrap'>{product.title}</p>
                                    {!product.is_enabled && <span className="bg-secondary text-primary rounded-2 p-1 fw-normal">未上架</span>}
                                </td>
                                <td className="text-center">
                                    <p className="text-accent">NT${product.price}</p>
                                    <p className="text-gray text-decoration-line-through fw-normal">NT${product.origin_price}</p>
                                </td>
                                <td className="text-center fw-normal">{product.product_stock || 3}</td>
                                <td>
                                    <div className="btn-group d-none d-md-block">
                                        <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openModal('edit', product)}>編輯</button>
                                        <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openDelModal(product)}>刪除</button>
                                    </div>
                                    <div className="btn-group d-md-none d-flex flex-column">
                                        <button type="button" className="btn bg-transparent text-accent btn-sm text-nowrap" onClick={() => openModal('edit', product)}>編輯</button>
                                        <button type="button" className="btn bg-transparent text-accent btn-sm text-nowrap" onClick={() => openDelModal(product)}>刪除</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-primary text-center py-3">目前沒有符合條件的商品</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* 手機版 */}
            <table className="table table-bordered d-sm-none">
                <tbody>
                    {filteredProducts.length > 0 ? (
                        filterProducts(status).map((product) => (
                            <tr key={product.id}>
                                <div className='d-flex justify-content-between'>
                                    <td className="text-center fw-normal">{product.product_code || '無編號'}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openModal('edit', product)}>編輯</button>
                                            <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openDelModal(product)}>刪除</button>
                                        </div>
                                    </td>
                                </div>
                                <div className='d-flex '>
                                    <div className='me-5'>
                                        <td>
                                            <img className="rounded-3" style={{ width: "80px", height: "80px", objectFit: "cover" }} src={product.imageUrl} alt="商品圖片" />
                                        </td>
                                    </div>
                                    <div className='d-flex flex-column align-items-start'>
                                        <td className='d-flex'>
                                            <p className='me-2'>{product.title}</p>
                                            <p>{!product.is_enabled && <span className="bg-secondary text-primary rounded-2 p-1 fw-normal">未上架</span>}</p>
                                        </td>
                                        <td className="text-center">
                                            <p className="text-accent">NT${product.price}</p>
                                            <p className="text-gray text-decoration-line-through fw-normal">NT${product.origin_price}</p>
                                        </td>
                                        <td className="text-center fw-normal">數量 {product.product_stock || 3}</td>
                                    </div>
                                </div>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-primary text-center py-3">目前沒有符合條件的商品</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
        );
    }
}
export default AdminProductPage;