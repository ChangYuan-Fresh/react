import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie-hand.json";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import Toast from '../layout/Toast';

const baseUrl = 'https://ec-course-api.hexschool.io/v2/api';
const apiPath = 'changyuan_fresh';


function Home() {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState("images/Cauliflower HQ (2).png");

    const storyImages = {
        cauliflower: "images/Cauliflower HQ (2).png",
        grape: "https://changyuan-fresh.github.io/FirstProject/assets/grape1-7a8c01cc.png",
        farmTotable: "images/about3.png",
        clam: "images/Kindelmedia 8352389 1.png",
    };

    const handleCategorySelect = (category) => {
        navigate(`/products?category=${encodeURIComponent(category)}`);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            navigate(`/products?query=${encodeURIComponent(searchInput)}`);
        }
    };

    const [products, setProducts] = useState([]); // 儲存所有商品
    const [activeCategory, setActiveCategory] = useState("熱門商品"); // 當前選擇的分類

    // 定義商品分類
    const categories = [
        "熱門商品",
        "蔬菜水果",
        "生鮮肉品",
        "水產海鮮",
        "蛋與乳品"
    ];

    useEffect(() => {
        // 從 API 取得商品數據
        fetch(`${baseUrl}/${apiPath}/products/all`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setProducts(data.products);
                }
            })
            .catch((err) => console.error("獲取商品失敗:", err));
    }, []);

    // 根據選擇的分類篩選商品
    const filteredProducts = activeCategory === "熱門商品"
        ? products
        : products.filter(product => product.category === activeCategory);

    const handleBuyNow = async (product_id) => {
        try {
            await axios.post(`${baseUrl}/${apiPath}/cart`, {
                data: {
                    product_id,
                    qty: 1,
                },
            });
            navigate('/cart'); // 跳轉到購物車頁面
        } catch (error) {
            alert(error.response?.data?.message || '加入購物車失敗');
        }
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <main>
                {/* <!--banner--> */}
                <section className="mt-6 position-relative">
                    <div className="allProduct-banner-mx">
                        <img src="images/banner.png" alt="" className="d-block w-100 allProduct-banner-img" />
                        <div className="position-absolute banner-text translate-middle ">
                            <h3 className="d-lg-inline-block d-sm-flex  justify-content-sm-center bg-primary text-white text-nowrap py-lg-3 mb-lg-4 mb-2 px-lg-4 p-2 ">
                                來自彰化的新鮮美味
                            </h3>
                            <br />
                            <h4 className="d-inline-block bg-white py-lg-2 px-lg-4 p-2 mb-lg-4 mb-2 fs-lg-4 fs-5 d-none d-lg-block">
                                在地農夫精心栽培，每一口都是健康的保證
                            </h4>
                            <form onSubmit={handleSearch} role="search" className="position-relative d-flex" >
                                <div className="dropdown position-absolute top-50 start-0 translate-middle-y z-2">
                                    <button className="btn btn-white btn-sm fw-semibold fs-lg-6 fs-7 border-end border-1 rounded-0 text-nowrap ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        全部商品 <span className="material-symbols-outlined text-primary align-bottom">keyboard_arrow_down</span>
                                    </button>
                                    <ul className="dropdown-menu py-0">
                                        <li><button className="dropdown-item border-bottom fw-bold " onClick={() => handleCategorySelect('熱門商品')}>熱門商品</button></li>
                                        <li><button className="dropdown-item fw-semibold" onClick={() => handleCategorySelect('蔬菜水果')}>蔬菜水果</button></li>
                                        <li><button className="dropdown-item fw-semibold" onClick={() => handleCategorySelect('生鮮肉品')}>生鮮肉品</button></li>
                                        <li><button className="dropdown-item fw-semibold" onClick={() => handleCategorySelect('水產海鮮')}>水產海鮮</button></li>
                                        <li><button className="dropdown-item fw-semibold" onClick={() => handleCategorySelect('蛋與乳品')}>蛋與乳品</button></li>
                                    </ul>
                                </div>
                                <input
                                    className="form-control form-control-lg fs-7 ps-11"
                                    type="search"
                                    placeholder="來~新鮮抵家啦~"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                />
                                <button type="submit" className="btn" style={{ display: searchInput ? 'none' : 'block' }} >
                                    <span
                                        className="search-btn material-symbols-outlined text-primary fs-2 position-absolute top-50 translate-middle-y  me-2">
                                        search
                                    </span >
                                </button>
                            </form>
                        </div>
                        <img src="images/Illustration/Top-Curve.png" alt="" className="d-block position-absolute bottom-0 start-0 allProduct-banner-mask" />
                    </div>
                </section>              
                {/* <!--3個理由--> */}
                <section className="reason ">
                    <div className="container d-flex flex-column align-items-center py-lg-11 py-6" >
                        <div className="mb-8 d-flex flex-column align-items-center">
                            <h4 className="fs-lg-1 mb-lg-4 mb-2">選擇彰源鮮味的3個理由</h4>
                            <h5 className="fs-lg-4 text-accent">Choose us</h5>
                        </div>
                        <div className="row row-cols-lg-3 row-cols-1 d-flex flex-lg-row flex-column align-items-center justify-content-ceter gy-6 ">
                            <div className="col">
                                <div className="card bg-transparent border-0 d-flex flex-column align-items-center justify-content-ceter" data-aos="fade-up">
                                    <picture>
                                        <source media="(min-width: 992px)" srcSet="images/Illustration/Farmer-sm.png" />
                                        <img src="images/Illustration/Farmer.png" alt="#" />
                                    </picture>
                                    <div className="reason-card-body d-flex flex-column align-items-center ">
                                        <h5 className="reason-card-title fs-lg-4 bg-accent text-white px-lg-6 px-8 py-lg-3 py-2 rounded-4 mb-3">支持在地小農</h5>
                                        <p className="card-text fs-lg-5 fs-7 px-4 py-lg-6 py-3 bg-white rounded-3">由彰化農民親手栽種，並確保每一份產品收益，妥當回饋農民，促進當地市場。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-transparent border-0 d-flex flex-column align-items-center justify-content-ceter" data-aos="fade-up">
                                    <picture>
                                        <source media="(min-width: 992px)" srcSet="images/Illustration/ITruck-sm.png" />
                                        <img src="images/Illustration/ITruck.png" alt="#" />
                                    </picture>
                                    <div className="reason-card-body d-flex flex-column align-items-center">
                                        <h5 className="card-title fs-lg-4 bg-accent text-white px-lg-6 px-8 py-lg-3 py-2 rounded-4 mb-3">產地新鮮直送</h5>
                                        <p className="reason-card-text fs-lg-5 fs-7 px-4 py-lg-6 py-3 bg-white rounded-3">從田間到餐桌，確保產地直送，每一次配送都力求保存最新鮮的自然風味。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-transparent border-0 d-flex flex-column align-items-center justify-content-ceter" data-aos="fade-up">
                                    <picture>
                                        <source media="(min-width: 992px)" srcSet="images/Illustration/Earth-sm.png" />
                                        <img src="images/Illustration/Earth.png" alt="#" />
                                    </picture>
                                    <div className="reason-card-body d-flex flex-column align-items-center">
                                        <h5 className="card-title fs-lg-4 bg-accent text-white px-lg-6 px-8 py-lg-3 py-2 rounded-4 mb-3">維護環境永續</h5>
                                        <p className="reason-card-text fs-lg-5 fs-7 px-4 py-lg-6 py-3 bg-white rounded-3">由專家嚴格控款，農作與畜產的用藥及碳排放，確保對環境以及您的健康無害。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--商品列表--> */}
                <section>
                    <div className="container py-lg-9 py-6">
                        {/* 分類Nav */}
                        <ul className="nav nav-tabs product-nav-tabs px-auto" id="MyProductTab" role="tablist">
                            <Swiper spaceBetween={48} slidesPerView={3.2} className="swiper MyProduct-nav-product-swiper px-6">
                                {categories.map((category, index) => (
                                    <SwiperSlide key={index} className="swiper-slide">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link product-nav-link border-0 fs-lg-3 fs-md-4 fs-6 text-nowrap ${activeCategory === category ? "active" : ""}`}
                                                type="button"
                                                role="tab"
                                                onClick={() => setActiveCategory(category)}
                                            >
                                                {category}
                                            </button>
                                        </li>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </ul>
                        {/* 商品展示區 */}
                        <div className="tab-content" id="MyProductTabContent">
                            <div className="tab-pane fade show active" id="hot-product" role="tabpanel" aria-labelledby="hot-product-tab">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation
                                    scrollbar={{ draggable: true }}
                                    pagination={{ clickable: true }}
                                    breakpoints={{
                                        0: { slidesPerView: 1, spaceBetween: 12 },
                                        500: { slidesPerView: 1, spaceBetween: 12 },
                                        776: { slidesPerView: 2, spaceBetween: 12 },
                                        1200: { slidesPerView: 4, spaceBetween: 12 },
                                    }}
                                    className="MyProduct-product-card-wrap swiper MyProduct-product-swiper py-8 position-relative"
                                >
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map((product) => (
                                            <SwiperSlide key={product.id} className="swiper-slide card border-0">
                                                <div>
                                                    <Link to={`/products/${product.id}`}>
                                                        <img src={product.imageUrl} alt={product.name} className="rounded-4 product-index-img" />
                                                    </Link>
                                                </div>
                                                <div className="card-body px-0">
                                                    <h6 className="card-title product-card-title fs-lg-5 text-nowrap fw-bold">
                                                        {product.title}
                                                    </h6>
                                                    <div className="card-text d-flex">
                                                        <p className="text-accent fw-bold me-2">NT${product.price}</p>
                                                        <del className="fs-8 text-gray fw-normal">NT${product.origin_price}</del>
                                                    </div>
                                                </div>
                                                <div className="d-grid gap-2">
                                                    <button
                                                        className="btn btn-primary product-btn border-0 fw-bold fs-lg-4 fs-5"
                                                        onClick={() => handleBuyNow(product.id)}
                                                    >
                                                        立即購買
                                                    </button>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    ) : (
                                        <p className="text-center mt-4">該分類暫無商品</p>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--產地故事標題--> */}
                <section>
                    <div className="container pt-lg-11 pt-6 pb-lg-8 pb-3 d-flex justify-content-lg-between justify-content-center">
                        <div className="d-lg-flex d-none">
                            <img src="images/Illustration/Pumpkin.png" alt="Pumpkin" className="me-8 d-xl-block d-none" />
                            <img src="images/Illustration/persimmon.png" alt="persimmon" className="me-8" />
                            <img src="images/Illustration/Pumpkin.png" alt="Pumpkin" />
                        </div>
                        <div className=" d-flex flex-column align-items-center">
                            <h4 className="fs-lg-1 mb-lg-4 mb-3">產地故事</h4>
                            <h5 className="fs-lg-4 text-accent">Story</h5>
                        </div>
                        <div className="d-lg-flex d-none">
                            <img src="images/Illustration/Pumpkin.png" alt="Pumpkin" className="me-8 d-xl-block d-none" />
                            <img src="images/Illustration/persimmon.png" alt="persimmon" className="me-8" />
                            <img src="images/Illustration/Pumpkin.png" alt="Pumpkin" />
                        </div>
                    </div>
                </section>
                {/* <!--產地故事內容--> */}
                <section className="bg-secondary story-bg">
                    <div className="container py-lg-11 py-8 ">
                        <div className="d-lg-flex justify-content-lg-between align-items-center">
                            <div className="story-tab-content rounded-5 me-lg-6 me-0 mb-lg-0 mb-4 story-img">
                                <img src={activeImage} alt="story" className="" />
                            </div>
                            <div className="nav story-nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <Link to="/stories/-OK5M9Em5IQqFNCZCDXS">
                                    <button
                                        className="nav-link story-btn text-start fs-lg-4 fs-6 position-relative"
                                        onMouseEnter={() => setActiveImage(storyImages.cauliflower)}
                                    >
                                        種植花椰菜的故事
                                        <span className="material-symbols-outlined story-icon">chevron_right</span>
                                    </button>
                                </Link>
                                <Link to="/stories/-OK5MfbrpHIayuP0WYAC">
                                    <button
                                        className="nav-link story-btn text-start fs-lg-4 fs-6 position-relative"
                                        onMouseEnter={() => setActiveImage(storyImages.grape)}
                                    >
                                        葡萄園的奧秘
                                        <span className="material-symbols-outlined story-icon">chevron_right</span>
                                    </button>
                                </Link>
                                <Link to="/stories/-OK5LgP5Khusdh8K_m3h">
                                    <button
                                        className="nav-link story-btn text-start fs-lg-4 fs-6 position-relative"
                                        onMouseEnter={() => setActiveImage(storyImages.farmTotable)}
                                    >
                                        從牧場到餐桌的旅程
                                        <span className="material-symbols-outlined story-icon">chevron_right</span>
                                    </button></Link>
                                <Link to="/stories">
                                    <button
                                        className="nav-link story-btn text-start fs-lg-4 fs-6 position-relative"
                                        onMouseEnter={() => setActiveImage(storyImages.clam)}
                                    >
                                        想知道更多產地故事嗎?
                                        <span className="material-symbols-outlined story-icon">chevron_right</span>
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white position-relative py-lg-7 py-3">
                        <picture>
                            <source media="(min-width: 992px)" srcSet="images/deco/Arrow-Curve.png" />
                            <img src="images/deco/Arrow-Curve-sm.png" alt="Arrow-Curve" className="arrow-curve" />
                        </picture>
                    </div>
                </section>
                {/* <!--滿千免運--> */}
                <section className=''>
                    <div className="container pt-8 d-lg-block d-flex flex-column-reverse">
                        <div className="row row-cols-lg-3 row-cols-1 position-relative ">
                            <div className="col px-0">
                                <div className="card border-0" data-aos="fade-right">
                                    <div className="card-body">
                                        <h4 className="card-title fs-lg-1 text-accent text-lg-start text-center">01</h4>
                                        <div className="d-flex flex-column align-items-center">
                                            <picture>
                                                <source media="(min-width: 992px)" srcSet="images/Illustration/Tree.png" />
                                                <img src="images/Illustration/Tree-sm.png" alt="Tree" className="promotion-img" />
                                            </picture>
                                        </div>
                                        <div className="promotion-img-bottom"></div>
                                        <p className="fs-lg-2 fs-md-3 fs-5 text-primary text-center mt-lg-3 mt-1">產地</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="card border-0" data-aos="fade-right">
                                    <div className="card-body">
                                        <h4 className="card-title fs-lg-1 text-accent text-lg-start text-center">02</h4>
                                        <div className="d-flex flex-column align-items-center">
                                            <picture>
                                                <source media="(min-width: 992px)" srcSet="images/Illustration/Delivery.png" />
                                                <img src="images/Illustration/Delivery-sm.png" alt="Delivery" className="promotion-img" />
                                            </picture>
                                        </div>
                                        <div className="promotion-img-bottom"></div>
                                        <p className="fs-lg-2 fs-md-3 fs-5 text-primary text-center mt-lg-3 mt-1">運送</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="card border-0" data-aos="fade-right">
                                    <div className="card-body">
                                        <h4 className="card-title fs-lg-1 text-accent text-lg-start text-center">03</h4>
                                        <div className="d-flex flex-column align-items-center">
                                            <picture>
                                                <source media="(min-width: 992px)" srcSet="images/Illustration/Eating.png" />
                                                <img src="images/Illustration/Eating-sm.png" alt="Eating" className="promotion-img" />
                                            </picture>
                                        </div>
                                        <div className="promotion-img-bottom"></div>
                                        <p className="fs-lg-2 fs-md-3 fs-5 text-primary text-center mt-lg-3 mt-1">餐桌</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="images/deco/Arrow-1.png" alt="Arrow-1" className="d-lg-block d-none promotion-arrow1" />
                                <img src="images/deco/Arrow-2.png" alt="Arrow-2" className="d-lg-block d-none promotion-arrow2" />
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center pt-lg-8 pt-0">
                            <h1 className="d-lg-block d-none mb-6">產地到餐桌，全館滿千免運!</h1>
                            <h4 className="d-lg-none text-center mb-6">產地到餐桌 <br></br> 全館滿千免運</h4>
                            <Link to="/products"><button className="btn btn-primary promotion-btn border-0 fw-bold fs-lg-4 fs-5 text-white">
                                立即購買
                            </button></Link>
                            <Lottie className='lottie-hand' animationData={animationData} loop={true} />
                        </div>
                    </div>
                    <img src="images/Illustration/Top-Curve.png" alt="banner" className="promotion-curve" />
                </section>
                {/* <!--合作店家--> */}
                <section className=" bg-secondary">
                    <div className="container py-lg-11 py-6 text-center">
                        <h4 className="fs-lg-1 mb-lg-4 mb-3">長期合作店家推薦</h4>
                        <h5 className="fs-lg-4 text-accent mb-lg-8 mb-6">Local Partner</h5>
                        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-4">
                            <div className="col">
                                <div className="card rounded-4 border-0 d-md-block d-flex flex-row h-100">
                                    <div className="d-flex justify-content-center" >
                                        <img src="images/store1.png" className="store-img " alt="store1" />
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title fs-lg-5 fw-bold text-md-center text-start">田園西餐廳</h6>
                                        <p className="card-text text-gray text-start">本餐廳近日在「第十八屆國際美食國際美食大獎」中，榮獲「最佳新興餐廳」。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card rounded-4 border-0 d-md-block d-flex flex-row h-100">
                                    <div className="d-flex justify-content-center" >
                                        <img src="images/store2.png" className="store-img " alt="store2" />
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title fs-lg-5 fw-bold text-md-center text-start">綠野果汁</h6>
                                        <p className="card-text text-gray text-start">綠野果汁在今年的「健康飲品大賞」中，榮獲「最佳果汁品牌」！</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card rounded-4 border-0 d-md-block d-flex flex-row h-100">
                                    <div className="d-flex justify-content-center" >
                                        <img src="images/store3.png" className="store-img " alt="store3" />
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title fs-lg-5 fw-bold text-md-center text-start">阿花肉圓</h6>
                                        <p className="card-text text-gray text-start">本店榮獲 Google 評比「台灣小吃店家」網路聲量第一名！</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card rounded-4 border-0 d-md-block d-flex flex-row h-100">
                                    <div className="d-flex justify-content-center" >
                                        <img src="images/store4.png" className="store-img " alt="store4" />
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title fs-lg-5 fw-bold text-md-center text-nowrap text-start">彰水路第一家滷肉飯</h6>
                                        <p className="card-text text-gray text-start">本店榮獲 Google 評比「台灣小吃店家」網路聲量第二名！</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Toast />
            </main>
        </div>
    )
}

export default Home;