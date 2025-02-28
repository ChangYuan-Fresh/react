
import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import PaginationCompo from '../../component/PaginationCompo';
import ProductModal from '../../component/ProductModal';
import DeleteProductModal from '../../component/DeleteProductModal';
import Toast from "../../layout/Toast";
import { useNavigate } from 'react-router';

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
    imagesUrl: [""]
};

function AdminProductPage() {
    const [products, setProducts] = useState([]);
    const [pageInfo, getPageInfo] = useState({});
    const [modalMode, setModalMode] = useState(null);
    const [tempProduct, setTempProduct] = useState(defaultModalState);
    const modelRef = useRef(null);
    const delModelRef = useRef(null);
    const navigate = useNavigate()

    
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
        getProductList()
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
                        <div className='bg-white  rounded-3'>
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th scope="col">產品名稱</th>
                                        <th scope="col">原價</th>
                                        <th scope="col">售價</th>
                                        <th scope="col">是否上架</th>
                                        <th scope="col">查看細節</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => {
                                        return (
                                            <tr key={product.id}>
                                                <th scope="row">{product.title}</th>
                                                <td>{product.origin_price}</td>
                                                <td>{product.price}</td>
                                                <td><p id={product.id} className="text-decoration-none">{product.is_enabled ? (<span className="text-success">上架</span>) : (<span>下架</span>)}</p ></td>
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