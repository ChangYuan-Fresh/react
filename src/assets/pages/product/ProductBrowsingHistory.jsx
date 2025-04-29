import { Link } from 'react-router';
import PropTypes from 'prop-types';

function ProductBrowsingHistory({ recentProducts = [] }) {
  return (
    <>
      {/* 電腦版 */}
      <div className="w-lg-100 h-lg-auto my-lg-7 mt-5 p-lg-5 pb-lg-0 pt-5 px-4 pb-0 allProduct-side-history d-none d-lg-block">
        {recentProducts.length > 0 && (
          <>
            <h6 className="fs-5 mb-4 text-">你曾瀏覽過：</h6>
            <div className="d-lg-block d-flex flex-nowrap">
              {recentProducts.map(product => (
                <div
                  className="me-lg-0 me-3 allProduct-catalog-card"
                  key={product.id}
                >
                  <Link to={`/products/${product.category}/${product.id}`}>
                    <img src={product.imageUrl} alt={product.title} />
                    <div className="card-body p-2 mb-2">
                      <h5 className="fs-6">{product.title}</h5>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
ProductBrowsingHistory.propTypes = {
  recentProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
};

export default ProductBrowsingHistory;
