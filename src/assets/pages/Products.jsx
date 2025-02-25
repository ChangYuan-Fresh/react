import { Link } from "react-router"
import ProductMobileNav from "./product/ProductMobileNav";
import ProductPCNav from "./product/ProductPCNav";
import ProductBrowsingHistory from "./product/ProductBrowsingHistory";
import ProductListAll from "./product/ProductListAll";
import Banner from "../layout/Banner";


function Products() {
    return (<>
        <main>
            {/* <!-- Banner --> */}
            <Banner 
            bannerImg={"/images/Farm Pictures max-O_TVsaeZNlE 1.png"}
            title="全部商品"
            enTitle="Store"
            slogan1="產地到餐桌"
            slogan2="全館滿千免運！"
            />
            {/* <!-- Banner下方之主要內容 -->
             <!--手機版選單列表--> */}
            <ProductMobileNav/>
            {/* <!-- 電腦版 --> */}
            {/* <section className="bg-Tertiary container allProduct-container">
                <div className="row d-flex flex-lg-row flex-column-reverse justify-content-between">
                    <div className="col-xl-2 col-lg-3 allProduct-side overflow-auto d-lg-block d-none">
                        {/* <!-- 手風琴版選單列表 --> */}
                        {/* <ProductPCNav/> */}
                        {/* <!-- 左側瀏覽紀錄 --> */}
                        {/* <ProductBrowsingHistory /> */}
                    {/* </div> */}
                    {/* <!-- 商品列表 --> */}
                    <ProductListAll />
                {/* </div>
            </section> */} 
            <div className="allProduct-bottom-history">
                <section className="mt-5 p-lg-5 pb-lg-0 pt-5 px-4 pb-0 d-lg-none allProduct-bottom-history-width">
                    <h6 className="fs-5 mb-4">你曾瀏覽過：</h6>
                    <div className="d-lg-block d-flex flex-nowrap">
                        <div className="me-lg-0 me-3">
                            <a href="product-Aquatic-whiteShrimp.html">
                                <img src="/assets/images/Shrimp by Anthony Camp 1.png" alt="" style={{width: "148px", height: "153px"}} />
                            </a>
                            <h5 className="pt-2 pb-5 fs-lg-5 fs-6 lh-1.2 text-black text-nowrap">
                                <a href="product-Aquatic-whiteShrimp.html">線西鄉白蝦</a>
                            </h5>
                        </div>
                        <div className="me-lg-0 me-3">
                            <a href="product-VegNFruit-persimmon.html">
                                <img src="/assets/images/Persimmon by Any Lane 1.png" alt="" style={{width: "148px", height: "153px"}} />
                            </a>
                            <h5 className="pt-2 pb-5 fs-lg-5 fs-6 lh-1.2 text-black text-nowrap">
                                <a href="product-VegNFruit-persimmon.html">埔心鄉甜柿</a>
                            </h5>
                        </div>
                        <div className="me-lg-0 me-3">
                            <a href="product-VegNFruit-grapefruit.html">
                                <img src="/assets/images/Grapefruit by Engin Akyurt 1.png" alt="" style={{width: "148px", height: "153px"}} />
                            </a>
                            <h5 className="pt-2 pb-5 fs-lg-5 fs-6 lh-1.2 text-black text-nowrap">
                                <a href="product-VegNFruit-grapefruit.html">芬園鄉葡萄柚</a>
                            </h5>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <img src="/images/Illustration/Bottom-Curve.png" alt="" className="d-lg-block d-none allProduct-bottom-mask" />
            </div>
        </main>
    </>
    )
}

export default Products;