import { useLocation } from "react-router";
import { useEffect } from "react";

const AutoOnTop = () => {
    const {pathname} = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    },[pathname])

    return null;
}

export default AutoOnTop;