import { Link } from 'react-router';
import { useEffect, useState } from "react";
import axios from 'axios'
import Banner from "../layout/Banner";
import PaginationCompo from "../component/PaginationCompo";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function Stories() {
    const [stories, setStories] = useState([]);

    const getStoryList = async()=>{
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/articles`);
            setStories(res.data.articles);
        } catch (error) {
            alert('取得文章失敗' || error.data.message)
        } 
    }

    useEffect(()=>{
        getStoryList();
    },[])

    return (<>
        <main>
            {/* <!--banner--> */}
            <Banner
                bannerImg={"/images/banner3.png"}
                title="產品故事"
                enTitle="Story"
                slogan1="探索農田的秘密"
            />
            {/* <!--故事列表--> */}
            <section>
                <div className="container position-relative py-lg-11 py-6">
                    <img src="src/assets/images/Illustration/peace.png" alt="peace" className="story-deco1" />
                    {/* <!--文章列表--> */}
                    <div className="row row-cols-1 gy-6">
                        {stories.map((story)=>{
                            return (
                            <div className="col" key={story.id}>
                                <div className="card story-card d-flex flex-lg-row flex-column border-0 rounded-4 bg-secondary-200 p-5 w-100">
                                    <img src={story.image} alt={story.title} className="rounded-4" />
                                    <div className="card-body d-flex flex-column justify-content-between px-lg-4 px-0 py-lg-0 pt-4 pb-0 w-50">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-baseline ">
                                                <h6 className="card-title fs-lg-2  fs-md-4 fs-sm-5 text-primary text-nowrap">{story.title}</h6>
                                                <p className="card-text text-gray d-none d-lg-block"><small>{new Date(story.create_at).toLocaleDateString()}</small></p>
                                            </div>
                                            <p className="card-text fs-lg-5 d-lg-block d-none">{story.description}</p>
                                        </div>
                                        <div className="d-lg-flex justify-content-end d-none">
                                            <Link className="btn text-accent fw-bolder fs-3" to={`/stories/${story.id}`}>More<span className="material-symbols-outlined align-middle">chevron_right</span></Link>
                                        </div>
                                    </div>
                                    <a href="story-cauliflower.html"><p className="card-text text-accent fw-bolder d-lg-none d-block ">More<span className="material-symbols-outlined align-middle">chevron_right</span></p></a>
                                </div>
                            </div>)
                        })}
                        
                    </div>
                    <img src="src/assets/images/Illustration/house.png" alt="house" className="story-deco2" />
                    {/* <!--頁籤--> */}
                    <div className="pt-6 pt-lg-7">
                        <PaginationCompo pageInfo={{
                            "total_pages": 3,
                            "current_page": 1,
                            "has_pre": false,
                            "has_next": false,
                            "category": ""
                        }} />
                    </div>
                </div>
            </section>
        </main>
    </>
    )
}

export default Stories;