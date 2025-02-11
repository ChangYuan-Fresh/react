import Home from "../pages/Home";
import App from "../../App";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import About from "../pages/About";
import Cart from "../pages/order/Cart";
import Products from "../pages/Products";
import Faq from "../pages/Faq";
import Notfound from "../pages/Notfound";
import ForgetPassword from "../pages/member/ForgetPassword";
import Signup from "../pages/member/Signup";
import Product from "../pages/Product";
import Stories from "../pages/Stories";


const routes = [
    {
        path: '/',
        element: <App />,
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
                path: 'story',
                element: <Stories />
            },
            {
                path: 'products',
                element: <Products />,
                children: [
                    {
                        path: ':id',
                        element: <Product />
                    }
                ]
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
        element: <Admin />
    },
    {
        path: 'login',
        element: <Login />,
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