function UpdateQtyBtnGroup({itemQty,onClickfn1,onClickfn2}) {
    return (
        <div className="me-2">
            <button
                type="button"
                className="btn btn-secondary text-primary fs-2 py-0"
                style={{width:"48px"}}
                onClick={onClickfn1}
                disabled={itemQty === 1}
            >
                -
            </button>
            <button
                className="btn border border-primary mx-2 py-0"
                style={{ width: "82px", cursor: "auto", height:"48px"}}
            >{itemQty}</button>
            <button
                type="button"
                className="btn btn-secondary text-primary fs-2 py-0"
                style={{width:"48px"}}
                onClick={onClickfn2}
            >
                +
            </button>
        </div>)
}

export default UpdateQtyBtnGroup