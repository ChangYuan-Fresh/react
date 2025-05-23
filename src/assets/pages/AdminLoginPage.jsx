import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ReactLoading from 'react-loading';
import axios from 'axios';
import Input from '../component/Input';
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../redux/slice/toastSlice';
import Toast from '../layout/Toast';

const baseUrl = import.meta.env.VITE_BASE_URL;

function AdminLoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${baseUrl}/v2/admin/signin`, data);
      const { token, expired } = res.data;
      document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
      axios.defaults.headers.common['Authorization'] = token;
      navigate('/admin');
      dispatch(
        createAsyncMessage({
          text: '登入成功',
          type: '歡迎登入管理中心',
          status: 'success',
        })
      );
    } catch (error) {
      alert(error.data.response);
    } finally {
      setIsLoading(false);
    }
  };

  const checkLogin = async () => {
    try {
      await axios.post(`${baseUrl}/v2/api/user/check`);
    } catch (error) {
      alert('請登入管理員帳號', error.response);
    }
  };
  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
      checkLogin();
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="card border-0 mx-auto my-lg-9 my-7 col-lg-6">
          <div className="card-body mb-3">
            <h1 className="card-title fs-2 text-center text-primary mb-9">
              管理者登入
            </h1>
            <form
              className="d-flex flex-column"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                register={register}
                errors={errors}
                id="username"
                labelText="帳號"
                type="text"
                rules={{
                  required: {
                    value: true,
                    message: '帳號為必填',
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: '格式不正確',
                  },
                }}
              />
              <Input
                register={register}
                errors={errors}
                id="password"
                labelText="密碼"
                type="password"
                rules={{
                  required: {
                    value: true,
                    message: '密碼為必填',
                  },
                }}
              />
              <button
                type="submit"
                className="btn btn-L py-3 my-5 mx-auto w-50 text-nowrap"
              >
                登入
              </button>
            </form>
          </div>
          <div className="d-flex justify-content-center">
            <Link className="card-link link-primary" to="/">
              回首頁
            </Link>
          </div>
        </div>
      </div>

      {isLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(255,255,255,0.3)',
            zIndex: 999,
          }}
        >
          <ReactLoading type="balls" color="pink" width="4rem" height="4rem" />
        </div>
      )}
      <Toast />
    </div>
  );
}

export default AdminLoginPage;
