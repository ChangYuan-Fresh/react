import { Link } from "react-router";
function PlaceOrder() {
    return (<>
        <div className="container order mt-7">
            {/* <!-- 時間軸 --> */}
            <div className="position-relative m-8 m-md-9">
                <div className="progress" style="height: 1px;">
                    <div className="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button type="button"
                    className="position-absolute top-0 start-0 translate-middle btn btn-primary rounded-pill text-white px-lg-5 px-md-4 py-lg-3 py-2 px-3 fs-lg-5 fs-7"><span
                        className="material-symbols-outlined p-0 me-1 fs-lg-3 fs-5 align-bottom">
                        counter_1</span>訂單確認</button>
                <button type="button"
                    className="position-absolute top-0 start-50 translate-middle btn btn-primary rounded-pill px-lg-5 px-md-4 py-lg-3 py-2 px-3 fs-lg-5 fs-7 text-white"
                    disabled><span
                        className="material-symbols-outlined p-0 me-1 fs-lg-3 fs-5 align-bottom">counter_2</span>訂單建立</button>
                <button type="button"
                    className="position-absolute top-0 start-100 translate-middle btn btn-primary rounded-pill text-nowrap px-lg-5 px-md-4 py-lg-3 py-2 px-3 fs-lg-5 fs-7 text-white"
                    disabled><span className="material-symbols-outlined p-0 me-1 fs-lg-3 fs-5 align-bottom">
                        counter_3
                    </span>購物完成</button>
            </div>
            <div className="mx-auto w-50 my-lg-11 my-9">
                <h1 className="card-title fs-lg-1 fs-2 text-center text-primary mb-7">訂單成立</h1>
                <div className="text-center mb-7">
                    <span className="material-symbols-outlined text-primary display-1">check_circle</span>
                </div>
                <h2 className="fs-6 fs-lg-4 text-dark text-center mb-3">已收到您的訂單</h2>
                <h2 className="fs-6 fs-lg-4 text-dark text-center">訂單編號:1234567</h2>
            </div>
            {/* <!-- 總額 --> */}
            <div className="card mb-3 mt-lg-5 mt-0 py-4 bg-secondary border-0 rounded-3">
                <div className="d-flex justify-content-between">
                    <Link className="btn btn-L py-2 px-6 fs-6 ms-2 ms-lg-5 py-lg-3 px-lg-7 fs-lg-4" to='product'>繼續購物</Link>
                    <Link className="btn btn-L py-2 px-6 fs-6 me-2 me-lg-5 py-lg-3 px-lg-7 fs-lg-4" to='member'>查看訂單</Link>
                </div>
            </div>
        </div>

        <img src="src/assets/images/Illustration/Top-Curve.png" alt="banner" className="promotion-curve"/>
        </>
        )
}

        export default PlaceOrder;