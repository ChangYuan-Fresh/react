import PropTypes from "prop-types";

const Select = ({ id, labelText, register, errors, rules, children, disabled = false }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className='form-label'>
                {labelText}
            </label>
            <select
                id={id}
                className={`form-select ${errors[id] && 'is-invalid'}`}
                {...register(id, rules)}
                disabled={disabled}
            >
                {children}
            </select>
            {errors[id] && (
                <div className='invalid-feedback'>{errors[id]?.message}</div>
            )}
        </div>
    )
}

Select.propTypes = {
    id: PropTypes.string.isRequired,             
    labelText: PropTypes.string.isRequired, 
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    rules: PropTypes.object,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool
};
export default Select;