import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Modal } from 'bootstrap';
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../redux/slice/toastSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function CouponModal({ modalMode, tempCoupon, getCouponList, setTempCoupon, modelRef }) {
    const couponRef = useRef(null);
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date()); //轉換日期

    //新增優惠券
    const createNewCoupon = async () => {
        try {
            const res = await axios.post(`${baseUrl}/v2/api/${apiPath}/admin/coupon`, {
                data: {
                    ...tempCoupon,
                    percent: Number(tempCoupon.percent),
                    due_date: date.getTime(),
                    is_enabled: tempCoupon.is_enabled ? 1 : 0
                }
            });
            setDate(new Date());
            dispatch(createAsyncMessage({
                text: res.data.message,
                type: '新增優惠券成功',
                status: "success"
            }));
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message.join("、"),
                type: '新增優惠券失敗',
                status: "failed"
            }));
        }
    }
    //更新優惠券
    const updateCoupon = async () => {
        try {
            const res = await axios.put(`${baseUrl}/v2/api/${apiPath}/admin/coupon/${tempCoupon.id}`, {
                data: {
                    ...tempCoupon,
                    percent: Number(tempCoupon.percent),
                    due_date: date.getTime(),
                    is_enabled: tempCoupon.is_enabled ? 1 : 0
                }
            });
            setDate(new Date(tempCoupon.due_date));
            dispatch(creatAsyncMessage({
                text: res.data.message,
                type: '更新優惠券成功',
                status: "success"
            }))
        } catch (error) {
            const { message } = error.response.data;
            dispatch(creatAsyncMessage({
                text: message.join("、"),
                type: '更新優惠失敗',
                status: "failed"
            }))
        }
    }
    //新增或更新優惠
    const btnUpdateCoupon = async () => {
        try {
            const apiswitch = modalMode === 'create' ? createNewCoupon : updateCoupon;
            await apiswitch();
            getCouponList();
            closeModal()
        } catch (error) {
            const { message } = error.response.data;
            dispatch(creatAsyncMessage({
                text: message.join("、"),
                type: '失敗',
                status: "failed"
            }))
        } finally {
            closeModal()
        }

    }

    //表單控制
    const getinputValue = (e) => {
        const { value, name, checked, type } = e.target;
        setTempCoupon({
            ...tempCoupon,
            [name]: type === "checkbox" ? checked : value
        })
    }

    //modal控制
    const closeModal = () => {
        modelRef.current.hide()
    }
    useEffect(() => {
        modelRef.current = new Modal(couponRef.current, {
            backdrop: false
        })
    }, [])
    return (
        <div className="modal" tabIndex="-1" ref={couponRef} id="couponModal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-black">{modalMode === 'create' ? '新增優惠券' : '編輯優惠券'}</h5>
                        <button type="button" className="btn-close me-1" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row g-4 mb-3">
                            <div className="col-12">
                                <div className="border rounded-3 p-5 mb-3">
                                    <div className="row g-4">
                                        <div className="col-6">
                                            <label htmlFor="title" className="form-label">標題</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                placeholder="請輸入標題"
                                                name="title"
                                                value={tempCoupon.title}
                                                onChange={getinputValue} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="code" className="form-label">折扣碼</label>
                                            <input
                                                type="code"
                                                className="form-control"
                                                id="code"
                                                placeholder="請輸入折扣碼"
                                                name="code"
                                                value={tempCoupon.code}
                                                onChange={getinputValue} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="percent" className="form-label">折扣數</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="percent"
                                                placeholder="請輸入折扣%數"
                                                name="percent"
                                                value={tempCoupon.percent}
                                                onChange={getinputValue} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="due_date" className="form-label">到期日</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="due_date"
                                                placeholder="請輸入到期日"
                                                name="due_date"
                                                value={`${date.getFullYear().toString()}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`}
                                                onChange={(e) => {
                                                    setDate(new Date(e.target.value))
                                                }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox" id="isEnabled"
                                name="is_enabled"
                                checked={tempCoupon.is_enabled}
                                onChange={getinputValue} />
                            <label className="form-check-label" htmlFor="isEnabled">
                                是否啟用
                            </label>
                        </div>
                    </div>
                    <div className="modal-footer bg-secondary-200">
                        <button type="button" className="btn btn-outline-primary px-6" onClick={closeModal}>取消</button>
                        <button type="button" className="btn btn-primary px-6 text-white" onClick={btnUpdateCoupon}>確認</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CouponModal