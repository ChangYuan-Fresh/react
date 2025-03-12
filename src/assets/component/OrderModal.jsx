import { useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../redux/slice/toastSlice';
import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;


const FormatDate = (timestamp) => {
    return new Intl.DateTimeFormat('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(new Date(timestamp * 1000));
};


function OrderModal({ modelRef, setTempOrder, tempOrder, getOrderList }) {
    const orderlRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        modelRef.current = new Modal(orderlRef.current, {
            backdrop: false
        })
    }, [])

    const closeModal = () => {
        modelRef.current.hide()
    }

    const getinputValue = (e) => {
        const { checked, value, name } = e.target;
        if (name === 'is_enabled') {
            // 如果是處理 is_paid 的變更
            setTempOrder({
                ...tempOrder,
                is_paid: checked,
            });
        } else if (name === "orderStatus") {
            // 處理訂單狀態變更
            setTempOrder({
                ...tempOrder,
                orderStatus: value,
            });
        }else if (name === "shipping") {
            // 處理訂單狀態變更
            setTempOrder({
                ...tempOrder,
                shipping: value,
            });
        }
    }

    const btnUpdateOrder = async () => {
        try {
            const res = await axios.put(`${baseUrl}/v2/api/${apiPath}/admin/order/${tempOrder.id}`, {
                data: {
                    ...tempOrder,
                    is_paid: tempOrder.is_paid,
                    user: {
                        ...tempOrder.user,
                        shipping: tempOrder.user.shipping,
                        orderStatus: tempOrder.user.orderStatus
                    },
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
        <div className="modal" tabIndex="-1" ref={orderlRef} id="orderModal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">訂單資訊</h5>
                        <button type="button" className="btn-close me-1" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body row g-5 mt-5 px-5">
                        <ul className="row list-unstyled">
                            <li className="col-lg-4 mb-3">
                                <label htmlFor="title" className="form-label">訂單編號</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="id"
                                    name="title"
                                    disabled
                                    value={tempOrder.create_at} />
                            </li>
                            <li className="col-lg-4 mb-3">
                                <label htmlFor="create_at" className="form-label">訂購時間</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="create_at"
                                    name="create_at"
                                    disabled
                                    value={tempOrder.create_at ? FormatDate(tempOrder.create_at) : ''} />
                            </li>
                            <li className="col-lg-4 mb-3">
                                <label htmlFor="name" className="form-label">訂單姓名</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    disabled
                                    value={tempOrder.user?.name} />
                            </li>
                            <li className="col-lg-6 mb-3">
                                <label htmlFor="tel" className="form-label">訂單電話</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="tel"
                                    name="tel"
                                    disabled
                                    value={tempOrder.user?.tel} />
                            </li>
                            <li className="col-lg-6 mb-3">
                                <label htmlFor="email" className="form-label">訂單E-mail</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    disabled
                                    value={tempOrder.user?.email} />
                            </li>
                            <li className="col-12 mb-3">
                                <label htmlFor="email" className="form-label">訂單住址</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    disabled
                                    value={`${tempOrder.user?.city ?? ''}${tempOrder.user?.district ?? ''}${tempOrder.user?.address ?? ''}`} /></li>
                            <li className="col-12 mb-3">
                                <label htmlFor="message" className="form-label">訂單留言</label>
                                <input
                                    type="message"
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    value={tempOrder.message} />
                            </li>
                            <li className="col-12 mt-5 bg-secondary-200 rounded-3">
                                <table className="table bg-secondary-200 mt-5 table-borderless table-responsive">
                                    <thead className="border-bottom">
                                        <tr>
                                            <th width="25%" className="bg-secondary-200">品名</th>
                                            <th width="15%" className="bg-secondary-200">單價</th>
                                            <th width="10%" className="bg-secondary-200">數量</th>
                                            <th width="25%" className="bg-secondary-200">折扣碼</th>
                                            <th width="20%" className="bg-secondary-200 text-end">總價</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tempOrder.products && Object.values(tempOrder.
                                            products).map((item) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <th className="bg-secondary-200 py-3">{item.product.title}</th>
                                                        <td className="bg-secondary-200 py-3">NT${item.product.price}</td>
                                                        <td className="bg-secondary-200 py-3">{item.qty}</td>
                                                        <td className="bg-secondary-200 py-3">{item.coupon?.code || '無優惠碼'}</td>
                                                        <td className="bg-secondary-200 text-end py-3">NT${item.total}</td>
                                                    </tr>)
                                            })}
                                    </tbody>
                                    <tfoot className="border-top">
                                        <tr>
                                            <td className="bg-secondary-200"></td>
                                            <td className="bg-secondary-200"></td>
                                            <td className="bg-secondary-200"></td>
                                            <td className="bg-secondary-200 d-lg-flex align-items-center mt-3 d-none">
                                                <label htmlFor="shipping" className="form-label text-nowrap me-2 mb-0">運費</label>
                                                <input
                                                    type="text"
                                                    className="form-control py-2 w-50"
                                                    id="shipping"
                                                    name="shipping"
                                                    value={tempOrder.user?.shipping}
                                                    onChange={getinputValue} />
                                            </td>
                                            <td className="bg-secondary-200">
                                                <div className="text-nowrap d-lg-flex justify-content-end mt-3 d-none">總計
                                                    <span className="bg-secondary-200 ms-2">NT${Math.floor(tempOrder.total) + (isNaN(Number(tempOrder.user?.shipping)) ? 0 : Number(tempOrder.user?.shipping))}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </li>
                            <li className="col-lg-6 form-check ms-auto mt-5 px-0">
                                <div className='d-flex mb-3 d-lg-none'>
                                    <div className='d-flex align-items-center'>
                                        <label htmlFor="shipping" className="form-label text-nowrap me-2 mb-0">運費</label>
                                        <input
                                            type="text"
                                            className="form-control py-2 w-50"
                                            id="shipping"
                                            name="shipping"
                                            value={tempOrder.user?.shipping}
                                            onChange={getinputValue} />
                                    </div>
                                    <div className="text-nowrap d-flex justify-content-end mt-3">總計
                                        <span className="ms-2">NT${Math.floor(tempOrder.total) + (isNaN(Number(tempOrder.user?.shipping)) ? 0 : Number(tempOrder.user?.shipping))}</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="orderStatus" className="form-label text-nowrap me-2 mb-0">訂單狀態</label>
                                        <select id="orderStatus"
                                            className="form-select"
                                            name="orderStatus"
                                            value={tempOrder.user?.orderStatus}
                                            onChange={getinputValue}
                                            disabled={!tempOrder.is_paid}>
                                            <option value="待出貨">待出貨</option>
                                            <option value="已出貨">已出貨</option>
                                            <option value="已完成">已完成</option>
                                            <option value="取消/退貨">取消/退貨</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            className="form-check-input ms-6 me-2"
                                            type="checkbox" id="isEnabled"
                                            name="is_enabled"
                                            checked={tempOrder.is_paid}
                                            onChange={getinputValue} />
                                        <label className="form-check-label text-nowrap" htmlFor="isEnabled">
                                            是否付款
                                        </label>
                                    </div>
                                </div>
                                <p className="text-accent">*未付款不可更改出貨狀態</p>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-footer">

                        <button type="button" className="btn btn-secondary px-6" onClick={closeModal}>取消</button>
                        <button type="button" className="btn btn-primary px-6 text-white" onClick={btnUpdateOrder}>確認</button>
                    </div>
                </div>
            </div>
        </div>)
}

export default OrderModal