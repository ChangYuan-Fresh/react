import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;
import Pagination from '../../component/Pagination';


function ProductListAll() {
    const [products, setProducts] = useState([]);
    const [isScreenLoading, setIsScreenLoading] = useState(false);

    const getProductList = async () => {
        setIsScreenLoading(true);
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/products`);
            setProducts(res.data.products);
        } catch (error) {
            alert('取得資料失敗' || error.data.message)
        } finally {
            setIsScreenLoading(false)
        }
    }

    useEffect(() => {
        getProductList();
    }, [])

    return (<section className="col-xl-9 col-lg-8 allProduct-catalog">
        <div className="d-flex justify-content-between align-items-center">
            <h2 className="fs-4">熱門商品</h2>
            <div className="dropdown">
                <button className="btn dropdown-toggle border-0 px-0 allProduct-catalog-sort" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="pe-2">
                        排序方式：熱門
                    </span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">熱門</a></li>
                    <li><a className="dropdown-item" href="#">價格高至低</a></li>
                    <li><a className="dropdown-item" href="#">價格低至高</a></li>
                    <li><a className="dropdown-item" href="#">銷售量高至低</a></li>
                    <li><a className="dropdown-item" href="#">銷售量低至高</a></li>
                </ul>
            </div>
        </div>
        <div className="row d-flex">
            {products.map((product) => {
                return (
                    <div className="col-xl-4 col-lg-6 col-md-4 " key={product.id}>
                        <Link className="card my-5 allProduct-catalog-card d-flex flex-md-column flex-row " to={`/products/${product.id}`}>
                            <img src={product.imageUrl} className="card-img-top allProduct-catalog-img" alt={product.title} />
                            <div className="card-body py-0 px-md-0 ps-5 pe-0">
                                <h5 className="card-title mt-md-3 mt-0 mb-md-4 mb-2 fs-5">{product.title}</h5>
                                <p className="text-accent fs-5">{`NT$${product.origin_price}`}<span className="text-gray fw-normal ps-2">{`NT$${product.price}`}</span></p>
                            </div>
                        </Link>
                    </div>)
            })}
        </div>
        {/* <!-- 頁碼 --> */}
        <Pagination pageInfo={{
            "total_pages": 3,
            "current_page": 1,
            "has_pre": false,
            "has_next": false,
            "category": ""
        }} />
        <isScreenLoading isScreenLoading={isScreenLoading} />
    </section>


    )
}

export default ProductListAll