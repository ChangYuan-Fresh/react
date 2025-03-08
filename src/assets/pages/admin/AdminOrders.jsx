import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router';
import IsScreenLoading from '../../component/IsScreenLoading';
import PaginationCompo from '../../component/PaginationCompo'
import Toast from "../../layout/Toast";
import OrderModal from '../../component/OrderModal';
import FormatDate from '../../component/formatDate';

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
    const orderState = ['全部', '已付款', '未付款', '已出貨', '已完成', '取消/退貨']


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
        else if (selectState === '已付款') return order.is_paid === true;
        else if (selectState === '未付款') return order.is_paid === false;

        return false
    })


    const btnChangePage = (page) => {
        getOrderList(page);
    }
    return (<>
        <div className="container  rounded-3 py-5" >
            <div className="d-flex justify-content-between mb-6">
                <h3>訂單管理</h3>
            </div>
            <div>
                <ul className="nav nav-tabs border-0 d-flex justify-content-between bg-white border-bottom">
                    {orderState.map((state) => {
                        return (
                            <li className="nav-item" key={state}>
                                <button className={`nav-link px-8 bg-white border-0 border-3 py-4 border-bottom ${selectState === state ? 'border-primary text-primary' : ' border-transparent text-dark'}`} type="button" onClick={() => setSelectState(state)}>{state}</button>
                            </li>)
                    })}
                </ul>
                <div className="tab-content px-5 bg-white">
                    <div className="tab-pane fade show active">
                        <div className='rounded-3'>
                            <div className="input-group mb-3 w-50 pt-5">
                                <select className="form-select" style={{ maxWidth: '120px' }} value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                                    <option value="訂單編號">訂單編號</option>
                                    <option value="訂購帳戶">訂購帳戶</option>
                                </select>
                                <input type="text" className="form-control" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                                <button type="button" className="btn border border-top border-bottom border-end" onClick={handleSearch}>
                                    <span className="material-symbols-outlined px-2 my-auto align-middle">search</span>
                                </button>
                            </div>
                            <div className="mt-6 text-muted">共{filterOrders.length}筆訂單</div>
                            <table className="table mt-4 en-font">
                                <thead>
                                    <tr>
                                        <th scope="col" className="bg-secondary-200 text-muted p-3">訂單編號</th>
                                        <th scope="col" className="bg-secondary-200 text-muted p-3">訂購時間</th>
                                        <th scope="col" className="bg-secondary-200 text-muted p-3">訂購帳戶</th>
                                        <th scope="col" className="bg-secondary-200 text-muted p-3">訂單金額</th>
                                        <th scope="col" className="bg-secondary-200 text-muted p-3">訂單狀態</th>
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
                                            return (
                                                <tr key={order.id} className="align-middle en-font">
                                                    <th scope="row">
                                                        <button type="button" className="btn text-accent" onClick={() => openModal(order)}>{order.create_at}
                                                        </button>
                                                    </th>
                                                    <td><FormatDate timestamp={order.create_at} /></td>
                                                    <td>{order.user?.name}</td>
                                                    <td>NT${Math.floor(order.total).toLocaleString()}</td>
                                                    <td className={`${order.is_paid ? 'text-primary' : 'text-accent'}`}>{order.is_paid ? '已付款' : '未付款'}</td>
                                                </tr>
                                            )
                                        }))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PaginationCompo pageInfo={pageInfo} btnChangePage={btnChangePage} />
        <OrderModal modelRef={modelRef} setTempOrder={setTempOrder} tempOrder={tempOrder} getOrderList={getOrderList} />
        <IsScreenLoading isScreenLoading={isScreenLoading} />
        <Toast />
    </>
    )
}

export default AdminOrders;