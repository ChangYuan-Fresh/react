import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import PaginationCompo from '../../component/PaginationCompo';
import CouponModal from '../../component/CouponModal';
import DeleteCouponModal from '../../component/DeleteCouponModal';
import Toast from "../../layout/Toast";
import { useNavigate } from 'react-router';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const defaultModalState = {
    title: "",
    is_enabled: 1,
    percent: "",
    due_date: "",
    code: ""
};
function AdminCoupons() {
    const [coupons, setCoupons] = useState([]);
    const [pageInfo, getPageInfo] = useState({});
    const [modalMode, setModalMode] = useState(null);
    const [tempCoupon, setTempCoupon] = useState(defaultModalState);
    const modelRef = useRef(null);
    const delModelRef = useRef(null);
    const navigate = useNavigate()

    
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


    const getCouponList = async (page = 1) => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/coupons?page=${page}`);
            setCoupons(res.data.coupons);
            getPageInfo(res.data.pagination)
        } catch (error) {
            alert("請登入管理員帳號" || res.data.message)
            navigate('/adminlogin')
        }
    }

    const btnChangePage = (page) => {
        getCouponList(page);
    }

    const openModal = (mode, coupon) => {
        setModalMode(mode);
        switch (mode) {
            case 'create':
                setTempCoupon(defaultModalState);
                
                break;
            case 'edit':
                setTempCoupon(coupon);
             
                break;
            default:
                break;
        }
        modelRef.current.show()
    }
    const openDelModal = (coupon) => {
        setTempCoupon(coupon);
        delModelRef.current.show()
    }
    useEffect(() => {
        getCouponList()
    }, [])
    return (
        <>
            <div className="container  rounded-3 py-5" >
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between mb-6">
                            <h3>優惠券管理</h3>
                            <button type="button" className="btn btn-primary py-1 text-white f-6" onClick={() => openModal('create')}>
                                <i class="bi bi-plus-circle me-1"></i>
                                新增優惠券
                            </button>
                        </div>
                        <div className='bg-white  rounded-3'>
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th scope="col">優惠券名稱</th>
                                        <th scope="col">折扣碼</th>
                                        <th scope="col">折扣</th>
                                        <th scope="col">到期日</th>
                                        <th scope="col">是否上架</th>
                                        <th scope="col">查看細節</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coupons.map((coupon) => {
                                        return (
                                            <tr key={coupon.id}>
                                                <th scope="row">{coupon.title}</th>
                                                <td>{coupon.code}</td>
                                                <td>{coupon.percent}</td>
                                                <td>{new Date(coupon.due_date).toLocaleDateString()}</td>
                                                <td><p id={coupon.id} className="text-decoration-none">{coupon.is_enabled ? (<span className="text-success">上架</span>) : (<span>下架</span>)}</p ></td>
                                                <td>
                                                    <div className="btn-group" role="group">
                                                        <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openModal('edit', coupon)}>編輯</button>
                                                        <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openDelModal(coupon)}>刪除</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <PaginationCompo pageInfo={pageInfo} btnChangePage={btnChangePage} />
                        </div>
                    </div>
                </div>
            </div>
            <CouponModal modalMode={modalMode} setTempCoupon={setTempCoupon} tempCoupon={tempCoupon} getCouponList={getCouponList} modelRef={modelRef} />

            <DeleteCouponModal tempCoupon={tempCoupon} getCouponList={getCouponList} delModelRef={delModelRef} />

            <Toast />
        </>
    )
}

export default AdminCoupons;