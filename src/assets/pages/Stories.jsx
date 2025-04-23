import { Link } from 'react-router';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import axios from 'axios'
import Banner from "../layout/Banner";
import Toast from '../layout/Toast';
import { createAsyncMessage } from '../redux/slice/toastSlice';


const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function Stories() {
    const [stories, setStories] = useState([]);
    const dispatch = useDispatch();

    const getStoryList = async () => {
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
    }

    useEffect(() => {
        getStoryList();
    }, [])

    return (<>
        <main>
            {/* <!--banner--> */}
            <Banner
                bannerImg={"images/banner3.webp"}
                title="產品故事"
                enTitle="Story"
                slogan1="探索農田的秘密"
            />
            {/* <!--故事列表--> */}
            <section>
                <div className="container position-relative py-lg-11 py-4">
                    <img src="images/Illustration/peace.png" alt="peace" className="story-deco1" />
                    {/* <!--文章列表--> */}
                    <div className="row row-cols-1 gy-6 mb-10">
                        {stories.map((story) => {
                            return (
                                <div className="col" key={story.id}>
                                    <div className="card story-card d-flex flex-lg-row flex-column border-0 rounded-4 bg-secondary-200 p-5 w-100">
                                        <img src={story.image} alt={story.title} className="rounded-4" />
                                        <div className="card-body d-flex flex-column justify-content-between px-lg-4 px-0 py-lg-0 pt-4 pb-0 w-50">
                                            <div>
                                                <div className="d-flex justify-content-between align-items-baseline ">
                                                    <h4 className="card-title fs-md-4 fs-5 text-primary text-nowrap mb-2 mb-lg-0">{story.title}</h4>
                                                    <p className="card-text text-gray d-none d-lg-block"><small className="fw-normal">{new Date(story.create_at).toLocaleDateString()}</small></p>
                                                </div>
                                                {story.description
                                                    ?.replace(/<\/?br\s*\/?>/gi, '<br/><br/>') 
                                                    .split(/<br\s*\/?>\s*<br\s*\/?>/gi)   
                                                    .filter(line => line.trim() !== '')
                                                    .map((line, idx) => (
                                                        <p key={idx} className="card-text fs-lg-6 fw-normal d-lg-block d-none">
                                                            {line.trim()}
                                                        </p>
                                                    ))}
                                            </div>
                                            <div className="d-lg-flex justify-content-end d-none">
                                                <Link className="btn text-accent fw-bolder fs-3 d-flex align-items-center" to={`/stories/${story.id}`}>看更多<span className="material-symbols-outlined align-middle fs-4">chevron_right</span></Link>
                                            </div>
                                        </div>
                                        <Link to={`/stories/${story.id}`}><p className="card-text text-accent fw-bolder d-lg-none d-block ">More<span className="material-symbols-outlined align-middle">chevron_right</span></p>
                                        </Link>
                                    </div>
                                </div>)
                        })}

                    </div>
                    <img src="images/Illustration/house.png" alt="house" className="story-deco2" />
                </div>
            </section>
        </main>
        <Toast />
    </>
    )
}

export default Stories;