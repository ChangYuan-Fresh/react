import { useState } from "react";

function Comment() {
  const [commentExtend, setCommentExtend] = useState(false);

  const handleCommentExtend = () => {
    setCommentExtend((prevState) => !prevState);
  };

  return (
    <div className="product">
      <section className="section1 mb-5 pt-8 border-top" id="scrollspyHeading3">
        <div className="d-flex justify-content-between mb-3">
          <h2>評論</h2>
          <a
            href="#"
            className="link-primary d-none d-lg-block"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            看所有評論 (14)
          </a>
          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content bg-secondary-200">
                <div className="modal-header border-0 px-0 pt-6 pb-3">
                  <h5 className="modal-title text-black" id="exampleModalLabel">
                    所有評論 (14)
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body p-0">
                  <div className="bg-secondary-200 py-5 border-bottom">
                    <div className="mb-4 d-flex flex-column">
                      <h3 className="fs-5 text-black mb-3">吳*緯</h3>
                      <div>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-gray fs-6 fw-normal">
                          star
                        </span>
                      </div>
                    </div>
                    <p className="fs-6 fw-normal">
                      我最近開始注重飲食健康，發現這產品非常適合我的需求。高蛋白、低脂肪的特性讓我可以安心享用。
                    </p>
                  </div>
                  <div className="bg-secondary-200 py-5 border-bottom">
                    <div className="mb-4 d-flex flex-column">
                      <h3 className="fs-5 text-black mb-3">莊*玫</h3>
                      <div>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-gray fs-6 fw-normal">
                          star
                        </span>
                      </div>
                    </div>
                    <p className="fs-6 fw-normal">口感更是令人驚艷。</p>
                  </div>
                  <div className="bg-secondary-200 py-5 border-bottom">
                    <div className="mb-4 d-flex flex-column">
                      <h3 className="fs-5 text-black mb-3">宜蘭黃小姐</h3>
                      <div>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal">
                          star
                        </span>
                      </div>
                    </div>
                    <p className="fs-6 fw-normal">
                      從市場直接送到餐桌的速度令人滿意。生產環境看起來也相當乾淨，讓我對食材更加放心。
                    </p>
                  </div>
                  <div className="bg-secondary-200 py-5 border-bottom">
                    <div className="mb-4 d-flex flex-column">
                      <h3 className="fs-5 text-black mb-3">顏先生</h3>
                      <div>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal">
                          star
                        </span>
                      </div>
                    </div>
                    <p className="fs-6 fw-normal">每天當正餐吃，非常美味</p>
                  </div>
                  <div className="bg-secondary-200 py-5 border-bottom">
                    <div className="mb-4 d-flex flex-column">
                      <h3 className="fs-5 text-black mb-3">黃**</h3>
                      <div>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal">
                          star
                        </span>
                      </div>
                    </div>
                    <p className="fs-6 fw-normal">送貨快速商品品質很好</p>
                  </div>
                  <div className="bg-secondary-200 py-5 border-bottom">
                    <div className="mb-4 d-flex flex-column">
                      <h3 className="fs-5 text-black mb-3">J******N</h3>
                      <div>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-6 fw-normal">
                          star
                        </span>
                      </div>
                    </div>
                    <p className="fs-6 fw-normal">
                      我對飲食很講究，尤其注重健康，聽說這個品後，決定試試看。果然不負期待，健康美味，值得推薦！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row h-100">
          <div className="col-lg-3 mb-2">
            <div className="card border-0 bg-secondary-200 p-4 p-lg-5">
              <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">吳*緯</h3>
                <div>
                  <span className="material-symbols-outlined text-accent fs-6 fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6 fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6 fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6 fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-gray fs-6 fw-normal fs-lg-4">
                    star
                  </span>
                </div>
              </div>
              <p className="card-text fs-6 fw-normal text-truncate d-lg-none">
                我最近開始注重飲食健康，發現這產品非常適合我的需求。高蛋白、低脂肪的特性讓我可以安心享用。
              </p>
              <p className="card-text fs-6 fw-normal d-none d-lg-block">
                我最近開始注重飲食健康，發現這產品非常適合我的需求。高蛋白、低脂肪的特性讓我可以安心享用。
              </p>
              <a
                href="#"
                className="mt-auto fs-7 link-primary"
                data-bs-toggle="modal"
                data-bs-target="#model3"
              >
                看全部
              </a>
              <div
                className="modal fade"
                id="model3"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content py-5">
                    <h3 className="fs-5 text-black mb-3">吳*緯</h3>
                    <div className="mb-4">
                      <span className="material-symbols-outlined text-accent fs-5 me-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-accent fs-5 me-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-accent fs-5 me-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-accent fs-5 me-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-accent fs-5">
                        star
                      </span>
                    </div>
                    <p className="fs-6 fw-normal">
                      我最近開始注重飲食健康，發現這產品非常適合我的需求。高蛋白、低脂肪的特性讓我可以安心享用。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-2 h-100">
            <div className="card border-0 bg-secondary-200 p-4 p-lg-5">
              <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">莊*玫</h3>
                <div>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-gray fs-6  fw-normal fs-lg-4">
                    star
                  </span>
                </div>
              </div>
              <p className="card-text fs-6 fw-normal">口感更是令人驚艷。</p>
            </div>
          </div>
          <div className="col-lg-3 mb-2">
            <div className="card border-0 bg-secondary-200 p-4 p-lg-5">
              <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">宜蘭黃小姐</h3>
                <div>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4">
                    star
                  </span>
                </div>
              </div>
              <p className="card-text fs-6 fw-normal text-truncate d-lg-none">
                從市場直接送到餐桌的速度令人滿意。生產環境看起來也相當乾淨，讓我對食材更加放心。
              </p>
              <p className="card-text fs-6 fw-normal d-none d-lg-block">
                從市場直接送到餐桌的速度令人滿意。生產環境看起來也相當乾淨，讓我對食材更加放心。
              </p>
              <a
                href="#"
                className="mt-auto fs-7 link-primary"
                data-bs-toggle="modal"
                data-bs-target="#model2"
              >
                看全部
              </a>
              <div
                className="modal fade"
                id="model2"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content py-5">
                    <h3 className="fs-5 text-black mb-3">宜蘭黃小姐</h3>
                    <div className="mb-4">
                      <span className="material-symbols-outlined text-accent fs-5 me-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-accent fs-5 me-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-accent fs-5 me-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-accent fs-5 me-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-accent fs-5">
                        star
                      </span>
                    </div>
                    <p className="fs-6 fw-normal">
                      從市場直接送到餐桌的速度令人滿意。生產環境看起來也相當乾淨，讓我對食材更加放心。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-2">
            <div className="card border-0 bg-secondary-200 p-4 p-lg-5">
              <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">顏先生</h3>
                <div>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                    star
                  </span>
                  <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4">
                    star
                  </span>
                </div>
              </div>
              <p className="card-text fs-7 fs-6 fw-normal">
                每天當正餐吃，非常美味
              </p>
            </div>
          </div>
          {commentExtend === true && (
            <div>
              <div className="card border-0 bg-secondary-200 p-4 p-lg-5 mb-2">
                <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                  <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">黃**</h3>
                  <div>
                    <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                      star
                    </span>
                    <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                      star
                    </span>
                    <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                      star
                    </span>
                    <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                      star
                    </span>
                    <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4">
                      star
                    </span>
                  </div>
                </div>
                <p className="card-text fs-7 fs-6 fw-normal">
                  送貨快速商品品質很好
                </p>
              </div>
              <div className="card border-0 bg-secondary-200 p-4 p-lg-5">
                <div className="card-title mb-lg-4 d-flex flex-lg-column justify-content-between">
                  <h3 className="fs-6 fs-lg-5 text-black mb-lg-3">J******N</h3>
                  <div>
                    <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                      star
                    </span>
                    <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                      star
                    </span>
                    <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                      star
                    </span>
                    <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4 me-1">
                      star
                    </span>
                    <span className="material-symbols-outlined text-accent fs-6  fw-normal fs-lg-4">
                      star
                    </span>
                  </div>
                </div>
                <p className="card-text fs-6 fw-normal text-truncate d-lg-none">
                  我對飲食很講究，尤其注重健康，聽說這個品後，決定試試看。果然不負期待，健康美味，值得推薦！
                </p>
                <p className="card-text fs-6 fw-normal d-none d-lg-block">
                  我對飲食很講究，尤其注重健康，聽說這個品後，決定試試看。果然不負期待，健康美味，值得推薦！
                </p>
                <a
                  href="#"
                  className="mt-auto fs-7 link-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#model4"
                >
                  看全部
                </a>
                <div
                  className="modal fade"
                  id="model4"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content py-5">
                      <h3 className="fs-5 text-black mb-3">J******N</h3>
                      <div className="mb-4">
                        <span className="material-symbols-outlined text-accent fs-5 me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-5 me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-5 me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-5 me-1">
                          star
                        </span>
                        <span className="material-symbols-outlined text-accent fs-5">
                          star
                        </span>
                      </div>
                      <p className="fs-6 fw-normal">
                        我對飲食很講究，尤其注重健康，聽說這個品後，決定試試看。果然不負期待，健康美味，值得推薦！
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <button
            type="button"
            className="btn text-primary text-center d-lg-none border-0 py-1"
            onClick={handleCommentExtend}
          >
            {commentExtend === true ? "收合" : "看所有評論 (14)"}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Comment;
