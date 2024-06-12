/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import style from './checkbox.module.scss';

const Checkbox = ({
  id,
  name,
  label,
  checked,
  register,
  className,
  handleChange,
  errorMessage,
  readOnly,
  containerClass,
  onLabelClick,
  partial,
  disabledCheck,
  dataCy = '',
  labelStyles,
  ...restOfProps
}) => {
  return (
    <div>
      <label
        className={`${style.container} ${containerClass || ''}`}
        htmlFor={onLabelClick ? null : id}
      >
        {label && label}
        <input
          name={name}
          type="checkbox"
          id={id}
          onClick={onLabelClick}
          readOnly={readOnly && readOnly}
          {...(register && register(name))}
          onChange={handleChange && handleChange}
          checked={checked && checked}
          {...restOfProps}
          disabled={disabledCheck}
        />
        {partial && <span className={style.checkMark} />}
      </label>
    </div>
  );
};

export default Checkbox;
