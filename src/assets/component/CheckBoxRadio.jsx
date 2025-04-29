import PropTypes from "prop-types";

const CheckboxRadio = ({
  id,
  labelText,
  register,
  type,
  errors,
  rules,
  value,
  name,
}) => {
  return (
    <>
      <div className="form-check">
        <input
          className={`form-check-input ${errors[name] && "is-invalid"}`}
          type={type}
          name={name}
          id={id}
          value={value}
          {...register(name, rules)}
        />
        {/* Radio 使用 Name 欄位 */}
        <label className="form-check-label fs-lg-5 fs-6" htmlFor={id}>
          {labelText}
        </label>
        {errors[name] && (
          <div className="invalid-feedback">{errors[name]?.message}</div>
        )}
      </div>
    </>
  );
};

CheckboxRadio.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(
    PropTypes.shape({
      message: PropTypes.string,
    }),
  ).isRequired,
  rules: PropTypes.object,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default CheckboxRadio;
