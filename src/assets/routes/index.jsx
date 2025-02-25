import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Faq from "../pages/Faq";
import Notfound from "../pages/Notfound";
import ForgetPassword from "../pages/member/ForgetPassword";
import Signup from "../pages/member/Signup";
import Stories from "../pages/Stories";
import Cart from "../pages/order/Cart";
import FrontLayout from "../layout/FrontLayout";
import ProductDetail from "../pages/ProductDetail";
import AdminLayout from "../layout/AdminLayout";
import AdminProductPage from "../pages/admin/AdminProductPage";
import LoginPage from "../pages/LoginPage";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminHomePage from "../pages/admin/AdminHomePage";
import AdminMember from "../pages/admin/AdminMember";
import AdminStory from "../pages/admin/AdminStory";
import AdminOrders from "../pages/admin/AdminOrders";
import AdminCoupons from "../pages/admin/AdminCoupons";
import Member from "../pages/member/Member"
import ChangePassword from "../pages/member/ChangePassword";
import ResetPassword from "../pages/member/ResetPassword";
import ComfirmOrder from "../pages/order/ComfirmOrder"
import PlaceOrder from "../pages/order/PlaceOrder";


const routes = [
    {
        path: '/',
        element: <FrontLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'Stories',
                element: <Stories />
            },
            {
                path: 'products',
                element: <Products />,
            },
            {
                path: 'products/:id',
                element: <ProductDetail />
            },
            {
                path: 'faq',
                element: <Faq />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'cart/comfirmorder',
                element: <ComfirmOrder />
            },
            {
                path: 'cart/placeordersuccess',
                element: <PlaceOrder />
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [
            {
                index :true,
                element: <AdminHomePage />
            },
            {
                path: 'adminProductPage',
                element: <AdminProductPage />
            },
            {
                path: 'adminStory',
                element: <AdminStory />
            },
            {
                path: 'adminOrders',
                element: <AdminOrders />
            },
            {
                path: 'adminCoupons',
                element: <AdminCoupons />
            },
            {
                path: 'adminMember',
                element: <AdminMember />
            }
        ]
    },
    {
        path: 'adminlogin',
        element: <AdminLoginPage />,
    },
    {
        path: 'login',
        element: <LoginPage />,
    },
    {
        path: '*',
        element: <Notfound />
    },
    {
        path: 'forgetpassword',
        element: <ForgetPassword />
    },
    {
        path: 'signup',
        element: <Signup />
    },
    {
        path: 'member',
        element: <Member />
    },
    {
        path: 'changePassword',
        element: <ChangePassword />
    },
    {
        path: 'resetPassword',
        element: <ResetPassword />
    }
]

export default routes;