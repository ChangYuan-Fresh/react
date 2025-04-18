import Banner from "../layout/Banner";
function About() {
    return (<>
        <Banner
            bannerImg={"images/banner2.webp"}
            title="關於我們"
            enTitle="About us"
            slogan1="在彰化"
            slogan2="有一群充滿熱情的孩子"
        />
        <div className="container">
            <div className="banner">
                <div className="content-block row g-lg-5 g-0 w-100 my-lg-11 my-0 px-0">
                    <div className="col d-lg-none number mb-5 ms-3">01</div>
                    <div className="col-12 col-lg-6">
                        <img className="mb-0" src="images/about1.webp" />
                    </div>
                    <div className="col-lg-6 card border-0 h-100 px-0 mb-5 mb-lg-0" >
                        <div className="card-body d-flex flex-column justify-content-between py-0 px-0 px-lg-4">
                            <h5 className="card-title number ms-auto d-none d-lg-block">01</h5>
                            <div className="bgchange py-lg-6 py-4 px-lg-7 px-3 fs-lg-5 fs-6 " style={{ borderRadius: "16px" }}>
                                <p className="card-text">這些孩子從小在彰化的田間農地長大，品嚐著在地美味及各種小吃，這些不僅是他們成長的記憶，更是他們心中最珍貴的寶藏。
                                    <br />
                                    這群孩子長大了，但對家鄉的熱愛從未減退。他們決定將這份熱情轉化為行動，2024年7月創立了一個名為「彰源鮮味」的品牌。他們的目標是將彰化的農產讓世界的看得見。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-block row g-lg-5 g-0 w-100 my-lg-11 my-0 px-0 d-flex flex-lg-row-reverse">
                    <div className="col d-lg-none number mb-5 ms-3">02</div>
                    <div className="col-12 col-lg-6">
                        <img className="mb-0" src="images/about2.webp" />
                    </div>
                    <div className="col-lg-6 card border-0 h-100 px-0 mb-5 mb-lg-0" >
                        <div className="card-body d-flex flex-column justify-content-between py-0 px-0 px-lg-4">
                            <h5 className="card-title number me-auto d-none d-lg-block">02</h5>
                            <div className=" py-lg-6 py-4 px-lg-7 px-3 fs-lg-5 fs-6 bgchange" style={{ borderRadius: "16px" }}>
                                <p>
                                    我們的目標是縮短供應鏈，直接從彰化送到消費者手中，確保產品的新鮮度和品質，同時支持彰化在地農民和生產者。
                                    <br />
                                    <br />
                                    我們希望通過透明的供應鏈和嚴格的品質控制，讓消費者能夠安心享用每一口美味，並感受到來自產地的純粹與自然。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="content-block row g-lg-5 g-0 w-100 my-lg-11 my-0 px-0">
                    <div className="col d-lg-none number mb-5 ms-3">03</div>
                    <div className="col-12 col-lg-6">
                        <img className="mb-0" src="images/about3.webp" />
                    </div>
                    <div className="col-lg-6 card border-0 h-100 px-0 mb-8 mb-lg-0" >
                        <div className="card-body d-flex flex-column justify-content-between py-0 px-0 px-lg-4">
                            <h5 className="card-title number ms-auto d-none d-lg-block">03</h5>
                            <div className="bgchange py-lg-6 py-4 px-lg-7 px-3 fs-lg-5 fs-6" style={{ borderRadius: "16px" }}>
                                <p>
                                    近年食安意識的提升，我們致力於建立嚴格的品質控制和檢測系統，確保每一件產品都符合最高的食品安全標準。
                                    <br />
                                    <br />
                                    我們的目標是讓消費者能夠安心享用每一口美味，並對食品的來源和品質充滿信心。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src="images/Illustration/Bottom-Curve.png" alt="" className="d-lg-block d-none allProduct-bottom-mask" />
        </div>
    </>)
}

export default About;