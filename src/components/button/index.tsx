/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import style from './button.module.scss';

const Button = ({
  buttonClassName,
  text,
  iconStart,
  handleClick,
  type,
  className,
  btnClass,
  disabled,
  form,
  width,
  startCompo,
  ...restOfProps
}) => {
  return (
    <button
      className={`${style.btn} ${btnClass} ${buttonClassName}`}
      type={type || 'button'}
      form={form}
      onClick={handleClick}
      disabled={disabled}
      style={{
        pointerEvents: disabled ? 'none' : 'auto',
        width,
        position: 'relative',
      }}
      {...restOfProps}
    >
      {iconStart ? (
        <img src={iconStart} alt="" className={style.img} />
      ) : (
        startCompo || ''
      )}
      {text && <span className={`${style.btnTitle} ${className}`}>{text}</span>}
    </button>
  );
};

export default Button;
