import { Link } from "react-router";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { updateCartData } from '../../redux/slice/cartSlice'
import Toast from "../../layout/Toast";
import { createAsyncMessage } from "../../redux/slice/toastSlice";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;


function PlaceOrder() {
    const [orderId, setOrderId] = useState([])
    const dispatch = useDispatch();

    const getOrders = useCallback(async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/orders`);
            setOrderId(res.data.orders)
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '取得購物車資訊失敗',
                status: "failed"
            }))
        }
    }, [dispatch]);
    
    const getCartList = useCallback(async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/cart`);
            dispatch(updateCartData(res.data.data))
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '取得購物車資訊失敗',
                status: "failed"
            }))
        }
    }, [dispatch]);

    useEffect(() => {
        getCartList();
        getOrders()
    }, [getCartList, getOrders])

    return (<>
        <div className="container order mt-lg-7 mt-5 mb-lg-10 mb-0 ">
            <div className="row">
                <div className="col-lg-9 mx-auto">
                    {/* 進度條 */}
                    <div className="bg-secondary-200 row mb-5 mx-0" style={{ height: "92px", borderRadius: "16px" }}>
                        <div className="col-lg-9 col m-auto">
                            <div className="m-0 m-lg-4 d-block ">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column flex-lg-row align-items-center">
                                        <button type="button" className="btn btn-sm btn-primary rounded-pill me-1 text-secondary" style={{ width: "2rem", height: "2rem" }}>1</button>
                                        <p className="text-primary fs-lg-6 fs-7 text-nowrap">購物車內容</p>
                                    </div>
                                    <div className="bg-primary m-auto" style={{ height: "1px", width: "15%" }} />
                                    <div className="d-flex flex-column flex-lg-row align-items-center">
                                        <button type="button" className="btn btn-sm btn-primary rounded-pill me-1 text-secondary" style={{ width: "2rem", height: "2rem" }}>2</button>
                                        <p className="text-primary fs-lg-6 fs-7 text-nowrap">付款運送方式</p>
                                    </div>
                                    <div className="bg-primary m-auto" style={{ height: "1px", width: "15%" }} />
                                    <div className="d-flex flex-column flex-lg-row align-items-center">
                                        <button type="button" className="btn btn-sm btn-primary rounded-pill me-1 text-secondary" style={{ width: "2rem", height: "2rem" }}>3</button>
                                        <p className="text-primary fs-lg-6 fs-7 text-nowrap">購物完成</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center d-flex flex-column justify-content-around my-8">
                        <div className="mb-5">
                            <span className="material-symbols-outlined text-primary mb-5" style={{ fontSize: '86px' }}>check_circle</span>
                            <h2 className="mb-2">感謝您的購買!</h2>
                            <h3 className="text-dark">訂單編號：{orderId[0]?.create_at}</h3>
                        </div>
                        {/* <!-- 總額 --> */}
                        <div className="mb-3 mt-lg-5 mt-0 py-4">
                            <div className="d-flex justify-content-center justify-content-lg-center">
                                <Link className="btn btn-L py-2 px-6 fs-6 ms-2 ms-lg-5 py-lg-3 px-lg-7 fs-lg-4 me-lg-5 me-3" to='/products'>繼續購物</Link>
                                <Link className="btn btn-L py-2 px-6 fs-6 me-2 me-lg-5 py-lg-3 px-lg-7 fs-lg-4" to='/member'>查看訂單</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="images/Illustration/Top-Curve.png" alt="banner" className="promotion-curve" />
        <Toast />
    </>
    )
}

export default PlaceOrder;