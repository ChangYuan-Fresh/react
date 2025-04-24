import { NavLink } from "react-router";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import logoS from '../images/LOGO-S.png';
import logoL from '../images/LOGO-L.png';
import { updateCartData } from '../redux/slice/cartSlice'
import { createAsyncMessage } from "../redux/slice/toastSlice";


const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function Navbar() {
    const cartNum = useSelector(state => state.cart.carts);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    

    // 當用戶點擊導航連結時，將折疊區域關閉
    const handleLinkClick = () => {
        setIsOpen(false); // 點擊後關閉導航欄
    };

    // 切換導航欄的折疊狀態
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const getCartList = useCallback(async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/cart`);
            dispatch(updateCartData(res.data.data));
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '取得購物車資訊失敗',
                status: "failed"
            }))
        }
    }, [dispatch]); // 只在 dispatch 變更時重新創建

    useEffect(() => {
        getCartList();
    }, [getCartList]);


    return (<>
        <header className="navbar navbar-expand-lg p-0 bg-white sticky-top">
            <div className="container-fluid py-4 px-3">
                <NavLink className="navbar-brand" to='/'>
                    <picture>
                        <source
                            media="(min-width: 992px)"
                            srcSet={logoL}
                        />
                        <img src={logoS} alt="logo" />
                    </picture>
                </NavLink>
                <NavLink className="fs-2 text-primary ms-auto me-3 d-lg-none position-relative" to='cart'>
                    <span className="material-symbols-outlined">shopping_cart</span>
                    {cartNum?.length > 0 && <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle p-0 d-flex align-items-center justify-content-center mt-3" style={{ width: "14px", height: "14px", fontSize: "10px" }}>{cartNum?.length}</span>}

                </NavLink>
                <button
                    className="navbar-toggler border-0 p-0"
                    type="button"
                    onClick={toggleNavbar} // 切換折疊狀態
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation">
                    {isOpen ? (<span className="material-symbols-outlined border-0">close</span>) : (<span className="material-symbols-outlined border-0">menu</span>)}
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto mt-5 mt-lg-0">
                        <NavLink className="nav-link text-center py-6 py-lg-0 px-lg-6 border-fix" to='about' onClick={handleLinkClick}>
                            <p className="fs-5 fs-lg-5 fs-xl-4 text-nowrap">關於我們</p>
                            <p className="small fw-normal en-font">About us</p>
                        </NavLink>
                        <NavLink className="nav-link text-center py-6 py-lg-0 px-lg-6 border-fix" to='stories' onClick={handleLinkClick}>
                            <p className="fs-5 fs-lg-5 fs-xl-4 text-nowrap">產地故事</p>
                            <p className="small fw-normal en-font">Our Story</p>
                        </NavLink>
                        <NavLink className="nav-link text-center py-6 py-lg-0 px-lg-6 border-fix" to='products' onClick={handleLinkClick}>
                            <p className="fs-5 fs-lg-5 fs-xl-4 text-nowrap">全部商品</p>
                            <p className="small fw-normal en-font">Store</p>
                        </NavLink>
                        <NavLink className="nav-link text-center py-6 py-lg-0 px-lg-6" to='faq' onClick={handleLinkClick}>
                            <p className="fs-5 fs-lg-5 fs-xl-4 text-nowrap">常見問題</p>
                            <p className="small fw-normal en-font">FAQ</p>
                        </NavLink>
                        <NavLink className="btn btn-s d-none d-lg-inline-block p-0 border-0 mx-6" to='cart'>
                            <button type='button' className="btn position-relative p-0">
                                <span className="material-symbols-outlined p-4 fs-2">shopping_cart</span>
                                {cartNum?.length > 0 && <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle fs-6 d-flex justify-content-center align-items-center" style={{ width: "26px", height: "26px" }}>{cartNum?.length}</span>}

                            </button>
                        </NavLink>
                        <NavLink className="btn btn-s d-none d-lg-inline-block p-0 border-0" to='login'>
                            <span className="material-symbols-outlined p-4 fs-2">person</span>
                        </NavLink>
                        <div className="d-lg-none">
                            <NavLink className="nav-link py-6 link-primary text-center py-6" to='/login' onClick={handleLinkClick}>
                                <p className="fs-5 fs-lg-4">登入</p>
                                <p className="small fw-normal en-font">Sign in</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="box"></div>
    </>)
}

export default Navbar;