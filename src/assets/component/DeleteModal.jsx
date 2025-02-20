import { useEffect, useRef, } from 'react'
import axios from 'axios'
import { Modal } from 'bootstrap';
import { useDispatch } from 'react-redux';
import { creatAsyncMessage } from '../redux/slice/toastSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function DeleteModal({ tempProduct, getProductList, delModelRef}) {
    const delProductRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        delModelRef.current = new Modal(delProductRef.current, {
            backdrop: false
        })
    }, [])

    const closeDelModal = () => {
        delModelRef.current.hide()
    }
    //刪除產品
    const removeProduct = async () => {
        try {
            const res = await axios.delete(`${baseUrl}/v2/api/${apiPath}/admin/product/${tempProduct.id}`)
            dispatch(creatAsyncMessage({
                text: res.data.message,
                type: '成功',
                status: "success"
            }));
            getProductList()
        } catch (error) {
            const { message } = error.response.data;
            dispatch(creatAsyncMessage({
                text: message.join("、"),
                type: '失敗',
                status: "failed"
            }));
        }finally{
            closeDelModal()
        }
    }
    return (
        <div className="modal fade" tabIndex="-1" ref={delProductRef} id="delProductModal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">刪除產品</h5>
                        <button type="button" className="btn-close" onClick={closeDelModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        你是否要刪除
                        <span className="text-danger">{tempProduct.title}</span>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary px-6" onClick={closeDelModal}>取消</button>
                        <button type="button" className="btn btn-accent px-6 text-white" onClick={removeProduct}>刪除</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal