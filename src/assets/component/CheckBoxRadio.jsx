const CheckboxRadio = ({ id, labelText, register, type, errors, rules, value, name, }) => {
    return (<>
        <div className='form-check'>
            <input
                className={`form-check-input ${errors[name] && 'is-invalid'}`}
                type={type}
                name={name}
                id={id}
                value={value}
                checked={checked}
                {...register(name, rules)}
            />
            {/* Radio 使用 Name 欄位 */}
            <label className='form-check-label fs-lg-5 fs-6' htmlFor={id}>
                {labelText}
            </label>
            {errors[name] && (
                <div className='invalid-feedback'>{errors[name]?.message}</div>
            )}
        </div>
    </>)
}

export default CheckboxRadio;