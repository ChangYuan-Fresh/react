function Faq() {
    return (<main>
        {/* <!--banner--> */}
        <section className=" px-lg-10 position-relative h-100" >
            <img src="src/assets/images/market.jpg" alt="banner" className="banner-img w-100"/>
                <div className="container">
                    <div className="position-absolute top-50 translate-middle-y ">
                        <h6 className="fs-lg-4 bg-white px-2 px-lg-4 py-2 d-inline-block mb-2 mb-lg-4">常見問題 <span className="fs-lg-5 align-baseline">FAQ</span></h6>
                        <h4 className="fs-lg-1 bg-primary text-white px-2 px-lg-4 py-2 py-lg-3">快速解答你的疑問</h4>
                    </div>
                </div>
                <img src="src/assets/images/Illustration/Top-Curve(2).png" alt="Top-Curve" className="deco-curve" />
                </section>
                {/* <!--faq--> */}
                <section>
                    <div className="container py-lg-11 py-7 position-relative">
                        <div className="bg-secondary-200 p-lg-5 p-3 rounded-3">
                            <div className="mb-lg-5 mb-3">
                                <h4 className="fs-lg-1 mb-3"><i className="bi bi-person-arms-up me-1"></i>會員常見問題</h4>
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed fs-lg-3 fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                                <strong>Q：</strong> 如何訂購？
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse ">
                                            <div className="accordion-body fw-normal fs-lg-4">
                                                <strong>A：</strong>登入<strong><a href="login.html">會員帳號</a></strong>,或<strong><a href="signup.html">註冊會員</a></strong>，再將需要的產品加到購物車，就可以訂購囉！
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed fs-lg-3 fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                <strong>Q：</strong>忘記密碼怎麼辦?
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                            <div className="accordion-body fw-normal fs-lg-4">
                                                <strong>A：</strong>請於登入畫面點選「<strong><a href="forgetPassword.html">忘記密碼</a></strong>」,輸入您的註冊電子郵件,我們將會寄送「重新設定密碼」連結給您進行密碼設定。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed fs-lg-3 fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                <strong>Q：</strong>忘記登入的會員帳號？
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                            <div className="accordion-body fw-normal fs-lg-4">
                                                <strong>A：</strong>煩請直接與<strong><a href="tel:+886-4-8656565">客服中心</a></strong>聯繫。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-lg-5 mb-3">
                                <h4 className="fs-lg-1 mb-3"><i className="bi bi-bag-check-fill me-1"></i>購物常見問題</h4>
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed  fs-lg-3 fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                                                <strong>Q：</strong> 可以貨到付款嗎?有哪些付款方式？
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                            <div className="accordion-body fw-normal fs-lg-4">
                                                <strong>A：</strong> 目前尚未提供貨到付款的服務，您可以選擇信用卡、LINE PAY、GOOGLE PAY 及 APPLE PAY的方式付款。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed fs-lg-3 fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                                <strong>Q：</strong>運送方式為何？
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                                            <div className="accordion-body fw-normal fs-lg-4">
                                                <strong>A：</strong>因含生鮮冷凍食品,僅提供宅配服務。收到款項後48小時內會備貨,下單後1週內會出貨作業,可指定配送時間。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed fs-lg-3 fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                                <strong>Q：</strong>如何查詢目前訂單的處理情況？
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                                            <div className="accordion-body fw-normal fs-lg-4">
                                                <strong>A：</strong>請您先「<strong><a href="login.html">會員登入</a></strong>」進入會員中心，即可查詢該訂單的處理狀態。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="fs-lg-1 mb-3"><i className="bi bi-box-fill me-1"></i>配送取貨問題</h4>
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed fs-lg-3 fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                                                <strong>Q：</strong> 請問運費如何計算？
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
                                            <div className="accordion-body fw-normal fs-lg-4">
                                                <strong>A：</strong> 單筆購物滿1000元，即享有免運費優惠；未達免運條件，將酌收100元物流費。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed fs-lg-3 fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                                                <strong>Q：</strong> 訂購商品後需幾天的時間才可以收到商品呢？
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse">
                                            <div className="accordion-body fw-normal fs-lg-4">
                                                <strong>A：</strong>常態的出貨時間為：2-3天工作日，週日及例假日不出貨。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed fs-lg-3 fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                                                <strong>Q：</strong> 想了解宅配訂單的包裹配送到哪？
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse">
                                            <div className="accordion-body fw-normal fs-lg-4">
                                                <strong>A：</strong>請您先「<strong><a href="login.html">會員登入</a></strong>」進入會員中心，即可查詢該訂單的配送狀態。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed fs-lg-3 fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
                                                <strong>Q：</strong> 台灣外島地區可以寄送嗎？
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse">
                                            <div className="accordion-body fw-normal fs-lg-4">
                                                <strong>A：</strong>可以，預計3-7日內配達，而送達時間會因天氣狀況、船隻班次而有變動的可能性。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="src/assets/images/Illustration/planting.png" alt="planting" className="faq-deco"/>
                    </div>
                </section>
            </main>
            )
}

            export default Faq;