import { Link, useNavigate } from "react-router-dom"
import Toast from "../../layout/Toast";
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from "../../redux/slice/toastSlice";



function Member() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
        setTimeout(() => {
            dispatch(createAsyncMessage({
                text: "已成功登出",
                type: '登出',
                status: "success"
            }));
        }, 500)
    };

    return (<>
        <div className="container member">
            <div className="row my-7">
                <div className="col-lg-3">
                    <div className="card border-0">
                        <div className="card-body bg-secondary-200 rounded rounded-3 mb-3 px-5 pb-5 pt-11 position-relative w-100" style={{ marginTop: "136px" }}>
                            <img src="src/assets/images/lisa.png" className=" position-absolute top-0 start-50 translate-middle" alt="member-pic" style={{ borderRadius: "12px", width: "200px", height: "200px" }} />
                            <h4 className="text-black fw-bold text-center mb-1">戴小穎</h4>
                            <p className="text-gray mb-5 text-center">asd456@gmail.com</p>
                            <div className="row mb-5 g-2">
                                <div className="col-3">手機｜</div>
                                <div className="col-9">0987654321</div>
                                <div className="col-3">地址｜</div>
                                <div className="col-9">彰化縣彰化市叉叉路1號2樓</div>
                            </div>
                            <Link className="text-accent">修改會員資料</Link>
                        </div>
                        <div className="card-body bg-secondary-200 rounded rounded-3 mb-3">
                            <Link to="/changePassword" className="btn w-100 fs-6 py-3 text-start">修改密碼</Link>
                            <Link className="btn w-100 fs-6 py-3 text-start">收件地址管理</Link>
                            <Link className="btn w-100 fs-6 py-3 text-start">優惠券查詢</Link>
                        </div>
                        <div className="card-body bg-secondary-200 rounded rounded-3">
                            <Link to="/" onClick={handleLogout} className="mt-auto ms-auto fs-5 fs-lg-4 link-primary">登出
                                <span className="material-symbols-outlined align-middle ms-2">logout</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 p-5">
                    <h2 className="fs-4 text-primary">我的訂單</h2>
                    {/* <!-- pc版 --> */}
                    <main className="mt-6 d-none d-lg-block">
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
                                                    <div className="modal fade" id="cauliflower" tabIndex="-1"
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
                                                                        <label htmlFor="commentTitle"
                                                                            className="form-label fs-5">標題：</label>
                                                                        <input type="text" className="form-control fs-5"
                                                                            id="commentTitle" placeholder="此欄位為必填，字數限 20 字元以下" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="commentContent"
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
                                                        aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
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
                                                    <div className="modal fade" id="oyster" tabIndex="-1"
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
                                                                        <label htmlFor="commentTitle"
                                                                            className="form-label fs-5">標題：</label>
                                                                        <input type="text" className="form-control fs-5"
                                                                            id="commentTitle" placeholder="此欄位為必填，字數限 20 字元以下" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="commentContent"
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
                                                        aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
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
                                            <div className="modal fade" id="m-cauliflower" tabIndex="-1"
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
                                                                <label htmlFor="commentTitle" className="form-label">標題：</label>
                                                                <input type="text" className="form-control" id="commentTitle"
                                                                    placeholder="此欄位為必填，字數限 20 字元以下" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="commentContent" className="form-label">內容：</label>
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
                                                aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
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
                                            <div className="modal fade" id="m-oyster" tabIndex="-1"
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
                                                                <label htmlFor="commentTitle" className="form-label">標題：</label>
                                                                <input type="text" className="form-control" id="commentTitle"
                                                                    placeholder="此欄位為必填，字數限 20 字元以下" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="commentContent" className="form-label">內容：</label>
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
                                                aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
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
                </div>
            </div>
        </div >
        <Toast />
        <img src="src/assets/images/Illustration/Top-Curve.png" alt="banner" className="promotion-curve" />
    </>
    )
}

export default Member;