import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import PaginationCompo from '../../component/PaginationCompo';
import ProductModal from '../../component/ProductModal';
import DeleteProductModal from '../../component/DeleteProductModal';
import Toast from "../../layout/Toast";
import { Link, useNavigate } from 'react-router';

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
    const [totalProducts, setTotalProducts] = useState(0); //計算所有商品

    const getTotalProducts = async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/products/all`);
            setTotalProducts(Object.keys(res.data.products).length);
        } catch (error) {
            console.error("取得所有商品數量失敗", error);
        }
    };

    const checkLogin = async () => {
        try {
            await axios.post(`${baseUrl}/v2/api/user/check`)
        } catch (error) {
            alert("請登入管理員帳號")
            navigate('/adminlogin')
        }
    }
    useEffect(() => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            checkLogin()
        }
    }, [])

    const getProductList = async (page = 1) => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/products?page=${page}`);
            setProducts(res.data.products);
            getPageInfo(res.data.pagination)
        } catch (error) {
            alert('取得資料失敗' || res.data.message)
            navigate('/adminlogin')
        }
    }

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
    useEffect(() => {
        getProductList();
        getTotalProducts();
    }, [])

    return (
        <>
            <div className="container  rounded-3 py-5" >
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between mb-6">
                            <h3>商品管理</h3>
                            <button type="button" className="btn btn-primary py-1 text-white f-6" onClick={() => openModal('create')}>
                                <i class="bi bi-plus-circle me-1"></i>
                                新增產品
                            </button>
                        </div>
                        <div className='bg-white  rounded-3 p-3'>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link products-nav-link border-0 active" id="products-tab" data-bs-toggle="tab" data-bs-target="#products-tab-pane" type="button" role="tab" aria-controls="products-tab-pane" aria-selected="true"> 全部({totalProducts})</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link products-nav-link border-0" id="onSale-tab" data-bs-toggle="tab" data-bs-target="#onSale-tab-pane" type="button" role="tab" aria-controls="onSale-tab-pane" aria-selected="false">上架中(0)</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link products-nav-link border-0" id="noOnSale-tab" data-bs-toggle="tab" data-bs-target="#noOnSale-tab-pane" type="button" role="tab" aria-controls="noOnSale-tab-pane" aria-selected="false">未上架(0)</button>
                                </li>
                            </ul>

                            <form role="search" className="position-relative d-flex py-5" style={{ width: "50%" }}>
                                <div className="dropdown position-absolute top-50 start-0 translate-middle-y z-2">
                                    <button className="btn btn-white btn-sm fw-semibold fs-lg-6 fs-7 border-end border-1 rounded-0 text-nowrap ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        全部商品 <span className="material-symbols-outlined text-primary align-bottom">keyboard_arrow_down</span>
                                    </button>
                                    <ul className="dropdown-menu py-0">
                                        <li><Link className="dropdown-item fw-semibold" >商品編號</Link></li>
                                        <li><Link className="dropdown-item fw-semibold" >商品名稱</Link></li>
                                    </ul>
                                </div>
                                <input className="form-control form-control-lg fs-7 ps-11 " type="search" placeholder="可輸入商品編號、名稱等" aria-label="Search" />
                                <Link><span className="material-symbols-outlined text-primary fs-2 position-absolute top-50 end-0 translate-middle-y  me-2">search</span ></Link>
                            </form>
                            <div class="tab-content" id="myTabContent">
                                <div
                                    class="tab-pane fade show active"
                                    id="products-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="products-tab"
                                    tabindex="0"
                                >
                                    <table className="table ">
                                        <thead>
                                            <tr  >
                                                <th className='bg-secondary-200 text-gray fs-7 text-center'>編號</th>
                                                <th className='bg-secondary-200 text-gray fs-7' scope="col">商品</th>
                                                <th className='bg-secondary-200 text-gray fs-7' scope="col"></th>
                                                <th className='bg-secondary-200 text-gray fs-7 text-center' scope="col">售價</th>
                                                <th className='bg-secondary-200 text-gray fs-7 text-center' scope="col">庫存</th>
                                                <th className='bg-secondary-200 text-gray fs-7' scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product) => {
                                                return (
                                                    <tr key={product.id}>
                                                        <th scope="row" className='fw-normal text-center'>{product.product_code || '無編號'}</th>
                                                        <td><img className='rounded-3' style={{width:"60px", height:"60px",objectFit: 'cover'}} src={product.imageUrl} alt="商品圖片" /></td>
                                                        <td>{product.title}
                                                            <p id={product.id} className="text-decoration-none">{product.is_enabled ? (<span></span>) : (<span className='bg-secondary text-primary rounded-2 p-1 fw-normal fs-7'>未上架</span>)}</p >
                                                        </td>
                                                        <td className='text-center'><p className='text-accent'>NT${product.origin_price}</p>
                                                            <p className='text-gray fw-normal text-decoration-line-through'>NT${product.price}</p>
                                                        </td>
                                                        <td className='fw-normal text-center'>{product.product_stock || 3 }</td>                                                      
                                                        <td>
                                                            <div className="btn-group" role="group">
                                                                <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openModal('edit', product)}>編輯</button>
                                                                <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openDelModal(product)}>刪除</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane fade" id="onSale-tab-pane" role="tabpanel" aria-labelledby="onSale-tab" tabindex="0">上架中</div>
                                <div class="tab-pane fade" id="noOnSale-tab-pane" role="tabpanel" aria-labelledby="noOnSale-tab" tabindex="0">未上架</div>
                            </div>

                            <PaginationCompo pageInfo={pageInfo} btnChangePage={btnChangePage} />
                        </div>
                    </div>
                </div>
            </div>
            <ProductModal modalMode={modalMode} setTempProduct={setTempProduct} tempProduct={tempProduct} getProductList={getProductList} modelRef={modelRef} />

            <DeleteProductModal tempProduct={tempProduct} getProductList={getProductList} delModelRef={delModelRef} />

            <Toast />
        </>
    )
}
export default AdminProductPage;