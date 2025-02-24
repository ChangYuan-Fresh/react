import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ReactLoading from 'react-loading';
import Input from "../../component/Input";

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    return (<>
        <div className="container login">
            <div className="row">
                <form onSubmit={handleSubmit(onSubmit)} className="card border-0 mx-auto my-lg-11 my-7 col-lg-6">
                    <div className="card-body mb-7">
                        <h1 className="card-title fs-2 text-center text-primary mb-9">註冊會員</h1>
                        <div className="mb-5 row align-items-center">
                            <Input
                                id="username"
                                labelText="帳號"
                                type="text"
                                register={register}
                                errors={errors}
                                rules={{ required: "帳號為必填" }}
                            />
                        </div>
                        <div className="mb-5 row align-items-center">
                            <Input
                                id="password"
                                labelText="密碼"
                                type="password"
                                register={register}
                                errors={errors}
                                rules={{ required: "密碼為必填" }}
                            />
                        </div>
                        <div className="mb-5 row align-items-center">
                            <Input
                                id="password"
                                labelText="密碼"
                                type="password"
                                register={register}
                                errors={errors}
                                rules={{ required: "密碼為必填" }}
                            />
                        </div>
                        <div className="mb-7 row align-items-center">
                            <Input
                                id="username"
                                labelText="電子信箱"
                                type="text"
                                register={register}
                                errors={errors}
                                rules={{ required: "電子信箱為必填" }}
                            />
                        </div>
                        <div className="form-check ms-7">
                            <input
                                className={`form-check-input border border-primary border-2 ${errors.agreement ? 'is-invalid' : ''}`}
                                type="checkbox"
                                id="agreement"
                                {...register("agreement", { required: "請勾選" })}
                            />
                            <label className="form-check-label align-middle" htmlFor="agreement">
                                我同意隱私權政策和使用者條款
                            </label>
                            {errors.agreement && <span className="invalid-feedback">{errors.agreement.message}</span>}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-5 flex-column flex-lg-row align-items-center">
                        <button type="submit" disabled={isLoading} className="btn btn-L py-3 me-0 me-lg-5 mb-5 mb-lg-0 w-100">送出</button>
                        <Link to="/" className="btn btn-L py-3 w-100">取消</Link>
                    </div>
                </form>
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


        <img src="../assets/images/Illustration/Top-Curve.png" alt="banner" className="promotion-curve" />
    </>
    )
}

export default Signup;