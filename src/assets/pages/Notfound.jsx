import { Link } from "react-router-dom";

function Notfound (){
    return (<>
        <div className="container px-5  py-5 d-flex flex-column rounded-4 justify-content-center align-items-center">
            <i class="text-center text-primary bi bi-exclamation-triangle" style={{fontSize:"100px"}}></i>
            <h1 className="text-center">找不到網頁!</h1>
            <Link className="card-link link-primary pt-3" to="/">回首頁</Link> 
        </div> 
    </>
    )
}

export default Notfound;