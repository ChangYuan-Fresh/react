import { useEffect, useRef, } from 'react'
import axios from 'axios'
import { Modal } from 'bootstrap';
import { useDispatch } from 'react-redux';
import { creatAsyncMessage } from '../redux/slice/toastSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function DeleteStoryModal({ tempArticle, getArticleList, delModelRef}) {
    const delArticleRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        delModelRef.current = new Modal(delArticleRef.current, {
            backdrop: false
        })
    }, [])

    const closeDelModal = () => {
        delModelRef.current.hide()
    }
    //刪除文章
    const removeArticle = async () => {
        try {
            const res = await axios.delete(`${baseUrl}/v2/api/${apiPath}/admin/article/${tempArticle.id}`)
            dispatch(creatAsyncMessage({
                text: res.data.message,
                type: '刪除文章成功',
                status: "success"
            }));
            getArticleList()
        } catch (error) {
            const { message } = error.response.data;
            dispatch(creatAsyncMessage({
                text: message.join("、"),
                type: '刪除文章失敗',
                status: "failed"
            }));
        }finally{
            closeDelModal()
        }
    }
    return (
        <div className="modal fade" tabIndex="-1" ref={delArticleRef} id="delStoryModal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">刪除文章</h5>
                        <button type="button" className="btn-close" onClick={closeDelModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        你是否要刪除
                        <span className="text-danger">{tempArticle.title}</span>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary px-6" onClick={closeDelModal}>取消</button>
                        <button type="button" className="btn btn-accent px-6 text-white" onClick={removeArticle}>刪除</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteStoryModal