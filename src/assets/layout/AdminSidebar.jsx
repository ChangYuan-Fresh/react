import { NavLink, useNavigate } from "react-router";
import axios from "axios";



const baseUrl = import.meta.env.VITE_BASE_URL;

function AdminSidebar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post(`${baseUrl}/v2/logout`);
            navigate("/adminlogin")
        } catch (error) {
            console.log(error)
            alert("登出失敗");
        }
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
                    to="/admin/adminStory"
                    className="adminNavLink"
                >文章管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminOrders"
                    className="adminNavLink"
                >訂單管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminCoupons"
                    className="adminNavLink"
                >優惠券管理</NavLink>
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
                >會員管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminProductPage"
                    className="adminNavLink d-flex justify-content-center"
                >商品管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminStory"
                    className="adminNavLink d-flex justify-content-center"
                >文章管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminOrders"
                    className="adminNavLink d-flex justify-content-center"
                >訂單管理</NavLink>
                <hr />
                <NavLink
                    to="/admin/adminCoupons"
                    className="adminNavLink d-flex justify-content-center"
                >優惠券管理</NavLink>
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