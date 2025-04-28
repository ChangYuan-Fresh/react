import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ReactLoading from 'react-loading';
import Input from '../../component/Input';

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <>
      <div className="container login">
        <div className="row">
          <div className="card border-0 mx-auto my-lg-11 my-7 col-lg-6">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body mb-5">
              <h1 className="card-title fs-2 text-center text-primary mb-9 mb-lg-11">
                重設密碼
              </h1>
              <div className="mb-5 row align-items-center">
                <Input
                  id="password"
                  labelText="新密碼"
                  type="password"
                  register={register}
                  errors={errors}
                  rules={{ required: '密碼為必填' }}
                />
              </div>
              <div className="mb-lg-9 mb-7 row align-items-center">
                <Input
                  id="password"
                  labelText="確認新密碼"
                  type="password"
                  register={register}
                  errors={errors}
                  rules={{ required: '密碼為必填' }}
                />
              </div>
              <div className="d-flex justify-content-center mb-5">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-L py-3 mb-5 mb-lg-0 w-50"
                >
                  送出
                </button>
              </div>
            </form>
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
            <ReactLoading
              type="balls"
              color="pink"
              width="4rem"
              height="4rem"
            />
          </div>
        )}
      </div>
      <img
        src="src/assets/images/Illustration/Top-Curve.png"
        alt="banner"
        className="promotion-curve"
      />
    </>
  );
}

export default ResetPassword;
