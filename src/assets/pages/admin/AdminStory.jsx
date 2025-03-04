import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import PaginationCompo from '../../component/PaginationCompo';
import StoryModal from '../../component/StoryModal';
import DeleteStoryModal from '../../component/DeleteStoryModal';
import Toast from "../../layout/Toast";
import { useNavigate } from 'react-router';
import IsScreenLoading from '../../component/IsScreenLoading';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const defaultModalState = {
    author: "",
    create_at: "",
    description: "",
    image: "",
    isPublic: 0,
    title: "",
    content: ""
};

function AdminStory() {
    const [articles, setArticles] = useState([]);
    const [pageInfo, getPageInfo] = useState({});
    const [modalMode, setModalMode] = useState(null);
    const [tempArticle, setTempArticle] = useState(defaultModalState);
    const modelRef = useRef(null);
    const delModelRef = useRef(null);
    const navigate = useNavigate()
    const [isScreenLoading, setIsScreenLoading] = useState(false)


    const checkLogin = async () => {
        try {
            await axios.post(`${baseUrl}/v2/api/user/check`)
        } catch (error) {
            alert("請登入管理員帳號")
            navigate('/adminlogin')
        }
    }
    useEffect(() => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            checkLogin()
        }
    }, [])

    const getArticleList = async (page = 1) => {
        setIsScreenLoading(true)
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/articles?page=${page}`);
            setArticles(res.data.articles);
            getPageInfo(res.data.pagination)
        } catch (error) {
            alert('取得資料失敗' || res.data.message)
            navigate('/adminlogin')
        }finally{
            setIsScreenLoading(false)
        }
    }

    const btnChangePage = (page) => {
        getArticleList(page);
    }

    const openModal = (mode, article) => {
        setModalMode(mode);
        switch (mode) {
            case 'create':
                setTempArticle(defaultModalState);
                break;
            case 'edit':
                getArticleInfo(article.id);
                break;
            default:
                break;
        }
        modelRef.current.show()
    }
    const openDelModal = (article) => {
        setTempArticle(article);
        delModelRef.current.show()
    }
    useEffect(() => {
        getArticleList()
    }, [])

    const getArticleInfo = async (id) => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/admin/article/${id}`);
            setTempArticle(res.data.article)
        } catch (error) {
            alert('取得資料失敗' || res.data.message)
            navigate('/adminlogin')
        }
    }

    return (
        <>
            <div className="container  rounded-3 py-5" >
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between mb-6">
                            <h3>文章管理</h3>
                            <button type="button" className="btn btn-primary py-1 text-white f-6" onClick={() => openModal('create')}>
                                <i className="bi bi-plus-circle me-1"></i>
                                新增文章
                            </button>
                        </div>
                        <div className='bg-white  rounded-3'>
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th scope="col">文章圖片</th>
                                        <th scope="col">文章名稱</th>
                                        <th scope="col">作者</th>
                                        <th scope="col">發布時間</th>
                                        <th scope="col">是否公開</th>
                                        <th scope="col">查看細節</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {articles.map((article) => {
                                        return (
                                            <tr key={article.id}>
                                                <td>
                                                    <img src={article.image} alt="文章圖片" style={{ width: '100px', height: '100px' ,objectFit: 'cover'}} />
                                                </td>
                                                <td>{article.title}</td>
                                                <td>{article.author}</td>
                                                <td>{new Date(article.create_at).toLocaleDateString()}</td>
                                                <td><p id={article.id} className="text-decoration-none">{article.isPublic ? (<span className="text-success">公開</span>) : (<span>未公開</span>)}</p ></td>
                                                <td>
                                                    <div className="btn-group" role="group">
                                                        <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openModal('edit', article)}>編輯</button>
                                                        <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openDelModal(article)}>刪除</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <PaginationCompo pageInfo={pageInfo} btnChangePage={btnChangePage} />
                        </div>
                    </div>
                </div>
            </div>
            <StoryModal modalMode={modalMode} setTempArticle={setTempArticle} tempArticle={tempArticle} getArticleList={getArticleList} modelRef={modelRef} />

            <DeleteStoryModal tempArticle={tempArticle} getArticleList={getArticleList} delModelRef={delModelRef} />

            <Toast />

            <IsScreenLoading isScreenLoading={isScreenLoading} />
        </>
    )
}
export default AdminStory;