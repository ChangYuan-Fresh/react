import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Home() {


    return (
        <div>
            <main>
                {/* <!--banner--> */}
                <section>
                    <img src="src/assets/images/banner.png" alt="banner" className="banner-img position-relative w-100" />
                    {/* <!--手機版--> */}
                    <div className="container position-absolute top-50 start-50 translate-middle text-center d-lg-none z-2">
                        <div>
                            <h4 className="bg-primary text-white px-4 py-3 mb-4 d-inline-block text-nowrap ">來自彰化的新鮮美味</h4>
                            <form role="search" className="position-relative d-flex" >
                                <div className="dropdown position-absolute top-50 start-0 translate-middle-y z-2">
                                    <button className="btn btn-white btn-sm fw-semibold fs-lg-6 fs-7 border-end border-1 rounded-0 text-nowrap ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        全部商品 <span className="material-symbols-outlined text-primary align-bottom">keyboard_arrow_down</span>
                                    </button>
                                    <ul className="dropdown-menu py-0">
                                        <li><a className="dropdown-item border-bottom fw-semsibold" href="#">熱門商品</a></li>
                                        <li><a className="dropdown-item fw-semibold" href="#">蔬菜水果</a></li>
                                        <li><a className="dropdown-item fw-semibold" href="#">生鮮肉品</a></li>
                                        <li><a className="dropdown-item fw-semibold" href="#">水產海鮮</a></li>
                                        <li><a className="dropdown-item fw-semibold" href="#">蛋與乳品</a></li>
                                    </ul>
                                </div>
                                <input className="form-control form-control-lg fs-7 ps-11 " type="search" placeholder="立即選購！新鮮抵家啦～" aria-label="Search" />
                                <a href="#"><span className="material-symbols-outlined text-primary fs-2 position-absolute top-50 end-0 translate-middle-y  me-2">search</span ></a>
                            </form>
                        </div>
                    </div>
                    {/* <!--電腦版--> */}
                    <div className="container px-lg-6 d-none d-lg-block">
                        <div className="position-absolute top-50 translate-middle-y z-2">
                            <h4 className="bg-primary text-white px-4 py-3 mb-4 d-inline-block fs-lg-4 fs-xl-1 text-nowrap ">來自彰化的新鮮美味</h4>
                            <h4 className="bg-white px-4 py-3 mb-7 text-nowrap fs-lg-6 fs-xl-4 " >在地農夫精心栽培，每一口都是健康的保證</h4>
                            <form role="search" className="position-relative d-flex" >
                                <div className="dropdown position-absolute top-50 start-0 translate-middle-y z-2">
                                    <button className="btn btn-white btn-sm fw-semibold fs-lg-6 fs-7 border-end border-1 rounded-0 text-nowrap ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        全部商品 <span className="material-symbols-outlined text-primary align-bottom">keyboard_arrow_down</span>
                                    </button>
                                    <ul className="dropdown-menu py-0">
                                        <li><a className="dropdown-item border-bottom fw-semibold" href="#">熱門商品</a></li>
                                        <li><a className="dropdown-item fw-semibold" href="#">蔬菜水果</a></li>
                                        <li><a className="dropdown-item fw-semibold" href="#">生鮮肉品</a></li>
                                        <li><a className="dropdown-item fw-semibold" href="#">水產海鮮</a></li>
                                        <li><a className="dropdown-item fw-semibold" href="#">蛋與乳品</a></li>
                                    </ul>
                                </div>
                                <input className="form-control form-control-lg fs-lg-6 fs-7 ps-11 " type="search" placeholder="立即選購！新鮮抵家啦～" aria-label="Search" />
                                <a href="#"><span className="material-symbols-outlined text-primary fs-2 position-absolute top-50 end-0 translate-middle-y  me-2">search</span ></a>
                            </form>
                        </div>
                    </div>
                    <img src="src/assets/images/Illustration/Top-Curve.png" alt="Top-Curve" className="deco-curve" />
                </section>
                {/* <!--3個理由--> */}
                <section className="reason reason-bg">
                    <div className="container d-flex flex-column align-items-center py-lg-11 py-6" >
                        <div className="mb-8 d-flex flex-column align-items-center">
                            <h4 className="fs-lg-1 mb-lg-4 mb-2">選擇彰源鮮味的3個理由</h4>
                            <h5 className="fs-lg-4 text-accent">Choose us</h5>
                        </div>
                        <div className="row row-cols-lg-3 row-cols-1 d-flex flex-lg-row flex-column align-items-center justify-content-ceter gy-6 ">
                            <div className="col">
                                <div className="card bg-transparent border-0 d-flex flex-column align-items-center justify-content-ceter" data-aos="fade-up">
                                    <picture>
                                        <source media="(min-width: 992px)" srcSet="src/assets/images/Illustration/Farmer-sm.png" />
                                        <img src="src/assets/images/Illustration/Farmer.png" alt="#" />
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
                                        <source media="(min-width: 992px)" srcSet="src/assets/images/Illustration/ITruck-sm.png" />
                                        <img src="src/assets/images/Illustration/ITruck.png" alt="#" />
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
                                        <source media="(min-width: 992px)" srcset="src/assets/images/Illustration/Earth-sm.png" />
                                        <img src="src/assets/images/Illustration/Earth.png" alt="#" />
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
                <section className='swiper-container'>
                    <div className="container py-lg-9 py-6 swiper-container">
                        {/* <!--商品列表nav--> */}
                        <ul className="nav nav-tabs product-nav-tabs px-auto" id="MyProductTab" role="tablist">
                            <Swiper
                                spaceBetween={48}
                                slidesPerView={3.5}
                                className="swiper MyProduct-nav-product-swiper px-6 swiper-container">
                                <SwiperSlide className="swiper-slide">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active product-nav-link border-0  fs-lg-3 fs-md-4 fs-6 text-nowrap"
                                            id="hot-product-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#hot-product"
                                            type="button"
                                            role="tab"
                                            aria-controls="hot-product"
                                            aria-selected="true">
                                            熱門商品
                                            <div className=""></div>
                                        </button>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link product-nav-link border-0  fs-lg-3 fs-md-4 fs-6 text-nowrap"
                                            id="veggieNfruit-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#veggieNfruit"
                                            type="button"
                                            role="tab"
                                            aria-controls="veggieNfruit"
                                            aria-selected="false">
                                            蔬菜水果
                                        </button>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link product-nav-link border-0  fs-lg-3 fs-md-4 fs-6 text-nowrap"
                                            id="meats-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#meats"
                                            type="button"
                                            role="tab"
                                            aria-controls="meats"
                                            aria-selected="false">
                                            生鮮肉品
                                        </button>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link product-nav-link border-0  fs-lg-3 fs-md-4 fs-6 text-nowrap"
                                            id="seafood-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#seafood"
                                            type="button"
                                            role="tab"
                                            aria-controls="seafood"
                                            aria-selected="false">
                                            水產海鮮
                                        </button>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link product-nav-link border-0 fs-lg-3 fs-md-4 fs-6 text-nowrap"
                                            id="eggNmilk-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#eggNmilk"
                                            type="button"
                                            role="tab"
                                            aria-controls="eggNmilk"
                                            aria-selected="false">
                                            蛋與乳品
                                        </button>
                                    </li>
                                </SwiperSlide>
                            </Swiper>
                        </ul>
                        <div className="tab-content" id="MyProductTabContent">
                            {/* <!--熱門商品內容--> */}
                            <div className="tab-pane fade show active" id="hot-product" role="tabpanel" aria-labelledby="hot-product-tab">
                                {/* <!--熱門商品swiper--> */}
                                <Swiper
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 1,
                                            spaceBetween: 12,
                                        },
                                        776: {
                                            slidesPerView: 2,
                                            spaceBetween: 12,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                            spaceBetween: 12,
                                        }
                                    }}
                                    className="MyProduct-product-card-wrap swiper MyProduct-product-swiper py-8 position-relative swiper-container">

                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="src/assets/images/type1.png" alt="type1" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                埔鹽鄉多汁茂谷柑-3kg
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$600</p>
                                                <del className="fs-8 text-gray fw-normal">NT$641</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active  ">
                                        <div className="">
                                            <img src="src/assets/images/type22.png" alt="type2" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                芬園鄉濃純牛奶-200ml
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$36</p>
                                                <del className="fs-8 text-gray fw-normal">NT$44</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="src/assets/images/type3.png" alt="type3" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                鹿港鎮鮮活文蛤-600g
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$190</p>
                                                <del className="fs-8 text-gray fw-normal">NT$210</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="src/assets/images/type42.png" alt="type4" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                福興鄉翠綠豌豆-1000g
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$150</p>
                                                <del className="fs-8 text-gray fw-normal">NT$200</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="https://static.thofood.com/public/images/_product/pi_64887.jpg" alt="giantGrouper" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                大城鄉龍膽石斑魚
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$460</p>
                                                <del className="fs-8 text-gray fw-normal">NT$570</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>

                                    <div className="swiper-button-prev my-button-disabled"></div>
                                    <div className="swiper-button-next my-button-disabled"></div>
                                    <div className="swiper-scrollbar bg-secondary d-none d-lg-block rounded-3 start-50 translate-middle  w-120" ></div>
                                </Swiper>
                            </div>
                            {/* <!--蔬菜水果內容--> */}
                            <div className="tab-pane fade " id="veggieNfruit" role="tabpanel" aria-labelledby="veggieNfruit-tab">
                                {/* <!--蔬菜水果swiper--> */}
                                <Swiper
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 1,
                                            spaceBetween: 12,
                                        },
                                        776: {
                                            slidesPerView: 2,
                                            spaceBetween: 12,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                            spaceBetween: 12,
                                        }
                                    }}
                                    className="MyProduct-product-card-wrap swiper MyProduct-product-swiper py-8 position-relative swiper-container">

                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="src/assets/images/Cauliflower HQ (7).png" alt="cauliflower" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                埔鹽鄉白花椰菜
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$599</p>
                                                <del className="fs-8 text-gray fw-normal">NT$999</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active  ">
                                        <div className="">
                                            <img src="src/assets/images/Grapefruit by Engin Akyurt 1.png" alt="grapefruit" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                芬園鄉葡萄柚
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$699</p>
                                                <del className="fs-8 text-gray fw-normal">NT$799</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="src/assets/images/type1.png" alt="orange" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                埔鹽鄉多汁茂谷柑
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$190</p>
                                                <del className="fs-8 text-gray fw-normal">NT$210</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="src/assets/images/type42.png" alt="pea" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                福興鄉翠綠豌豆
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$150</p>
                                                <del className="fs-8 text-gray fw-normal">NT$200</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="src/assets/images/Persimmon by Any Lane 1.png" alt="persimmon" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                埔心鄉甜柿
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$569</p>
                                                <del className="fs-8 text-gray fw-normal">NT$739</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>

                                    <div className="swiper-button-prev my-button-disabled"></div>
                                    <div className="swiper-button-next my-button-disabled"></div>
                                    <div className="swiper-scrollbar bg-secondary d-none d-lg-block rounded-3 start-50 translate-middle w-120" ></div>
                                </Swiper>
                            </div>
                            {/* <!--生鮮肉品內容--> */}
                            <div className="tab-pane fade " id="meats" role="tabpanel" aria-labelledby="meats-tab">
                                {/* <!--生鮮肉品swiper--> */}
                                <Swiper
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 1,
                                            spaceBetween: 12,
                                        },
                                        776: {
                                            slidesPerView: 2,
                                            spaceBetween: 12,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                            spaceBetween: 12,
                                        }
                                    }}
                                    className="MyProduct-product-card-wrap swiper MyProduct-product-swiper py-8 position-relative swiper-container swiper-container">

                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="https://lululushop.com/wp-content/uploads/2020/12/%E5%8E%BB%E9%AA%A8%E9%9B%9E%E8%85%BF%E6%8E%92.jpg" alt="chickenLegs" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                二林直送去骨雞腿肉
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$229</p>
                                                <del className="fs-8 text-gray fw-normal">NT$249</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active  ">
                                        <div className="">
                                            <img src="https://m5.hocom.tw/Uploads/Product/22837_rsxjdw6p.jpg" alt="chickenWing" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                竹塘生鮮三節雞翅
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$250</p>
                                                <del className="fs-8 text-gray fw-normal">NT$299</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="https://static.owlting.com/market/public/items/thumbs/640x480/item_14579_Ir81GDWOKWoRedMgZo9sxRP4Je1B6JyXmEJ6vU4v" alt="pork" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                彰化健康豬肉
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$200</p>
                                                <del className="fs-8 text-gray fw-normal">NT$350</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="https://y3.yooho.com.tw/images/202306/goods_img/7036_G_1686867769187.jpg" alt="porkRibs" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                國產溪州豬排骨
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$399</p>
                                                <del className="fs-8 text-gray fw-normal">NT$450</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="https://www.green-n-safe.com/uploads/images/thumbs/0003319_%E7%83%8F%E9%AA%A8%E9%9B%9E%E5%85%A8%E9%9B%9E_1000.jpeg" alt="silkyChicken" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                大成烏骨雞
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$880</p>
                                                <del className="fs-8 text-gray fw-normal">NT$999</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>

                                    <div className="swiper-button-prev my-button-disabled"></div>
                                    <div className="swiper-button-next my-button-disabled"></div>
                                    <div className="swiper-scrollbar bg-secondary d-none d-lg-block rounded-3 start-50 translate-middle w-120"></div>
                                </Swiper>
                            </div>
                            {/* <!--水產海鮮內容--> */}
                            <div className="tab-pane fade " id="seafood" role="tabpanel" aria-labelledby="seafood-tab">
                                {/* <!--水產海鮮swiper--> */}
                                <Swiper
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 1,
                                            spaceBetween: 12,
                                        },
                                        776: {
                                            slidesPerView: 2,
                                            spaceBetween: 12,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                            spaceBetween: 12,
                                        }
                                    }}
                                    className="MyProduct-product-card-wrap swiper MyProduct-product-swiper py-8 position-relative swiper-container">

                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="src/assets/images/type3.png" alt="clam" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                鹿港鎮鮮活文蛤
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$190</p>
                                                <del className="fs-8 text-gray fw-normal">NT$210</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active  ">
                                        <div className="">
                                            <img src="src/assets/images/Mali Fish 1.png" alt="giantGrouper" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                大城鄉龍膽石斑魚
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$460</p>
                                                <del className="fs-8 text-gray fw-normal">NT$570</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="https://rs.joo.com.tw/website/uploads_product/website_1308/P0130800182775_3_1213838.jpg?_45324" alt="milkFish" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                秀水鄉虱目魚肚
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$200</p>
                                                <del className="fs-8 text-gray fw-normal">NT$999</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="src/assets/images/Oyster HD Image (1) 1.png" alt="oyster" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                伸港鄉生猛鮮蚵
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$220</p>
                                                <del className="fs-8 text-gray fw-normal">NT$999</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="src/assets/images/Seafood from Pexels 1.png" alt="whiteShrimp" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                線西鄉白蝦
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$295</p>
                                                <del className="fs-8 text-gray fw-normal">NT$350</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>

                                    <div className="swiper-button-prev my-button-disabled"></div>
                                    <div className="swiper-button-next my-button-disabled"></div>
                                    <div className="swiper-scrollbar bg-secondary d-none d-lg-block rounded-3 start-50 translate-middle w-120"></div>
                                </Swiper>
                            </div>
                            {/* <!--蛋與乳品內容--> */}
                            <div className="tab-pane fade " id="eggNmilk" role="tabpanel" aria-labelledby="eggNmilk-tab">
                                {/* <!--蛋與乳品swiper--> */}
                                <Swiper
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 1,
                                            spaceBetween: 12,
                                        },
                                        776: {
                                            slidesPerView: 2,
                                            spaceBetween: 12,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                            spaceBetween: 12,
                                        }
                                    }}
                                    className="MyProduct-product-card-wrap swiper MyProduct-product-swiper py-8 position-relative swiper-container">

                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="https://images.unsplash.com/photo-1723478447127-c3e652f8fe3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="duckEggs" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                芳苑鄉放牧鴨蛋
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$299</p>
                                                <del className="fs-8 text-gray fw-normal">NT$399</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active  ">
                                        <div className="">
                                            <img src="https://plus.unsplash.com/premium_photo-1725621739248-15d7ad56d956?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="eggs" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                芳苑鄉雞蛋
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$499</p>
                                                <del className="fs-8 text-gray fw-normal">NT$549</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="src/assets/images/type22.png" alt="milk" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                芬園鄉濃純牛奶
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$36</p>
                                                <del className="fs-8 text-gray fw-normal">NT$44</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="https://images.unsplash.com/photo-1639151082235-406d8eb262b9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="milk2" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                福興鄉優質鮮乳
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$139</p>
                                                <del className="fs-8 text-gray fw-normal">NT$159</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card border-0 swiper-slide-active ">
                                        <div className="">
                                            <img src="https://images.unsplash.com/photo-1608135145746-0907c11ccfeb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="redEggs" className="rounded-4 product-index-img" />
                                        </div>
                                        <div className="card-body px-0">
                                            <h6 className="card-title  product-card-title fs-lg-5 text-nowrap fw-bold">
                                                大城平飼紅殼雞蛋
                                            </h6>
                                            <div className="card-text d-flex">
                                                <p className="text-accent fw-bold me-2">NT$150</p>
                                                <del className="fs-8 text-gray fw-normal">NT$200</del>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary product-btn  border-0 fw-bold fs-lg-4 fs-5">
                                                立即購買
                                            </button>
                                        </div>
                                    </SwiperSlide>


                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>



    )
}

export default Home;