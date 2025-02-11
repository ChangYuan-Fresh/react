function ForgetPassword() {
    return (<>
        <div className="container login">
            <div className="row">
                <div className="card border-0 mx-auto my-lg-11 my-7 col-lg-6">
                    <div className="card-body mb-5">
                        <h1 className="card-title fs-2 text-center text-primary mb-7">忘記密碼</h1>
                        <div className="mb-5">
                            <label for="account" className="form-label fs-5">請輸入電子郵件</label>
                            <input type="text" className="form-control bg-white" id="account"
                                placeholder="asd456@gmail.com"/>
                        </div>
                    </div>
                    <div className="d-flex ms-auto align-items-end mb-11">
                        <p className="fs-5 me-4">30秒後重新寄送</p>
                        <button type='submit' className="btn btn-L py-3">送出</button>
                    </div>
                    <div className="collapse w-50 mx-auto" id="verifyEmail">
                        <div className="mb-5">
                            <label for="code" className="form-label fs-5">請輸入驗證碼</label>
                            <input type="text" className="form-control bg-white" id="code" placeholder="666666"/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-L py-3" width="200px" type='submit'>確認</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="src/assets/images/Illustration/Top-Curve.png" alt="banner" className="promotion-curve" />
    </>)
}

export default ForgetPassword;