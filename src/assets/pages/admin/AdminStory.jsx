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
    content: "",
    article_code: " ", // 新增商品編號
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
        } finally {
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
                            {/* 電腦版 */}
                            <table className="table d-none d-sm-table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="bg-secondary-200 text-gray text-center fs-7">編號</th>
                                        <th scope="col" className="bg-secondary-200 text-gray fs-7 text-nowrap">文章</th>
                                        <th scope="col" className="bg-secondary-200 text-gray fs-7"></th>
                                        <th scope="col" className="bg-secondary-200 text-gray text-center fs-7">作者</th>
                                        <th scope="col" className="bg-secondary-200 text-gray text-center fs-7">發布時間</th>
                                        <th scope="col" className="bg-secondary-200 text-gray text-center fs-7"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {articles.map((article) => {
                                        return (
                                            <tr key={article.id}>
                                                <td className="text-center text-nowrap fw-normal ">{article.article_code || '無編號'}</td>
                                                <td>
                                                    <img className='rounded-3' src={article.image} alt="文章圖片" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                                                </td>
                                                <td>
                                                    <p className='text-nowrap'>{article.title}</p>
                                                    {!article.isPublic && <span className="bg-secondary text-primary rounded-2 p-1 fw-normal"> <small>未公開</small></span>}
                                                </td>
                                                <td className='text-center text-primary'>{article.author}</td>
                                                <td className='text-center text-gray fs-7 fw-normal'>{new Date(article.create_at).toLocaleDateString()}</td>
                                                <td>
                                                    <div className="btn-group d-none d-md-block">
                                                        <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openModal('edit', article)}>編輯</button>
                                                        <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openDelModal(article)}>刪除</button>
                                                    </div>
                                                    <div className="btn-group d-md-none d-flex flex-column">
                                                        <button type="button" className="btn bg-transparent text-accent btn-sm text-nowrap" onClick={() => openModal('edit', article)}>編輯</button>
                                                        <button type="button" className="btn bg-transparent text-accent btn-sm text-nowrap" onClick={() => openDelModal(article)}>刪除</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            {/* 手機版 */}
                            <table className="table table-bordered d-sm-none">
                                <tbody>
                                    {articles.map((article) => {
                                        return (
                                            <tr key={article.id}>
                                                <div className='d-flex justify-content-between'>
                                                    <td className="text-center fw-normal">{article.article_code || '無編號'}</td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openModal('edit', article)}>編輯</button>
                                                            <button type="button" className="btn bg-transparent text-accent btn-sm" onClick={() => openDelModal(article)}>刪除</button>
                                                        </div>
                                                    </td>
                                                </div>
                                                <div className='d-flex '>
                                                    <div className='me-5'>
                                                        <td>
                                                            <img className="rounded-3" style={{ width: "80px", height: "80px", objectFit: "cover" }} src={article.image} alt="商品圖片" />
                                                        </td>
                                                    </div>
                                                    <div className='d-flex flex-column align-items-start'>
                                                        <td className='d-flex'>
                                                            <p className='me-1'>{article.title}</p>
                                                            <p>{!article.isPublic && <span className="bg-secondary text-primary rounded-2 p-1 fw-normal" style={{ fontSize: "8px" }}><small>未上架</small></span>}</p>
                                                        </td>
                                                        <td >
                                                            <p className='text-primary'>{article.author}</p>
                                                            <p className="text-gray fs-7">{new Date(article.create_at).toLocaleDateString()}</p>
                                                        </td>
                                                    </div>
                                                </div>
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