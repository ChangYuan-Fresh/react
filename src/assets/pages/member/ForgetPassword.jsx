import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ReactLoading from 'react-loading';
import Input from '../../component/Input';

function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/resetPassword');
    }, 2000);
  };

  return (
    <>
      <div className="container login">
        <div className="row">
          <div className="card border-0 mx-auto my-lg-11 my-7 col-lg-6">
            <div className="card-body mb-5">
              <h1 className="card-title fs-2 text-center text-primary mb-7">
                忘記密碼
              </h1>
              <div className="mb-5">
                <Input
                  id="username"
                  labelText="帳號"
                  type="text"
                  register={register}
                  errors={errors}
                  rules={{ required: '帳號為必填' }}
                />
              </div>
            </div>
            {/* 電腦版 */}
            <div className="d-none d-sm-flex ms-auto align-items-end mb-11 ">
              <p className="fs-5 me-4">30秒後重新寄送</p>
              <button
                type="button"
                className="btn btn-L py-3 text-nowrap"
                data-bs-toggle="collapse"
                data-bs-target="#verifyEmail"
                aria-expanded="false"
                aria-controls="verifyEmail"
                onClick={() => setOpen(!open)}
              >
                送出
              </button>
              <Link to="/" className="card-link link-primary ps-4 fs-5">
                回首頁
              </Link>
            </div>
            {/* 手機版 */}
            <div className="d-flex-column ms-auto align-items-end mb-11 d-sm-none">
              <Link
                to="/"
                className="card-link link-primary pe-4 fs-5 align-bottom"
              >
                回首頁
              </Link>
              <button
                type="button"
                className="btn btn-L py-3 text-nowrap me-4"
                data-bs-toggle="collapse"
                data-bs-target="#verifyEmail"
                aria-expanded="false"
                aria-controls="verifyEmail"
                onClick={() => setOpen(!open)}
              >
                送出
              </button>
              <p className="fs-5 text-end mt-3 me-4">30秒後重新寄送</p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="collapse w-50 mx-auto"
              id="verifyEmail"
            >
              <div className="mb-5">
                <Input
                  id="password"
                  labelText="驗證碼"
                  type="password"
                  register={register}
                  errors={errors}
                  rules={{ required: '密碼為必填' }}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-L py-3"
                  width="200px"
                >
                  確認
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img
        src="src/assets/images/Illustration/Top-Curve.png"
        alt="banner"
        className="promotion-curve"
      />
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
    </>
  );
}

export default ForgetPassword;
