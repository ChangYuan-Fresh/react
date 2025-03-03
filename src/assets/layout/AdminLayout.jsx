import { NavLink, Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import { useEffect } from "react";
import axios from 'axios';
import Toast from "./Toast";

const baseUrl = import.meta.env.VITE_BASE_URL;


function AdminLayout() {
    const navigate = useNavigate();
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

    return (
        <>
            <AdminNavbar />
            <div className="bg-light">
                <div className="container pt-6 d-none d-lg-block">
                    <div className="row">
                        <div className="col-3">
                            <AdminSidebar />
                        </div>
                        <div className="col-9">
                            <Outlet />
                        </div>
                    </div>
                </div>
                <div className="container pt-6 d-lg-none">
                    <Outlet />
                </div>
            </div>
            <Toast />
        </>
    )
}
export default AdminLayout;