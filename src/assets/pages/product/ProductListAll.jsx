import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;
import PaginationCompo from '../../component/PaginationCompo';
import IsScreenLoading from '../../component/IsScreenLoading'

function ProductListAll() {
    const [products, setProducts] = useState([]);
    const [isScreenLoading, setIsScreenLoading] = useState(false);
    const [selectCategory, setSelectCategory] = useState('熱門商品')

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

    const categories = ['熱門商品', ...new Set(products.map((product)=> product.category))];

    const filterProducts = products.filter((product)=>{
        if(selectCategory === '熱門商品') return product;

        return product.category === selectCategory
    })
    return (
        <section className="bg-Tertiary container allProduct-container">
            <div className="row d-flex flex-lg-row flex-column-reverse justify-content-between">
                <div className="col-xl-2 col-lg-3 allProduct-side overflow-auto d-lg-block d-none">
                    {/* <!-- 手風琴版選單列表 --> */}
                    <section className="accordion d-lg-block d-none" id="accordionSidebar">
                        {categories.map((category) => {
                            return (<div className="accordion-item" key={category}>
                                <h2 className="accordion-header" id="headingTwo">
                                    <button type="button" className="accordion-button collapsed px-0 fw-bold fs-4" onClick={()=>setSelectCategory(category)}>
                                        {category}
                                    </button>
                                </h2>
                                {/* <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionSidebar">
                                    <div className="accordion-body p-0">
                                        <button type="button" className="text-black fw-normal ps-4 py-2 btn">子項目1</button><br />
                                        <button type="button" className="text-black fw-normal ps-4 py-2 btn">子項目2</button><br />
                                        <button type="button" className="text-black fw-normal ps-4 py-2 btn">子項目3</button>
                                    </div>
                                </div> */}
                            </div>)
                        })}
                    </section>
                    {/* <!-- 左側瀏覽紀錄 --> */}
                    {/* <ProductBrowsingHistory /> */}
                </div>
                {/* <!-- 商品列表 --> */}
                <section className="col-xl-9 col-lg-8 allProduct-catalog">
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
                        {filterProducts.map((product) => {
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
                    <PaginationCompo pageInfo={{
                        "total_pages": 3,
                        "current_page": 1,
                        "has_pre": false,
                        "has_next": false,
                        "category": ""
                    }} />
                    <IsScreenLoading isScreenLoading={isScreenLoading} />
                </section>
            </div>
        </section>



    )
}

export default ProductListAll