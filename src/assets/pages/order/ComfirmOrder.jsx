import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router";
import axios from 'axios'
import cityData from './form/taiwan.json'
import Input from "../../component/Input";
import Select from "../../component/Select";
import IsScreenLoading from "../../component/IsScreenLoading";
import Toast from "../../layout/Toast";
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../../redux/slice/toastSlice';


const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function ComfirmOrder() {
    const [cartList, setCartList] = useState([]);
    const [isScreenLoading, setIsScreenLoading] = useState(false);
    const [addressData, setAddressData] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("linePay");
    const [couponCode, setCouponCode] = useState('');
    const [shippingType, setShippingType] = useState('normal');
    const [orderExtend, setOrderExtend] = useState(false);
    const dispatch = useDispatch();


    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        watch,
        unregister,
        clearErrors,
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
                user: {
                    ...user,
                    shipping: shippingFee
                },
                message
            }
        };
        placeOrder(userInfo);

    })
    //送出訂單
    const placeOrder = async (data) => {
        setIsScreenLoading(true);
        try {
            await axios.post(`${baseUrl}/v2/api/${apiPath}/order`, data)
            reset();
            getCartList()
            navigate("/cart/placeordersuccess")
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '結帳失敗',
                status: "failed"
            }))
            navigate("/cart")
        } finally {
            setIsScreenLoading(false)
        }
    }

    const getCartList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/cart`);
            setCartList(res.data.data);
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '取得購物車資訊失敗',
                status: "failed"
            }))
        }
    }
    useEffect(() => {
        getCartList();
    }, [])

    // 取得地址資料
    useEffect(() => {
        setAddressData(cityData)
    }, [])

    // 付款方式判定
    useEffect(() => {
        if (paymentMethod !== "creditCard") {
            unregister('cardnumber');
            unregister('expiryDate');
            unregister('CVC');
            clearErrors(['cardnumber', 'expiryDate', 'CVC']);
        } else {
            register('cardnumber', {
                required: '卡號為必填',
                pattern: {
                    value: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|35[2-8][0-9]{12}|6(?:22[2-9]|4[0-9]{2}|[1-9]{2})[0-9]{12})$/,
                    message: '格式不正確'
                }
            });
            register('expiryDate', {
                required: '有效日期為必填',
                pattern: {
                    value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                    message: '格式不正確'
                }
            });
            register('CVC', {
                required: '安全碼為必填',
                maxLength: {
                    value: 3,
                    message: '安全碼不超過3碼'
                }
            });
        }
    }, [register, unregister, clearErrors, paymentMethod]);

    // 取得優惠卷代碼
    const getCouponCode = (e) => {
        setCouponCode(e.target.value)
    }
    //取得優惠
    const getDiscount = async () => {
        setIsScreenLoading(true);
        try {
            const res = await axios.post(`${baseUrl}/v2/api/${apiPath}/coupon`, {
                data: {
                    code: couponCode
                }
            });
            getCartList()
            dispatch(createAsyncMessage({
                text: res.data.message,
                type: '成功使用優惠卷',
                status: "success"
            }))
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '此優惠券代碼無效',
                status: "failed"
            }))
        } finally {
            setIsScreenLoading(false);
        }
    }

    const city = watch('city');

    //是否為冷凍寄送
    const filterFrozen = cartList.carts?.filter((item) => item.product?.is_frozen !== 0) || [];

    const shippingFee = shippingType === "normal"
        ? (cartList.total < 499 ? 65 : 0)
        : (cartList.total < 1000 ? 160 : 0)

    //總額
    const totalAmount = Math.floor((cartList.final_total ?? 0) + (shippingFee ?? 0));

    const handleOrderExtend = () => {
        setOrderExtend(prevState => !prevState)
    }
    return (<>
        <div className="container mb-lg-7 mb-0">
            <form className="row g-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-lg-9">
                    {/* 進度條 */}
                    <div className="bg-secondary-200 row mb-5 mx-0" style={{ height: "92px", borderRadius: "16px" }}>
                        <div className="col-lg-9 col m-auto">
                            <div className="m-0 m-lg-4 d-block ">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column flex-lg-row align-items-center">
                                        <button type="button" className="btn btn-sm btn-primary rounded-pill me-1 text-secondary" style={{ width: "2rem", height: "2rem" }}>1</button>
                                        <p className="text-primary fs-lg-6 fs-7 text-nowrap">購物車內容</p>
                                    </div>
                                    <div className="bg-primary m-auto" style={{ height: "1px", width: "15%" }} />
                                    <div className="d-flex flex-column flex-lg-row align-items-center">
                                        <button type="button" className="btn btn-sm btn-primary rounded-pill me-1 text-secondary" style={{ width: "2rem", height: "2rem" }}>2</button>
                                        <p className="text-primary fs-lg-6 fs-7 text-nowrap">付款運送方式</p>
                                    </div>
                                    <div className="bg-primary m-auto" style={{ height: "1px", width: "15%" }} />
                                    <div className="d-flex flex-column flex-lg-row align-items-center">
                                        <button type="button" className="btn btn-sm btn-secondary rounded-pill me-1 text-gray" style={{ width: "2rem", height: "2rem" }}>3</button>
                                        <p className="text-gray fs-lg-6 fs-7 text-nowrap">購物完成</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 商品總覽 */}
                    <div className="card bg-white mb-3 p-5 border-primary mb-5 d-none d-lg-block" style={{ borderRadius: "16px" }}>
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
                                                <td className="text-center">${item.product.price?.toLocaleString()}</td>
                                                <td className="text-center">{item.qty}</td>
                                                <td className="text-center">${item.total?.toLocaleString()}</td>
                                            </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* 商品總覽mobile */}
                    <div className="card d-lg-none border-primary mb-3" style={{ borderRadius: "16px" }}>
                        <div className="card-body">
                            <div className="card-title text-primary fs-5 mb-3">商品明細</div>
                            {cartList.carts?.map((item) => {
                                return (
                                    <div className="card-text d-flex justify-content-between align-items-end border-bottom py-3" key={item.id}>
                                        <div>
                                            <p className="mb-1">{item.product.title}</p>
                                            <p className="text-gray">{item.product.description}x{item.qty}</p>
                                        </div>
                                        <p>${item.product.price?.toLocaleString()}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* 訂購人資訊 */}
                    <div className="card bg-white mb-3 p-5 border-primary" style={{ borderRadius: "16px" }}>
                        <div className="card-title text-primary fs-5 fs-lg-4 mb-0 mb-lg-6">訂購人資訊</div>
                        <div className="row my-5">
                            <div className="col-lg-6">
                                <Input
                                    register={register}
                                    errors={errors}
                                    id='name'
                                    labelText='訂購人'
                                    type='text'
                                    mark='*'
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
                                    mark='*'
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
                                    mark='*'
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
                                    mark='*'
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
                                    mark='*'
                                    disabled={!city}
                                    rules={{
                                        required: '鄉鎮市區為必填'
                                    }}>
                                    <option value="">請選擇鄉鎮市區</option>
                                    {
                                        addressData.find((city) => city.CityName === getValues().city)
                                            ?.AreaList?.map((area) => {
                                                return <option value={area.AreaName} key={area.AreaName}>{area.AreaName}</option>
                                            })
                                    }
                                </Select>
                            </div>
                            <div className="col-12">
                                <Input
                                    id='address'
                                    labelText='地址'
                                    type='address'
                                    mark='*'
                                    errors={errors}
                                    register={register}
                                    rules={{
                                        required: '地址為必填',
                                    }}
                                ></Input>
                            </div>
                        </div>
                    </div>

                    {/* 寄送方式 */}
                    <div className="card bg-white mb-3 p-5 border-primary" style={{ borderRadius: "16px" }}>
                        <div className="card-title text-primary fs-5 fs-lg-4 mb-5 mb-lg-6"><small className="text-accent">*</small>寄送方式</div>
                        {filterFrozen.length > 0 && (
                            <div className="d-flex text-accent bg-secondary-200 p-4 rounded rounded-3 mb-5">
                                <span className="material-symbols-outlined">info</span>
                                <p>因含生鮮冷藏食品，僅提供宅配服務</p>
                            </div>)}
                        <div>
                            <div className="form-check">
                                <input
                                    className={`form-check-input ${errors['shipping'] && 'is-invalid'}`}
                                    type='radio'
                                    name='shipping'
                                    id='frozen'
                                    value='frozen'
                                    checked={shippingType === "frozen"}
                                    {...register("shipping", {
                                        required: true,
                                        onChange: (e) => setShippingType(e.target.value)
                                    })}
                                />
                                <label className='form-check-label fs-lg-5 fs-6' htmlFor='frozen'>
                                    冷凍宅配
                                    <span className="en-font me-3">NT$ 160</span>
                                    <span className="text-accent fs-7">滿 NT$1,000 免運</span>
                                </label>
                                {errors['shipping'] && (
                                    <div className='invalid-feedback'>{errors['shipping']?.message}</div>
                                )}
                            </div>
                            <div className='form-check mt-5'>
                                <input
                                    className={`form-check-input ${errors['shipping'] && 'is-invalid'}`}
                                    type='radio'
                                    name='shipping'
                                    id='normal'
                                    value="normal"
                                    checked={shippingType === "normal"}
                                    disabled={filterFrozen.length > 0}
                                    {...register("shipping", {
                                        required: true,
                                        onChange: (e) => setShippingType(e.target.value)
                                    })}
                                />
                                <label className='form-check-label fs-lg-5 fs-6' htmlFor='normal'>
                                    全家取貨
                                    <span className="en-font me-3">NT$ 65</span>
                                    <span className="text-accent fs-7">滿 NT$499 免運</span>
                                </label>
                            </div>
                            {errors['shipping'] && (
                                <div className='invalid-feedback'>{errors['shipping']?.message}</div>
                            )}
                        </div>
                    </div>
                    {/* 付款方式 */}
                    <div className="card bg-white mb-3 p-5 border-primary" style={{ borderRadius: "16px" }}>
                        <div className="card-title text-primary fs-5 fs-lg-4 mb-6">付款方式</div>
                        <div className="mt-5">
                            <div className="form-check">
                                <input className="form-check-input me-4" type="radio" name="paymentMethod" id="creditCard" onChange={() => {
                                    setPaymentMethod("creditCard");
                                }} 
                                checked={paymentMethod === "creditCard"}/>
                                <label className="form-check-label fs-lg-5 fs-6" htmlFor="creditCard" >
                                    信用卡付款
                                </label>
                            </div>
                            {paymentMethod === "creditCard" && (<div className="row ms-7 px-0 mt-4">
                                <div className="col-12">
                                    <Input
                                        register={register}
                                        errors={errors}
                                        id='cardnumber'
                                        labelText='卡號'
                                        type='number'
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label htmlFor='expiryDate' className="form-label">有效日期</label>
                                        <input
                                            type='text'
                                            className={`form-control ${errors['expiryDate'] && 'is-invalid'}`}
                                            id='expiryDate'
                                            placeholder='MM/YY'
                                            {...register('expiryDate')}
                                        />
                                        {
                                            errors['expiryDate'] && (<div className="invalid-feedback">{errors?.['expiryDate']?.message}</div>)
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <Input
                                        register={register}
                                        errors={errors}
                                        id='CVC'
                                        labelText='安全碼'
                                        type='number'
                                    />
                                </div>
                                <div className="form-check col mt-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        記住我的信用卡資訊
                                    </label>
                                </div>
                            </div>)}
                            <div className="form-check mt-5">
                                <input className="form-check-input me-4" type="radio" name="paymentMethod" id="linePay" onChange={() => {
                                    setPaymentMethod("linePay");
                                }} 
                                checked={paymentMethod === "linePay"}/>
                                <label className="form-check-label fs-lg-5 fs-6 en-font" htmlFor="linePay">
                                    <img src="images/icon/linepay.png" alt="applepay" height="24px" className="me-3" />
                                    Line Pay
                                </label>
                            </div>
                            <div className="form-check mt-5">
                                <input className="form-check-input me-4" type="radio" name="paymentMethod" id="applePay" onChange={() => {
                                    setPaymentMethod("applePay");
                                }} 
                                checked={paymentMethod === "applePay"}/>
                                <label className="form-check-label fs-lg-5 fs-6 en-font" htmlFor="applePay">
                                    <img src="images/icon/applepay.png" alt="applepay" height="24px" className="me-3" />
                                    Apple Pay
                                </label>
                            </div>
                            <div className="form-check mt-5">
                                <input className="form-check-input me-4" type="radio" name="paymentMethod" id="googlePay" onChange={() => {
                                    setPaymentMethod("googlePay");
                                }} 
                                checked={paymentMethod === "googlePay"}/>
                                <label className="form-check-label fs-lg-5 fs-6 en-font" htmlFor="googlePay">
                                    <img src="images/icon/googlepay.png" alt="applepay" height="24px" className="me-3" />
                                    Google Pay
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* 優惠卷 */}
                    <div className="card bg-white mb-3 p-5 border-primary row g-0" style={{ borderRadius: "16px" }}>
                        <div className="col-lg-6">
                            <div className="card-title text-primary fs-5 fs-lg-4 mb-6">請輸入優惠卷代碼</div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control px-lg-5 px-3" onChange={getCouponCode} placeholder="請輸入折扣碼" value={couponCode} />
                                <button className="btn btn-primary text-white fs-lg-5 fs-6 px-lg-7 px-5" type="button" onClick={getDiscount}>確認</button>
                            </div>
                        </div>
                    </div>
                    {/* 訂單備註 */}
                    <div className="card bg-white mb-3 p-5 border-primary" style={{ borderRadius: "16px" }}>
                        <div className="card-title text-primary fs-5 fs-lg-4 mb-6">訂單備註</div>
                        <div className="mb-3">
                            <textarea
                                {...register('message')}
                                className="form-control"
                                placeholder="請輸入備註"
                                id="message"
                                rows="3"
                            ></textarea>
                        </div>
                    </div>
                </div>
                {/* 結帳明細 */}
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="z-0" style={{ position: 'sticky', top: '130px' }}>
                        {filterFrozen.length > 0 || shippingType === 'frozen' ? (
                            cartList.total >= 1000 ? (
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
                                            <p>還差$ {1000 - cartList.total || 0}元免運</p>
                                        </div>
                                    </div>)
                        ) : (
                            cartList.total >= 1000 ? (
                                <div className="bg-secondary-200 rounded roundedd-3">
                                    <div className="d-flex py-4 ms-5 text-primary">
                                        <span className="material-symbols-outlined me-2">check_circle</span>
                                        <p>已達免運門檻</p>
                                    </div>
                                </div>)
                                : (
                                    <div className="bg-accent rounded rounded-3">
                                        <div className="d-flex py-4 ms-5 text-white">
                                            <span className="material-symbols-outlined me-2">package_2</span>
                                            <p>還差$ {1000 - cartList.total || 0}元免運</p>
                                        </div>
                                    </div>)
                        )}
                        <div className="bg-secondary-200 rounded rounded-3 card mt-3 border-0">
                            <div className="card-body p-5">
                                <h5 className="card-title mb-6">結帳明細</h5>
                                <div className="card-text mb-4">
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-2">商品總額</p>
                                            <p>{`NT$${(cartList.total ?? 0).toLocaleString()}`}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-between text-accent">
                                            <p>商品折扣</p>
                                            <p>NT${Math.floor((cartList?.total ?? 0) - (cartList?.final_total ?? 0))}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-text border-top mb-4 pt-4">
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-2">小計</p>
                                            <p>{`NT$${Math.floor(cartList.final_total ?? 0).toLocaleString()}`}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-between text-accent">
                                            <p>運費</p>
                                            <p>NT${shippingFee || 0}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-secondary-200 pt-4 pb-0 align-middle fs-5 px-0">
                                    <p>總額</p>
                                    <p className="float-end text-accent ">{`NT$${totalAmount.toLocaleString()}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link className="btn btn-primary rounded rounded-3 w-100 text-white fs-5 fw-bold" to="/cart">上一步</Link>
                            <button type="submit" className="btn btn-primary rounded rounded-3 w-100 text-white fs-5 fw-bold mt-3" disabled={cartList.length < 1}>確認付款</button>
                        </div>
                    </div>
                </div>
                {/* mobile */}
                <div className={`bg-secondary-200 p-3 d-lg-none fixed-bottom ${orderExtend && "order-extend"}`}>
                    {orderExtend && (<div>
                        <div className="d-flex justify-content-between mb-5">
                            <div className="text-black fs-5">結帳明細</div>
                            <button type="button" className="btn-close me-1" onClick={() => setOrderExtend(false)} aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="card-text mb-4">
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">商品總額</p>
                                        <p>{`NT$${(cartList.total ?? 0).toLocaleString()}`}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-between text-accent">
                                        <p>商品折扣</p>
                                        <p>NT${Math.floor((cartList?.total ?? 0) - (cartList?.final_total ?? 0))}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-text border-top py-4">
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">小計</p>
                                        <p>{`NT$${Math.floor(cartList.final_total ?? 0).toLocaleString()}`}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-between text-accent">
                                        <p>運費</p>
                                        <p>NT${shippingFee || 0}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="d-flex justify-content-between mb-1 align-items-center">
                                <p className="me-2">總額</p>
                                <p className="text-accent fs-5 me-2 en-font">{`NT$${totalAmount.toLocaleString()}`}</p>
                                <span className="material-symbols-outlined text-accent" onClick={handleOrderExtend}>{orderExtend ? "keyboard_arrow_down" : "keyboard_arrow_up"}</span>
                            </div>
                            <div>
                                {filterFrozen.length > 0 || shippingType === 'frozen' ? (
                                    cartList.total >= 1000 ? (
                                        <div className="bg-secondary-200 rounded rounded-3">
                                            <div className="d-flex text-primary align-items-center">
                                                <span className="material-symbols-outlined me-1 fs-6">check_circle</span>
                                                <p className="fs-7">已達免運門檻</p>
                                            </div>
                                        </div>)
                                        : (
                                            <div className="bg-accent rounded rounded-3">
                                                <div className="d-flex text-white align-items-center">
                                                    <span className="material-symbols-outlined me-1 fs-6  ms-1">package_2</span>
                                                    <p className="fs-7">還差$ {1000 - cartList.total || 0}元免運</p>
                                                </div>
                                            </div>)
                                ) : (
                                    cartList.total >= 1000 ? (
                                        <div className="bg-secondary-200 rounded roundedd-3">
                                            <div className="d-flex text-primary align-items-center">
                                                <span className="material-symbols-outlined me-1 fs-6">check_circle</span>
                                                <p className="fs-7">已達免運門檻</p>
                                            </div>
                                        </div>)
                                        : (
                                            <div className="bg-accent rounded rounded-3">
                                                <div className="d-flex text-white align-items-center">
                                                    <span className="material-symbols-outlined me-1 fs-6 ms-1">package_2</span>
                                                    <p className="fs-7">還差$ {1000 - cartList.total || 0}元免運</p>
                                                </div>
                                            </div>)
                                )}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary rounded rounded-3 text-white fs-6 fw-bold py-3 px-4" disabled={cartList.length < 1}>確認付款</button>
                    </div>
                </div>
            </form>
        </div>

        <IsScreenLoading isScreenLoading={isScreenLoading} />
        <Toast />
        <div>
            <img src="images/Illustration/Bottom-Curve.png" alt="" className="d-lg-block d-none allProduct-bottom-mask" />
        </div>
    </>)
}

export default ComfirmOrder;