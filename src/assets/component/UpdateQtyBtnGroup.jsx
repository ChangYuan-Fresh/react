import PropTypes from 'prop-types';

function UpdateQtyBtnGroup({ itemQty, onClickfn1, onClickfn2, maxQty }) {
  return (
    <div className="me-2 d-flex">
      <button
        type="button"
        className="btn btn-secondary text-primary fs-2 d-flex align-items-center justify-content-center"
        style={{ width: '48px', height: '48px' }}
        onClick={onClickfn1}
        disabled={itemQty === 1}
      >
        <span className="material-symbols-outlined">remove</span>
      </button>
      <button
        className="btn border border-primary mx-2 py-0"
        style={{ width: '82px', cursor: 'auto', height: '48px' }}
      >
        {itemQty}
      </button>
      <button
        type="button"
        className="btn btn-secondary text-primary fs-2 d-flex align-items-center justify-content-center"
        style={{ width: '48px', height: '48px' }}
        onClick={onClickfn2}
        disabled={itemQty >= maxQty}
      >
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
}

UpdateQtyBtnGroup.propTypes = {
  itemQty: PropTypes.number.isRequired,
  onClickfn1: PropTypes.func.isRequired,
  onClickfn2: PropTypes.func.isRequired,
  maxQty: PropTypes.number,
};
export default UpdateQtyBtnGroup;
