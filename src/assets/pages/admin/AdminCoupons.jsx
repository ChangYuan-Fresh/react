import { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios'
import PaginationCompo from '../../component/PaginationCompo';
import CouponModal from '../../component/CouponModal';
import DeleteCouponModal from '../../component/DeleteCouponModal';
import Toast from "../../layout/Toast";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import IsScreenLoading from '../../component/IsScreenLoading';
import { createAsyncMessage } from '../../redux/slice/toastSlice';

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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isScreenLoading, setIsScreenLoading] = useState(false);


    const checkLogin = useCallback(async () => {
        try {
            await axios.post(`${baseUrl}/v2/api/user/check`)
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '請登入管理員帳號',
                status: "failed"
            }))
            navigate('/adminlogin')
        }
    }, [navigate, dispatch]);
    
    useEffect(() => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            checkLogin()
        };
    }, [checkLogin]);


    const getCouponList = useCallback(async (page = 1) => {
        setIsScreenLoading(true)
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/coupons?page=${page}`);
            setCoupons(res.data.coupons);
            getPageInfo(res.data.pagination)
            dispatch(createAsyncMessage({
                text: '取得優惠卷資料成功',
                type: '成功',
                status: "success"
            }))
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '取得優惠卷資料失敗',
                status: "failed"
            }))
            navigate('/adminlogin')
        } finally {
            setIsScreenLoading(false)
        }
    }, [navigate, dispatch]);

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
        getCouponList();
    }, [getCouponList]);

    return (
        <>
            <div className="container  rounded-3 py-5" >
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between mb-6">
                            <h3>優惠券管理</h3>
                            <button type="button" className="btn btn-primary py-1 text-white f-6" onClick={() => openModal('create')}>
                                <i className="bi bi-plus-circle me-1"></i>
                                新增優惠券
                            </button>
                        </div>
                        <div className='bg-white  rounded-3'>
                            {/* 電腦版 */}
                            <table className="table d-none d-sm-table rounded-3">
                                <thead>
                                    <tr>
                                        <th scope="col" className="bg-secondary-200 text-gray text-nowrap fs-7">優惠券名稱</th>
                                        <th scope="col" className="bg-secondary-200 text-gray fs-7">折扣碼</th>
                                        <th scope="col" className="bg-secondary-200 text-gray text-center fs-7">折扣</th>
                                        <th scope="col" className="bg-secondary-200 text-gray text-center fs-7">到期日</th>
                                        <th scope="col" className="bg-secondary-200 text-gray text-center fs-7"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coupons.map((coupon) => {
                                        return (
                                            <tr key={coupon.id}>
                                                <td scope="row" className='text-nowrap' >{coupon.title}</td>
                                                <td>
                                                    <div className='text-primary d-flex'>
                                                        {coupon.code}
                                                        <p id={coupon.id} className="px-1">{!coupon.is_enabled && <span className="bg-secondary text-primary rounded-2 p-1 fw-normal"><small>未上架</small></span>}</p >
                                                    </div>
                                                </td>
                                                <td className='text-center text-accent text-nowrap'>{coupon.percent}折</td>
                                                <td className='text-center text-gray fw-normal'>{new Date(coupon.due_date).toLocaleDateString()}</td>
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
                            {/* 手機版 */}
                            <table className="table table-bordered d-sm-none">
                                <tbody>
                                    {coupons.map((coupon) => {
                                        return (
                                            <tr key={coupon.id}>
                                                <div className='d-flex justify-content-between align-items-center my-0'>
                                                    <td scope="row" className='fs-5'><i className="bi bi-coin pe-1"></i>{coupon.title}</td>
                                                    <td>
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openModal('edit', coupon)}>編輯</button>
                                                            <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openDelModal(coupon)}>刪除</button>
                                                        </div>
                                                    </td>
                                                </div>
                                                <div className='d-flex flex-column align-items-start'>
                                                    <td>
                                                        <div className='text-primary d-flex'>
                                                            {coupon.code}
                                                            <p id={coupon.id} className="px-1">{!coupon.is_enabled && <span className="bg-secondary text-primary rounded-2 p-1 fw-normal"><small>未上架</small></span>}</p >
                                                        </div>
                                                    </td>
                                                    <td className='text-center text-accent'>折扣 {coupon.percent}折</td>
                                                    <td className='text-center text-gray fw-normal'>到期日 {new Date(coupon.due_date).toLocaleDateString()}</td>

                                                </div>
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

            <IsScreenLoading isScreenLoading={isScreenLoading} />
        </>
    )
}

export default AdminCoupons;