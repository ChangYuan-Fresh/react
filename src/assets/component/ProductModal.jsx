import { useEffect, useRef } from 'react'
import axios from 'axios'
import { Modal } from 'bootstrap';
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../redux/slice/toastSlice';
import PropTypes from 'prop-types';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function ProductModal({ modalMode, tempProduct, getProductList, setTempProduct, modelRef }) {
    const productRef = useRef(null);
    const dispatch = useDispatch();
    //新增產品
    const createNewProduct = async () => {
        try {
            const res = await axios.post(`${baseUrl}/v2/api/${apiPath}/admin/product`, {
                data: {
                    ...tempProduct,
                    origin_price: Number(tempProduct.origin_price),
                    price: Number(tempProduct.price),
                    is_enabled: tempProduct.is_enabled ? 1 : 0,
                    product_stock: Number(tempProduct.product_stock),
                    is_frozen: tempProduct.is_frozen ? 1 : 0,
                    sub_category: tempProduct.sub_category,
                    sub_title: tempProduct.sub_title
                }
            });
            dispatch(createAsyncMessage({
                text: res.data.message,
                type: '新增產品成功',
                status: "success"
            }));
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message.join("、"),
                type: '新增產品失敗',
                status: "failed"
            }));
        }
    }
    //更新產品
    const updateProduct = async () => {
        try {
            const res = await axios.put(`${baseUrl}/v2/api/${apiPath}/admin/product/${tempProduct.id}`, {
                data: {
                    ...tempProduct,
                    origin_price: Number(tempProduct.origin_price),
                    price: Number(tempProduct.price),
                    is_enabled: tempProduct.is_enabled ? 1 : 0,
                    product_stock: Number(tempProduct.product_stock),
                    is_frozen: tempProduct.is_frozen ? 1 : 0,
                    sub_category: tempProduct.sub_category,
                    sub_title: tempProduct.sub_title
                }
            });
            dispatch(createAsyncMessage({
                text: res.data.message,
                type: '更新產品成功',
                status: "success"
            }))
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message.join("、"),
                type: '更新產品失敗',
                status: "failed"
            }))
        }
    }
    //新增或更新產品
    const btnUpdateProduct = async () => {
        try {
            const apiswitch = modalMode === 'create' ? createNewProduct : updateProduct;
            await apiswitch();
            getProductList();
            closeModal()
        } catch (error) {
            const { message } = error.response.data;
            dispatch(createAsyncMessage({
                text: message.join("、"),
                type: '失敗',
                status: "failed"
            }))
        } finally {
            closeModal()
        }

    }
    //上傳圖片
    const fileUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file-to-upload', file)
        try {
            const res = await axios.post(`${baseUrl}/v2/api/${apiPath}/admin/upload`, formData);
            const upLoadImgUrl = res.data.imageUrl;
            setTempProduct({
                ...tempProduct,
                imageUrl: upLoadImgUrl
            })
        } catch (error) {
            alert(error.response.data.message)
        } finally {
            e.target.value = "";
        }
    }
    //表單控制
    const getinputValue = (e) => {
        const { value, name, checked, type } = e.target;
        setTempProduct({
            ...tempProduct,
            [name]: type === "checkbox" ? checked : value
        })
    }
    const imageChange = (e, index) => {
        const { value } = e.target;
        const newImages = [...tempProduct.imagesUrl];
        newImages[index] = value;
        setTempProduct({
            ...tempProduct,
            imagesUrl: newImages
        })
    }
    const addImage = () => {
        const newImages = [...tempProduct.imagesUrl, ''];

        setTempProduct({
            ...tempProduct,
            imagesUrl: newImages
        })
    }

    const removeImage = () => {
        const newImages = [...tempProduct.imagesUrl];

        newImages.pop();

        setTempProduct({
            ...tempProduct,
            imagesUrl: newImages
        })
    }
    //modal控制
    const closeModal = () => {
        modelRef.current.hide()
    }
    useEffect(() => {
        modelRef.current = new Modal(productRef.current, {
            backdrop: false
        })
    }, [modelRef])

    return (
        <div className="modal" tabIndex="-1" ref={productRef} id="productModal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-black">{modalMode === 'create' ? '新增商品' : '編輯商品'}</h5>
                        <button type="button" className="btn-close me-1" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row g-1">
                            <div className="col-12">
                                <div className='row'>
                                    <div className="col-12">
                                        <div className="border rounded-3 p-5 mb-3 ">
                                            <h5 className="pb-3">商品主圖</h5>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src={tempProduct.imageUrl}
                                                    alt={tempProduct.id}
                                                    className="img-fluid rounded-3"
                                                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                />
                                                <div >
                                                    <label htmlFor="fileInput" className="form-label ms-3">  </label>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-primary py-3"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseUpImageInput"
                                                        aria-expanded="false"
                                                        aria-controls="collapseUpImageInput"
                                                        onClick={() => document.getElementById('fileInput').click()} // 點擊按鈕觸發文件選擇
                                                    >
                                                        上傳圖片
                                                    </button>
                                                    <input
                                                        type="file"
                                                        accept=".jpg,.jpeg,.png"
                                                        className=" form-control d-none"
                                                        id="fileInput"
                                                        onChange={fileUpload}
                                                    />
                                                </div>
                                                <div className='d-flex align-items-center '>
                                                    {/* Collapse 按鈕 */}
                                                    <p className='mx-2'>or</p>
                                                    <button
                                                        className="btn btn-sm btn-primary text-nowrap py-3"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseImageInput"
                                                        aria-expanded="false"
                                                        aria-controls="collapseImageInput"
                                                    >
                                                        圖片網址
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Collapse 區塊，隱藏和顯示輸入框 */}
                                            <div className="collapse" id="collapseImageInput">
                                                <div className="card card-body mt-3">
                                                    <label htmlFor="imageUrl" className="form-label">主圖網址</label>
                                                    <div className="input-group mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="請輸入主圖網址"
                                                            id="imageUrl"
                                                            name="imageUrl"
                                                            value={tempProduct.imageUrl}
                                                            onChange={getinputValue}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="border rounded-3 p-5 mb-3">
                                            <h5>商品副圖</h5>
                                            <div className="d-flex-column">
                                                {tempProduct.imagesUrl?.map((item, index) => {
                                                    return (<div key={index}>
                                                        <label htmlFor={`imagesUrl-${index + 1}`} className="form-label">副圖{index + 1}</label>
                                                        <div className="input-group mb-3">
                                                            <img src={item} alt="" className="img-fluid rounded-3" style={{ width: "80px", height: "80px" }} />
                                                            <input type="text" className="form-control" placeholder="請輸入圖片網址" id={`imagesUrl-${index + 1}`} value={item} onChange={(e) => imageChange(e, index)} />
                                                        </div>
                                                    </div>
                                                    )
                                                })}
                                                <div className="btn-group w-100 mb-2">
                                                    {tempProduct.imagesUrl.length < 5 && tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1] !== '' && (<button className="btn btn-outline-primary btn-sm w-100" onClick={addImage}>新增圖片</button>)}
                                                    {tempProduct.imagesUrl.length > 1 && (<button className="btn btn-outline-accent btn-sm w-100" onClick={removeImage}>取消圖片</button>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="border rounded-3 p-5 mb-3">
                                    <div className="row g-4">
                                        <h5 className='pb-3'>商品資訊</h5>
                                        <div className="col-6 ">
                                            <label htmlFor="productCode" className="form-label">商品編號</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="productCode"
                                                placeholder="請輸入商品編號"
                                                name="product_code"
                                                value={tempProduct.product_code || "3"}
                                                onChange={getinputValue} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="title" className="form-label">標題</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                placeholder="請輸入標題"
                                                name="title"
                                                value={tempProduct.title}
                                                onChange={getinputValue} />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="product_stock" className="form-label">副標題</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="sub_title"
                                                placeholder="請輸入副標題"
                                                name="sub_title"
                                                min="0"
                                                value={tempProduct.sub_title || ""}
                                                onChange={getinputValue} />

                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="category" className="form-label">分類</label>
                                            <select id="category" className="form-select" name="category" value={tempProduct.category} onChange={getinputValue}>
                                                <option value="">請選擇</option>
                                                <option value="蔬菜水果">蔬菜水果</option>
                                                <option value="蛋與乳品">蛋與乳品</option>
                                                <option value="水產海鮮">水產海鮮</option>
                                                <option value="生鮮肉品">生鮮肉品</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="product_stock" className="form-label">子分類</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="sub_category"
                                                placeholder="請輸入子分類"
                                                name="sub_category"
                                                min="0"
                                                value={tempProduct.sub_category || ""}
                                                onChange={getinputValue} />

                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="product_stock" className="form-label">庫存</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="product_stock"
                                                placeholder="請輸入售價"
                                                name="product_stock"
                                                min="0"
                                                value={tempProduct.product_stock || ""}
                                                onChange={getinputValue} />

                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="unit" className="form-label">單位</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="unit"
                                                placeholder="請輸入單位"
                                                name="unit"
                                                value={tempProduct.unit}
                                                onChange={getinputValue} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="originPrice" className="form-label">原價</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="originPrice"
                                                placeholder="請輸入原價"
                                                name="origin_price"
                                                min="0"
                                                value={tempProduct.origin_price}
                                                onChange={getinputValue} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="price" className="form-label">售價</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="price"
                                                placeholder="請輸入售價"
                                                name="price"
                                                min="0"
                                                value={tempProduct.price}
                                                onChange={getinputValue} />
                                        </div>
                                    </div>
                                </div>
                                <div className="border rounded-3 p-5 mb-3">
                                    <h5 className='pb-3'>商品介紹</h5>
                                    <div className="mb-3">
                                        <label htmlFor="content" className="form-label">商品介紹</label>
                                        <textarea
                                            className="form-control"
                                            id="content"
                                            rows="5"
                                            name="content"
                                            value={tempProduct.content}
                                            onChange={getinputValue}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">規格說明</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            rows="2"
                                            name="description"
                                            value={tempProduct.description}
                                            onChange={getinputValue}></textarea>
                                    </div>
                                </div>
                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox" id="isEnabled"
                                        name="is_enabled"
                                        checked={tempProduct.is_enabled}
                                        onChange={getinputValue} />
                                    <label className="form-check-label" htmlFor="isEnabled">
                                        是否上架
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox" id="isFrozen"
                                        name="is_frozen"
                                        checked={tempProduct.is_frozen}
                                        onChange={getinputValue} />
                                    <label className="form-check-label" htmlFor="isEnabled">
                                        是否為冷凍運送商品
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer bg-secondary-200">
                        <button type="button" className="btn btn-outline-primary px-6" onClick={closeModal}>取消</button>
                        <button type="button" className="btn btn-primary px-6 text-white" onClick={btnUpdateProduct}>確認</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

ProductModal.propTypes = {
    modalMode: PropTypes.oneOf(['create', 'edit']).isRequired,   // 'create' 或 'edit'
    tempProduct: PropTypes.shape({
        id: PropTypes.number,
        product_code: PropTypes.string,
        title: PropTypes.string,
        sub_title: PropTypes.string,
        sub_category: PropTypes.string,
        unit: PropTypes.string,
        origin_price: PropTypes.number,
        price: PropTypes.number,
        product_stock: PropTypes.number,
        category: PropTypes.string,
        imageUrl: PropTypes.string,
        imagesUrl: PropTypes.arrayOf(PropTypes.string),
        content: PropTypes.string,
        description: PropTypes.string,
        is_enabled: PropTypes.bool,
        is_frozen: PropTypes.bool
    }).isRequired,   // `tempProduct` 應為具有特定結構的物件
    getProductList: PropTypes.func.isRequired,   // 用來取得商品清單的函式
    setTempProduct: PropTypes.func.isRequired,   // 用來更新 `tempProduct` 的函式
    modelRef: PropTypes.object.isRequired       // Modal 的 ref 物件
};

export default ProductModal