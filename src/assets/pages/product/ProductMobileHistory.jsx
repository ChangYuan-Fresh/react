import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';
import 'swiper/css';
import PropTypes from "prop-types";

function ProductMobileHistory({ recentProducts=[] }) {
    return (
        // 手機板
        <div className="d-lg-none d-block container">
            <h6 className="fs-5 mb-4 ">你曾瀏覽過：</h6>
            <Swiper
                spaceBetween={12}
                slidesPerView={2.1}>
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
ProductMobileHistory.propTypes = {
    recentProducts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            category: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ),
};

// ✅ 預設 props，避免 undefined 問題
ProductMobileHistory.defaultProps = {
    recentProducts: [],
};
export default ProductMobileHistory