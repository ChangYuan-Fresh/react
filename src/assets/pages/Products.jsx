import ProductListAll from "./product/ProductListAll";
import Banner from "../layout/Banner";
import ProductMobileHistory from "./product/ProductMobileHistory";


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
            {/* <!-- 商品列表 --> */}
            <ProductListAll />
            {/* </div>
            </section> */}
            <ProductMobileHistory />
            <div>
                <img src="/images/Illustration/Bottom-Curve.png" alt="" className="d-lg-block d-none allProduct-bottom-mask" />
            </div>
        </main>
    </>
    )
}

export default Products;