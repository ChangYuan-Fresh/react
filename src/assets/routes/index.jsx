import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Faq from "../pages/Faq";
import Notfound from "../pages/Notfound";
import ForgetPassword from "../pages/member/ForgetPassword";
import Signup from "../pages/member/Signup";
import Stories from "../pages/Stories";
import Cart from '../pages/order/Cart'
import FrontLayout from "../layout/FrontLayout";
import ProductDetail from "../pages/ProductDetail";
import AdminPage from "../pages/admin/AdminPage";
import AdminProducePage from "../pages/admin/AdminProductPage";
import LoginPage from "../pages/LoginPage";
import AdminLoginPage from "../pages/AdminLoginPage";


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
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminPage />,
        children: [
            {
                index :true,
                element: <AdminProducePage />
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
        children: [
            {
                path: 'forgetpassword',
                element: <ForgetPassword />
            },
            {
                path: 'signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <Notfound />
    }
]

export default routes;