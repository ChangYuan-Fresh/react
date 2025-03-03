import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Modal } from 'bootstrap';
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../redux/slice/toastSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function StoryModal({ modalMode, tempArticle, getArticleList, setTempArticle, modelRef }) {
    const articleRef = useRef(null);
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date()); //轉換日期
    
    //新增文章
    const createNewArticle = async () => {
        try {
            const res = await axios.post(`${baseUrl}/v2/api/${apiPath}/admin/article`, {
                data: {
                    ...tempArticle,
                    create_at: date.getTime(),
                    isPublic: tempArticle.isPublic ? true : false
                }
            });
            dispatch(createAsyncMessage({
                text: res.data.message,
                type: '新增文章成功',
                status: "success"
            }));
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message.join("、"),
                type: '新增文章失敗',
                status: "failed"
            }));
        }
    }
    //更新文章
    const updateArticle = async () => {
        try {
            const res = await axios.put(`${baseUrl}/v2/api/${apiPath}/admin/article/${tempArticle.id}`, {
                data: {
                    ...tempArticle,
                    create_at: date.getTime(),
                    isPublic: tempArticle.isPublic ? true : false
                }
            });
            dispatch(createAsyncMessage({
                text: res.data.message,
                type: '更新文章成功',
                status: "success"
            }))
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message.join("、"),
                type: '更新文章失敗',
                status: "failed"
            }))
        }
    }
    //新增或更新文章
    const btnUpdateArticle = async () => {
        try {
            const apiswitch = modalMode === 'create' ? createNewArticle : updateArticle;
            await apiswitch();
            getArticleList();
            closeModal()
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message.join("、"),
                type: '失敗',
                status: "failed"
            }))
        } finally {
            closeModal()
        }

    }
    //上傳圖片
    const fileUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file-to-upload', file)
        try {
            const res = await axios.post(`${baseUrl}/v2/api/${apiPath}/admin/upload`, formData);
            const upLoadImg = res.data.imageUrl;
            setTempArticle({
                ...tempArticle,
                image: upLoadImg
            })
        } catch (error) {
            alert(error.response.data.message)
        } finally {
            e.target.value = "";
        }
    }
    //表單控制
    const getinputValue = (e) => {
        const { value, name, checked, type } = e.target;
        setTempArticle({
            ...tempArticle,
            [name]: type === "checkbox" ? checked : value
        })
    }
    //modal控制
    const closeModal = () => {
        modelRef.current.hide()
    }
    useEffect(() => {
        modelRef.current = new Modal(articleRef.current, {
            backdrop: false
        })
    }, [])
    return (
        <div className="modal" tabIndex="-1" ref={articleRef} id="articleModal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modalMode === 'create' ? '新增文章' : '編輯文章'}</h5>
                        <button type="button" className="btn-close me-1" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row g-3">
                            <div className="col-4">
                                <div className="mb-5">
                                    <label htmlFor="fileInput" className="form-label"> 圖片上傳 </label>
                                    <input
                                        type="file"
                                        accept=".jpg,.jpeg,.png"
                                        className="form-control"
                                        id="fileInput"
                                        onChange={fileUpload}
                                    />
                                </div>
                                <div className="mx-3">
                                    <label htmlFor="image" className="form-label">主圖</label>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="請輸入主圖網址"
                                            id="image"
                                            name="image"
                                            value={tempArticle.image} onChange={getinputValue} />
                                        <img src={tempArticle.image} alt={tempArticle.id} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row g-4 mb-3">
                                    <div className="col-6">
                                        <label htmlFor="title" className="form-label">標題</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            placeholder="請輸入標題"
                                            name="title"
                                            value={tempArticle.title}
                                            onChange={getinputValue} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="create_at" className="form-label">發布日期</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="create_at"
                                            placeholder="請輸入日期"
                                            name="create_at"
                                            value={`${date.getFullYear().toString()}
                                            -${(date.getMonth() + 1).toString().padStart(2, 0)}
                                            -${date.getDate().toString().padStart(2, 0)}`}
                                            onChange={(e) => {
                                                setDate(new Date(e.target.value))
                                            }} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="author" className="form-label">作者</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="author"
                                            placeholder="請入作者名稱"
                                            name="author"
                                            value={tempArticle.author}
                                            onChange={getinputValue} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">文章前段</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        rows="3"
                                        name="description"
                                        value={tempArticle.description}
                                        onChange={getinputValue}>
                                    </textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label">文章後段</label>
                                    <textarea
                                        className="form-control"
                                        id="content"
                                        rows="3"
                                        name="content"
                                        value={tempArticle.content}
                                        onChange={getinputValue}>
                                    </textarea>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox" id="isPublic"
                                        name="isPublic"
                                        checked={tempArticle.isPublic}
                                        onChange={getinputValue} />
                                    <label className="form-check-label" htmlFor="isPublic">
                                        是否公開
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary px-6" onClick={closeModal}>取消</button>
                        <button type="button" className="btn btn-primary px-6 text-white" onClick={btnUpdateArticle}>確認</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StoryModal