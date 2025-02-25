import { NavLink, Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSiderbar";
import AdminNavbar from "./AdminNavbar";


function AdminLayout() {
    return (
        <> 
           <AdminNavbar/>
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
        </>
    )
}
export default AdminLayout;