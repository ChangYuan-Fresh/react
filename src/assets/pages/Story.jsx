function Story() {
    return (<>
        <main>
            {/* <!--banner--> */}
            <section className=" px-lg-10 position-relative h-100" >
                <img src="src/assets/images/Cauliflower HQ (2).png" alt="banner" className="banner-img w-100" />
                <div className="container">
                    <div className="position-absolute top-50 translate-middle-y ">
                        <h6 className="fs-lg-4 bg-white px-2 px-lg-4 py-2 d-inline-block mb-2 mb-lg-4">產品故事 <span className="fs-lg-5 align-baseline">Story</span>
                        </h6>
                        <h4 className="fs-lg-1 bg-primary text-white px-2 px-lg-4 py-2 py-lg-3">探索農田的秘密</h4>
                    </div>
                    <img src="src/assets/images/Illustration/Top-Curve(2).png" alt="Top-Curve" className="deco-curve" />
                </div>
            </section>
            {/* <!--文章--> */}
            <section>
                <div className="container pb-lg-11 pt-lg-7 py-md-7 py-4 d-flex flex-column-reverse flex-lg-row position-relative">
                    <img src="src/assets/images/Illustration/trees.png" alt="tree" className="deco-tree" />
                    <article className="story-article bg-secondary-200 p-lg-7 p-5 rounded-3">
                        <div className="d-sm-flex justify-content-between align-items-baseline mb-lg-5 mb-3">
                            <h4 className="fs-lg-1 fs-md-3 text-nowrap">種植花椰菜的小故事</h4>
                            <p className="text-gray fs-7" >2024/08/09</p>
                        </div>
                        <p className="mb-3 fs-lg-4">花椰菜和青花菜雖然長得很相似,也常有不少人把青花菜說是綠花椰菜,但兩個可不一樣。</p>
                        <p className="fs-lg-4">青花菜、花椰菜都屬於十字花科蕓薹屬甘藍類蔬菜,由野生甘藍經過突變、演化而來,青花菜是甘藍演化成花椰菜過程的中間產物。</p>
                        <img src="src/assets/images/Cauliflower HQ (7).png" alt="Cauliflower" className="img-fluid story-cauliflower-img" />
                        <p className="mb-3 fs-lg-4">如果仔細觀察所吃的部位,會發現兩者有所不同。花椰菜吃的是未分化的花原體,屬於重複分支的肉質組織,我們平常吃的部位就是它的花球。</p>
                        <p className="fs-lg-4">而且花椰菜有白、黃、綠、橘、紫等色,顏色繽紛又可愛,看了就十分討喜。</p>
                        <img src="src/assets/images/broccoli.jpg" alt="broccoli" className="img-fluid story-cauliflower-img" />
                        <p className="mb-3 fs-lg-4">而青花菜吃的是花蕾球,是由莖頂的花莖,加上聚集成球狀的已分化組織組成。</p>
                        <p className="fs-lg-4">如果到青花菜田裡,就有機會看見青花菜開花的樣子,在我們吃的部位,會開出一朵又一朵的黃色小花,花瓣4片呈十字,這個特徵在很多十字花科植物裡都能看到喔!</p>
                        <img src="src/assets/images/Cauliflower HQ (8).png" alt="Cauliflower" className="img-fluid story-cauliflower-img" />
                    </article>
                    <aside className="ms-lg-5 mb-3 mb-lg-5 sticky-top ">
                        <div className="list-group list-group-flush p-5 bg-secondary rounded-3 sticky-top ">
                            <a href="story.html" className="story-cauliflower-btn list-group-item list-group-item-action bg-primary text-white text-center mb-3">產地故事</a>
                            <a href="story-cauliflower.html" className="story-cauliflower-btn list-group-item list-group-item-action active mb-3" aria-current="true">
                                <span className="material-symbols-outlined align-middle fs-7">chevron_left</span>種植花椰菜的小故事
                            </a>
                            <a href="story-grape.html" className="story-cauliflower-btn list-group-item list-group-item-action mb-3"><span className="material-symbols-outlined align-middle fs-7">chevron_left</span>葡萄園的奧秘</a>
                            <a href="story-farm.html" className="story-cauliflower-btn list-group-item list-group-item-action mb-3"><span className="material-symbols-outlined align-middle fs-7">chevron_left</span>從牧場到餐桌的旅程</a>
                            <a href="story-clam.html" className="story-cauliflower-btn list-group-item list-group-item-action mb-0"><span className="material-symbols-outlined align-middle fs-7">chevron_left</span>用蛤打造的精緻佳餚</a>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    </>
    )
}

export default Story;