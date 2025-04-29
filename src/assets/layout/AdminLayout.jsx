import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Toast from './Toast';
import { createAsyncMessage } from '../redux/slice/toastSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;

function AdminLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signout = useCallback(() => {
    document.cookie =
      'hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    delete axios.defaults.headers.common['Authorization'];
    dispatch(
      createAsyncMessage({
        text: '您已成功登出',
        type: '管理中心',
        status: 'success',
      })
    );
    navigate('/adminlogin');
  }, [navigate, dispatch]);

  const checkLogin = useCallback(async () => {
    try {
      await axios.post(`${baseUrl}/v2/api/user/check`);
    } catch (error) {
      const { message } = error.response.data;
      dispatch(
        createAsyncMessage({
          text: message,
          type: '請登入管理員帳號',
          status: 'failed',
        })
      );
      signout();
    }
  }, [navigate, dispatch, signout]);

  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
      checkLogin();
    } else {
      signout();
    }
  }, [checkLogin, signout]);

  return (
    <>
      <AdminNavbar onSignout={signout} />
      <div className="bg-light">
        <div className="container pt-6 d-none d-lg-block">
          <div className="row">
            <div className="col-3">
              <AdminSidebar onSignout={signout} />
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
  );
}
export default AdminLayout;
