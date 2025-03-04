import { useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../redux/slice/toastSlice';
import FormatDate from './formatDate';
import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;


function OrderModal({modelRef,setTempOrder,tempOrder,getOrderList}) {
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
            const { checked } = e.target;
            setTempOrder({
                ...tempOrder,
                is_paid: checked
            })
        }
    
        const btnUpdateOrder = async () => {
            try {
                const res = await axios.put(`${baseUrl}/v2/api/${apiPath}/admin/order/${tempOrder.id}`, {
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
    <div className="modal" tabIndex="-1" ref={orderlRef} id="orderModal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">訂單資訊</h5>
                    <button type="button" className="btn-close me-1" onClick={closeModal} aria-label="Close"></button>
                </div>
                <div className="modal-body row g-5 mt-5 px-5">
                    <ul className="row list-unstyled">
                        <li className="col-6 mb-3">訂單編號： {tempOrder.create_at}</li>
                        <li className="col-6 mb-3">訂購時間： {tempOrder.create_at ? <FormatDate timestamp={tempOrder.create_at}/> : ''}</li>
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
    </div>)
}

export default OrderModal