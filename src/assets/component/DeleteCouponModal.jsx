import { useEffect, useRef } from 'react';
import axios from 'axios';
import { Modal } from 'bootstrap';
import { useDispatch } from 'react-redux';
import { createAsyncMessage } from '../redux/slice/toastSlice';
import PropTypes from 'prop-types';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function DeleteCouponModal({ tempCoupon, getCouponList, delModelRef }) {
  const delCouponRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    delModelRef.current = new Modal(delCouponRef.current, {
      backdrop: false,
    });
  }, [delModelRef]);

  const closeDelModal = () => {
    delModelRef.current.hide();
  };
  //刪除優惠券
  const removeCoupon = async () => {
    try {
      const res = await axios.delete(
        `${baseUrl}/v2/api/${apiPath}/admin/coupon/${tempCoupon.id}`
      );
      dispatch(
        createAsyncMessage({
          text: res.data.message,
          type: '刪除優惠券成功',
          status: 'success',
        })
      );
      getCouponList();
    } catch (error) {
      const { message } = error.response.data;
      dispatch(
        createAsyncMessage({
          text: message.join('、'),
          type: '刪除優惠券失敗',
          status: 'failed',
        })
      );
    } finally {
      closeDelModal();
    }
  };
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      ref={delCouponRef}
      id="delCouponModal"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">刪除產品</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeDelModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            你是否要刪除
            <span className="text-danger">{tempCoupon.title}</span>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary px-6"
              onClick={closeDelModal}
            >
              取消
            </button>
            <button
              type="button"
              className="btn btn-accent px-6 text-white"
              onClick={removeCoupon}
            >
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

DeleteCouponModal.propTypes = {
  tempCoupon: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  getCouponList: PropTypes.func.isRequired,
  delModelRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
};
export default DeleteCouponModal;
