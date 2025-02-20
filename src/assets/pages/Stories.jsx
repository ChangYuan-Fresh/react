import { Link } from "react-router";
import Banner from "../layout/Banner";

function Stories() {
    return (<>
        <main>
            {/* <!--banner--> */}
            <Banner
            bannerImg={"/images/banner3.png"}
            title="產品故事"
            enTitle="Story"
            slogan1="產地到餐桌"
            />
            {/* <!--故事列表--> */}
            <section>
                <div className="container position-relative py-lg-11 py-6">
                    <img src="src/assets/images/Illustration/peace.png" alt="peace" className="story-deco1"/>
                        {/* <!--文章列表--> */}
                        <div className="row row-cols-1 gy-6">
                            <div className="col">
                                <div className="card story-card d-flex flex-lg-row flex-column border-0 rounded-4 bg-secondary-200 p-5 w-100">
                                    <img src="src/assets/images/Cauliflower HQ (2).png" alt="Cauliflower" className="rounded-4" />
                                    <div className="card-body d-flex flex-column justify-content-between px-lg-4 px-0 py-lg-0 pt-4 pb-0 w-50">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-baseline ">
                                                <h6 className="card-title fs-lg-2  fs-md-4 fs-sm-5 text-primary text-nowrap">種植花椰菜的小故事</h6>
                                                <p className="card-text text-gray d-none d-lg-block"><small>2024/08/09</small></p>
                                            </div>
                                            <p className="card-text fs-lg-5 d-lg-block d-none">花椰菜和青花菜雖然長得很相似，也常有不少人把青花菜說是綠花椰菜，但兩個可不一樣。 青花菜、花椰菜都屬於十字花科蕓薹屬甘藍類蔬菜，由野生甘藍經過突變、演化而來，青花菜是.....</p>
                                        </div>
                                        <div className="d-lg-flex justify-content-end d-none">
                                            <a href="story-cauliflower.html" className="btn text-accent fw-bolder fs-3">More<span className="material-symbols-outlined align-middle">chevron_right</span></a>
                                        </div>
                                    </div>
                                    <a href="story-cauliflower.html"><p className="card-text text-accent fw-bolder d-lg-none d-block ">More<span className="material-symbols-outlined align-middle">chevron_right</span></p></a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card story-card d-flex flex-lg-row flex-column border-0 rounded-4 bg-secondary p-5 w-100">
                                    <img src="src/assets/images/story1.png" alt="grape" className="rounded-4" />
                                    <div className="card-body d-flex flex-column justify-content-between px-lg-4 px-0 py-lg-0 pt-4 pb-0 w-50">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-baseline">
                                                <h6 className="card-title fs-lg-2 fs-md-4 fs-sm-5 text-primary text-nowrap">葡萄園的奧秘</h6>
                                                <p className="card-text text-gray d-none d-lg-block"><small>2024/08/10</small></p>
                                            </div>
                                            <p className="card-text fs-lg-5 d-lg-block d-none">說到葡萄的風土, 大家第一反應就會想到法國或者是其他歐美國家,但卻很少想到台灣也有自己在地的葡萄園.....</p>
                                        </div>
                                        <div className="d-lg-flex justify-content-lg-end d-none">
                                            <a href="story-grape.html" className="btn text-accent fw-bolder fs-3">More<span className="material-symbols-outlined align-middle">chevron_right</span></a>
                                        </div>
                                    </div>
                                    <a href="story-grape.html"><p className="card-text text-accent fw-bolder d-lg-none d-block">More<span className="material-symbols-outlined align-middle">chevron_right</span></p></a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card story-card d-flex flex-lg-row flex-column border-0 rounded-4 bg-secondary-200 p-5 w-100">
                                    <img src="src/assets/images/about3.png" alt="farm" className="rounded-4" />
                                    <div className="card-body d-flex flex-column justify-content-between px-lg-4 px-0 py-lg-0 pt-4 pb-0 w-50">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-baseline">
                                                <h6 className="card-title fs-lg-2 fs-md-4 fs-sm-5 text-primary text-nowrap">從牧場到餐桌的旅程</h6>
                                                <p className="card-text text-gray d-none d-lg-block"><small>2024/08/11</small></p>
                                            </div>
                                            <p className="card-text fs-lg-5 d-lg-block d-none">近年政府大力推動「農產品生產及驗證管理法」、「優良農產品驗證制度」、「產銷履歷驗證制度」等.....</p>
                                        </div>
                                        <div className="d-lg-flex justify-content-lg-end d-none">
                                            <a href="story-farm.html" className="btn text-accent fw-bolder fs-3">More<span className="material-symbols-outlined align-middle">chevron_right</span></a>
                                        </div>
                                    </div>
                                    <a href="story-farm.html"><p className="card-text text-accent fw-bolder d-lg-none d-block">More<span className="material-symbols-outlined align-middle">chevron_right</span></p></a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card story-card d-flex flex-lg-row flex-column border-0 rounded-4 bg-secondary p-5 w-100">
                                    <img src="src/assets/images/Kindelmedia 8352389 1.png" alt="clam" className="rounded-4" />
                                    <div className="card-body d-flex flex-column justify-content-between px-lg-4 px-0 py-lg-0 pt-4 pb-0 w-50">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-baseline">
                                                <h6 className="card-title fs-lg-2 fs-md-4 fs-sm-5 text-primary text-nowrap">用蛤打造的精緻佳餚</h6>
                                                <p className="card-text text-gray d-none d-lg-block"><small>2024/08/16</small></p>
                                            </div>
                                            <p className="card-text fs-lg-5 d-lg-block d-none">蛤，作為一種常見的海鮮食材，不僅營養豐富，而且味道鮮美。無論是簡單的家常菜還是高級餐廳的精緻料理，蜆都能成為一道亮眼的主角。以下是幾道用蜆打造的.....</p>
                                        </div>
                                        <div className="d-lg-flex justify-content-lg-end d-none">
                                            <a href="story-clam.html" className="btn text-accent fw-bolder fs-3">More<span className="material-symbols-outlined align-middle">chevron_right</span></a>
                                        </div>
                                    </div>
                                    <a href="story-clam.html"><p className="card-text text-accent fw-bolder d-lg-none d-block">More<span className="material-symbols-outlined align-middle">chevron_right</span></p></a>
                                </div>
                            </div>
                        </div>
                        <img src="src/assets/images/Illustration/house.png" alt="house" className="story-deco2" />
                        {/* <!--頁籤--> */}
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center  pt-6 pt-lg-7">
                                <li className="page-item me-3 ">
                                    <a className="page-link border-0 page-arrow" href="#" aria-label="Previous">
                                        <span aria-hidden="true" className="material-symbols-outlined">
                                            chevron_left
                                        </span>
                                    </a>
                                </li>
                                <li className="page-item active" aria-current="page"><a className="page-link border-0 fs-5 rounded-4 me-3" href="#">1</a></li>
                                <li className="page-item"><a className="page-link border-0 fs-5 rounded-4 me-3" href="#">2</a></li>
                                <li className="page-item"><a className="page-link border-0 fs-5 rounded-4" href="#">3</a></li>
                                <li className="page-item ms-3">
                                    <a className="page-link border-0 page-arrow" href="#" aria-label="Next">
                                        <span aria-hidden="true" className="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                </div>
            </section>
        </main>
    </>
    )
}

export default Stories;