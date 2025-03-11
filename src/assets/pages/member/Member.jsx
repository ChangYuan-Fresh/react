import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState, useRef } from "react";
import axios from 'axios'
import Toast from "../../layout/Toast";
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from "../../redux/slice/toastSlice";
import IsScreenLoading from "../../component/IsScreenLoading";
import FormatDate from "../../component/formatDate";
import CommentModal from "../../component/CommentModal";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;


function Member() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([])
    const [isScreenLoading, setIsScreenLoading] = useState(false)
    const [selectState, setSelectState] = useState('全部');
    const [expandedOrders, setExpandedOrders] = useState(new Set());
    const [textExtend, setTextExtend] = useState(false);
    const [couponExtend, setCouponExtend] = useState(false)
    const modelRef = useRef(null);
    const [tempProduct, setTempProduct] = useState({});
    const [discountCode] = useState("75code");


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

    const getOrderList = async () => {
        setIsScreenLoading(true)
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/orders`);
            setOrders(res.data.orders)
        } catch (error) {
            alert("取得訂單資料失敗" || error.response)
        } finally {
            setIsScreenLoading(false)
        }
    }

    useEffect(() => {
        getOrderList();
    }, [])

    const orderState = ['全部', '已付款', '未付款', '取消/退貨'];

    const filterOrders = orders.filter((order) => {
        if (selectState === '全部') return true;
        else if (selectState === '已付款') return order.is_paid === true;
        else if (selectState === '未付款') return order.is_paid === false;

        return false
    })

    const toggleOrder = (orderId) => {
        setExpandedOrders((prev) => {
            const newExpandedOrders = new Set(prev);
            if (newExpandedOrders.has(orderId)) {
                newExpandedOrders.delete(orderId); // 如果已展開，就關閉
            } else {
                newExpandedOrders.add(orderId); // 如果沒展開，就展開
            }
            return newExpandedOrders;
        });
    };

    useEffect(() => {
        if (filterOrders.length > 0 && expandedOrders.size === 0) {
            setExpandedOrders(new Set([filterOrders[0].id])); // 預設展開第一筆訂單
        }
    }, [filterOrders]);


    const handleTextExtend = () => {
        setTextExtend(prevState => !prevState)
    }

    const handleCouponExtend = () => {
        setCouponExtend(prevState => !prevState)
    }

    // 複製折扣碼
    const handleCopyCode = () => {
        navigator.clipboard.writeText(discountCode)  // 複製折扣碼到剪貼簿
            .then(() => {
                alert("折扣碼已複製！"); // 顯示提示訊息
            })
            .catch((error) => {
                alert("複製失敗！"); // 顯示錯誤訊息
            });
    };
    //modal
    const openModal = (product) => {
        setTempProduct(product);
        modelRef.current.show()
    }

    return (<>
        <div className="container member">
            <div className="row my-lg-7 my-0 g-5">
                <div className="col-lg-3">
                    <div className="card border-0 d-none d-lg-block">
                        <div className="card-body bg-secondary-200 rounded rounded-3 mb-3 px-5 pb-5 pt-11 position-relative w-100" style={{ marginTop: "132px" }}>
                            <img src="images/cat.jpg" className=" position-absolute top-0 start-50 translate-middle object-fit-cover" alt="member-pic" style={{ borderRadius: "12px", width: "200px", height: "200px" }} />
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
                            <button type="button" className="btn w-100 fs-6 py-3 d-flex justify-content-between align-items-center" onClick={handleCouponExtend}>
                                我的優惠券
                                <span className="material-symbols-outlined">
                                    {couponExtend ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                                </span>
                            </button>
                            {couponExtend && (
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">限時折扣</h5>
                                        <p className="card-text">限時折扣75折</p>
                                        <p className="card-text">使用期限：2025/3/16</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <h5>{discountCode}</h5>
                                        <button type="button" className="btn btn-outline-primary py-2" onClick={handleCopyCode}>複製折扣碼</button>
                                    </div>
                                </div>)}
                        </div>
                        <div className="card-body bg-secondary-200 rounded rounded-3">
                            <Link to="/" onClick={handleLogout} className="mt-auto ms-auto fs-5 fs-lg-4 link-primary mb-3">登出
                                <span className="material-symbols-outlined align-middle ms-2">logout</span>
                            </Link>
                            <br />
                            <Link to="/" className="mt-auto ms-auto fs-5 fs-lg-4 link-primary">回到首頁
                            </Link>
                        </div>
                    </div>
                    {/* mobile版會員資料 */}
                    <div className="card border-0 d-lg-none">
                        <div className="card-body bg-secondary-200 rounded rounded-3 mb-3 px-5 pt-4 w-100 " >
                            <div className="d-flex">
                                <img src="images/cat.jpg" className="object-fit-cover me-3" alt="member-pic" style={{ borderRadius: "12px", width: "60px", height: "60px" }} />
                                <div>
                                    <p className="text-black fw-bold mb-1">戴小穎</p>
                                    <p className="text-gray mb-5 fs-7 en-font">asd456@gmail.com</p>
                                </div>
                            </div>
                            <button className="btn p-0 w-100 border-0" onClick={handleTextExtend}>
                                {textExtend ? (<>
                                    <div className="row mb-2 g-2">
                                        <div className="col-3">手機｜</div>
                                        <div className="col-9 text-start">0987654321</div>
                                        <div className="col-3">地址｜</div>
                                        <div className="col-9 text-start">彰化縣彰化市叉叉路1號2樓</div>
                                    </div>
                                    <Link className="text-accent text-start pb-3 w-100">修改會員資料</Link>
                                    <div className="card-footer bg-secondary-200 px-0">
                                        <Link to="/changePassword" className="btn w-100 fs-6 text-start pt-3 pb-2  border-0">修改密碼</Link>
                                        <Link className="btn w-100 fs-6 text-start pt-0 pb-2 border-0">收件地址管理</Link>
                                        <button type="button" className="btn w-100 fs-6 pt-0 pb-2 d-flex justify-content-between align-items-center" onClick={handleCouponExtend}>
                                            我的優惠券
                                            <span className="material-symbols-outlined">
                                                {couponExtend ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                                            </span>
                                        </button>
                                        {couponExtend && (
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">限時折扣</h5>
                                                    <p className="card-text">限時折扣75折</p>
                                                    <p className="card-text">使用期限：2025/3/16</p>
                                                </div>
                                                <div className="card-footer d-flex justify-content-between align-items-center">
                                                    <h5>{discountCode}</h5>
                                                    <button type="button" className="btn btn-outline-primary py-2" onClick={handleCopyCode}>複製折扣碼</button>
                                                </div>
                                            </div>)}
                                    </div>
                                    <div className="d-flex text-accent justify-content-center">
                                        <div className="me-3">收合</div>
                                        <span className="material-symbols-outlined">keyboard_arrow_up</span>
                                    </div>
                                </>) : (
                                    <div className="d-flex text-accent justify-content-center">
                                        <div className="me-3">查看個人資訊與功能</div>
                                        <span
                                            className="material-symbols-outlined align-middle">keyboard_arrow_down</span>
                                    </div>)}

                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 p-lg-5 p-0">
                    {/* <!-- pc版 --> */}
                    <main className="mt-6 d-none d-lg-block">
                        <h2 className="fs-4 text-primary">我的訂單</h2>
                        <ul className="nav nav-tabs d-flex justify-content-between border-0">
                            {orderState.map((state) => {
                                return (
                                    <li className="nav-item" key={state}>
                                        <button className={`nav-link bg-white border-0 border-3 py-4 border-bottom px-9 ${selectState === state ? 'border-primary text-primary' : ' border-white text-dark'}`} type="button" onClick={() => setSelectState(state)}>{state}</button>
                                    </li>)
                            })}
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active">
                                <table className="table border-primary">
                                    <thead>
                                        <tr className="table-borderless">
                                            <th scope="col" className="bg-secondary-200 text-gray p-3 w-12" width="15%">訂單編號</th>
                                            <th scope="col" className="bg-secondary-200 text-gray p-3 w-12" width="15%">訂購日期</th>
                                            <th scope="col" className="bg-secondary-200 text-gray p-3" width="40%">訂購商品內容</th>
                                            <th scope="col" className="bg-secondary-200 text-gray p-3 w-12" width="10%">金額</th>
                                            <th scope="col" className="bg-secondary-200 text-gray p-3 w-12" width="10%">狀態</th>
                                            <th scope="col" className="bg-secondary-200 text-gray p-3 w-12" width="10%"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filterOrders.length === 0 ? (
                                            <tr>
                                                <th colSpan="6" className="text-center border-0">
                                                    <img src="images/Illustration/Frame.png" alt="empty" className="mx-auto mt-11" />
                                                    <h5 className="mt-6 text-dark">目前還沒有訂單</h5>
                                                </th>
                                            </tr>
                                        ) : (
                                            filterOrders.map((order) => {
                                                return (
                                                    <tr key={order.id} className="py-5">
                                                        <th scope="row" className="py-5">{order.create_at}</th>
                                                        <td className="py-5"><FormatDate timestamp={order.create_at} /></td>
                                                        {order.products && Object.values(order.products).map((item) => {
                                                            return (
                                                                <td key={item.id} className="d-flex flex-column py-5">
                                                                    <div className="row g-0">
                                                                        <div className="col-3 px-0">
                                                                            <img src={item.product?.imageUrl} alt={item.id} className="object-fit-cover rounded-1" style={{ width: "60px", height: "60px" }} />
                                                                        </div>
                                                                        <div className="col-9 px-0">
                                                                            <div className="d-flex justify-content-between mb-2 w-100">
                                                                                <p>{item.product?.title}</p>
                                                                                {order.is_paid ? (<button type="button" className="btn text-accent p-0 border-0" onClick={() => openModal(item)}>評價</button>) : (<></>)}
                                                                            </div>
                                                                            <p className="fs-7 text-muted">{item.product?.description}</p>
                                                                            <p className="fs-7 text-muted">{`數量：${item.qty}`}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>)
                                                        })}
                                                        <td className="py-5">{`NT$ ${Math.floor(order.total).toLocaleString()}`}</td>
                                                        <td className="py-5">
                                                            {order.is_paid ? "已付款" : "未付款"}
                                                        </td>
                                                        <td className="py-5"></td>
                                                    </tr>)
                                            })
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div >
        </div >
        {/* <!-- mobile 版 --> */}
        < main className="d-lg-none" >
            <h2 className="fs-5 text-primary px-3 mb-5">我的訂單</h2>
            <ul className="nav nav-tabs justify-content-center w-100 d-flex justify-content-between border-0">
                {orderState.map((state) => {
                    return (
                        <li className="nav-item" key={state}>
                            <button className={`nav-link bg-white border-0 border-3 py-4 border-bottom px-4 ${selectState === state ? 'border-primary text-primary' : ' border-white text-dark'}`} type="button" onClick={() => setSelectState(state)}>{state}</button>
                        </li>)
                })}
            </ul>
            {filterOrders.length === 0 ? (
                <div className="text-center mt-10">
                    <img src="images/Illustration/Frame.png" alt="empty" />
                    <h6 className="mt-6 text-dark">目前還沒有訂單</h6>
                </div>) :
                (filterOrders.map((order, index) => {
                    const isExpanded = expandedOrders.has(order.id);
                    return (
                        <div key={order.id} className="card my-4 mx-3 border-0 p-4 bg-secondary-200">
                            <div className={`card-title d-flex justify-content-between mb-0 ${isExpanded ? "border-bottom pb-4" : ""}`} onClick={() => toggleOrder(order.id)} style={{ cursor: "pointer" }}>
                                <div>{`訂單編號 ${order.create_at} ｜`}</div>
                                <div>{new Date(order.create_at * 1000).toLocaleDateString()}</div>
                                <span className="material-symbols-outlined">{isExpanded ? "keyboard_arrow_up" : "keyboard_arrow_down"}</span>
                            </div>
                            {isExpanded && (<>
                                {order.products && Object.values(order.products).map((item) => {
                                    return (
                                        <div key={item.id} className="d-flex flex-column pt-4">
                                            <div className="d-flex">
                                                <img src={item.product?.imageUrl} alt={item.id} className="object-fit-cover rounded-1 me-3" style={{ width: "60px", height: "60px" }} />
                                                <div>
                                                    <p>{item.product?.title}</p>
                                                    <div>
                                                        <p className="fs-7 text-muted">{item.product?.description}</p>
                                                        <span className="fs-7 text-muted">{`數量：${item.qty}`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                })}
                                <div className="card-footer d-flex justify-content-between align-items-center pt-4 bg-secondary-200 px-0">
                                    <div className="d-flex  align-items-center">
                                        <p className="fs-7 text-muted me-3">總金額</p>
                                        <p>{`NT$ ${Math.floor(order.total).toLocaleString()}`}</p>
                                    </div>
                                    <div className="d-flex  align-items-center">
                                        <p className="fs-7 text-muted me-3">訂單狀態</p>
                                        {order.is_paid ? "已付款" : "未付款"}
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-end">
                                    <button type="button" className="btn text-accent">查看配送狀態</button>
                                    <p className="text-accent">｜</p>
                                    <button type="button" className="btn text-accent">訂單明細</button>
                                </div>
                            </>)}
                        </div>)
                }))
            }
            <div className="card-body rounded rounded-3 d-lg-none d-flex justify-content-center align-items-center mx-3">
                <Link to="/" onClick={handleLogout} className="fs-5 link-primary py-3 me-5">登出
                </Link>
                <Link to="/" className="fs-5 link-primary py-3">回到首頁
                </Link>
            </div>
        </main >

        <CommentModal tempProduct={tempProduct} modelRef={modelRef} />
        <Toast />
        <img src="images/Illustration/Top-Curve.png" alt="banner" className="promotion-curve" />
        <IsScreenLoading isScreenLoading={isScreenLoading} />
    </>
    )
}

export default Member;