/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Controller } from 'react-hook-form';

import style from './switch.module.scss';

const Switch = ({
  label,
  title,
  control,
  name,
  className,
  handleClick,
  switchContainer,
  errorMessage,
  handleSwitchChange,
  id,
  disabled,
  value,
  ...restOfProps
}) => {
  return (
    <div>
      {label && <p className={style.titleClass}>{label}</p>}

      <div
        className={`${style.mainClass} ${className}`}
        onClick={handleClick && handleClick}
      >
        <label
          className={`${style.switch}  ${switchContainer} ${
            disabled && style.disabledClass
          }`}
        >
          <Controller
            name={name}
            control={control}
            defaultValue={value}
            render={({ field }) => {
              return (
                <input
                  id={id || ''}
                  type="checkbox"
                  checked={field.value}
                  disabled={disabled || false}
                  onChange={(e) => {
                    field.onChange?.(e.target.checked);
                    handleSwitchChange?.(e.target.checked);
                  }}
                  {...restOfProps}
                />
              );
            }}
          />

          <span className={`${style.slider} ${style.round}`} />
        </label>

        {title && <h6>{title}</h6>}
      </div>

      {errorMessage ? (
        <span className={style.errorMessage}>{errorMessage}</span>
      ) : (
        ''
      )}
    </div>
  );
};

export default Switch;
