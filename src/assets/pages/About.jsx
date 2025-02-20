import Banner from "../layout/Banner";
function About() {
    return (<>
        <div className="banner">
            <Banner
                bannerImg={"/images/banner2.png"}
                title="關於我們"
                enTitle="About us"
                slogan1="在彰化"
                slogan2="有一群充滿熱情的孩子"
            />
            <div className="content-block bg-01">
                <img src="/images/about1.png" />
                <div className="text-content d-flex flex-column justify-content-between">
                    <div className="number text-end">01</div>
                    <div className="text">
                        <p>
                            這些孩子從小在彰化的田間農地長大，品嚐著在地美味及各種小吃，這些不僅是他們成長的記憶，更是他們心中最珍貴的寶藏。
                            <br />
                            這群孩子長大了，但對家鄉的熱愛從未減退。他們決定將這份熱情轉化為行動，2024年7月創立了一個名為「彰源鮮味」的品牌。他們的目標是將彰化的農產讓世界的看得見。
                        </p>
                    </div>
                </div>
            </div>
            <div className="content-block reverse">
                <div className="text-content d-flex flex-column justify-content-between">
                    <div className="number">02</div>
                    <div className="text">
                        <p>
                            我們的目標是縮短供應鏈，直接從彰化送到消費者手中，確保產品的新鮮度和品質，同時支持彰化在地農民和生產者。
                            <br />
                            <br />
                            我們希望通過透明的供應鏈和嚴格的品質控制，讓消費者能夠安心享用每一口美味，並感受到來自產地的純粹與自然。
                        </p>
                    </div>
                </div>
                <div className="img-container">
                    <img src="/images/about2.png" />
                </div>
            </div>
            <div className="content-block">
                <img src="/images/about3.png" />
                <div className="text-content d-flex flex-column justify-content-between">
                    <div className="number text-end">03</div>
                    <div className="text">
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
        <div>
            <img src="/images/Illustration/Bottom-Curve.png" alt="" className="d-lg-block d-none allProduct-bottom-mask" />
        </div>
    </>)
}

export default About;