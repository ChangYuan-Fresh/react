import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ProductMobileHistory() {
    return (
        // 手機板
    <div className="d-lg-none d-block container">
        <h6 className="fs-5 mb-4 ">你曾瀏覽過：</h6>
        <Swiper
            spaceBetween={12}
            slidesPerView={2}>
            <SwiperSlide>
                <img src="/images/Shrimp by Anthony Camp 1.png" alt="" className="slide-image" />
                <h5>線西鄉白蝦</h5>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/Persimmon by Any Lane 1.png" alt="" className="slide-image" />
                <h5>埔心鄉甜柿</h5>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/Grapefruit by Engin Akyurt 1.png" alt="" className="slide-image" />
                <h5>芬園鄉葡萄柚</h5>
            </SwiperSlide>
        </Swiper>
    </div>
    )
}
export default ProductMobileHistory