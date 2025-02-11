function Signup() {
    return (<>
    <div class="container login">
        <div class="row">
            <div class="card border-0 mx-auto my-lg-11 my-7 col-lg-6">
                <div class="card-body mb-7">
                    <h1 class="card-title fs-2 text-center text-primary mb-9">註冊會員</h1>
                    <div class="mb-5 row align-items-center">
                        <label for="accountSetup" class="form-label fs-5 col-lg-3">會員帳號：</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control bg-white" id="accountSetup"
                                placeholder="請輸入會員帳號"/>
                        </div>

                    </div>
                    <div class="mb-5 row align-items-center">
                        <label for="passwordSetup" class="form-label fs-5 col-lg-3">設定密碼：</label>
                        <div class="col-lg-9">
                            <input type="password" class="form-control bg-white" id="passwordSetup"
                                placeholder="請輸入密碼"/>
                        </div>
                    </div>
                    <div class="mb-5 row align-items-center">
                        <label for="confirmPassword" class="form-label fs-5 col-lg-3">密碼確認：</label>
                        <div class="col-lg-9">
                            <input type="password" class="form-control bg-white" id="confirmPassword"
                                placeholder="請再次輸入密碼"/>
                        </div>
                    </div>
                    <div class="mb-7 row align-items-center">
                        <label for="confirmPassword" class="form-label fs-5 col-lg-3">E-mail：</label>
                        <div class="col-lg-9">
                            <input type="email" class="form-control bg-white" id="confirmPassword"
                                placeholder="請輸入電子信箱"/>
                        </div>
                    </div>
                    <div class="form-check ms-7">
                        <input class="form-check-input border border-primary border-2" type="checkbox" value="" id="aggrement"/>
                        <label class="form-check-label align-middle" for="aggrement">我同意隱私權政策和使用者條款
                        </label>
                    </div>
                </div>
                <div class="d-flex justify-content-center mb-5 flex-column flex-lg-row align-items-center">
                    <button type="submit" class="btn btn-L py-3 me-0 me-lg-5 mb-5 mb-lg-0 w-100">送出</button>
                    <a href="login.html" class="btn btn-L py-3 w-100">取消</a>
                </div>
            </div>
        </div>
    </div>


    <img src="../assets/images/Illustration/Top-Curve.png" alt="banner" class="promotion-curve"/>
    </>
    )
}

export default Signup;