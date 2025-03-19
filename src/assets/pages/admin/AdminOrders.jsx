import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import IsScreenLoading from '../../component/IsScreenLoading';
import PaginationCompo from '../../component/PaginationCompo'
import Toast from "../../layout/Toast";
import OrderModal from '../../component/OrderModal';
import FormatDate from '../../component/formatDate';
import 'swiper/css';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [tempOrder, setTempOrder] = useState({});
    const modelRef = useRef(null);
    const [isScreenLoading, setIsScreenLoading] = useState(false)
    const [selectState, setSelectState] = useState('全部')
    const [searchInput, setSearchInput] = useState('')
    const [search, setSearch] = useState('');
    const [pageInfo, getPageInfo] = useState({});
    const [searchType, setSearchType] = useState('訂單編號')


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

    const getOrderList = async (page = 1) => {
        setIsScreenLoading(true)
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/orders?page=${page}`);
            setOrders(res.data.orders)
            getPageInfo(res.data.pagination)
        } catch (error) {
            alert("取得訂單資料失敗" || error.response)
        } finally {
            setIsScreenLoading(false)
        }
    }

    useEffect(() => {
        getOrderList()
    }, [])

    const openModal = (order) => {
        setTempOrder(order);
        modelRef.current.show()
    }

    const handleSearch = () => {
        setSearch(searchInput)
    }
    const orderState = ['全部', '未付款', '待出貨', '已出貨', '已完成', '取消/退貨']


    const filterOrders = orders.filter((order) => {
        let matchSearch = true;// 預設為 true，這樣當 search 為空時，不會影響篩選

        // 當有輸入搜尋條件時，才進行比對
        if (search) {
            if (searchType === '訂單編號') {
                matchSearch = order.create_at?.toString().includes(search);
            } else if (searchType === '訂購帳戶') {
                matchSearch = order.user?.name?.includes(search);
            }
        }

        if (!matchSearch) return false;// 如果搜尋條件沒有匹配，則直接排除該筆資料

        // 繼續篩選付款狀態
        if (selectState === '全部') return true;
        else if (selectState === '未付款') return order.is_paid === false;
        else if (selectState === '待出貨') return order.is_paid === true && order.orderStatus !== '已出貨' && order.orderStatus !== '已完成' && order.orderStatus !== '取消/退貨';
        else if (selectState === '已出貨') return order.orderStatus === '已出貨';
        else if (selectState === '已完成') return order.orderStatus === '已完成';
        else if (selectState === '取消/退貨') return order.orderStatus === '取消/退貨';

        return false
    })


    const btnChangePage = (page) => {
        getOrderList(page);
    }

    const removeOrderItem = async (id) => {
        setIsScreenLoading(true)
        try {
            await axios.delete(`${baseUrl}/v2/api/${apiPath}/admin/order/${id}`)
            getOrderList()
        } catch (error) {
            alert('刪除訂單失敗' || error.data.message)
        } finally {
            setIsScreenLoading(false)
        }
    }

    return (<>
        <div className="container px-0">
            <h3 className="d-lg-none mb-5">訂單管理</h3>
            <Swiper
                slidesPerView={4.5}
                className="nav d-lg-none text-nowrap"
                role="tablist">
                {orderState.map((state) => {
                    return (
                        <SwiperSlide className={`nav-item  border-bottom ${selectState === state ? 'border-primary border-3' : 'border-gray-200'}`}>
                            <button className="nav-link px-3  border-0 py-3 w-100 text-center" type="button" onClick={() => setSelectState(state)}>
                                {state}
                            </button>
                        </SwiperSlide>)
                })}
            </Swiper>
        </div>
        <div className=" d-lg-flex justify-content-start d-none mb-lg-6 mb-4">
            <h3 className="d-none d-lg-block">訂單管理</h3>
        </div>
        <div className="container  rounded-3 py-lg-5 py-3 " >
            <div>
                <ul className="nav nav-tabs border-0 d-lg-flex flex-nowrap justify-content-between bg-white border-bottom d-none px-4">
                    {orderState.map((state) => {
                        return (
                            <li className="nav-item" key={state}>
                                <button className={`nav-link bg-white border-0 py-4 text-custom ${selectState === state ? 'border-bottom border-3 border-primary text-primary' : ' border-0 text-dark'}`} type="button" onClick={() => setSelectState(state)}>{state}</button>
                            </li>)
                    })}
                </ul>
                <div className="tab-content px-lg-5 px-0 bg-custom">
                    <div className="tab-pane fade show active">
                        {/* 電腦版搜尋列 */}
                        <div className="input-group mb-3 w-100 w-lg-50 pt-lg-5 pt-3 d-none d-lg-flex">
                                <select className="form-select py-lg-3 py-0 pe-lg-4 pe-2 " style={{ maxWidth: '120px' }} value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                                    <option value="訂單編號">訂單編號</option>
                                    <option value="訂購帳戶">訂購帳戶</option>
                                </select>
                                <input type="text" className="form-control" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                                <button type="button" className="btn border border-top border-bottom border-end" onClick={handleSearch}>
                                    <span className="material-symbols-outlined px-2 my-auto align-middle">search</span>
                                </button>
                            </div>
                            <div className="mt-lg-6 mt-3 text-muted d-none d-lg-block">共{filterOrders.length}筆訂單</div>
                            {/* 手機版搜尋列*/}
                            <div className="input-group mb-3 w-100 w-lg-50 pt-lg-5 pt-3 d-lg-none bg-light mb-0 pb-0">
                                <select className="form-select py-lg-3 py-0 pe-lg-4 pe-2 bg-light" style={{ maxWidth: '120px' }} value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                                    <option value="訂單編號">訂單編號</option>
                                    <option value="訂購帳戶">訂購帳戶</option>
                                </select>
                                <input type="text" className="form-control bg-light" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                                <button type="button" className="btn border border-top border-bottom border-end bg-light" onClick={handleSearch}>
                                    <span className="material-symbols-outlined px-2 my-auto align-middle bg-light">search</span>
                                </button>
                            </div>
                            <div className="mt-lg-6 mt-3 text-muted d-lg-none bg-light">共{filterOrders.length}筆訂單手</div>
                        <div className='rounded-3 '>                      
                        <table className="table mt-4 en-font  d-none d-lg-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="bg-secondary-200 text-muted p-3">訂單編號</th>
                                    <th scope="col" className="bg-secondary-200 text-muted p-3">訂購時間</th>
                                    <th scope="col" className="bg-secondary-200 text-muted p-3">訂購帳戶</th>
                                    <th scope="col" className="bg-secondary-200 text-muted p-3">訂單金額</th>
                                    <th scope="col" className="bg-secondary-200 text-muted p-3">訂單狀態</th>
                                    <th scope="col" className="bg-secondary-200 text-muted p-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterOrders.length === 0 ? (<tr>
                                    <th colSpan="6" className="text-center border-0">
                                        <img src="images/Illustration/Frame.png" alt="empty" className="mx-auto mt-11" />
                                        <h5 className="mt-6 text-dark">目前還沒有訂單</h5>
                                    </th>
                                </tr>) : (
                                    filterOrders.map((order) => {
                                        const shippingFee = isNaN(Number(order.user?.shipping)) ? 0 : Number(order.user?.shipping);
                                        const totalAmount = Math.floor((order.total ?? 0) + shippingFee);
                                        return (
                                            <tr key={order.id} className="align-middle en-font">
                                                <th scope="row">
                                                    <button type="button" className="btn text-accent" onClick={() => openModal(order)}>{order.create_at}
                                                    </button>
                                                </th>
                                                <td><FormatDate timestamp={order.create_at} /></td>
                                                <td>{order.user?.name}</td>
                                                <td>NT$<span className="ms-2">{totalAmount.toLocaleString()}</span></td>
                                                <td className={`px-3 ${order.is_paid ? 'text-primary' : 'text-accent'}`}>{order.is_paid ? (order.orderStatus || "待出貨") : '未付款'}</td>
                                                <td>
                                                    <button className="btn" onClick={() => removeOrderItem(order.id)}>
                                                        <span
                                                            className="material-symbols-outlined fs-5 text-primary">delete</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                {/* 手機板 */}
                {filterOrders.length === 0 ? (
                    <div className="text-center border-0 d-lg-none mb-5">
                        <img src="images/Illustration/Frame.png" alt="empty" className="mx-auto mt-7" />
                        <h5 className="mt-6 text-dark">目前還沒有訂單</h5>
                    </div>) : (
                    filterOrders.map((order) => {
                        const shippingFee = isNaN(Number(order.user?.shipping)) ? 0 : Number(order.user?.shipping);
                        const totalAmount = Math.floor((order.total ?? 0) + shippingFee);
                        return (<>
                            <div className="card border-0 bg-secondary-200 mt-3 d-lg-none" key={order.id} style={{ margin: "0px -24px" }}>
                                <div className="card-title d-flex justify-content-between align-items-center border-bottom">
                                    <button type="button" className="btn text-accent fs-5 ms-3" onClick={() => openModal(order)}>{order.create_at}
                                    </button>
                                    <div className={`px-3 ${order.is_paid ? 'text-primary' : 'text-accent'}`}>{order.is_paid ? (order.orderStatus || "待出貨") : '未付款'}</div>
                                </div>
                                <div className="card-body">
                                    <p className="mb-3"><small className="text-gray me-3">訂購時間</small><FormatDate timestamp={order.create_at} /></p>
                                    <p className="mb-3"><small className="text-gray me-3">訂購帳戶</small> {order.user?.name}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p><small className="text-gray me-3">訂單金額</small> NT$<span>{totalAmount.toLocaleString()}</span></p>
                                        <button className="btn border-0 py-0" onClick={() => removeOrderItem(order.id)}>
                                            <span
                                                className="material-symbols-outlined fs-5 text-primary">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    }))}
            </div>
            <div className="pt-5 pt-lg-0">
                <PaginationCompo pageInfo={pageInfo} btnChangePage={btnChangePage} />
            </div>
        </div>
        <OrderModal modelRef={modelRef} setTempOrder={setTempOrder} tempOrder={tempOrder} getOrderList={getOrderList} />
        <IsScreenLoading isScreenLoading={isScreenLoading} />
        <Toast />
    </>
    )
}

export default AdminOrders;