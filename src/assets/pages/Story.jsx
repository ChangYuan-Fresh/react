import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import axios from 'axios'
import Banner from "../layout/Banner";
import IsScreenLoading from "../component/IsScreenLoading";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function Story() {
    const [stories, setStories] = useState([]);
    const [story, setStory] = useState({})
    const { id: story_id } = useParams();
    const [isScreenLoading, setIsScreenLoading] = useState(false)

    const getStoryList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/articles`);
            setStories(res.data.articles);
        } catch (error) {
            alert('取得文章失敗', error.data.message)
        }
    }

    const getStoryDetail = async () => {
        setIsScreenLoading(true)
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/article/${story_id}`);
            setStory(res.data.article);
        } catch (error) {
            alert('取得文章失敗', error.data.message)
        } finally {
            setIsScreenLoading(false)
        }
    }

    useEffect(() => {
        getStoryDetail();
        getStoryList();
    }, [story_id])

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
                            <p className="text-gray fs-7" >{new Date(story.create_at).toLocaleDateString()}</p>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: story.description }}></p>
                        <img src={story.image} className="img-fluid story-cauliflower-img" />
                        <p dangerouslySetInnerHTML={{ __html: story.content }}></p>
                        <img src={story.image2} className="img-fluid story-cauliflower-img" />
                    </article>
                    <aside className="ms-lg-5 mb-8 mb-lg-5 sticky-lg-top ">
                        <div className="list-group list-group-flush p-5 bg-secondary rounded-3 sticky-top ">
                            <Link className="story-cauliflower-btn list-group-item list-group-item-action bg-primary text-white text-center mb-3" to='/Stories'>產地故事</Link>
                            {stories.map((item) => {
                                return (
                                    <Link className={`story-cauliflower-btn list-group-item list-group-item-action mb-3 ${item.id === story_id ? 'active' : ''}`} key={item.id} to={`/stories/${item.id}`}>
                                        <span className="material-symbols-outlined align-middle fs-7">chevron_left</span>{item.title}
                                    </Link>)
                            })}
                        </div>
                    </aside>
                </div>
            </section>
        </main>
        <IsScreenLoading isScreenLoading={isScreenLoading} />
    </>
    )
}

export default Story;