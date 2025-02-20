import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;


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
        <nav aria-label="Page navigation" className="border-0">
            <ul className="pagination justify-content-center mb-5 mt-lg-4 mt-0 border-0 allProduct-pagination">
                <li className="page-item allProduct-pagination-back">
                    <a className="page-link border-0 bg-transparent d-flex justify-content-center align-items-center allProduct-pagination-linkSize" href="#">
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.40007 7.99998L8.60007 13.2C8.84451 13.4444 8.96673 13.7555 8.96673 14.1333C8.96673 14.5111 8.84451 14.8222 8.60007 15.0667C8.35562 15.3111 8.04451 15.4333 7.66673 15.4333C7.28895 15.4333 6.97784 15.3111 6.7334 15.0667L0.600065 8.93332C0.466732 8.79998 0.372287 8.65554 0.316732 8.49998C0.261176 8.34443 0.233398 8.17776 0.233398 7.99998C0.233398 7.82221 0.261176 7.65554 0.316732 7.49998C0.372287 7.34443 0.466732 7.19998 0.600065 7.06665L6.7334 0.933317C6.97784 0.688873 7.28895 0.56665 7.66673 0.56665C8.04451 0.56665 8.35562 0.688873 8.60007 0.933317C8.84451 1.17776 8.96673 1.48887 8.96673 1.86665C8.96673 2.24443 8.84451 2.55554 8.60007 2.79998L3.40007 7.99998Z" fill="#919191" />
                        </svg>
                    </a>
                </li>
                <li className="page-item active allProduct-pagination-number">
                    <a className="page-link border-0 fs-5 fw-bold rounded-3 d-flex justify-content-center align-items-center allProduct-pagination-linkSize" href="#">
                        1
                    </a>
                </li>
                <li className="page-item allProduct-pagination-number">
                    <a className="page-link border-0 fs-5 fw-normal rounded-3 d-flex justify-content-center align-items-center allProduct-pagination-linkSize" href="#">
                        2
                    </a>
                </li>
                <li className="page-item allProduct-pagination-number">
                    <a className="page-link border-0 fs-5 fw-normal rounded-3 d-flex justify-content-center align-items-center allProduct-pagination-linkSize" href="#">
                        3
                    </a>
                </li>
                <li className="page-item allProduct-pagination-forward">
                    <a className="page-link border-0 bg-transparent d-flex justify-content-center align-items-center allProduct-pagination-linkSize" href="#">
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.80007 7.99998L0.600065 2.79998C0.355621 2.55554 0.233398 2.24443 0.233398 1.86665C0.233398 1.48887 0.355621 1.17776 0.600065 0.933317C0.84451 0.688873 1.15562 0.56665 1.5334 0.56665C1.91118 0.56665 2.22229 0.688873 2.46673 0.933317L8.60007 7.06665C8.7334 7.19998 8.82784 7.34443 8.8834 7.49998C8.93895 7.65554 8.96673 7.82221 8.96673 7.99998C8.96673 8.17776 8.93895 8.34443 8.8834 8.49998C8.82784 8.65554 8.7334 8.79998 8.60007 8.93332L2.46673 15.0667C2.22229 15.3111 1.91118 15.4333 1.5334 15.4333C1.15562 15.4333 0.84451 15.3111 0.600065 15.0667C0.355621 14.8222 0.233398 14.5111 0.233398 14.1333C0.233398 13.7555 0.355621 13.4444 0.600065 13.2L5.80007 7.99998Z" fill="#788F49" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
        <isScreenLoading isScreenLoading={isScreenLoading}/>
    </section>

    
)
}

export default ProductListAll