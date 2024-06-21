/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { MouseEventHandler, ReactNode } from 'react';
import style from './button.module.scss';

const Button = ({
  buttonClassName,
  text,
  iconStart,
  handleClick,
  type = 'button',
  className,
  btnClass,
  disabled,
  form,
  width,
  startCompo,
  ...restOfProps
}: {
  buttonClassName?: string;
  text?: string;
  iconStart?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  btnClass?: string;
  disabled?: boolean;
  form?: string;
  width?: string;
  startCompo?: ReactNode;
  [key: string]: any;
}) => {
  return (
    <button
      className={`${style.btn} ${btnClass} ${buttonClassName}`}
      type={type}
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
