import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';
import 'swiper/css';

function ProductMobileHistory({ recentProducts=[] }) {
    return (
        // 手機板
        <div className="d-lg-none d-block container">
            <h6 className="fs-5 mb-4 ">你曾瀏覽過：</h6>
            <Swiper
                spaceBetween={12}
                slidesPerView={2}>
                {
                    recentProducts.length > 0 ? (
                        recentProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Link to={`/products/${product.category}/${product.id}`}>
                                    <img src={product.imageUrl} alt={product.title} width="150px" height="150px" className="object-fit-cover" style={{borderRadius:"16px"}}/>
                                    <div className="card-body p-2">
                                        <h5>{product.title}</h5>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p className="text-center">還沒有瀏覽紀錄</p>
                    )
                }
            </Swiper>
        </div>
    )
}
export default ProductMobileHistory