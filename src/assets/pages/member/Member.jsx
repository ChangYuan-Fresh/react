function Member() {
    return (<>
        <div className="container member">
            <div className="row my-7">
                <div className="col-lg-3">
                    <div className="card border-0">
                        <img src="src/assets/images/lisa.png" className="card-img mb-5 rounded-circle" alt="member-pic" />
                        <div className="card-body d-none d-lg-block">
                            <a href="changepw.html" className="btn btn-L w-100 mb-4 fs-5 py-3 rounded-pill">修改密碼</a>
                            <a href="#" className="btn btn-L w-100 mb-4 fs-5 py-3 rounded-pill">收件地址管理</a>
                            <a href="#" className="btn btn-L w-100 fs-5 py-3 rounded-pill">優惠券查詢</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-8 p-5">
                    <div className="d-flex flex-column h-100">
                        <h1 className="fs-2 mb-lg-9 mb-7 border-bottom py-4">會員資料</h1>
                        <ul className="list-unstyled px-5">
                            <li className="mb-3 fs-5">會員帳號:<span className="ms-5">asd456@gmail.com</span></li>
                            <li className="mb-3 fs-5">會員姓名:<span className="ms-5">Lisa</span></li>
                            <li className="mb-3 fs-5">會員電話:<span className="ms-5">0987654321</span> </li>
                            <li className="fs-5">常用住址:<span className="ms-5">彰化縣彰化市民生路129巷1號2樓</span></li>
                        </ul>
                        <div className="d-lg-none mb-4">
                            <a href="changepw.html" className="btn btn-L w-100 mb-4 fs-5 py-3 rounded-pill">修改密碼</a>
                            <a href="#" className="btn btn-L w-100 mb-4 fs-5 py-3 rounded-pill">收件地址管理</a>
                            <a href="#" className="btn btn-L w-100 fs-5 py-3 rounded-pill">優惠券查詢</a>
                        </div>
                        <a href="#" className="mt-auto ms-auto fs-5 fs-lg-4 link-primary">登出<span
                            className="material-symbols-outlined align-middle ms-2">logout</span></a>
                    </div>
                </div>
            </div>
            {/* <!-- pc版 --> */}
            <main className="my-11 d-none d-lg-block">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="processing-tab" data-bs-toggle="tab" data-bs-target="#processing"
                            type="button" role="tab" aria-controls="processing" aria-selected="true">處理中</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="finished-tab" data-bs-toggle="tab"
                            data-bs-target="#finished" type="button" role="tab" aria-controls="finished"
                            aria-selected="false">已送達</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="canceled-tab" data-bs-toggle="tab" data-bs-target="#canceled"
                            type="button" role="tab" aria-controls="canceled" aria-selected="false">已取消</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="processing" role="tabpanel" aria-labelledby="processing-tab">
                        <table className="table border-primary table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">訂單編號</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">訂購日期</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white">訂購商品內容</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">金額</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">狀態</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">備註</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1009123</th>
                                    <td><time datetime="2024/10/01">2024/10/01</time></td>
                                    <td className="p-5">
                                        <div className="d-flex align-items-center mb-2">
                                            <p>福興鄉文蛤x10</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p>伸港鄉生猛鮮蚵x2</p>
                                        </div>
                                    </td>
                                    <td>$1380</td>
                                    <td>
                                        <a href="#" className="text-decoration-underline link-primary">物流運送中</a>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade show active" id="finished" role="tabpanel" aria-labelledby="finished-tab">
                        <table className="table border-primary table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">訂單編號</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">訂購日期</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white">訂購商品內容</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">金額</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">狀態</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">備註</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1003202</th>
                                    <td><time datetime="2024/08/05">2024/08/05</time></td>
                                    <td className="p-5">
                                        <div className="d-flex align-items-center mb-2">
                                            <p>埔鹽鄉白花椰菜x1</p>
                                            {/* <!-- Button trigger modal --> */}
                                            <button type="button" className="btn btn-s me-4 fs-6 py-2 ms-auto rounded-pill"
                                                data-bs-toggle="modal" data-bs-target="#cauliflower">填寫評價</button>

                                            {/* <!-- Modal --> */}
                                            <div className="modal fade" id="cauliflower" tabindex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content position-relative">
                                                        <button type="button"
                                                            className="btn-close position-absolute top-0 start-100 translate-middle p-0 fs-6"
                                                            data-bs-dismiss="modal" aria-label="Close"><span
                                                                className="material-symbols-outlined align-middle">close</span></button>
                                                        <div className="modal-header mt-7 border-0 flex-column">
                                                            <h2 className="modal-title mx-auto mb-4" id="exampleModalLabel">
                                                                埔鹽鄉白花椰菜</h2>
                                                            <img src="src/assets/images/Cauliflower HQ (7).png"
                                                                alt="Cauliflower" className="rounded-circle text-center" />
                                                        </div>
                                                        <div
                                                            className="modal-body d-flex flex-column align-items-stretch text-start px-5">
                                                            <h5 className="mb-2 text-dark">請為此商品評分：</h5>
                                                            <div className="mb-4">
                                                                <span
                                                                    className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                <span
                                                                    className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                <span
                                                                    className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                <span
                                                                    className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                <span
                                                                    className="material-symbols-outlined text-accent fs-4">star</span>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label for="commentTitle"
                                                                    className="form-label fs-5">標題：</label>
                                                                <input type="text" className="form-control fs-5"
                                                                    id="commentTitle" placeholder="此欄位為必填，字數限 20 字元以下" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label for="commentContent"
                                                                    className="form-label fs-5">內容：</label>
                                                                <textarea className="form-control fs-5" id="commentContent"
                                                                    rows="6"
                                                                    placeholder="分享您的體驗，非必填，字數限制在 100字元以下"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer border-0 justify-content-center">
                                                            <button className="btn btn-s fs-5 fw-bold py-4 pw-50 mb-5"
                                                                data-bs-target="#commitModel"
                                                                data-bs-toggle="modal">送出評價</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal fade" id="commitModel" aria-hidden="true"
                                                aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content position-relative">
                                                        <div className="modal-header border-0">
                                                            <h2 className="modal-title mx-auto mt-7 mb-3"
                                                                id="exampleModalToggleLabel2">送出後，則無法變更評價！</h2>
                                                            <button type="button"
                                                                className="btn-close position-absolute top-0 start-100 translate-middle p-0 fs-6"
                                                                data-bs-dismiss="modal" aria-label="Close"><span
                                                                    className="material-symbols-outlined align-middle">close</span></button>
                                                        </div>
                                                        <div className="modal-footer border-0 justify-content-center mb-7">
                                                            <button className="btn btn-s fs-5 fw-bold py-3 px-8 me-6"
                                                                data-bs-target="#cauliflower"
                                                                data-bs-toggle="modal">取消</button>
                                                            <button className="btn btn-s fs-5 fw-bold py-3 px-8"
                                                                data-bs-target="#exampleModalToggle"
                                                                data-bs-toggle="modal">確認</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p>伸港鄉生猛鮮蚵x2</p>
                                            {/* <!-- Button trigger modal --> */}
                                            <button type="button" className="btn btn-s me-4 fs-6 py-2 ms-auto rounded-pill"
                                                data-bs-toggle="modal" data-bs-target="#oyster">填寫評價</button>
                                            {/* <!-- Modal --> */}
                                            <div className="modal fade" id="oyster" tabindex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content position-relative">
                                                        <button type="button"
                                                            className="btn-close position-absolute top-0 start-100 translate-middle p-0 fs-6"
                                                            data-bs-dismiss="modal" aria-label="Close"><span
                                                                className="material-symbols-outlined align-middle">close</span></button>
                                                        <div className="modal-header mt-7 border-0 flex-column">
                                                            <h2 className="modal-title mx-auto mb-4" id="exampleModalLabel">
                                                                伸港鄉生猛鮮蚵</h2>
                                                            <img src="src/assets/images/Oyster HD Image (1) 1.png"
                                                                alt="Oyster" className="rounded-circle text-center" />
                                                        </div>
                                                        <div
                                                            className="modal-body d-flex flex-column align-items-stretch text-start px-5">
                                                            <h5 className="mb-2 text-dark">請為此商品評分：</h5>
                                                            <div className="mb-4">
                                                                <span
                                                                    className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                <span
                                                                    className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                <span
                                                                    className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                <span
                                                                    className="material-symbols-outlined text-accent fs-4 me-1">star</span>
                                                                <span
                                                                    className="material-symbols-outlined text-accent fs-4">star</span>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label for="commentTitle"
                                                                    className="form-label fs-5">標題：</label>
                                                                <input type="text" className="form-control fs-5"
                                                                    id="commentTitle" placeholder="此欄位為必填，字數限 20 字元以下" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label for="commentContent"
                                                                    className="form-label fs-5">內容：</label>
                                                                <textarea className="form-control fs-5" id="commentContent"
                                                                    rows="6"
                                                                    placeholder="分享您的體驗，非必填，字數限制在 100字元以下"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer border-0 justify-content-center">
                                                            <button className="btn btn-s fs-5 fw-bold py-4 w-50 mb-5"
                                                                data-bs-target="#commitModel2"
                                                                data-bs-toggle="modal">送出評價</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal fade" id="commitModel2" aria-hidden="true"
                                                aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content position-relative">
                                                        <div className="modal-header border-0">
                                                            <h2 className="modal-title mx-auto mt-7 mb-3"
                                                                id="exampleModalToggleLabel2">送出後，則無法變更評價！</h2>
                                                            <button type="button"
                                                                className="btn-close position-absolute top-0 start-100 translate-middle p-0 fs-6"
                                                                data-bs-dismiss="modal" aria-label="Close"><span
                                                                    className="material-symbols-outlined align-middle">close</span></button>
                                                        </div>
                                                        <div className="modal-footer border-0 justify-content-center mb-7">
                                                            <button className="btn btn-s fs-5 fw-bold py-3 px-8 me-6"
                                                                data-bs-target="#oyster"
                                                                data-bs-toggle="modal">取消</button>
                                                            <button className="btn btn-s fs-5 fw-bold py-3 px-8"
                                                                data-bs-target="#exampleModalToggle"
                                                                data-bs-toggle="modal">確認</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$999</td>
                                    <td>
                                        <time datetime="2024/08/07">2024/08/07</time>
                                        <p>已送達</p>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">1005392</th>
                                    <td><time datetime="2024/05/16">2024/05/16</time></td>
                                    <td className="p-5">
                                        <div className="d-flex align-items-center mb-2">
                                            <p>福興文蛤x1</p>
                                            <button type="button" className="btn btn-s me-4 fs-6 py-2 ms-auto rounded-pill"
                                                disabled>已填寫評價</button>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <p>埔鹽鄉白花椰菜x1</p>
                                            <button type="button" className="btn btn-s me-4 fs-6 py-2 ms-auto rounded-pill"
                                                disabled>已填寫評價</button>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p>伸港鄉生猛鮮蚵x2</p>
                                            <button type="button" className="btn btn-s me-4 fs-6 py-2 ms-auto rounded-pill"
                                                disabled>已填寫評價</button>
                                        </div>
                                    </td>
                                    <td>$1299</td>
                                    <td>
                                        <time datetime="2024/05/19">2024/05/19</time>
                                        <p>已送達</p>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="canceled" role="tabpanel" aria-labelledby="canceled-tab">
                        <table className="table border-primary table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">訂單編號</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">訂購日期</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white">訂購商品內容</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">金額</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">狀態</th>
                                    <th scope="col" className="bg-primary text-white py-4 border-white w-12">備註</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1003202</th>
                                    <td><time datetime="2024/08/05">2024/08/03</time></td>
                                    <td className="p-5">
                                        <div className="d-flex align-items-center mb-2">
                                            <p>福興鄉文蛤x3</p>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <p>大城鄉龍膽石斑魚x2</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p>埔鹽鄉多汁茂谷柑x1</p>
                                        </div>
                                    </td>
                                    <td>$2345</td>
                                    <td>
                                        <time datetime="2024/08/07">2024/08/03</time>
                                        <p>已取消</p>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            {/* <!-- mobile 版 --> */}
            <main className="d-lg-none">
                <ul className="nav nav-tabs justify-content-center" id="mobile" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="m-processing-tab" data-bs-toggle="tab"
                            data-bs-target="#m-processing" type="button" role="tab" aria-controls="m-processing"
                            aria-selected="true">處理中</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="m-finished-tab" data-bs-toggle="tab"
                            data-bs-target="#m-finished" type="button" role="tab" aria-controls="m-finished"
                            aria-selected="false">已送達</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="m-canceled-tab" data-bs-toggle="tab" data-bs-target="#m-canceled"
                            type="button" role="tab" aria-controls="m-canceled" aria-selected="false">已取消</button>
                    </li>
                </ul>
                <div className="tab-content" id="mobileContent">
                    <div className="tab-pane fade" id="m-processing" role="tabpanel" aria-labelledby="m-processing-tab">
                        <ul className="list-unstyled p-4 bg-secondary rounded border border-primary">
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂單編號：</p>
                                <p>1009123</p>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂購日期：</p>
                                <time datetime="2024/10/01">2024/10/01</time>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂購商品內容：</p>
                                <div className="text-end">
                                    <p>福興鄉文蛤x10</p>
                                    <p>伸港鄉生猛鮮蚵x2</p>
                                </div>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>金額：</p>
                                <p>$1380</p>
                            </li>
                            <li className="d-flex justify-content-between">
                                <p>狀態：</p>
                                <a href="#" className="text-decoration-underline link-primary ms-auto">物流運送中</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-pane fade show active" id="m-finished" role="tabpanel"
                        aria-labelledby="m-finished-tab">
                        <ul className="list-unstyled p-4 bg-secondary rounded border border-primary">
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂單編號：</p>
                                <p>1003202</p>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂購日期：</p>
                                <time datetime="2024/08/05">2024/08/05</time>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂購商品內容：</p>
                                <div className="text-end">
                                    <p className="mb-1">埔鹽鄉白花椰菜x1</p>
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-L px-5 fs-6 py-1 mb-3 rounded-pill"
                                        data-bs-toggle="modal" data-bs-target="#m-cauliflower">填寫評價</button>

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="m-cauliflower" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content position-relative">
                                                <button type="button"
                                                    className="btn-close position-absolute top-0 start-100 translate-middle p-0 fs-6"
                                                    data-bs-dismiss="modal" aria-label="Close"><span
                                                        className="material-symbols-outlined align-middle">close</span></button>
                                                <div className="modal-header mt-5 border-0 flex-column">
                                                    <h3 className="modal-title mx-auto mb-4" id="exampleModalLabel">
                                                        埔鹽鄉白花椰菜</h3>
                                                    <img src="src/assets/images/Cauliflower HQ (7).png" alt="Cauliflower"
                                                        className="rounded-circle text-center" />
                                                </div>
                                                <div
                                                    className="modal-body d-flex flex-column align-items-stretch text-start px-5">
                                                    <h6 className="mb-2 text-dark">請為此商品評分：</h6>
                                                    <div className="mb-4">
                                                        <span
                                                            className="material-symbols-outlined text-accent fs-5">star</span>
                                                        <span
                                                            className="material-symbols-outlined text-accent fs-5">star</span>
                                                        <span
                                                            className="material-symbols-outlined text-accent fs-5">star</span>
                                                        <span
                                                            className="material-symbols-outlined text-accent fs-5">star</span>
                                                        <span
                                                            className="material-symbols-outlined text-accent fs-5">star</span>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="commentTitle" className="form-label">標題：</label>
                                                        <input type="text" className="form-control" id="commentTitle"
                                                            placeholder="此欄位為必填，字數限 20 字元以下" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="commentContent" className="form-label">內容：</label>
                                                        <textarea className="form-control" id="commentContent" rows="4"
                                                            placeholder="分享您的體驗，非必填，字數限制在 100字元以下"></textarea>
                                                    </div>
                                                </div>
                                                <div className="modal-footer border-0 justify-content-center py-0">
                                                    <button className="btn btn-s fw-bold py-3 px-7 mb-5"
                                                        data-bs-target="#m-commitModel"
                                                        data-bs-toggle="modal">送出評價</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="m-commitModel" aria-hidden="true"
                                        aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content position-relative">
                                                <div className="modal-header border-0">
                                                    <h4 className="modal-title mx-auto mt-5 mb-1"
                                                        id="exampleModalToggleLabel2">送出後，則無法變更評價！</h4>
                                                    <button type="button"
                                                        className="btn-close position-absolute top-0 start-100 translate-middle p-0 fs-6"
                                                        data-bs-dismiss="modal" aria-label="Close"><span
                                                            className="material-symbols-outlined align-middle">close</span></button>
                                                </div>
                                                <div
                                                    className="modal-footer border-0 justify-content-center mb-5 d-flex flex-column">
                                                    <button className="btn btn-s fw-bold py-3 px-8 mb-3"
                                                        data-bs-target="#m-cauliflower"
                                                        data-bs-toggle="modal">取消</button>
                                                    <button className="btn btn-s fw-bold py-3 px-8"
                                                        data-bs-target="#exampleModalToggle"
                                                        data-bs-toggle="modal">確認</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-1">伸港鄉生猛鮮蚵x2</p>
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-L px-5 fs-6 py-1 mb-3 rounded-pill"
                                        data-bs-toggle="modal" data-bs-target="#m-oyster">填寫評價</button>

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="m-oyster" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content position-relative">
                                                <button type="button"
                                                    className="btn-close position-absolute top-0 start-100 translate-middle p-0 fs-6"
                                                    data-bs-dismiss="modal" aria-label="Close"><span
                                                        className="material-symbols-outlined align-middle">close</span></button>
                                                <div className="modal-header mt-5 border-0 flex-column">
                                                    <h3 className="modal-title mx-auto mb-4" id="exampleModalLabel">
                                                        伸港鄉生猛鮮蚵</h3>
                                                    <img src="src/assets/images/Oyster HD Image (1) 1.png" alt="oyster"
                                                        className="rounded-circle text-center" />
                                                </div>
                                                <div
                                                    className="modal-body d-flex flex-column align-items-stretch text-start px-5">
                                                    <h6 className="mb-2 text-dark">請為此商品評分：</h6>
                                                    <div className="mb-4">
                                                        <span
                                                            className="material-symbols-outlined text-accent fs-5">star</span>
                                                        <span
                                                            className="material-symbols-outlined text-accent fs-5">star</span>
                                                        <span
                                                            className="material-symbols-outlined text-accent fs-5">star</span>
                                                        <span
                                                            className="material-symbols-outlined text-accent fs-5">star</span>
                                                        <span
                                                            className="material-symbols-outlined text-accent fs-5">star</span>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="commentTitle" className="form-label">標題：</label>
                                                        <input type="text" className="form-control" id="commentTitle"
                                                            placeholder="此欄位為必填，字數限 20 字元以下" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="commentContent" className="form-label">內容：</label>
                                                        <textarea className="form-control" id="commentContent" rows="4"
                                                            placeholder="分享您的體驗，非必填，字數限制在 100字元以下"></textarea>
                                                    </div>
                                                </div>
                                                <div className="modal-footer border-0 justify-content-center py-0">
                                                    <button className="btn btn-s fw-bold py-3 px-7 mb-5"
                                                        data-bs-target="#m-commitModel2"
                                                        data-bs-toggle="modal">送出評價</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="m-commitModel2" aria-hidden="true"
                                        aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content position-relative">
                                                <div className="modal-header border-0">
                                                    <h4 className="modal-title mx-auto mt-5 mb-1"
                                                        id="exampleModalToggleLabel2">送出後，則無法變更評價！</h4>
                                                    <button type="button"
                                                        className="btn-close position-absolute top-0 start-100 translate-middle p-0 fs-6"
                                                        data-bs-dismiss="modal" aria-label="Close"><span
                                                            className="material-symbols-outlined align-middle">close</span></button>
                                                </div>
                                                <div
                                                    className="modal-footer border-0 justify-content-center mb-5 d-flex flex-column">
                                                    <button className="btn btn-s fw-bold py-3 px-8 mb-3"
                                                        data-bs-target="#m-oyster" data-bs-toggle="modal">取消</button>
                                                    <button className="btn btn-s fw-bold py-3 px-8"
                                                        data-bs-target="#exampleModalToggle"
                                                        data-bs-toggle="modal">確認</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>金額：</p>
                                <p>$999</p>
                            </li>
                            <li className="d-flex justify-content-between">
                                <p>狀態：</p>
                                <div className="text-end">
                                    <time datetime="2024/08/07">2024/08/07</time>
                                    <p>已送達</p>
                                </div>
                            </li>
                        </ul>
                        <ul className="list-unstyled p-4 bg-secondary rounded border border-primary">
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂單編號：</p>
                                <p>1005392</p>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂購日期：</p>
                                <time datetime="2024/05/16">2024/05/16</time>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂購商品內容：</p>
                                <div className="text-end">
                                    <p className="mb-1">福興文蛤x1</p>
                                    <button type="button" className="btn btn-L px-5 fs-6 py-1 mb-3 rounded-pill"
                                        disabled>已填寫評價</button>
                                    <p className="mb-1">埔鹽鄉白花椰菜x1</p>
                                    <button type="button" className="btn btn-L px-5 fs-6 py-1 mb-3 rounded-pill"
                                        disabled>已填寫評價</button>
                                    <p className="mb-1">伸港鄉生猛鮮蚵x2</p>
                                    <button type="button" className="btn btn-L px-5 fs-6 py-1 mb-3 rounded-pill"
                                        disabled>已填寫評價</button>
                                </div>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>金額：</p>
                                <p>$1299</p>
                            </li>
                            <li className="d-flex justify-content-between">
                                <p>狀態：</p>
                                <div className="text-end">
                                    <time datetime="2024/05/19">2024/05/19</time>
                                    <p>已送達</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="m-canceled" role="tabpanel" aria-labelledby="m-canceled-tab">
                        <ul className="list-unstyled p-4 bg-secondary rounded border border-primary">
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂單編號：</p>
                                <p>1003202</p>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂購日期：</p>
                                <time datetime="2024/08/03">2024/08/03</time>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>訂購商品內容：</p>
                                <div className="text-end">
                                    <p>福興鄉文蛤x3</p>
                                    <p>大城鄉龍膽石斑魚x2</p>
                                    <p>埔鹽鄉多汁茂谷柑x1</p>
                                </div>
                            </li>
                            <li className="d-flex justify-content-between mb-2">
                                <p>金額：</p>
                                <p>$2345</p>
                            </li>
                            <li className="d-flex justify-content-between">
                                <p>狀態：</p>
                                <div className="text-end">
                                    <time datetime="2024/08/03">2024/08/03</time>
                                    <p>已取消</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main >
            <div className="mb-5 mb-lg-10 d-flex align-items-center justify-content-center">
                <a href="#" className="btn me-5"><span
                    className="material-symbols-outlined text-muted fs-6">arrow_back_ios</span></a>
                <a href="#" className="btn btn-s btn-pageNum active me-3">1</a>
                <a href="#" className="btn btn-s btn-pageNum me-3">2</a>
                <a href="#" className="btn btn-s btn-pageNum me-5">3</a>
                <a href="#" className="btn"><span
                    className="material-symbols-outlined text-muted fs-6">arrow_forward_ios</span></a>

            </div>
        </div >



        <img src="src/assets/images/Illustration/Top-Curve.png" alt="banner" className="promotion-curve" />
    </>
    )
}

export default Member;