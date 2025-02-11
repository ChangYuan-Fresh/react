function ComfirmOrder() {
    return (<>
        <div className="container order mt-7">
            <h1 className="card-title fs-2 text-center text-primary mb-9">訂單確認</h1>
            {/* <!-- 時間軸 --> */}
            <div className="position-relative m-8 m-md-9">
                <div className="progress" style="height: 1px;">
                    <div className="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
                <button type="button"
                    className="position-absolute top-0 start-0 translate-middle btn btn-primary rounded-pill text-white px-lg-5 py-lg-3 py-2 px-3 fs-lg-5 fs-7"><span
                        className="material-symbols-outlined p-0 me-1 fs-lg-3 fs-5 align-bottom">
                        counter_1</span>訂單確認</button>
                <button type="button"
                    className="position-absolute top-0 start-50 translate-middle btn btn-secondary rounded-pill px-lg-5 py-lg-3 py-2 px-3 fs-lg-5 fs-7 text-accent"
                    disabled><span
                        className="material-symbols-outlined p-0 me-1 fs-lg-3 fs-5 align-bottom">counter_2</span>訂單建立</button>
                <button type="button"
                    className="position-absolute top-0 start-100 translate-middle btn btn-secondary rounded-pill text-nowrap px-lg-5 py-lg-3 py-2 px-3 fs-lg-5 fs-7 text-accent"
                    disabled><span className="material-symbols-outlined p-0 me-1 fs-lg-3 fs-5 align-bottom">
                        counter_3
                    </span>購物完成</button>
            </div>
            {/* <!-- 購買商品內容 --> */}
            <main className="mt-7">
                <div className="card mb-3 mt-lg-9 mt-7">
                    <div className="row g-0">
                        <div className="col-3 p-lg-5 p-0">
                            <img src="src/assets/images/Cauliflower HQ (7).png" className="img-fluid rounded mb-4 mb-lg-0"
                                alt="cauliflower"/>
                        </div>
                        <div className="col-9 p-lg-5 p-0">
                            <ul className="list-unstyled d-lg-flex justify-content-between mb-0 h-100">
                                <li className="d-lg-flex">
                                    <div className="card-body d-flex flex-column justify-content-between mb-4 mb-lg-0">
                                        <div className="d-flex justify-content-between">
                                            <h4 className="card-title text-primary fs-6 fs-lg-4 mb-1 mb-lg-2">埔鹽鄉白花椰菜</h4>
                                            <a href="#" className="d-lg-none"><span
                                                className="material-symbols-outlined fs-5 text-primary">delete</span></a>
                                        </div>
                                        <p className="card-text fs-7 fs-lg-6">規格：1盒5顆</p>
                                    </div>
                                    <div className="d-flex">
                                        <div className="card-body d-flex align-items-end">
                                            <button className="btn btn-s me-lg-2 me-1"><span
                                                className="material-symbols-outlined align-middle fs-6 fs-lg-5">remove</span></button>
                                            <button className="btn fs-6 fs-lg-5 btn-num">1</button>
                                            <button className="btn btn-s ms-lg-2 ms-1"><span
                                                className="material-symbols-outlined align-middle fs-6 fs-lg-5">add</span></button>
                                        </div>
                                        <div className="card-body d-lg-none d-flex flex-column justify-content-end">
                                            <h2 className="text-accent fs-6 en-font text-end">NT$599</h2>
                                            <p
                                                className="text-decoration-line-through text-gray fs-7 fw-normal en-font text-end">
                                                原價:NT$999</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-lg-flex align-items-center d-none d-lg-block">
                                    <div className="card-body me-5">
                                        <h2 className="text-accent fs-5 fs-lg-4 en-font me-2">NT$599</h2>
                                        <p
                                            className="text-decoration-line-through text-gray fs-7 fs-lg-6 fw-normal en-font">
                                            原價:NT$999</p>
                                    </div>
                                    <a href="#" className="me-3"><span
                                        className="material-symbols-outlined fs-lg-3 text-primary">delete</span></a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="card mb-3 mt-lg-5 mt-4">
                    <div className="row g-0">
                        <div className="col-3 p-lg-5 p-0">
                            <img src="src/assets/images/Oyster HD Image (1) 1.png" className="img-fluid rounded mb-4 mb-lg-0"
                                alt="Oyster"/>
                        </div>
                        <div className="col-9 p-lg-5 p-0">
                            <ul className="list-unstyled d-lg-flex justify-content-between mb-0 h-100">
                                <li className="d-lg-flex">
                                    <div className="card-body d-flex flex-column justify-content-between mb-4 mb-lg-0">
                                        <div className="d-flex justify-content-between">
                                            <h4 className="card-title text-primary fs-6 fs-lg-4 mb-1 mb-lg-2">伸港鄉生猛鮮蚵</h4>
                                            <a href="#" className="d-lg-none"><span
                                                className="material-symbols-outlined fs-5 text-primary">delete</span></a>
                                        </div>
                                        <p className="card-text fs-7 fs-lg-6">規格:1盒300克</p>
                                    </div>
                                    <div className="d-flex">
                                        <div className="card-body d-flex align-items-end">
                                            <button className="btn btn-s me-lg-2 me-1"><span
                                                className="material-symbols-outlined align-middle fs-6 fs-lg-5">remove</span></button>
                                            <button className="btn fs-6 fs-lg-5 btn-num">2</button>
                                            <button className="btn btn-s ms-lg-2 ms-1"><span
                                                className="material-symbols-outlined align-middle fs-6 fs-lg-5">add</span></button>
                                        </div>
                                        <div className="card-body d-lg-none d-flex flex-column justify-content-end">
                                            <h2 className="text-accent fs-6 en-font text-end">NT$400</h2>
                                            <p
                                                className="text-decoration-line-through text-gray fs-7 fw-normal en-font text-end d-none">
                                                原價:NT$999</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-lg-flex align-items-center d-none d-lg-block">
                                    <div className="card-body me-5">
                                        <h2 className="text-accent fs-5 fs-lg-4 en-font me-2">NT$400</h2>
                                    </div>
                                    <a href="#" className="me-3"><span
                                        className="material-symbols-outlined fs-lg-3 text-primary">delete</span></a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </main>
            {/* <!-- 總結 --> */}
            <div className="card mb-3 mt-lg-5 mt-0 py-4 bg-secondary border-0 rounded-3">
                <div className="row g-0">
                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-6 p-lg-5 p-0">
                        <div className="d-flex flex-column mb-0 h-100">
                            <div className="d-flex justify-content-end mb-4 mb-lg-6 justify-content-lg-around">
                                <div className="d-flex me-4 align-items-center">
                                    <p className="text-primary fs-7 fs-lg-5">商品數量：</p>
                                    <button className="btn btn-white fs-6 fs-lg-5 py-2 px-4">3</button>
                                </div>
                                <div className="d-flex me-2 me-lg-7 align-items-center">
                                    <p className="text-primary fs-7 fs-lg-5">商品總金額：</p>
                                    <button
                                        className="btn btn-white fs-6 fs-lg-4 text-accent en-font text-end fw-bold py-2 px-lg-4">NT$999</button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end align-items-end">
                                <p className="fs-7 me-2 me-lg-5 fs-lg-6 me-lg-5">滿1000享免運優惠</p>
                                <a href="order-confirmInfo.html" className="btn btn-L py-2 px-6 fs-6 me-2 me-lg-5 py-lg-3 px-lg-7 fs-lg-4">下一步</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <img src="src/assets/images/Illustration/Top-Curve.png" alt="banner" className="promotion-curve"/>
        </>)
}

        export default ComfirmOrder;