import { NavLink, useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../redux/slice/toastSlice';


const baseUrl = import.meta.env.VITE_BASE_URL;

function AdminSidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await axios.post(`${baseUrl}/v2/logout`);
            navigate("/adminlogin");
            dispatch(createAsyncMessage({
                text: "登出成功",
                type: '登出管理中心',
                status: "success"
            }));
        } catch (error) {
            console.log(error)
            alert("登出失敗");
        }
    };

    const handleNavClick = (path) => {
        // 1. 先關閉 Offcanvas
        const offcanvasElement = document.getElementById("offcanvasNavbar");
        if (offcanvasElement) {
            const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
            bsOffcanvas.hide();
        }
        // 2. 再導航到對應頁面
        navigate(path);
    };

    return (<>
        {/* 電腦版 */}
        <div className="sidebar  d-none d-lg-block d-flex flex-column justify-content-center ">
            <div className="bg-white rounded-4 px-3 py-5 fw-bold">
                <NavLink
                    to="/admin/adminMember"
                    className="adminNavLink"
                >會員管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminProductPage"
                    className="adminNavLink"
                >商品管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminOrders"
                    className="adminNavLink"
                >訂單管理</NavLink>               
                <hr />
                <NavLink
                    to="/admin/adminStory"
                    className="adminNavLink"
                >文章管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminCoupons"
                    className="adminNavLink"
                >優惠券管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminStatistics"
                    className="adminNavLink"
                >統計圖表</NavLink>
            </div>
            <div>
                <NavLink className="d-grid gap-2 mt-5">
                    <button
                        onClick={handleLogout}
                        className="btn btn-outline-primary fw-bold rounded-3 d-grid gap-1"
                    >登出</button>
                </NavLink>
            </div>
        </div>
        {/* 手機版 */}
        <div className="sidebar d-lg-none d-flex flex-column justify-content-center align-items-stretch">
            <div className="bg-white rounded-4 px-3 py-5 fw-bold d-flex flex-column justify-content-center align-items-stretch">
                <NavLink
                    to="/admin/adminMember"
                    className="adminNavLink d-flex justify-content-center"
                    onClick={(e) => handleNavClick(e, "/admin/adminMember")}
                >會員管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminProductPage"
                    className="adminNavLink d-flex justify-content-center"
                    onClick={(e) => handleNavClick(e, "/admin/adminProductPage")}
                >商品管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminOrders"
                    className="adminNavLink d-flex justify-content-center"
                    onClick={(e) => handleNavClick(e, "/admin/adminOrders")}
                >訂單管理</NavLink>                
                <hr />
                <NavLink
                    to="/admin/adminStory"
                    className="adminNavLink d-flex justify-content-center"
                    onClick={(e) => handleNavClick(e, "/admin/adminStory")}
                >文章管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminCoupons"
                    className="adminNavLink d-flex justify-content-center"
                    onClick={(e) => handleNavClick(e, "/admin/adminCoupons")}
                >優惠券管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminStatistics"
                    className="adminNavLink d-flex justify-content-center"
                    onClick={(e) => handleNavClick(e, "/admin/adminStatistics")}
                >統計圖表</NavLink>
            </div>
            <div>
                <NavLink className="mt-5 d-flex  flex-column  align-items-center">
                    <span className="material-symbols-outlined  text-primary">manage_accounts</span>
                    <h5>Hi,管理者</h5>
                    <span className="text-primary mb-3"><small>管理中心</small></span>
                    <button
                        onClick={handleLogout}
                        className="  btn btn-outline-primary fw-bold rounded-3 px-8 py-2"
                    >登出</button>
                </NavLink>
            </div>
        </div>
    </>
    )
}

export default AdminSidebar;