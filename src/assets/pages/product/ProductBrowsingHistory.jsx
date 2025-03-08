import { Link } from "react-router"

function ProductBrowsingHistory({ recentProducts }) {
    return (<>
        {/* 電腦版 */}
        <div className="w-lg-100 h-lg-auto my-lg-7 mt-5 p-lg-5 pb-lg-0 pt-5 px-4 pb-0 allProduct-side-history d-none d-lg-block">
            <h6 className="fs-5 mb-4 text-">你曾瀏覽過：</h6>
            <div className="d-lg-block d-flex flex-nowrap">
                {
                    recentProducts.length > 0 ? (
                        recentProducts.map((product) => (
                            <div className="me-lg-0 me-3" key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.imageUrl} alt={product.title} />
                                    <div className="card-body p-2">
                                        <h5>{product.title}</h5>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">還沒有瀏覽紀錄</p>
                    )
                }
            </div>
        </div>

    </>
    )
}
export default ProductBrowsingHistory