import { NavLink, useNavigate } from "react-router";
import axios from "axios";



const baseUrl = import.meta.env.VITE_BASE_URL;

function AdminSidebar() {
    const nevigate = useNavigate();

    const handleLogout = async () => { 
        try {
            await axios.post(`${baseUrl}/v2/logout`);
            nevigate("/adminlogin")
        } catch (error) {
            console.log(error)
            alert("登出失敗");
        }
    }; 
   
    return (<>
        <div className="sidebar d-flex flex-column justify-content-center ">
            <div className="bg-white rounded-4 px-3 py-5 fw-bold">
            <NavLink to="/admin/adminMember">會員管理</NavLink>
            <hr />
            <NavLink to="/admin/adminProductPage">商品管理</NavLink>
            <hr />
            <NavLink to="/admin/adminStory">文章管理</NavLink>
            <hr />
            <NavLink to="/admin/adminOrders">訂單管理</NavLink>
            <hr />
            <NavLink to="/admin/adminCoupons">優惠券管理</NavLink>
            </div>
            <div>
            <NavLink className="d-grid gap-2 mt-5">
                <button onClick={handleLogout} className="btn btn-outline-primary fw-bold rounded-3 d-grid gap-1">登出</button> 
            </NavLink>
            </div>
        </div>
    </>
    )
}

export default AdminSidebar;