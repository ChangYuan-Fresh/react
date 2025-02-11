function Cart() {
    return (<>
        <div className="container order mt-7">
            <h1 className="card-title fs-2 text-center text-primary mb-9">訂單建立</h1>
            {/* <!-- 時間軸 --> */}
            <div className="position-relative m-8 m-md-9">
                <div className="progress" style="height: 1px;">
                    <div className="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button type="button"
                    className="position-absolute top-0 start-0 translate-middle btn btn-primary rounded-pill text-white px-lg-5 py-lg-3 py-2 px-3 fs-lg-5 fs-7"><span
                        className="material-symbols-outlined p-0 me-1 fs-lg-3 fs-5 align-bottom">
                        counter_1</span>訂單確認</button>
                <button type="button"
                    className="position-absolute top-0 start-50 translate-middle btn btn-primary rounded-pill px-lg-5 py-lg-3 py-2 px-3 fs-lg-5 fs-7 text-white"
                    disabled><span
                        className="material-symbols-outlined p-0 me-1 fs-lg-3 fs-5 align-bottom">counter_2</span>訂單建立</button>
                <button type="button"
                    className="position-absolute top-0 start-100 translate-middle btn btn-secondary rounded-pill text-nowrap px-lg-5 py-lg-3 py-2 px-3 fs-lg-5 fs-7 text-accent"
                    disabled><span className="material-symbols-outlined p-0 me-1 fs-lg-3 fs-5 align-bottom">
                        counter_3
                    </span>購物完成</button>
            </div>
            {/* <!-- 總結 --> */}
            <div className="card card-border mb-3 mt-lg-5 mt-0 py-4 bg-secondary border-0 rounded-3">
                <div className="row align-items-center g-0">
                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-6 p-lg-5 p-0">
                        <div className="d-flex flex-column mb-0">
                            <div className="d-flex justify-content-end justify-content-lg-around">
                                <div className="d-flex me-4 align-items-center">
                                    <p className="text-primary fs-7 fs-lg-5">商品數量：</p>
                                    <button className="btn btn-white fs-6 fs-lg-5 py-2 px-4">3</button>
                                </div>
                                <div className="d-flex me-2 me-lg-7 align-items-center">
                                    <p className="text-primary fs-7 fs-lg-5">商品總金額：</p>
                                    <button
                                        className="btn btn-white fs-5 fs-lg-4 text-accent en-font text-end fw-bold py-2 px-lg-4">NT$999</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- 訂購人 --> */}
            <div className="card card-border my-5 card-border">
                <div className="card-header border-secondary bg-secondary py-4">
                    <h2 className="fs-lg-4 fs-5 me-5">訂購人</h2>
                </div>
                <div className="card-body">
                    <div className="row align-items-center g-lg-5 g-0">
                        <div className="col-lg-6">
                            <div className="row align-items-center">
                                <label for="name" className="col-lg-2 col-3 col-form-label fs-7 fs-lg-6">姓名：</label>
                                <div className="col-lg-7 col-lg-8 col-9">
                                    <input type="text" className="form-control" id="name" placeholder="請輸入姓名"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row align-items-center">
                                <label for="phone" className="col-lg-2 col-3 col-form-label fs-7 fs-lg-6">電話：</label>
                                <div className="col-lg-7 col-lg-8 col-9">
                                    <input type="tel" className="form-control" id="phone" placeholder="請輸入電話"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="row align-items-center">
                                <label for="address" className="col-lg-1 col-3 col-form-label fs-7 fs-lg-6">地址：</label>
                                <div className="col-lg-8 col-9">
                                    <input type="text" className="form-control" id="address" placeholder="請輸入住址"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="row align-items-center">
                                <label for="email" className="col-lg-1 col-3 col-form-label fs-7 fs-lg-6">E-mail：</label>
                                <div className="col-lg-8 col-9">
                                    <input type="email" className="form-control" id="email" placeholder="請輸入E-mail"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-border my-5">
                <div className="card-header border-secondary d-flex align-items-center bg-secondary py-4">
                    <h1 className="fs-lg-4 fs-5 me-5">收件人</h1>
                    <div className="form-check">
                        <input className="form-check-input align-middle" type="checkbox" value="" id="sameAsOrder"/>
                            <label className="form-check-label fs-lg-5 fs-6" for="sameAsOrder">同訂購人
                            </label>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row align-items-center g-lg-5 g-0">
                        <div className="col-lg-6">
                            <div className="row align-items-center">
                                <label for="name" className="col-lg-2 col-3 col-form-label fs-7 fs-lg-6">姓名：</label>
                                <div className="col-lg-7 col-lg-8 col-9">
                                    <input type="text" className="form-control" id="name" placeholder="請輸入姓名"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row align-items-center">
                                <label for="phone" className="col-lg-2 col-3 col-form-label fs-7 fs-lg-6">電話：</label>
                                <div className="col-lg-7 col-lg-8 col-9">
                                    <input type="tel" className="form-control" id="phone" placeholder="請輸入電話"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="row align-items-center">
                                <label for="address" className="col-lg-1 col-3 col-form-label fs-7 fs-lg-6">地址：</label>
                                <div className="col-lg-8 col-9">
                                    <input type="text" className="form-control" id="address" placeholder="請輸入住址"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="row align-items-center">
                                <label for="email" className="col-lg-1 col-3 col-form-label fs-7 fs-lg-6">E-mail：</label>
                                <div className="col-lg-8 col-9">
                                    <input type="email" className="form-control" id="email" placeholder="請輸入E-mail"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-border my-5">
                <div className="card-header border-secondary d-flex align-items-center bg-secondary py-4">
                    <h2 className="fs-lg-4 fs-5 me-5">付款方式</h2>
                </div>
                <div className="card-body">
                    <div className="py-2">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="pay1"/>
                                <label className="form-check-label" for="pay1">信用卡刷卡</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="pay2" checked/>
                                <label className="form-check-label" for="pay2">Google Pay</label>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="pay3"/>
                                <label className="form-check-label" for="pay3">LINE Pay</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="pay4" checked/>
                                <label className="form-check-label" for="pay4">Apple Pay</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-border my-5">
                <div className="card-header border-secondary d-flex align-items-center bg-secondary py-4">
                    <h2 className="fs-lg-4 fs-5 me-5">寄送方式</h2>
                </div>
                <div className="card-body d-flex flex-column flex-lg-row justify-content-between py-5">
                    <div>
                        <div className="d-flex mb-3">
                            <a className="btn btn-L fs-6 me-5" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">冷凍宅配</a>
                            <a href="#" className="btn btn-L fs-6 disabled">全家取貨</a>
                        </div>
                        <p className="text-accent">* 因含生鮮冷凍食品，僅提供宅配服務。</p>
                    </div>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-border card-body border-0">
                            <div className="d-flex me-0 me-lg-7 justify-content-end align-items-center">
                                <p className="text-primary fs-7 fs-lg-5">運費：</p>
                                <button
                                    className="btn btn-white fs-5 fs-lg-4 text-accent en-font text-end fw-bold py-2 px-lg-4">NT$100</button>
                            </div>
                            <p className="text-end me-2 me-lg-7 px-lg-4">還差1元免運</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="discountCode">
                <div className="row justify-content-between">
                    <div className="col-lg-4">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control border-primary px-4 py-2 py-lg-4" placeholder="請輸入折扣碼"
                                aria-label="Recipient's username" aria-describedby="discountCode"/>
                                <a href="#" className="input-group-text px-7 border-primary bg-primary text-white fs-5 px-4 py-2 py-lg-4"
                                    id="discountCode">確認</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-border my-5">
                <div className="card-header border-secondary d-flex align-items-center bg-secondary py-4">
                    <h2 className="fs-lg-4 fs-5 me-5">備註</h2>
                </div>
                <div className="card-body p-5">
                    <textarea className="form-control border-primary" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            {/* <!-- 總額 --> */}
            <div className="card card-border mb-3 mt-lg-5 mt-0 py-lg-5 py-4 bg-secondary border-0 rounded-3">
                <div className="row align-items-center g-0">
                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-6 p-lg-5 p-0">
                        <div className="d-flex flex-column mb-0">
                            <div className="d-flex justify-content-end justify-content-lg-around mb-4">
                                <div className="d-flex me-4 align-items-center invisible">
                                    <p className="text-primary fs-7 fs-lg-5">商品數量：</p>
                                    <button className="btn btn-white fs-6 fs-lg-5 py-2 px-4">3</button>
                                </div>
                                <div className="d-flex me-2 me-lg-7 align-items-center">
                                    <p className="text-primary fs-7 fs-lg-5">訂單總金額：</p>
                                    <button
                                        className="btn btn-white fs-5 fs-lg-4 text-accent en-font text-end fw-bold py-2 px-lg-4">NT$1099</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <a href="order-confirmOrder.html"
                        className="btn btn-L py-2 px-6 fs-6 ms-2 ms-lg-5 py-lg-3 px-lg-7 fs-lg-4">上一頁</a>
                    <a href="order-orderCompleted.html"
                        className="btn btn-L py-2 px-6 fs-6 me-2 me-lg-5 py-lg-3 px-lg-7 fs-lg-4" data-bs-target="#commitModel"
                        data-bs-toggle="modal">下一步</a>
                </div>
                <div className="modal fade" id="commitModel" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
                    tabindex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content position-relative">
                            <div className="modal-header border-0">
                                <h2 className="modal-title mx-auto mt-7 mb-3 fs-lg-2 fs-4" id="exampleModalToggleLabel2">還差 1 元，即可免運喔!
                                </h2>
                                <button type="button"
                                    className="btn-close position-absolute top-0 start-100 translate-middle p-0 fs-6"
                                    data-bs-dismiss="modal" aria-label="Close"><span
                                        className="material-symbols-outlined align-middle">close</span></button>
                            </div>
                            <div className="modal-footer border-0 justify-content-center mb-7">
                                <a href="order-orderCompleted.html" className="btn btn-s fs-lg-5 fs-6 fw-bold py-3 px-lg-8 px-5 me-6">確認送出</a>
                                <a className="btn btn-s fs-lg-5 fs-6 fw-bold py-3 px-lg-8 px-5" href="allProduct.html">繼續購物</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <img src="src/assets/images/Illustration/Top-Curve.png" alt="banner" className="promotion-curve"/>
        </>
        )
}

        export default Cart;