import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router";
import axios from 'axios'
import Input from "../../component/Input";
import Select from "../../component/Select";
import ReactLoading from 'react-loading';
import cityData from './form/taiwan.json'


const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function ComfirmOrder() {
    const [cartList, setCartList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [addressData, setAddressData] = useState([]);

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            name: '',
            tel: '',
            address: '',
            message: ''
        },
        mode: 'onTouched'
    }
    )

    const onSubmit = handleSubmit((data) => {
        const { message, ...user } = data;
        const userInfo = {
            data: {
                user,
                message
            }
        }
        placeOrder(userInfo);

    })
    //送出訂單
    const placeOrder = async (data) => {
        setIsLoading(true);
        try {
            await axios.post(`${baseUrl}/v2/api/${apiPath}/order`, data)
            alert('結帳成功');
            reset();
            getCartList()
        } catch (error) {
            alert('結帳失敗' || error.data.message)
        } finally {
            setIsLoading(false)
        }
    }

    const getCartList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/cart`);
            setCartList(res.data.data);
        } catch (error) {
            alert(error.data)
        }
    }
    useEffect(() => {
        getCartList()
    }, [])

    // 取得地址資料
    useEffect(() => {
        setAddressData(cityData)
    }, [])

    return (<>
        <div className="container mb-7">
            <div className="row g-5">
                <div className="col-lg-9">
                    {/* 進度條 */}
                    <div className="bg-secondary-200 row mb-5 mx-0" style={{ height: "92px", borderRadius: "16px" }}>
                        <div className="col-lg-9 col m-auto">
                            <div className="m-0 m-lg-4 d-block ">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column flex-lg-row align-items-center">
                                        <button type="button" className="btn btn-sm btn-secondary rounded-pill me-1 text-secondary text-gray" style={{ width: "2rem", height: "2rem" }}>1</button>
                                        <p className="text-gray fs-lg-6 fs-7 text-nowrap">購物車內容</p>
                                    </div>
                                    <div className="bg-primary m-auto" style={{ height: "1px", width: "15%" }} />
                                    <div className="d-flex flex-column flex-lg-row align-items-center">
                                        <button type="button" className="btn btn-sm btn-primary rounded-pill me-1 text-secondary" style={{ width: "2rem", height: "2rem" }}>2</button>
                                        <p className="text-primary fs-lg-6 fs-7 text-nowrap">付款運送方式</p>
                                    </div>
                                    <div className="bg-primary m-auto" style={{ height: "1px", width: "15%" }} />
                                    <div className="d-flex flex-column flex-lg-row align-items-center">
                                        <button type="button" className="btn btn-sm btn-secondary rounded-pill me-1 text-secondary text-gray" style={{ width: "2rem", height: "2rem" }}>3</button>
                                        <p className="text-gray fs-lg-6 fs-7 text-nowrap">購物完成</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 商品總覽 */}
                    <div className="card bg-white mb-3 p-5 border-primary mb-5" style={{ borderRadius: "16px" }}>
                        <div className="card-title text-primary fs-4 mb-6">商品明細</div>
                        <div>
                            <table className="table">
                                <thead>
                                    <tr >
                                        <th scope="col" className="text-muted fs-7" width="25%">商品</th>
                                        <th scope="col" className="text-muted fs-7 text-center" width="30%">規格</th>
                                        <th scope="col" className="text-muted fs-7 text-center" width="15%">單價</th>
                                        <th scope="col" className="text-muted fs-7 text-center" width="15%">數量</th>
                                        <th scope="col" className="text-muted fs-7 text-center" width="15%">小計</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartList.carts?.map((item) => {
                                        return (
                                            <tr key={item.id} className="py-3">
                                                <th>{item.product.title}</th>
                                                <td className="text-center">{item.product.description}</td>
                                                <td className="text-center">${item.product.price}</td>
                                                <td className="text-center">{item.qty}</td>
                                                <td className="text-center">${item.total}</td>
                                            </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 訂購人資訊 */}
                    <div className="card bg-white mb-3 p-5 border-primary" style={{ borderRadius: "16px" }}>
                        <div className="card-title text-primary fs-4 mb-6">訂購人資訊</div>
                        <form className="row my-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-lg-6">
                                <Input
                                    register={register}
                                    errors={errors}
                                    id='name'
                                    labelText='訂購人'
                                    type='text'
                                    rules={{
                                        required: {
                                            value: true,
                                            message: '訂購人為必填'
                                        },
                                        minLength: {
                                            value: 2,
                                            message: '訂購人姓名至少兩個字'
                                        }
                                    }}
                                />
                            </div>
                            <div className="col-lg-6">
                                <Input
                                    register={register}
                                    errors={errors}
                                    id='tel'
                                    labelText='收件人電話'
                                    type='tel'
                                    rules={{
                                        required: {
                                            value: true,
                                            message: '收件人電話為必填'
                                        },
                                        minLength: {
                                            value: 8,
                                            message: '收件人電話至少8碼'
                                        },
                                        maxLength: {
                                            value: 12,
                                            message: '收件人電話不超過12碼'
                                        },
                                        pattern: {
                                            value: /^(0[2-8]\d{7}|09\d{8})$/,
                                            message: '格式不正確'
                                        }
                                    }}
                                />
                            </div>
                            <div className="col-12">
                                <Input
                                    register={register}
                                    errors={errors}
                                    id='email'
                                    labelText='Email'
                                    type='email'
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Email為必填'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: '格式不正確'
                                        }
                                    }}
                                />
                            </div>
                            <div className="col-lg-6">
                                <Select id='city'
                                    labelText='縣市'
                                    errors={errors}
                                    register={register}
                                    rules={{
                                        required: '縣市為必填'
                                    }}>
                                    <option value="">請選擇縣市</option>
                                    {addressData.map((city) => {
                                        return <option value={city.CityName} key={city.CityEngName}>{city.CityName}</option>
                                    })}
                                </Select>
                            </div>
                            <div className="col-lg-6">
                                <Select id='district'
                                    labelText='鄉鎮市區'
                                    errors={errors}
                                    register={register}
                                    disabled={!getValues().city}
                                    rules={{
                                        required: '鄉鎮市區為必填'
                                    }}>
                                    <option value="">請選擇鄉鎮市區</option>
                                    {
                                        addressData.find((city) => city.CityName === getValues().city)
                                            ?.AreaList?.map((area) => {
                                                return <option value={area} key={area.AreaName}>{area.AreaName}</option>
                                            })
                                    }
                                </Select>
                            </div>
                            <div className="col-12">
                                <Input
                                    id='address'
                                    labelText='地址'
                                    type='address'
                                    errors={errors}
                                    register={register}
                                    rules={{
                                        required: '地址為必填',
                                    }}
                                ></Input>
                            </div>
                        </form>
                    </div>

                    {/* 寄送方式 */}
                    <div className="card bg-white mb-3 p-5 border-primary" style={{ borderRadius: "16px" }}>
                        <div className="card-title text-primary fs-4 mb-6">寄送方式</div>
                        <div className="d-flex text-accent bg-secondary-200 p-4 rounded rounded-3">
                            <span className="material-symbols-outlined">info</span>
                            <p>因含生鮮冷藏食品，僅提供宅配服務</p>
                        </div>
                        <div className="mt-5">
                            <div className="form-check">
                                <input className="form-check-input me-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label fs-lg-5 fs-6" for="flexRadioDefault1">
                                    冷凍宅配
                                    <span className="en-font me-3">NT$160</span>
                                    <span className="text-accent fs-7">滿 NT$1,000 免運</span>
                                </label>
                            </div>
                            <div className="form-check mt-5">
                                <input className="form-check-input me-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2" disabled />
                                <label className="form-check-label fs-lg-5 fs-6" for="flexRadioDefault2">
                                    全家取貨
                                    <span className="en-font me-3">NT$65</span>
                                    <span className="text-accent fs-7">滿 NT$499 免運</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* 付款方式 */}
                    <div className="card bg-white mb-3 p-5 border-primary" style={{ borderRadius: "16px" }}>
                        <div className="card-title text-primary fs-4 mb-6">付款方式</div>
                        <div className="mt-5">
                            <div className="form-check">
                                <input className="form-check-input me-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label fs-lg-5 fs-6" for="flexRadioDefault1">
                                    信用卡付款
                                </label>
                            </div>
                            <div className="row ms-7 px-0 mt-4">
                                <div className="col-12">
                                    <Input
                                        register={register}
                                        errors={errors}
                                        id='cardnumber'
                                        labelText='卡號'
                                        type='number'
                                        rules={{
                                            required: {
                                                value: true,
                                                message: '卡號為必填'
                                            },
                                            pattern: {
                                                value: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|35[2-8][0-9]{12}|6(?:22[2-9]|4[0-9]{2}|[1-9]{2})[0-9]{12})$/,
                                                message: '格式不正確'
                                            }
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Input
                                        register={register}
                                        errors={errors}
                                        id='expiryDate'
                                        labelText='有效日期'
                                        type='text'
                                        rules={{
                                            required: {
                                                value: true,
                                                message: '有效日期為必填'
                                            },
                                            pattern: {
                                                value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                                                message: '格式不正確'
                                            }
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Input
                                        register={register}
                                        errors={errors}
                                        id='CVC'
                                        labelText='安全碼'
                                        type='number'
                                        rules={{
                                            required: {
                                                value: true,
                                                message: '安全碼為必填'
                                            },
                                            maxLength: {
                                                value: 3,
                                                message: '安全碼不超過3碼'
                                            },
                                        }}
                                    />
                                </div>
                                <div className="form-check col mt-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        記住我的信用卡資訊
                                    </label>
                                </div>
                            </div>

                            <div className="form-check mt-5">
                                <input className="form-check-input me-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label fs-lg-5 fs-6 en-font" for="flexRadioDefault2">
                                    <img src="/images/icon/linepay.png" alt="applepay" height="24px" className="me-3" />
                                    Line Pay
                                </label>
                            </div>
                            <div className="form-check mt-5">
                                <input className="form-check-input me-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label fs-lg-5 fs-6 en-font" for="flexRadioDefault2">
                                    <img src="/images/icon/applepay.png" alt="applepay" height="24px" className="me-3" />
                                    Apple Pay
                                </label>
                            </div>
                            <div className="form-check mt-5">
                                <input className="form-check-input me-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label fs-lg-5 fs-6 en-font" for="flexRadioDefault2">
                                    <img src="/images/icon/googlepay.png" alt="applepay" height="24px" className="me-3" />
                                    Google Pay
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* 訂單備註 */}
                    <div className="card bg-white mb-3 p-5 border-primary" style={{ borderRadius: "16px" }}>
                        <div className="card-title text-primary fs-4 mb-6">訂單備註</div>
                        <div className="mb-3">
                            <textarea
                                {...register('message')}
                                className="form-control"
                                id="message"
                                rows="3"
                            ></textarea>
                        </div>
                    </div>
                    {isLoading && (<div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                            position: "fixed",
                            inset: 0,
                            backgroundColor: "rgba(255,255,255,0.3)",
                            zIndex: 999,
                        }}
                    >
                        <ReactLoading type="balls" color="pink" width="4rem" height="4rem" />
                    </div>)}
                </div>
                <div className="col-lg-3">
                    {cartList.total >= 1000 ? (
                        <div className="bg-secondary-200 rounded rounded-3">
                            <div className="d-flex py-4 ms-5 text-primary">
                                <span className="material-symbols-outlined me-2">check_circle</span>
                                <p>已達免運門檻</p>
                            </div>
                        </div>)
                        : (
                            <div className="bg-accent rounded rounded-3">
                                <div className="d-flex py-4 ms-5 text-white">
                                    <span className="material-symbols-outlined me-2">package_2</span>
                                    <p>還差$ {1000 - cartList.total}元免運</p>
                                </div>
                            </div>)}
                    <div className="bg-secondary-200 rounded rounded-3 card mt-3 border-0">
                        <div className="card-body p-5">
                            <h5 className="card-title mb-6">結帳明細</h5>
                            <div className="card-text mb-4">
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">商品總額</p>
                                        <p>{`NT$${cartList.total}`}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-between text-accent">
                                        <p>商品折扣</p>
                                        <p>NT$0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-text border-top mb-4 pt-4">
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">小計</p>
                                        <p>{`NT$${cartList.total}`}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-between text-accent">
                                        <p>運費</p>
                                        <p>NT$0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-secondary-200 pt-4 pb-0 align-middle fs-5 px-0">
                                <p>總額</p>
                                <p className="float-end text-accent ">{`NT$${cartList.total}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Link className="btn btn-primary rounded rounded-3 w-100 text-white fs-5 fw-bold" to="cart">上一步</Link>
                        <button type="submit" className="btn btn-primary rounded rounded-3 w-100 text-white fs-5 fw-bold mt-3">確認付款</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src="/images/Illustration/Bottom-Curve.png" alt="" className="d-lg-block d-none allProduct-bottom-mask" />
        </div>
    </>)
}

export default ComfirmOrder;