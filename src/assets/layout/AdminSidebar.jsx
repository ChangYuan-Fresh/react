import { NavLink, useNavigate } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../redux/slice/toastSlice';
import { Offcanvas } from 'bootstrap';
import Cookies from 'js-cookie';

const baseUrl = import.meta.env.VITE_BASE_URL;

function AdminSidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(`${baseUrl}/v2/logout`);
      Cookies.remove('token');
      navigate('/adminlogin');
      dispatch(
        createAsyncMessage({
          text: '登出成功',
          type: '登出管理中心',
          status: 'success',
        })
      );
    } catch (error) {
      const { message } = error.response.data;
      dispatch(
        createAsyncMessage({
          text: message,
          type: '登出失敗',
          status: 'failed',
        })
      );
    }
  };

  const handleNavClick = path => {
    // 1. 獲取 offcanvas 元素
    const offcanvasElement = document.getElementById('offcanvasNavbar');

    if (offcanvasElement) {
      // 2. 檢查是否已經初始化
      const bsOffcanvas =
        Offcanvas.getInstance(offcanvasElement) ||
        new Offcanvas(offcanvasElement);

      // 3. 關閉 Offcanvas
      bsOffcanvas.hide();
    }

    // 4. 等待選單關閉後再導航
    setTimeout(() => {
      navigate(path);
    }, 300); // 加一個微小的延遲，確保動畫結束
  };

  return (
    <>
      {/* 電腦版 */}
      <div className="sidebar  d-none d-lg-block d-flex flex-column justify-content-center ">
        <div className="bg-white rounded-4 px-3 py-5 fw-bold">
          <NavLink to="/admin/adminMember" className="adminNavLink d-block">
            會員管理
          </NavLink>
          <hr />
          <NavLink
            to="/admin/adminProductPage"
            className="adminNavLink d-block"
          >
            商品管理
          </NavLink>
          <hr />
          <NavLink to="/admin/adminOrders" className="adminNavLink d-block">
            訂單管理
          </NavLink>
          <hr />
          <NavLink to="/admin/adminStory" className="adminNavLink d-block">
            文章管理
          </NavLink>
          <hr />
          <NavLink to="/admin/adminCoupons" className="adminNavLink d-block">
            優惠券管理
          </NavLink>
          <hr />
          <NavLink to="/admin/adminStatistics" className="adminNavLink d-block">
            統計圖表
          </NavLink>
        </div>
        <div>
          <NavLink className="d-grid gap-2 mt-5">
            <button
              onClick={handleLogout}
              className="btn btn-outline-primary fw-bold rounded-3 d-grid gap-1"
            >
              登出
            </button>
          </NavLink>
        </div>
      </div>
      {/* 手機版 */}
      <div className="sidebar d-lg-none d-flex flex-column justify-content-center align-items-stretch">
        <div className="bg-white rounded-4 px-3 py-5 fw-bold d-flex flex-column justify-content-center align-items-stretch">
          <NavLink
            to="/admin/adminMember"
            className="adminNavLink d-flex justify-content-center"
            onClick={e => handleNavClick(e, '/admin/adminMember')}
          >
            會員管理
          </NavLink>
          <hr />
          <NavLink
            to="/admin/adminProductPage"
            className="adminNavLink d-flex justify-content-center"
            onClick={e => handleNavClick(e, '/admin/adminProductPage')}
          >
            商品管理
          </NavLink>
          <hr />
          <NavLink
            to="/admin/adminOrders"
            className="adminNavLink d-flex justify-content-center"
            onClick={e => handleNavClick(e, '/admin/adminOrders')}
          >
            訂單管理
          </NavLink>
          <hr />
          <NavLink
            to="/admin/adminStory"
            className="adminNavLink d-flex justify-content-center"
            onClick={e => handleNavClick(e, '/admin/adminStory')}
          >
            文章管理
          </NavLink>
          <hr />
          <NavLink
            to="/admin/adminCoupons"
            className="adminNavLink d-flex justify-content-center"
            onClick={e => handleNavClick(e, '/admin/adminCoupons')}
          >
            優惠券管理
          </NavLink>
          <hr />
          <NavLink
            to="/admin/adminStatistics"
            className="adminNavLink d-flex justify-content-center"
            onClick={e => handleNavClick(e, '/admin/adminStatistics')}
          >
            統計圖表
          </NavLink>
        </div>
        <div>
          <NavLink className="mt-5 d-flex  flex-column  align-items-center">
            <span className="material-symbols-outlined  text-primary">
              manage_accounts
            </span>
            <h5>Hi,管理者</h5>
            <span className="text-primary mb-3">
              <small>管理中心</small>
            </span>
            <button
              onClick={handleLogout}
              className="btn btn-outline-primary fw-bold rounded-3 px-8 py-2"
            >
              登出
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
