import { useEffect, useState } from "react";
import axios from 'axios'
import UpdateQtyBtnGroup from "../../component/UpdateQtyBtnGroup";
import { Link } from "react-router";
import { useDispatch } from 'react-redux';
import { updateCartData } from '../../redux/slice/cartSlice'
import IsScreenLoading from "../../component/IsScreenLoading";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;


function Cart() {
    const [cartList, setCartList] = useState([]);
    const [isScreenLoading, setIsScreenLoading] = useState(false)
    const dispatch = useDispatch();

    const getCartList = async () => {
        setIsScreenLoading(true)
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/cart`);
            dispatch(updateCartData(res.data.data))
            setCartList(res.data.data)
        } catch (error) {
            alert(error.data)
        }finally{
            setIsScreenLoading(false)
        }
    }
    useEffect(() => {
        getCartList()
    }, [])
    //清空購物車
    const removeCart = async () => {
        setIsScreenLoading(true)
        try {
            await axios.delete(`${baseUrl}/v2/api/${apiPath}/carts`)
            alert('清空購物車成功');
            getCartList()
        } catch (error) {
            alert('清空購物車失敗' || error.data.message)
        } finally {
            setIsScreenLoading(false)
        }
    }
    //刪除單一商品
    const removeCartItem = async (id) => {
        setIsScreenLoading(true)
        try {
            await axios.delete(`${baseUrl}/v2/api/${apiPath}/cart/${id}`)
            getCartList()
        } catch (error) {
            alert('刪除品項失敗' || error.data.message)
        } finally {
            setIsScreenLoading(false)
        }
    }
    //更新商品數量
    const updateCartItem = async (id, product_id, quantity) => {
        setIsScreenLoading(true);
        try {
            await axios.put(`${baseUrl}/v2/api/${apiPath}/cart/${id}`, {
                data: {
                    product_id,
                    qty: Number(quantity)
                }
            })
            getCartList()
        } catch (error) {
            alert('更新品項失敗' || error.data.message)
        } finally {
            setIsScreenLoading(false)
        }
    }

    return (<>
        <div className="container mb-7 position-relative">
            <div className="row">
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
                                        <button type="button" className="btn btn-sm btn-secondary rounded-pill me-1 text-gray" style={{ width: "2rem", height: "2rem" }}>2</button>
                                        <p className="text-gray fs-lg-6 fs-7 text-nowrap">付款運送方式</p>
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
                    {cartList.carts?.length > 0 ? (<div>
                        <div className="text-end py-3 col-12">
                            <button className="btn btn-outline-accent px-5" type="button" onClick={removeCart}>
                                清空購物車
                            </button>
                        </div>
                        <div className="card mb-3" style={{ borderRadius: "16px" }}>
                            {cartList.carts?.map((item) => {
                                return (<div className="row g-0 border-bottom" key={item.id}>
                                    <div className="col-lg-3 p-lg-5 p-0">
                                        <img src={item.product.imageUrl} className="object-fit-cover rounded mb-4 mb-lg-0"
                                            alt={item.product.title} width="100%" height="150px" />
                                    </div>
                                    <div className="col-lg-9 p-lg-5 p-0 mb-3 mb-lg-0">
                                        <ul className="list-unstyled d-lg-flex justify-content-between mb-0 h-100">
                                            <li className="d-lg-flex row w-100 px-0 g-0">
                                                <div className="col-lg-4 card-body d-flex flex-column justify-content-between mb-0">
                                                    <div className="d-flex justify-content-between">
                                                        <h4 className="card-title text-primary fs-6 fs-lg-4 mb-1 mb-lg-2">{item.product.title}</h4>
                                                        <button className="btn d-lg-none p-0" onClick={() => removeCartItem(item.id)}>
                                                            <span
                                                                className="material-symbols-outlined fs-5 text-primary">delete</span>
                                                        </button>
                                                    </div>
                                                    <p className="card-text fs-7 fs-lg-6">{item.product.description}</p>
                                                </div>
                                                <div className="col-lg-5 card-body d-flex py-0">
                                                    <div className="d-flex align-items-center">
                                                        <UpdateQtyBtnGroup
                                                            itemQty={item.qty}
                                                            onClickfn1={() => updateCartItem(item.id, item.product_id, item.qty - 1)}
                                                            onClickfn2={() => updateCartItem(item.id, item.product_id, item.qty + 1)} />
                                                        <span className="input-group-text bg-transparent border-0">
                                                            {item.product.unit}
                                                        </span>
                                                    </div>
                                                    <div className="card-body d-lg-none d-flex flex-column justify-content-end">
                                                        <h2 className="text-accent fs-6 en-font text-end">{item.product.price}</h2>
                                                        <p
                                                            className="text-decoration-line-through text-gray fs-7 fw-normal en-font text-end">
                                                            {item.product.origin_price}</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-lg-flex align-items-center d-none d-lg-block justify-content-between px-0">
                                                    <div>
                                                        <h2 className="text-accent fs-5 fs-lg-4 en-font me-2">NT${item.product.price?.toLocaleString()}</h2>
                                                        <p
                                                            className="text-decoration-line-through text-gray fs-7 fs-lg-6 fw-normal en-font text-center">
                                                            NT${item.product.origin_price?.toLocaleString()}</p>
                                                    </div>
                                                    <button className="btn px-1"><span
                                                        className="material-symbols-outlined fs-lg-3 text-primary" onClick={() => removeCartItem(item.id)}>delete</span></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>) : (<div className="text-center"><h3>購物車是空的</h3></div>)
                    }
                </div>
                <aside className="col-lg-3 sticky-top">
                    <div>
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
                                            <p>{`NT$${(cartList.total?? 0).toLocaleString()}`}</p>
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
                                            <p>{`NT$${(cartList.total?? 0).toLocaleString()}`}</p>
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
                                    <p className="float-end text-accent ">{`NT$${(cartList.total?? 0).toLocaleString()}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link className={`btn btn-primary rounded rounded-3 w-100 text-white fs-5 fw-bold ${cartList.carts?.length < 1 ? "disabled" : ''}`} to="comfirmorder">下一步</Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
        <div>
            <img src="/images/Illustration/Bottom-Curve.png" alt="" className="d-lg-block d-none allProduct-bottom-mask"/>
        </div>
        <IsScreenLoading isScreenLoading={isScreenLoading} />
    </>
    )
}

export default Cart