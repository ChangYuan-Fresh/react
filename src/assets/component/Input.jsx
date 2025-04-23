import PropTypes from "prop-types"

function Input({ register, errors = {}, id, labelText, type = "text", rules = {}, mark }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label"><span className="text-accent">{mark}</span>{labelText}</label>
            <input
                type={type}
                className={`form-control ${errors[id] && 'is-invalid'}`}
                id={id}
                placeholder={`請輸入${labelText}`}
                {...register(id, rules)}
            />
            {
                errors[id] && (<div className="invalid-feedback">{errors?.[id]?.message}</div>)
            }
        </div>)
}

Input.propTypes = {
    register: PropTypes.func.isRequired, // register 必須是函數
    errors: PropTypes.object, // errors 是物件（可能包含多個錯誤）
    id: PropTypes.string.isRequired, // id 必須是字串
    labelText: PropTypes.string.isRequired, // labelText 必須是字串
    type: PropTypes.string, // type 是字串
    rules: PropTypes.object, // rules 是物件（React Hook Form 規則）
    mark: PropTypes.string
};


export default Input