function ProductMobileNav() {
    return (
        <div className="overflow-hidden container mb-5">
            {/* <!-- Navs --> */}
            <ul className="nav nav-pills d-lg-none d-flex justify-content-between flex-nowrap text-nowrap allProduct-nav-pills" id="productTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a href="allProduct.html" className="nav-link active" id="hot-products-tab" data-bs-toggle="pill" data-bs-target="#hot-products" aria-controls="hot-products" role="tab" aria-selected="true">
                        熱門商品
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="allProduct-VegNFruit.html" className="nav-link" id="veggie-fruits-tab" data-bs-toggle="pill" data-bs-target="#veggie-fruits" aria-controls="veggie-fruits" role="tab" aria-selected="false" style={{ minWidth: "4rem" }}>
                        蔬菜水果
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="allProduct-Meat.html" className="nav-link" id="meats-tab" data-bs-toggle="pill" data-bs-target="#meats" aria-controls="meats" role="tab" aria-selected="false" style={{ minWidth: "4rem" }}>
                        生鮮肉品
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="allProduct-Aquatic.html" className="nav-link" id="seafood-tab" data-bs-toggle="pill" data-bs-target="#seafood" aria-controls="seafood" role="tab" aria-selected="false" style={{ minWidth: "4rem" }}>
                        水產海鮮
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="allProduct-Dairy.html" className="nav-link" id="dairy-products-tab" data-bs-toggle="pill" data-bs-target="#dairy-products" aria-controls="dairy-products" role="tab" aria-selected="false" style={{ minWidth: "4rem" }}>
                        蛋與乳品
                    </a>
                </li>
            </ul>

            {/* <!-- Tab內容 --> */}
            <div className="tab-content d-lg-none flex-nowrap text-nowrap" id="productTabContent">
                <div className="tab-pane fade show active" id="hot-products" role="tabpanel" aria-labelledby="hot-products-tab">
                    <a href="allProduct.html"></a>
                </div>
                <div className="tab-pane fade" id="veggie-fruits" role="tabpanel" aria-labelledby="veggie-fruits-tab">
                    <a href="allProduct-VegNFruit.html" className="fw-normal px-4 py-4">蔬菜</a>
                    <a href="allProduct-VegNFruit.html" className="fw-normal px-4 py-4">水果</a>
                    <a href="allProduct-VegNFruit.html" className="fw-normal px-4 py-4">穀物</a>
                </div>
                <div className="tab-pane fade" id="meats" role="tabpanel" aria-labelledby="meats-tab">
                    <a href="allProduct-Meat.html" className="fw-normal px-4 py-4">牛肉</a>
                    <a href="allProduct-Meat.html" className="fw-normal px-4 py-4">豬肉</a>
                    <a href="allProduct-Meat.html" className="fw-normal px-4 py-4">羊肉</a>
                    <a href="allProduct-Meat.html" className="fw-normal px-4 py-4">雞肉</a>
                    <a href="allProduct-Meat.html" className="fw-normal px-4 py-4">鴨鵝</a>
                </div>
                <div className="tab-pane fade" id="seafood" role="tabpanel" aria-labelledby="seafood-tab">
                    <a href="allProduct-Aquatic.html" className="fw-normal px-4 py-4">魚類</a>
                    <a href="allProduct-Aquatic.html" className="fw-normal px-4 py-4">蝦蟹</a>
                    <a href="allProduct-Aquatic.html" className="fw-normal px-4 py-4">貝類</a>
                    <a href="allProduct-Aquatic.html" className="fw-normal px-4 py-4">其他</a>
                </div>
                <div className="tab-pane fade" id="dairy-products" role="tabpanel" aria-labelledby="dairy-products-tab">
                    <a href="allProduct-Dairy.html" className="fw-normal px-4 py-4">蛋品</a>
                    <a href="allProduct-Dairy.html" className="fw-normal px-4 py-4">乳製品</a>
                </div>
            </div>
        </div>)
}
export default ProductMobileNav