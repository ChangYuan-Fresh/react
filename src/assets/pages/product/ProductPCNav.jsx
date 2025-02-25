import { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;


function ProductPCNav (){
    const [products, setProducts] = useState([]);
    const [selectCategory, setSelectCategory] = useState('熱門商品')
    const getProductList = async () => {
        try {
            const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/products`);
            setProducts(res.data.products);
        } catch (error) {
            alert('取得資料失敗' || error.data.message)
        } finally {
        }
    }

    useEffect(() => {
        getProductList();
    }, [])

    const categories = [...new Set(products.map((product)=> product.category))];

    const filterProducts = products.filter((product)=>{
        if(selectCategory === '熱門商品') return product;

        return product.categories === selectCategory
    })

    return(
    <section className="accordion d-lg-block d-none" id="accordionSidebar">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <a href="allProduct.html" className="accordion-button active px-0 fw-bold fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    熱門商品
                </a>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionSidebar">

            </div>
        </div>
        {categories.map((category)=>{
            return(<div className="accordion-item" key={category}>
                <h2 className="accordion-header" id="headingTwo">
                    <button type="button" className="accordion-button collapsed px-0 fw-bold fs-4" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {category}
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionSidebar">
                    <div className="accordion-body p-0">
                        <button type="button" className="text-black fw-normal ps-4 py-2 btn">子項目1</button><br />
                        <button type="button" className="text-black fw-normal ps-4 py-2 btn">子項目2</button><br />
                        <button type="button" className="text-black fw-normal ps-4 py-2 btn">子項目3</button>
                    </div>
                </div>
            </div>)
        })}
    </section>)
}

export default ProductPCNav