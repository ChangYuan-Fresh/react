import { Modal } from "bootstrap";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function CommentModal({ tempProduct, modelRef }) {
  const orderlRef = useRef(null);

  useEffect(() => {
    if (orderlRef.current) {
      modelRef.current = new Modal(orderlRef.current, {
        backdrop: false,
      });
    }
  }, [modelRef]);

  const closeModal = () => {
    modelRef.current.hide();
  };
  return (
    <div
      className="modal"
      tabIndex="-1"
      ref={orderlRef}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header py-6 px-5 border-0">
            <h5 className="modal-title">填寫評價</h5>
            <button
              type="button"
              className="btn-close me-1"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body px-5 mb-6">
            <div
              className="d-flex p-4"
              style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}
            >
              <img
                src={tempProduct.product?.imageUrl}
                alt={tempProduct.id}
                className=" object-fit-cover rounded-1 me-5"
                style={{ width: "90px", height: "90px" }}
              />
              <div className="my-auto">
                <p className="fs-5 fw-bold">{tempProduct.product?.title}</p>
                <p className="fs-7 text-muted">
                  {tempProduct.product?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-body d-flex flex-column align-items-stretch text-start px-5">
            <h6 className="mb-2 text-dark fs-5">請為此商品評分：</h6>
            <div className="mb-5">
              <span className="material-symbols-outlined text-accent fs-5">
                star
              </span>
              <span className="material-symbols-outlined text-accent fs-5">
                star
              </span>
              <span className="material-symbols-outlined text-accent fs-5">
                star
              </span>
              <span className="material-symbols-outlined text-accent fs-5">
                star
              </span>
              <span className="material-symbols-outlined text-accent fs-5">
                star
              </span>
            </div>
            <div className="mb-5">
              <label htmlFor="commentTitle" className="form-label">
                姓名
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="commentTitle"
                placeholder="請輸入姓名 (將會顯示在商品評論)"
              />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  記住我的姓名，下次評論使用
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="commentContent" className="form-label">
                內文
              </label>
              <textarea
                className="form-control"
                id="commentContent"
                rows="3"
                placeholder="快來分享你的購物體驗！(最多 100 字)"
              ></textarea>
            </div>
          </div>
          <div className="modal-footer border-0 justify-content-center py-0 mb-5">
            <button
              className="btn btn-primary fw-bold py-3 w-100 mb-3 text-white"
              onClick={closeModal}
            >
              送出評價
            </button>
            <small>請注意，送出後無法變更評價</small>
          </div>
        </div>
      </div>
    </div>
  );
}

CommentModal.propTypes = {
  tempProduct: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    product: PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  modelRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
};

export default CommentModal;
