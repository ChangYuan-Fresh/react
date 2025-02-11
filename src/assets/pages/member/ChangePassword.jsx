import { Link } from "react-router";

function Admin (){
    return (<>
        <div className="container login">
            <div className="row">
                <div className="card border-0 mx-auto my-lg-11 my-7 col-lg-6">
                    <div className="card-body mb-5">
                        <h1 className="card-title fs-2 text-center text-primary mb-9 mb-lg-11">修改密碼</h1>
                        <div className="mb-5 row align-items-center">
                            <label for="oldPassword" className="form-label fs-5 col-lg-3">舊密碼：</label>
                            <div className="col-lg-9">
                                <input type="text" className="form-control bg-white" id="oldPassword"
                                    placeholder="請輸入原會員密碼"/>
                            </div>

                        </div>
                        <div className="mb-5 row align-items-center">
                            <label for="newPassword" className="form-label fs-5 col-lg-3">新密碼：</label>
                            <div className="col-lg-9">
                                <input type="password" className="form-control bg-white" id="newPassword"
                                    placeholder="請輸入新密碼"/>
                            </div>
                        </div>
                        <div className="mb-5 row align-items-center">
                            <label for="confirmChange" className="form-label fs-5 col-lg-3">密碼確認：</label>
                            <div className="col-lg-9">
                                <input type="password" className="form-control bg-white" id="confirmChange"
                                    placeholder="請再次輸入新密碼"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-5 flex-column flex-lg-row align-items-center">
                        <button type="submit" className="btn btn-L py-3 me-0 me-lg-5 mb-5 mb-lg-0 w-100">送出</button>
                        <Link className="btn btn-L py-3 w-100" to='member'>取消</Link>
                    </div>
                </div>
            </div>
        </div>


        <img src="src/assets/images/Illustration/Top-Curve.png" alt="banner" class="promotion-curve"/>
    </>
    )
}

export default Admin;