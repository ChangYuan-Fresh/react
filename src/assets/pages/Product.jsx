import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Product() {
    return (<>
        <div className="container product">
            <main className="position-relative mb-lg-11 mb-0 mt-lg-7">
                <div className="row gx-lg-5">
                    <div className="d-lg-none mobile-box">
                        <div className="swiper mySwiper3">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src="src/assets/images/type3.png" alt=""/>
                                </div>
                                <div className="swiper-slide"><img
                                    src="https://today-obs.line-scdn.net/0hNsvwwBFlEVxLDgNzO9NuC3NYHS14aAtVaWwOPGhcHTgxIl4PJ2pCP2paHHA2NlMLa2gOaj4KTmxuOQIJfg/w1200"
                                    alt=""/>
                                </div>
                                <div className="swiper-slide"><img
                                    src="https://5mtz55f1.tinifycdn.com/storage/app/uploads/public/647/030/d31/647030d3177a6132378486.jpg"
                                    alt=""/></div>
                                <div className="swiper-slide"><img
                                    src="https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcw1.tw%2FCW%2Fimages%2Farticle%2F201706%2Farticle-593a4a4652464.jpg/?w=1600&format=webp"
                                    alt=""/>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pc-box">
                        <div className="swiper mySwiper2">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="src/assets/images/type3.png" />
                                </div>
                                <div className="swiper-slide">
                                    <img
                                        src="https://today-obs.line-scdn.net/0hNsvwwBFlEVxLDgNzO9NuC3NYHS14aAtVaWwOPGhcHTgxIl4PJ2pCP2paHHA2NlMLa2gOaj4KTmxuOQIJfg/w1200" />
                                </div>
                                <div className="swiper-slide">
                                    <img
                                        src="https://5mtz55f1.tinifycdn.com/storage/app/uploads/public/647/030/d31/647030d3177a6132378486.jpg" />
                                </div>
                                <div className="swiper-slide">
                                    <img
                                        src="https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcw1.tw%2FCW%2Fimages%2Farticle%2F201706%2Farticle-593a4a4652464.jpg/?w=1600&format=webp" />
                                </div>
                            </div>
                        </div>
                        <div thumbsSlider="" className="swiper mySwiper pt-4 pb-0">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="src/assets/images/type3.png" />
                                </div>
                                <div className="swiper-slide">
                                    <img
                                        src="https://today-obs.line-scdn.net/0hNsvwwBFlEVxLDgNzO9NuC3NYHS14aAtVaWwOPGhcHTgxIl4PJ2pCP2paHHA2NlMLa2gOaj4KTmxuOQIJfg/w1200" />
                                </div>
                                <div className="swiper-slide">
                                    <img
                                        src="https://5mtz55f1.tinifycdn.com/storage/app/uploads/public/647/030/d31/647030d3177a6132378486.jpg" />
                                </div>
                                <div className="swiper-slide">
                                    <img
                                        src="https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcw1.tw%2FCW%2Fimages%2Farticle%2F201706%2Farticle-593a4a4652464.jpg/?w=1600&format=webp" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex flex-column justify-content-between px-lg-5">
                        <div className="mt-5 mt-lg-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-2">
                                    <li className="breadcrumb-item fs-7 fs-lg-6 fw-normal"><a href="#">熱門商品</a></li>
                                    <li className="breadcrumb-item active fs-7 fs-lg-6 fw-normal" aria-current="page">
                                        鹿港鎮鮮活文蛤</li>
                                </ol>
                            </nav>
                            <h1 className="fs-4 fs-lg-2 mb-1">鹿港鎮鮮活文蛤</h1>
                            <p className="mb-3 text-gray fw-normal fs-6 fs-lg-5">肉質飽滿，鮮甜無比</p>
                            <div className="tab-content mb-1" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="price1">
                                    <div className="d-flex align-items-end">
                                        <h2 className="text-accent fs-5 fs-lg-4 en-font me-2">NT$190</h2>
                                        <p
                                            className="text-decoration-line-through text-gray fs-7 fs-lg-6 fw-normal en-font">
                                            NT$210</p>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="price2">
                                    <div className="d-flex align-items-end">
                                        <h2 className="text-accent fs-5 fs-lg-4 en-font me-2">NT$300</h2>
                                        <p
                                            className="text-decoration-line-through text-gray fs-7 fs-lg-6 fw-normal en-font">
                                            NT$350</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-accent mb-3 fs-7 fs-lg-6
                            fs-6 fs-lg-5">*低溫冷凍商品</p>
                        </div>
                        <div>
                            <p className="text-primary fs-7 mb-2">規格</p>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="btn btn-outline-gray active me-2 fs-6 fs-lg-5 btn-outline-gray-big"
                                        id="price1" data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
                                        role="tab" aria-controls="pills-home" aria-selected="true">600g
                                        /包</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="btn btn-outline-gray fs-6 fs-lg-5 btn-outline-gray-big" id="price2"
                                        data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">1000g
                                        /包</button>
                                </li>
                            </ul>
                            <div className="mb-5">
                                <div className="d-flex justify-content-between w-50">
                                    <p className="text-primary fs-7 mb-2">數量</p>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active d-none d-lg-block" id="pills-home"
                                            role="tabpanel" aria-labelledby="price1">
                                            <p className="text-gray">剩餘 5 包</p>
                                        </div>
                                        <div className="tab-pane fade d-none d-lg-block" id="pills-profile" role="tabpanel"
                                            aria-labelledby="price2">剩餘 9 包</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-s me-2"><span
                                        className="material-symbols-outlined align-middle">remove</span></button>
                                    <button className="btn btn-outline-gray fs-6 fs-lg-5">1</button>
                                    <button className="btn btn-s ms-2"><span
                                        className="material-symbols-outlined align-middle">add</span></button>
                                </div>
                            </div>
                            <div className="d-lg-flex">
                                <a href="#" className="btn btn-L w-100 mb-3 mb-lg-0 fs-5 py-3 me-lg-5 me-0">加入購物車</a>
                                <a href="#" className="btn btn-L w-100 active fs-5 py-3">立即購買</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <article className="d-lg-none">
                <ul className="list-unstyled">
                    <li className="my-5">
                        <h2>商品介紹</h2>
                        <p className="mb-2">
                            鹿港鎮的海洋珍饈──鮮活文蛤，鮮味直達您的餐桌！
                        </p>
                        <p>鹿港鎮，坐落於台灣的海岸線，因其清澈無污染的海域孕育了最肥美、鮮嫩的文蛤。這裡的文蛤不僅味道鮮美，還富含豐富的營養，是來自大海的自然饋贈。每日新鮮捕撈，保證文蛤的活力與口感，讓您在每一次料理中都能感受到最純粹的海洋風味。
                        </p>
                        <p data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                            aria-controls="collapseExample" className="text-center text-primary">看全部<span
                                className="material-symbols-outlined align-middle">keyboard_arrow_down</span></p>
                        <div className="collapse" id="collapseExample">
                            <div className="card border-0">
                                <img src="https://rs.joo.com.tw/website/uploads_product/website_869/P0086900171217_3_876189.jpg?_80726"
                                    alt="Cauliflower" className="card-img img-fluid"/>
                                    <p className="card-text mb-2">
                                        鹿港的文蛤以其飽滿的肉質與獨特的鮮甜味而聞名，每一顆都充滿著海洋的精華。無論是清蒸、爆炒、煮湯還是烤烹，文蛤的汁液在口中爆發，讓人回味無窮。每次品嚐，都是一次與大海的親密接觸。
                                    </p>
                                    <p className="card-text mb-2">
                                        我們堅持每日新鮮捕撈，確保文蛤在運送過程中保持最好的狀態。從鹿港海域到您的廚房，每一顆文蛤都經過嚴格篩選，只為呈現出最鮮嫩的品質。享受這份大海的原味，讓餐桌充滿健康與活力。
                                    </p>
                                    <img src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/143192/shutterstock_2171109965.jpg_1140x855.jpg"
                                        alt="Cauliflower" className="card-img img-fluid"/>
                                        <p className="card-text mb-2">
                                            文蛤富含高蛋白質、低脂肪，並且擁有豐富的微量元素和維生素，特別適合追求健康飲食的人群。它不僅美味，還對身體有極大的益處，無論是補充體力還是增強免疫力，鹿港的鮮活文蛤都是您的理想選擇。
                                        </p>
                                        <p className="card-text mb-3">
                                            無論是加入意大利麵、蒜香爆炒，還是煮一鍋鮮甜的文蛤湯，鹿港的文蛤總能為您的料理增添無限可能。它那鮮嫩的口感與濃郁的湯汁，是家常料理或高級餐廳的必備海鮮珍品。
                                        </p>
                                        <img src="https://doqvf81n9htmm.cloudfront.net/data/mandyhuang_306/0409/shutterstock_2277722975.jpg"
                                            alt="Cauliflower" className="card-img img-fluid"/>
                                        </div>
                                    </div>
                                </li>
                                <li className="my-5">
                                    <h2>規格說明</h2>
                                    <p>600g /包 ± 10％</p>
                                    <p>1000g /包 ± 10％</p>
                                </li>
                                <li className="my-5">
                                    <h2>保存方法</h2>
                                    <p>收到後冷凍保存 7-10 天,請盡快於賞味期限內食用完畢</p>
                                </li>
                                <li className="my-5">
                                    <h2>滿額免運原則</h2>
                                    <ol>
                                        <li>
                                            全館商品滿 $1000 (含及以上)即享免運服務
                                        </li>
                                        <li>
                                            訂單含冷凍商品時，僅提供宅配服務
                                        </li>
                                    </ol>
                                </li>
                            </ul>
                        </article>
                        <article className="d-none d-lg-block">
                            <nav id="navbar-example2">
                                <ul className="list-unstyled d-flex justify-content-between w-100 border-bottom mb-8">
                                    <li className="btn text-center w-100 me-5 p-0 border-bottom-transparent border-4">
                                        <a href="#scrollspyHeading1" className="py-4 fs-4 text-black active">商品介紹</a>
                                    </li>
                                    <li className="btn text-center w-100 me-5 p-0 border-bottom-transparent border-4">
                                        <a href="#scrollspyHeading2" className="py-4 fs-4 text-black">規格說明</a>
                                    </li>
                                    <li className="btn text-center w-100 p-0 border-bottom-transparent border-4">
                                        <a href="#scrollspyHeading3" className="py-4 fs-4 text-black">評論</a>
                                    </li>
                                </ul>
                            </nav>
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0"
                                className="scrollspy-example pt-8" tabindex="0">
                                <div id="scrollspyHeading1">
                                    <p className="mb-3">
                                        鹿港鎮的海洋珍饈──鮮活文蛤，鮮味直達您的餐桌！
                                    </p>
                                    <p>鹿港鎮，坐落於台灣的海岸線，因其清澈無污染的海域孕育了最肥美、鮮嫩的文蛤。這裡的文蛤不僅味道鮮美，還富含豐富的營養，是來自大海的自然饋贈。每日新鮮捕撈，保證文蛤的活力與口感，讓您在每一次料理中都能感受到最純粹的海洋風味。
                                    </p>
                                    <img src="https://rs.joo.com.tw/website/uploads_product/website_869/P0086900171217_3_876189.jpg?_80726"
                                        alt="Cauliflower" className="img-fluid"/>
                                        <p className="mb-3">
                                            鹿港的文蛤以其飽滿的肉質與獨特的鮮甜味而聞名，每一顆都充滿著海洋的精華。無論是清蒸、爆炒、煮湯還是烤烹，文蛤的汁液在口中爆發，讓人回味無窮。每次品嚐，都是一次與大海的親密接觸。</p>
                                        <p className="card-text mb-2">
                                            我們堅持每日新鮮捕撈，確保文蛤在運送過程中保持最好的狀態。從鹿港海域到您的廚房，每一顆文蛤都經過嚴格篩選，只為呈現出最鮮嫩的品質。享受這份大海的原味，讓餐桌充滿健康與活力。
                                        </p>
                                        <img src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/143192/shutterstock_2171109965.jpg_1140x855.jpg"
                                            alt="Cauliflower" className="img-fluid"/>
                                            <p className="mb-3">
                                                文蛤富含高蛋白質、低脂肪，並且擁有豐富的微量元素和維生素，特別適合追求健康飲食的人群。它不僅美味，還對身體有極大的益處，無論是補充體力還是增強免疫力，鹿港的鮮活文蛤都是您的理想選擇。
                                            </p>
                                            <p>無論是加入意大利麵、蒜香爆炒，還是煮一鍋鮮甜的文蛤湯，鹿港的文蛤總能為您的料理增添無限可能。它那鮮嫩的口感與濃郁的湯汁，是家常料理或高級餐廳的必備海鮮珍品。
                                            </p>
                                            <img src="https://doqvf81n9htmm.cloudfront.net/data/mandyhuang_306/0409/shutterstock_2277722975.jpg"
                                                alt="Cauliflower" className="img-fluid"/>
                                            </div>
                                            <ul id="scrollspyHeading2" className="list-unstyled">
                                                <li className="mb-8">
                                                    <h2>規格說明</h2>
                                                    <p>600g /包 ± 10％</p>
                                                    <p>1000g /包 ± 10％</p>
                                                </li>
                                                <li className="mb-8">
                                                    <h2>保存方法</h2>
                                                    <p>收到後冷凍保存 7-10 天,請盡快於賞味期限內食用完畢</p>
                                                </li>
                                                <li className="mb-8">
                                                    <h2>滿額免運原則</h2>
                                                    <ol>
                                                        <li>
                                                            全館商品滿 $1000 (含及以上)即享免運服務
                                                        </li>
                                                        <li>
                                                            訂單含冷凍商品時，僅提供宅配服務
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                    <section className="section1 mb-5 pt-8 border-top" id="scrollspyHeading3">
                                        <div className="d-flex justify-content-between mb-3">
                                            <h2>評論</h2>
                                            <a href="#" className="link-primary d-none d-lg-block" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">看所有評論 (14)</a>
                                            {/* <!-- Modal --> */}
                                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                                aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-scrollable">
                                                    <div className="modal-content bg-secondary-200">
                                                        <div className="modal-header border-0 px-0 pt-6 pb-3">
                                                            <h5 className="modal-title text-black" id="exampleModalLabel">所有評論 (14)</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body p-0">
                                                            <div className="bg-secondary-200 py-5 border-bottom">
                                                                <div className="mb-4 d-flex flex-column">
                                                                    <h3 className="fs-5 text-black mb-3">陳同學</h3>
                                                                    <div>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span className="material-symbols-outlined text-gray fs-4">star</span>
                                                                    </div>
                                                                </div>
                                                                <p>這是我吃過最鮮美的文蛤！</p>
                                                            </div>
                                                            <div className="bg-secondary-200 py-5 border-bottom">
                                                                <div className="mb-4 d-flex flex-column">
                                                                    <h3 className="fs-5 text-black mb-3">朱*真</h3>
                                                                    <div>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span className="material-symbols-outlined text-gray fs-4">star</span>
                                                                    </div>
                                                                </div>
                                                                <p>鹿港鎮的文蛤肉質特別厚實，咬下去能感受到滿滿的鮮甜和豐富的汁液，完全不像市售的文蛤那樣乾巴巴。
                                                                </p>
                                                            </div>
                                                            <div className="bg-secondary-200 py-5 border-bottom">
                                                                <div className="mb-4 d-flex flex-column">
                                                                    <h3 className="fs-5 text-black mb-3">二林吳</h3>
                                                                    <div>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span className="material-symbols-outlined text-accent fs-4">star</span>
                                                                    </div>
                                                                </div>
                                                                <p className="fs-lg-6">
                                                                    我已經多次購買鹿港的鮮活文蛤，每次都能收到活跳跳的新鮮海鮮，完全不需要擔心品質。無論是清蒸還是烤著吃，文蛤的味道都非常好，是每次家庭聚餐的必備菜色。</p>
                                                            </div>
                                                            <div className="bg-secondary-200 py-5 border-bottom">
                                                                <div className="mb-4 d-flex flex-column">
                                                                    <h3 className="fs-5 text-black mb-3">陳小花</h3>
                                                                    <div>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span className="material-symbols-outlined text-accent fs-4">star</span>
                                                                    </div>
                                                                </div>
                                                                <p>烹飪後文蛤的鮮甜和汁水完全鎖住，簡單煮湯就能喝出它的鮮美原味。
                                                                </p>
                                                            </div>
                                                            <div className="bg-secondary-200 py-5 border-bottom">
                                                                <div className="mb-4 d-flex flex-column">
                                                                    <h3 className="fs-5 text-black mb-3">林**</h3>
                                                                    <div>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span className="material-symbols-outlined text-accent fs-4">star</span>
                                                                    </div>
                                                                </div>
                                                                <p>這款文蛤絕對值得推薦，質量和新鮮度都非常穩定。</p>
                                                            </div>
                                                            <div className="bg-secondary-200 py-5 border-bottom">
                                                                <div className="mb-4 d-flex flex-column">
                                                                    <h3 className="fs-5 text-black mb-3">Lisa</h3>
                                                                    <div>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span
                                                                            className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                        <span className="material-symbols-outlined text-accent fs-4">star</span>
                                                                    </div>
                                                                </div>
                                                                <p>做了一道文蛤意大利麵，整道料理瞬間升級，鮮味十足！</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3 mb-2">
                                                <div className="card border-0 bg-secondary-200 p-4 p-lg-5">
                                                    <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                                                        <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">陳同學</h3>
                                                        <div>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-gray fs-6 fs-lg-4">star</span>
                                                        </div>
                                                    </div>
                                                    <p className="card-text fs-7">
                                                        這是我吃過最鮮美的文蛤！</p>
                                                    <div className="modal fade" id="model3" tabindex="-1" aria-labelledby="exampleModalLabel"
                                                        aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content py-5">
                                                                <h3 className="fs-5 text-black mb-3">陳同學</h3>
                                                                <div className="mb-4">
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5">star</span>
                                                                </div>
                                                                <p>這是我吃過最鮮美的文蛤！</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-2">
                                                <div className="card border-0 bg-secondary-200 p-4 p-lg-5">
                                                    <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                                                        <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">朱*真</h3>
                                                        <div>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-gray fs-6 fs-lg-4">star</span>
                                                        </div>
                                                    </div>
                                                    <p className="card-text fs-7 d-lg-none text-truncate">
                                                        鹿港鎮的文蛤肉質特別厚實，咬下去能感受到滿滿的鮮甜和豐富的汁液，完全不像市售的文蛤那樣乾巴巴。</p>
                                                    <p className="card-text fs-lg-6 d-none d-lg-block">
                                                        鹿港鎮的文蛤肉質特別厚實，咬下去能感受到滿滿的鮮甜和豐富的汁液，完全不像市售的文蛤那樣乾巴巴。</p>
                                                    <a href="#" className="mt-auto fs-7 link-primary" data-bs-toggle="modal"
                                                        data-bs-target="#model5">看全部</a>
                                                    <div className="modal fade" id="model5" tabindex="-1" aria-labelledby="exampleModalLabel"
                                                        aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content py-5">
                                                                <h3 className="fs-5 text-black mb-3">朱*真</h3>
                                                                <div className="mb-4">
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5">star</span>
                                                                </div>
                                                                <p>鹿港鎮的文蛤肉質特別厚實，咬下去能感受到滿滿的鮮甜和豐富的汁液，完全不像市售的文蛤那樣乾巴巴。
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-2">
                                                <div className="card border-0 bg-secondary-200 p-4 p-lg-5">
                                                    <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                                                        <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">二林吳</h3>
                                                        <div>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4">star</span>
                                                        </div>
                                                    </div>
                                                    <p className="card-text fs-7 d-lg-none text-truncate">
                                                        我已經多次購買鹿港的鮮活文蛤，每次都能收到活跳跳的新鮮海鮮，完全不需要擔心品質。無論是清蒸還是烤著吃，文蛤的味道都非常好，是每次家庭聚餐的必備菜色。</p>
                                                    <p className="card-text fs-lg-6 d-none d-lg-block">
                                                        我已經多次購買鹿港的鮮活文蛤，每次都能收到活跳跳的新鮮海鮮，完全不需要擔心品質。無論是清蒸還是烤著吃，文蛤的味道都非常好，是每次家庭聚餐的必備菜色。</p>
                                                    <a href="#" className="mt-auto fs-7 link-primary" data-bs-toggle="modal"
                                                        data-bs-target="#model6">看全部</a>
                                                    <div className="modal fade" id="model6" tabindex="-1" aria-labelledby="exampleModalLabel"
                                                        aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content py-5">
                                                                <h3 className="fs-5 text-black mb-3">二林吳</h3>
                                                                <div className="mb-4">
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5 me-1">star</span>
                                                                    <span className="material-symbols-outlined text-accent fs-5">star</span>
                                                                </div>
                                                                <p>我已經多次購買鹿港的鮮活文蛤，每次都能收到活跳跳的新鮮海鮮，完全不需要擔心品質。無論是清蒸還是烤著吃，文蛤的味道都非常好，是每次家庭聚餐的必備菜色。</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-2">
                                                <div className="card border-0 bg-secondary-200 p-4 p-lg-5">
                                                    <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                                                        <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">陳小花</h3>
                                                        <div>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4">star</span>
                                                        </div>
                                                    </div>
                                                    <p className="card-text fs-7 fs-lg-6">
                                                        烹飪後文蛤的鮮甜和汁水完全鎖住，簡單煮湯就能喝出它的鮮美原味。</p>
                                                </div>
                                            </div>
                                            <p data-bs-toggle="collapse" href="#collapseCommet" role="button" aria-expanded="false"
                                                aria-controls="collapseExample" className="text-primary text-center d-lg-none">看所有評論 (14)</p>
                                            <div className="collapse col-lg-3" id="collapseCommet">
                                                <div className="card border-0 bg-secondary-200 p-4 p-lg-5 mb-2">
                                                    <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                                                        <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">林**</h3>
                                                        <div>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4">star</span>
                                                        </div>
                                                    </div>
                                                    <p className="card-text fs-7 fs-lg-6">
                                                        這款文蛤絕對值得推薦，質量和新鮮度都非常穩定。</p>
                                                </div>
                                                <div className="card border-0 bg-secondary-200 p-4 p-lg-5">
                                                    <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                                                        <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">Lisa</h3>
                                                        <div>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4 me-1">star</span>
                                                            <span className="material-symbols-outlined text-accent fs-6 fs-lg-4">star</span>
                                                        </div>
                                                    </div>
                                                    <p className="card-text fs-7 fs-lg-6">
                                                        做了一道文蛤意大利麵，整道料理瞬間升級，鮮味十足！</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <img src="ssrc/assets/images/Illustration/Top-Curve.png" alt="banner" className="promotion-curve"/>
                                </>
                                )
}

                                export default Product;