import Home from "../pages/Home";
import App from "../../App";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Story from "../pages/Story";
import Products from "../pages/Products";
import Faq from "../pages/Faq";
import Notfound from "../pages/Notfound";


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
                element: <Story />
            },
            {
                path: 'products',
                element: <Products />
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
        element: <Login />
    },
    {
        path: '*',
        element: <Notfound />
    }
]

export default routes;