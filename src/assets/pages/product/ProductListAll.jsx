import { useState, useEffect } from 'react'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios'
import 'swiper/css';
import IsScreenLoading from '../../component/IsScreenLoading'
import ProductBrowsingHistory from './ProductBrowsingHistory'
import ProductMobileHistory from './ProductMobileHistory';
import Toast from '../../layout/Toast';
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../../redux/slice/toastSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function ProductListAll() {
    const [products, setProducts] = useState([]);
    const [isScreenLoading, setIsScreenLoading] = useState(false);
    const [selectCategory, setSelectCategory] = useState('全部商品');
    const [ascending, setAscending] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [recentProducts, setRecentProducts] = useState([]);
    const location = useLocation();
    const { category } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const searchQueryParam = queryParams.get('query');
        if (searchQueryParam) {
            setSearchQuery(searchQueryParam);
        }
    }, [location.search]);

    useEffect(() => {
        setSelectCategory(category ? decodeURIComponent(category) : '全部商品');
    }, [category]);

    const getProductList = async () => {
        setIsScreenLoading(true);
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/products/all`);
            setProducts(res.data.products);
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '取得資料失敗',
                status: "failed"
            }))
        } finally {
            setIsScreenLoading(false)
        }
    }

    useEffect(() => {
        getProductList();
    }, [])

    const categories = ['全部商品', ...new Set(products.map((product) => product.category))];

    const filterProducts = products
        .filter((product) => {
            if (selectCategory === '全部商品') return true;
            return product.category === selectCategory;
        })
        .filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) // 根據搜尋框篩選
        )
        .sort((a, b) => (ascending ? a.price - b.price : b.price - a.price));

    // 處理分類變更
    const handleCategoryChange = (category) => {
        setSelectCategory((prevCategory) => (prevCategory === category ? "全部商品" : category));
        navigate(`/products/${category}`);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSelectCategory("全部商品"); // 確保搜尋後仍然顯示全部商品
    };

    // 最近劉覽
    const handleViewProduct = (product) => {
        setRecentProducts((prev) => {
            let updatedProducts = prev.filter((item) => item.id !== product.id);
            updatedProducts.unshift(product);
            if (updatedProducts.length > 5) updatedProducts.pop();

            localStorage.setItem("recentProducts", JSON.stringify(updatedProducts));
            return updatedProducts; // 確保 React 狀態更新
        });
    };

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("recentProducts")) || [];
        setRecentProducts(storedProducts);
    }, []);

    useEffect(() => {
        localStorage.setItem("recentProducts", JSON.stringify(recentProducts));
    }, [recentProducts]);
    return (<>

        <div className="overflow-hidden container mb-5">
            {/* <!-- Navs --> */}
            <Swiper
                slidesPerView={3.3}
                className="nav nav-pills d-lg-none d-flex justify-content-between flex-nowrap text-nowrap allProduct-nav-pills" id="productTab"
                role="tablist">
                {categories.map((category) => {
                    return (
                        <SwiperSlide className="nav-item" key={category}>
                            <button type="button" className="nav-link" onClick={() => setSelectCategory(category)}>
                                {category}
                            </button>
                        </SwiperSlide>)
                })}

            </Swiper>
        </div>

        <section className="bg-Tertiary container allProduct-container">
            <div className="row d-flex flex-lg-row flex-column-reverse justify-content-between">
                <div className="col-xl-2 col-lg-3 allProduct-side overflow-auto d-lg-block d-none">
                    {/* <!-- 手風琴版選單列表 --> */}
                    <section className="accordion d-lg-block d-none" id="accordionSidebar">
                        {categories.map((category) => {
                            return (<div className="accordion-item" key={category}>
                                <h2 className="accordion-header" id="headingTwo">
                                    <button type="button" className={`btn px-0 fw-bold fs-4 ${selectCategory === category ? "text-primary collapsed" : "text-dark"}`} onClick={() => handleCategoryChange(category)}>
                                        {category}
                                    </button>
                                </h2>
                            </div>)
                        })}
                    </section>
                    {/* <!-- 左側瀏覽紀錄 --> */}
                    <ProductBrowsingHistory recentProducts={recentProducts} />
                </div>
                {/* <!-- 商品列表 --> */}
                <section className="col-xl-9 col-lg-8 allProduct-catalog">
                    {/* 搜尋框 */}
                    <form onSubmit={handleSearch} className="d-flex position-relative w-50 mb-5" >
                        <input
                            className="form-control form-control-lg fs-7 ps-3"
                            type="search"
                            placeholder="搜尋商品..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="btn" style={{ display: searchQuery ? 'none' : 'block' }}  >
                            <span
                                className="search-btn material-symbols-outlined text-primary fs-2 position-absolute top-50 translate-middle-y pe-4">
                                search
                            </span >
                        </button>
                    </form>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="fs-4">{selectCategory}</h2>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle border-0 px-0 allProduct-catalog-sort" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="pe-2">
                                    {ascending ? "價格低至高" : "價格高至低"}
                                </span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><button className="dropdown-item" onClick={() => { setAscending(true) }}>價格低至高</button></li>
                                <li><button className="dropdown-item" onClick={() => { setAscending(false) }}>價格高至低</button></li>

                            </ul>
                        </div>
                    </div>
                    <div className="row d-flex">
                        {filterProducts.length > 0 ? (
                            filterProducts.map((product) => (
                                <div className="col-xl-4 col-lg-6 col-md-4 " key={product.id}>
                                    <Link className="card my-5 allProduct-catalog-card d-flex flex-md-column flex-row pb-4"
                                        to={`/products/${product.category}/${product.id}`}
                                        onClick={() => handleViewProduct(product)}>
                                        <img src={product.imageUrl} className="card-img-top allProduct-catalog-img" alt={product.title} />
                                        <div className="card-body py-0 px-md-3 ps-5 pe-0">
                                            <h5 className="card-title mt-md-3 mt-0 mb-md-4 mb-2 fs-5">{product.title}</h5>
                                            <p className="text-accent fs-5">
                                                {`NT$${product.price}`}
                                                <span className="text-gray fw-normal ps-2 text-decoration-line-through">{`NT$${product.origin_price}`}</span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">找不到符合條件的商品</p>
                        )}
                    </div>
                    <IsScreenLoading isScreenLoading={isScreenLoading} />
                </section>
            </div>
            <ProductMobileHistory recentProducts={recentProducts} />
        </section>
        <Toast />
    </>
    )
}

export default ProductListAll