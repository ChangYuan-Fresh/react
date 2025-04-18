import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ReactLoading from 'react-loading';
import Input from "../component/Input";
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../redux/slice/toastSlice';



function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            navigate("/member");
            dispatch(createAsyncMessage({
                text: "登入成功",
                type: '歡迎登入',
                status: "success"
            }));
        }, 2000);       
    };

    return (
        <div className="container">
            <div className="row">
                <div className="card border-0 mx-auto my-lg-9 my-7 col-lg-6">
                    <div className="card-body mb-3">
                        <h1 className="card-title fs-2 text-center text-primary mb-9">會員登入</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                            <Input
                                id="username"
                                labelText="帳號"
                                type="text"
                                register={register}
                                errors={errors}
                                rules={{ required: "帳號為必填" }}
                            />
                            <Input
                                id="password"
                                labelText="密碼"
                                type="password"
                                register={register}
                                errors={errors}
                                rules={{ required: "密碼為必填" }}
                            />
                            <button type="submit" disabled={isLoading} className="btn btn-L  py-3 my-5 mx-auto w-50 text-nowrap">
                                登入
                            </button>
                        </form>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/forgetpassword" className="card-link me-4 link-primary">忘記密碼?</Link>
                        <Link to="/signup" className="card-link me-4 link-primary">註冊會員</Link>
                    </div>
                    {isLoading && (
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(255,255,255,0.3)",
                                zIndex: 999,
                            }}
                        >
                            <ReactLoading type="balls" color="pink" width="4rem" height="4rem" />
                        </div>
                    )}                  
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
