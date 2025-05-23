import { useCallback, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Pagination } from 'swiper/modules';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import Comment from '../component/Comment';
import Toast from '../layout/Toast';
import UpdateQtyBtnGroup from '../component/UpdateQtyBtnGroup';
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../redux/slice/toastSlice';
import { updateCartData } from '../redux/slice/cartSlice';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [qtySelect, setQtySelect] = useState(1);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textExtend, setTextExtend] = useState(false);
  const { id: product_id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeTab, setActiveTab] = useState('product-intro');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateCart = async (product_id, qtySelect) => {
    try {
      await axios.post(`${baseUrl}/v2/api/${apiPath}/cart`, {
        data: {
          product_id,
          qty: Number(qtySelect),
        },
      });
      navigate('/cart');
    } catch (error) {
      const { message } = error.response.data;
      dispatch(
        createAsyncMessage({
          text: message,
          type: '取得資料失敗',
          status: 'failed',
        })
      );
    }
  };

  const addCartItem = async (product_id, qtySelect) => {
    setIsLoadingBtn(true);
    setIsLoading(true);

    if (qtySelect > product.product_stock) {
      dispatch(
        createAsyncMessage({
          text: '所選數量超過庫存',
          type: '庫存不足',
          status: 'failed',
        })
      );
      return;
    }

    try {
      const res = await axios.post(`${baseUrl}/v2/api/${apiPath}/cart`, {
        data: {
          product_id,
          qty: Number(qtySelect),
        },
      });
      dispatch(
        createAsyncMessage({
          text: res.data.message,
          type: '成功加入購物車',
          status: 'success',
        })
      );
    } catch (error) {
      const { message } = error.response.data;
      dispatch(
        createAsyncMessage({
          text: message,
          type: '加入購物車失敗',
          status: 'failed',
        })
      );
    } finally {
      setIsLoadingBtn(false);
      setIsLoading(false);
      setQtySelect(1);
      getCartList();
    }
  };

  const getQuantity = qtySelect => {
    setQtySelect(qtySelect);
  };

  const getProductDetail = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${baseUrl}/v2/api/${apiPath}/product/${product_id}`
      );
      setProduct(res.data.product);
    } catch (error) {
      const { message } = error.response.data;
      dispatch(
        createAsyncMessage({
          text: message,
          type: '取得資料失敗',
          status: 'failed',
        })
      );
    } finally {
      setIsLoading(false);
    }
  }, [product_id, dispatch]);
  useEffect(() => {
    getProductDetail();
  }, [getProductDetail, dispatch]);

  const handleTextExtend = () => {
    setTextExtend(prevState => !prevState);
  };
  const getCartList = useCallback(async () => {
    try {
      const res = await axios.get(`${baseUrl}/v2/api/${apiPath}/cart`);
      dispatch(updateCartData(res.data.data));
    } catch (error) {
      const { message } = error.response.data;
      dispatch(
        createAsyncMessage({
          text: message,
          type: '取得資料失敗',
          status: 'failed',
        })
      );
    }
  }, [dispatch]);
  useEffect(() => {
    getCartList();
  }, [getCartList]);

  //tab
  const handleClick = id => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="container product">
        <main className="position-relative mb-lg-8 mb-0 mt-lg-7">
          <div className="row gx-lg-5">
            {/* 電腦版輪播 */}
            <div className="col-lg-5 d-none d-lg-block">
              <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
                {product.imagesUrl?.map(img => (
                  <SwiperSlide key={img} className="text-center mb-5">
                    <img
                      src={img}
                      alt=""
                      className="object-fit-cover border rounded"
                      width="100%"
                      height="400px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={16}
              >
                {product.imagesUrl?.map(img => (
                  <SwiperSlide key={img} className="text-center mb-5 d-flex">
                    <img
                      src={img}
                      alt=""
                      className="object-fit-cover w-100 rounded"
                      height="86px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* 手機板輪播 */}
            <div className="col d-lg-none">
              <Swiper
                modules={[Pagination]}
                pagination={{
                  type: 'fraction',
                  renderFraction: function (currentClass, totalClass) {
                    return `<span className="${currentClass}"></span> / <span className="${totalClass}"></span>`;
                  },
                }}
              >
                {product.imagesUrl?.map(img => (
                  <SwiperSlide key={img} className="text-center mb-5">
                    <img
                      src={img}
                      alt=""
                      className="object-fit-cover"
                      width="100%"
                      height="350px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* 商品資料 */}
            <div className="col-lg-7 d-flex flex-column justify-content-between px-lg-5">
              <div className="mt-5 mt-lg-0 mb-5 mb-lg-0">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-2">
                    <li className="breadcrumb-item fs-7 fs-lg-6 fw-normal">
                      <Link
                        to={`/products/${product.category}`}
                        className="text-primary text-decoration-underline"
                      >
                        {product.category}
                      </Link>
                    </li>
                    <li className="breadcrumb-item fs-7 fs-lg-6 fw-normal">
                      <Link>{product.sub_category}</Link>
                    </li>
                    <li className="breadcrumb-item fs-7 fs-lg-6 fw-normal">
                      <Link>{product.title}</Link>
                    </li>
                  </ol>
                </nav>
                <h1 className="fs-3 fs-lg-2 mb-1">{product.title || ''}</h1>
                <p className="mb-3 text-gray fw-normal fs-6 fs-lg-5">
                  {product.sub_title || ''}
                </p>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="price1"
                  >
                    <div className="d-flex align-items-end mb-2">
                      <h2 className="text-accent fs-5 fs-lg-4 en-font me-2">{`NT$${product.price || 0}`}</h2>
                      <p className="text-decoration-line-through text-gray fs-7 fs-lg-6 fw-normal en-font">
                        {`NT$${product.origin_price || 0}`}
                      </p>
                    </div>
                    {product.is_frozen ? (
                      <small className="text-accent">*低溫冷凍商品</small>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-primary fs-7 fs-lg-6 fw-normal mb-2">{`規格：${product.description || ''}`}</p>
                <div className="mb-5">
                  <div className="d-flex justify-content-between w-25 w-lg-25 align-items-center mb-2">
                    <p className="text-primary fs-7 fs-lg-6 fw-normal text-nowrap">
                      數量
                    </p>
                    <p className="text-gray fs-7 fs-lg-6 fw-normal text-nowrap">{`剩餘 ${product.product_stock || 0} ${product.unit || ''}`}</p>
                  </div>
                  <div className="mb-5">
                    <UpdateQtyBtnGroup
                      itemQty={qtySelect}
                      onClickfn1={() => getQuantity(qtySelect - 1)}
                      onClickfn2={() => getQuantity(qtySelect + 1)}
                      maxQty={product.product_stock}
                    />
                  </div>
                  <div className="d-lg-flex">
                    <button
                      type="button"
                      className="btn btn-L w-100 mb-3 mb-lg-0 fs-5 py-3 me-lg-5 me-0 d-flex justify-content-center"
                      disabled={isLoadingBtn}
                      onClick={() => addCartItem(product_id, qtySelect)}
                    >
                      <div>加入購物車</div>
                      {isLoadingBtn && (
                        <ReactLoading
                          type={'balls'}
                          color={'white'}
                          height={'1.5rem'}
                          width={'1rem'}
                        />
                      )}
                    </button>
                    <button
                      type="button"
                      className="btn btn-L w-100 fs-5 py-3"
                      onClick={() => navigateCart(product_id, qtySelect)}
                    >
                      <div>立即購買</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <!-- pc文案 --> */}
        <article className="d-none d-lg-block">
          <nav id="navbar-example2">
            <ul className="list-unstyled d-flex justify-content-between w-100 border-bottom mb-8">
              {[
                { id: 'product-intro', label: '商品介紹' },
                { id: 'product-standard', label: '規格說明' },
                { id: 'product-comment', label: '評論' },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  className={`btn py-4 fs-4 border-bottom-3 text-center w-100 me-5 p-0 tab-button rounded-0 ${activeTab === id ? 'active' : ''}`}
                  onClick={() => handleClick(id)}
                >
                  {label}
                </button>
              ))}
            </ul>
          </nav>
          <div className="w-50 mx-auto pt-8">
            <div id="product-intro">
              {product.content
                ?.replace(/\\n/g, '\n')
                .split('\n')
                .map((line, idx) => (
                  <p key={idx} className="mb-3 fs-6 fw-normal">
                    {line}
                  </p>
                ))}
              {product.imagesUrl?.map(img => (
                <div key={img} className="text-center mb-5">
                  <img
                    src={img}
                    alt=""
                    className="mb-3 border rounded object-fit-cover"
                    width="100%"
                    height="400px"
                  />
                </div>
              ))}
            </div>
            <ul className="list-unstyled" id="product-standard">
              <li className="mb-8">
                <h2>產品規格</h2>
                <p>{product.description}</p>
              </li>
              <li className="mb-8">
                <h2>保存方法</h2>
                <p>收到後冷凍保存,解凍後請盡快食用，請勿重複冷凍</p>
              </li>
              <li className="mb-8">
                <h2>滿額免運原則</h2>
                <ol>
                  <li>全館商品滿 $1000 (含及以上)即享免運服務</li>
                  <li>訂單含冷凍商品時，僅提供宅配服務</li>
                </ol>
              </li>
            </ul>
          </div>
        </article>
        {/* <!-- mobile文案 --> */}
        <article className="d-lg-none">
          <ul className="list-unstyled">
            <li
              className={`mt-5 overflow-hidden ${textExtend ? 'text-extend' : 'text-content'}`}
            >
              <h2>商品介紹</h2>
              <p className="mb-2">{product.content}</p>
              {product.imagesUrl?.map(img => (
                <div key={img} className="text-center mb-5">
                  <img
                    src={img}
                    alt=""
                    className="mb-3 border rounded object-fit-cover"
                    width="100%"
                    height="300px"
                  />
                </div>
              ))}
            </li>
            <li className="text-center">
              <button
                className="expand-button btn mx-auto text-primary d-flex"
                onClick={handleTextExtend}
              >
                {textExtend ? (
                  <>
                    <div className="me-3">收合</div>
                    <span className="material-symbols-outlined">
                      keyboard_arrow_up
                    </span>
                  </>
                ) : (
                  <>
                    <div className="me-3">看全部</div>
                    <span className="material-symbols-outlined align-middle">
                      keyboard_arrow_down
                    </span>
                  </>
                )}
              </button>
            </li>
            <li className="my-5">
              <h2>規格說明</h2>
              <p>200g /包， 200g ±10% /包</p>
              <p>450g /包， 450g ±10% /包</p>
            </li>
            <li className="my-5">
              <h2>保存方法</h2>
              <p>收到後冷凍保存 7-10 天,請盡快於賞味期限內食用完畢</p>
            </li>
            <li className="my-5">
              <h2>滿額免運原則</h2>
              <ol>
                <li>全館商品滿 $1000 (含及以上)即享免運服務</li>
                <li>訂單含冷凍商品時，僅提供宅配服務</li>
              </ol>
            </li>
          </ul>
        </article>
        {/* 評論 */}
        <div id="product-comment">
          <Comment />
        </div>
        {isLoading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(255,255,255,0.3)',
              zIndex: 999,
            }}
          >
            <ReactLoading
              type="balls"
              color="pink"
              width="4rem"
              height="4rem"
            />
          </div>
        )}
      </div>
      <div>
        <img
          src="/images/Illustration/Bottom-Curve.png"
          alt=""
          className="d-lg-block d-none allProduct-bottom-mask"
        />
      </div>
      <Toast />
    </>
  );
}

export default ProductDetail;
