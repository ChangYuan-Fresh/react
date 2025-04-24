import { useCallback, useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { useDispatch } from 'react-redux';
import axios from 'axios'
import Banner from "../layout/Banner";
import IsScreenLoading from "../component/IsScreenLoading";
import Toast from "../layout/Toast";
import { createAsyncMessage } from "../redux/slice/toastSlice";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function Story() {
    const [stories, setStories] = useState([]);
    const [story, setStory] = useState({})
    const { id: story_id } = useParams();
    const [isScreenLoading, setIsScreenLoading] = useState(false)
    const dispatch = useDispatch();

    const getStoryList = useCallback(async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/articles`);
            setStories(res.data.articles);
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '取得文章失敗',
                status: "failed"
            }))
        }
    }, [dispatch]);

    const getStoryDetail = useCallback(async () => {
        setIsScreenLoading(true)
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/article/${story_id}`);
            setStory(res.data.article);
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message,
                type: '取得文章失敗',
                status: "failed"
            }))
        } finally {
            setIsScreenLoading(false)
        }
    }, [story_id, dispatch]);

    useEffect(() => {
        getStoryDetail();
        getStoryList();
    }, [getStoryDetail, getStoryList])

    return (<>
        <main>
            {/* <!--banner--> */}
            <Banner
                bannerImg={story.image}
                title="產品故事"
                enTitle="Story"
                slogan1="探索農田的秘密"
            />
            {/* <!--文章--> */}
            <section>
                <div className="container pb-lg-11 pt-lg-7 py-md-7 py-4 d-flex flex-column flex-lg-row position-relative">
                    <img src="images/Illustration/trees.png" alt="tree" className="deco-tree" />
                    <article className="story-article bg-secondary-200 p-lg-7 p-5 rounded-3 mb-5 mb-lg-0">
                        <div className="d-sm-flex justify-content-between align-items-baseline mb-lg-5 mb-3">
                            <h4 className="fs-lg-1 fs-md-3 text-nowrap">{story.title}</h4>
                            <p className="text-gray fs-7 fw-normal" >{new Date(story.create_at).toLocaleDateString()}</p>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: story.description }}></p>
                        <img src={story.image} className="img-fluid story-cauliflower-img" />
                        <p dangerouslySetInnerHTML={{ __html: story.content }}></p>
                        <img src={story.image2} className="img-fluid story-cauliflower-img" />
                    </article>
                    <aside className="ms-lg-5 mb-8 mb-lg-5">
                        <div className="list-group list-group-flush p-5 bg-secondary rounded-3" style={{ position: 'sticky', top: '130px' }}>
                            <Link className="story-cauliflower-btn list-group-item list-group-item-action bg-primary text-white text-center mb-3" to='/Stories'>產地故事</Link>
                            {stories.map((item) => {
                                return (
                                    <Link className={`story-cauliflower-btn list-group-item list-group-item-action mb-3 d-flex align-items-center ${item.id === story_id ? 'active' : ''}`} key={item.id} to={`/stories/${item.id}`}>
                                        <span className="material-symbols-outlined fs-4">chevron_left</span>
                                        {item.title}
                                    </Link>)
                            })}
                        </div>
                    </aside>
                </div>
            </section>
        </main>
        <IsScreenLoading isScreenLoading={isScreenLoading} />
        <Toast />
    </>
    )
}

export default Story;