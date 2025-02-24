import { NavLink, Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSiderbar";

function AdminLayout() {
    return (
        <>
            <header className="navbar navbar-expand-lg p-0 bg-white">
                <div className="container-fluid py-4 px-3">
                    <NavLink className="navbar-brand" to='/'>
                        <img className="d-none d-lg-block" src="https://raw.githubusercontent.com/ChangYuan-Fresh/FirstProject/refs/heads/gh-pages/assets/LOGO-L-142eb0ee.png" alt="LOGO" />
                        <img className="d-lg-none" src="src/assets/images/LOGO-S.png" alt="LOGO" />
                    </NavLink>
                    <div>
                        <div className="navbar-nav ms-auto">
                            <div className=" d-flex justify-content-center align-items-center">
                                <NavLink className="nav-link text-center py-6 py-lg-0 px-lg-6 border-0" to='/admin'>
                                    <p className="fs-sm-6 fs-lg-5 fs-xl-4 text-nowrap">管理中心</p>
                                </NavLink>
                                <NavLink className="nav-link text-center p-0 border-0" to='/admin'>
                                    <span className="d-none d-lg-block material-symbols-outlined p-0 fs-2 me-3 text-primary">manage_accounts</span>
                                </NavLink>
                                <button className="mx-3 d-lg-none navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon text-primary"></span>
                                </button>
                                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <img className="offcanvas-title" id="offcanvasNavbarLabel" src="src/assets/images/LOGO-S.png" alt="LOGO" />
                                        <div className="ms-auto d-flex justify-content-end align-items-center">
                                            <p className="fs-5 fs-lg-5 fs-xl-4 text-nowrap">管理中心</p>
                                            <button type="button" className="btn-close ms-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                    </div>
                                    <div className="offcanvas-body d-lg-none">
                                       <AdminSidebar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
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