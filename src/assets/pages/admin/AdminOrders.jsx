import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router';
import { Modal } from 'bootstrap';
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../../redux/slice/toastSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [tempOrder, setTempOrder] = useState({});
    const modelRef = useRef(null);
    const orderlRef = useRef(null);
    const dispatch = useDispatch();

    const checkLogin = async () => {
        try {
            await axios.post(`${baseUrl}/v2/api/user/check`)
        } catch (error) {
            alert("請登入管理員帳號")
            navigate('/adminlogin')
        }
    }
    useEffect(() => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            checkLogin()
        }
    }, [])

    const getOrderList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/orders`);
            setOrders(res.data.orders)

        } catch (error) {
            alert("取得訂單資料失敗" || error.response)
        }
    }

    useEffect(() => {
        getOrderList()
    }, [])

    const openModal = (order) => {
        setTempOrder(order);
        modelRef.current.show()
    }

    const closeModal = () => {
        modelRef.current.hide()
    }

    useEffect(() => {
        modelRef.current = new Modal(orderlRef.current, {
            backdrop: false
        })
    }, [])

    const getinputValue = (e) => {
        const { checked } = e.target;
        setTempOrder({
            ...tempOrder,
            is_paid: checked
        })
    }

    const btnUpdateOrder = async () => {
        try {
            await axios.put(`${baseUrl}/v2/api/${apiPath}/admin/order/${tempOrder.id}`, {
                data: {
                    ...tempOrder,
                    is_paid: tempOrder.is_paid
                }
            });
            getOrderList();
            closeModal()
            dispatch(createAsyncMessage({
                text: res.data.message,
                type: '更新訂單成功',
                status: "success"
            }))
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message.join("、"),
                type: '更新訂單失敗',
                status: "failed"
            }))
        }
    }
    return (
        <div className="container  rounded-3 py-5" >
            <div className="d-flex justify-content-between mb-6">
                <h3>訂單管理</h3>
            </div>
            <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">全部</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">未付款</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">待出貨</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">已出貨</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">已完成</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">取消/退貨</button>
                    </li>
                </ul>
                <div className="tab-content px-5 bg-white" id="myTabContent">
                    <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                        <div className='rounded-3'>
                            <div className="input-group mb-3 w-50 pt-5">
                                <select className="form-select" style={{ maxWidth: '120px' }} defaultValue="訂單編號">
                                    <option value="訂單編號">訂單編號</option>
                                    <option value="訂購時間">訂購時間</option>
                                </select>
                                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                <button type="button" className="btn border border-top border-bottom border-end ">
                                    <span className="material-symbols-outlined px-2 my-auto align-middle">search</span>
                                </button>
                            </div>
                            <div className="mt-6 text-muted">共{orders.length}筆訂單</div>
                            <table className="table mt-4">
                                <thead>
                                    <tr>
                                        <th scope="col">訂單編號</th>
                                        <th scope="col">訂購時間</th>
                                        <th scope="col">訂購帳戶</th>
                                        <th scope="col">訂單金額</th>
                                        <th scope="col">訂單狀態</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => {
                                        return (
                                            <tr key={order.id}>
                                                <th scope="row">
                                                    <button type="button" className="btn text-accent" onClick={() => openModal(order)}>{order.create_at}
                                                    </button>
                                                </th>
                                                <td>{new Date(order.create_at * 1000).toLocaleDateString()}</td>
                                                <td>{order.user?.name}</td>
                                                <td>NT${order.total?.toLocaleString()}</td>
                                                <td className={`${order.is_paid ?'text-primary':'text-accent'}`}>{order.is_paid ? '已付款' : '未付款'}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal" tabIndex="-1" ref={orderlRef} id="couponModal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">訂單資訊</h5>
                            <button type="button" className="btn-close me-1" onClick={closeModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body row g-5 mt-5 px-5">
                            <ul className="row list-unstyled">
                                <li className="col-6 mb-3">訂單編號： {tempOrder.create_at}</li>
                                <li className="col-6 mb-3">訂購日期： {tempOrder.create_at ? new Date(tempOrder.create_at * 1000).toLocaleDateString() : ''}</li>
                                <li className="col-6 mb-3">訂單姓名： {tempOrder.user?.name}</li>
                                <li className="col-6 mb-3">訂單電話： {tempOrder.user?.tel}</li>
                                <li className="col-12 mb-3">訂單E-mail： {tempOrder.user?.email}</li>
                                <li className="col-12 mb-3">訂單住址： {tempOrder.user?.city}{tempOrder.user?.address}</li>
                                <li className="col-12 mt-5 bg-secondary-200 rounded-3">
                                    <table className="table bg-secondary-200 mt-5 table-borderless">
                                        <thead>
                                            <tr>
                                                <th width="30%" className="bg-secondary-200">品名</th>
                                                <th width="20%" className="bg-secondary-200">單價</th>
                                                <th width="15%" className="bg-secondary-200">數量</th>
                                                <th width="15%" className="bg-secondary-200">折扣碼</th>
                                                <th width="20%" className="bg-secondary-200 text-end">總價</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tempOrder.products && Object.values(tempOrder.
                                                products).map((item) => {
                                                    return (
                                                        <tr key={item.id}>
                                                            <th className="bg-secondary-200">{item.product.title}</th>
                                                            <td className="bg-secondary-200">NT${item.product.price}</td>
                                                            <td className="bg-secondary-200">{item.qty}</td>
                                                            <td className="bg-secondary-200">{item.coupon?.code || '無優惠碼'}</td>
                                                            <td className="bg-secondary-200 text-end">NT${item.total}</td>
                                                        </tr>)
                                                })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="5" className="bg-secondary-200 text-end">
                                                    總計：
                                                    <span className="bg-secondary-200">NT${tempOrder.total}</span>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </li>
                                <li className="col-2 form-check ms-auto mt-5">
                                    <input
                                        className="form-check-input"
                                        type="checkbox" id="isEnabled"
                                        name="is_enabled"
                                        checked={tempOrder.is_paid}
                                        onChange={getinputValue} />
                                    <label className="form-check-label" htmlFor="isEnabled">
                                        是否付款
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary px-6" onClick={closeModal}>取消</button>
                            <button type="button" className="btn btn-primary px-6 text-white" onClick={btnUpdateOrder}>確認</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrders;