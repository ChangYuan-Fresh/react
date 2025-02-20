function ProductPCNav (){
    return(<section className="accordion d-lg-block d-none" id="accordionSidebar">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <a href="allProduct.html" className="accordion-button active px-0 fw-bold fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    熱門商品
                </a>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionSidebar">

            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <a href="allProduct-VegNFruit.html" className="accordion-button collapsed px-0 fw-bold fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    蔬菜水果
                </a>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionSidebar">
                <div className="accordion-body p-0">
                    <a href="allProduct-VegNFruit.html" className="text-black fw-normal ps-4 py-2">蔬菜</a><br />
                    <a href="allProduct-VegNFruit.html" className="text-black fw-normal ps-4 py-2">水果</a><br />
                    <a href="allProduct-VegNFruit.html" className="text-black fw-normal ps-4 py-2">穀物</a>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <a href="allProduct-Meat.html" className="accordion-button collapsed px-0 fw-bold fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    生鮮肉品
                </a>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionSidebar">
                <div className="accordion-body p-0">
                    <a href="allProduct-Meat.html" className="text-black fw-normal ps-4 py-2">牛肉</a><br />
                    <a href="allProduct-Meat.html" className="text-black fw-normal ps-4 py-2">豬肉</a><br />
                    <a href="allProduct-Meat.html" className="text-black fw-normal ps-4 py-2">羊肉</a><br />
                    <a href="allProduct-Meat.html" className="text-black fw-normal ps-4 py-2">雞肉</a><br />
                    <a href="allProduct-Meat.html" className="text-black fw-normal ps-4 py-2">鴨鵝</a>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
                <a href="allProduct-Aquatic.html" className="accordion-button collapsed px-0 fw-bold fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    水產海鮮
                </a>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionSidebar">
                <div className="accordion-body p-0">
                    <a href="allProduct-Aquatic.html" className="text-black fw-normal ps-4 py-2">魚類</a><br />
                    <a href="allProduct-Aquatic.html" className="text-black fw-normal ps-4 py-2">蝦蟹</a><br />
                    <a href="allProduct-Aquatic.html" className="text-black fw-normal ps-4 py-2">貝類</a><br />
                    <a href="allProduct-Aquatic.html" className="text-black fw-normal ps-4 py-2">其他</a>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
                <a href="allProduct-Dairy.html" className="accordion-button collapsed px-0 fw-bold fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    蛋與乳品
                </a>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionSidebar">
                <div className="accordion-body p-0">
                    <a href="allProduct-Dairy.html" className="text-black fw-normal ps-4 py-2">蛋品</a><br />
                    <a href="allProduct-Dairy.html" className="text-black fw-normal ps-4 py-2">乳製品</a>
                </div>
            </div>
        </div>
    </section>)
}

export default ProductPCNav