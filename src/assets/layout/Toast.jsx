import { useSelector } from "react-redux"

function Toast() {
    const messages = useSelector((state) =>{
        return state.toast
    })
    return (
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1000 }}>
            {messages.map((message) => {
                return (
                    <div 
                    key={message.id}
                    className="toast show" 
                    role="alert" 
                    aria-live="assertive" 
                    aria-atomic="true">
                        <div className={`toast-header text-white ${message.status === "success" ? "bg-primary" : "bg-accent"}`}>
                            <strong className="me-auto">{message.type}</strong>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss='toast'
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="toast-body">{message.text}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Toast