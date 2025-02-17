import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

function FrontLayout() {
    return (<>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
        <Footer />
    </>)
}


export default FrontLayout