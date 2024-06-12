/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo, useState } from 'react';
import style from './input.module.scss';

const TextField = ({
  showSearchIcon,
  container,
  inputWrapperClass,
  label,
  placeholder,
  inputField,
  type,
  isRequired,
  errorMessage,
  name,
  register,
  value,
  onSuccess,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`${style.inputContainer} ${container || ''}`}>
      {label && (
        <label
          style={{
            color: onSuccess ? '#35DC26' : errorMessage ? '#DC2626' : '',
          }}
        >
          {label}
          {isRequired && (
            <div
              style={{
                height: '6px',
                width: '6px',
                background: '#DC2626',
                borderRadius: '50%',
              }}
            />
          )}
        </label>
      )}
      <div
        className={`${style.inputWrapper} ${inputWrapperClass || ''}`}
        style={{
          position: 'relative',
        }}
      >
        <input
          name={name || ''}
          className={`${style.input} ${
            onSuccess ? style.successInput : errorMessage && style.errorInput
          } ${inputField || ''}`}
          type={type === 'password' && !showPassword ? 'password' : 'text'}
          defaultValue={value}
          placeholder={placeholder}
          style={{
            paddingLeft: showSearchIcon ? '40px' : '',
            marginTop: label ? '10px' : '',
            color: onSuccess ? ' #35DC26' : errorMessage ? ' #DC2626' : '',
            border: onSuccess
              ? '1px solid #35DC26'
              : errorMessage
              ? '1px solid #DC2626'
              : '1px solid #fff',
          }}
          {...register}
        />
        {type === 'password' && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={style.closedEye}
            onClick={() => setShowPassword(!showPassword)}
          >
            <path
              d="M15.5112 6.27178C14.9096 5.28663 14.1507 4.40664 13.2647 3.66675L15.1307 1.80077C15.2521 1.67508 15.3193 1.50674 15.3177 1.33201C15.3162 1.15728 15.2461 0.990132 15.1226 0.866573C14.999 0.743013 14.8319 0.672926 14.6571 0.671408C14.4824 0.66989 14.3141 0.737061 14.1884 0.858455L12.1591 2.89037C10.9012 2.14319 9.46307 1.75377 8 1.76412C3.8742 1.76412 1.52307 4.58841 0.488783 6.27178C0.169253 6.78859 0 7.3842 0 7.99181C0 8.59943 0.169253 9.19503 0.488783 9.71184C1.0904 10.697 1.84927 11.577 2.73528 12.3169L0.869308 14.1829C0.805659 14.2443 0.754889 14.3179 0.719963 14.3992C0.685037 14.4805 0.666653 14.5679 0.665884 14.6564C0.665115 14.7449 0.681976 14.8327 0.715484 14.9146C0.748993 14.9965 0.798476 15.0709 0.861048 15.1334C0.92362 15.196 0.998027 15.2455 1.07993 15.279C1.16183 15.3125 1.24958 15.3294 1.33807 15.3286C1.42656 15.3278 1.514 15.3094 1.59531 15.2745C1.67661 15.2396 1.75015 15.1888 1.81163 15.1252L3.84554 13.0913C5.10192 13.8383 6.53832 14.2284 8 14.2195C12.1258 14.2195 14.4769 11.3952 15.5112 9.71184C15.8307 9.19503 16 8.59943 16 7.99181C16 7.3842 15.8307 6.78859 15.5112 6.27178ZM1.62436 9.0141C1.43452 8.70691 1.33397 8.35293 1.33397 7.99181C1.33397 7.6307 1.43452 7.27671 1.62436 6.96952C2.51337 5.52606 4.52262 3.09696 8 3.09696C9.10644 3.09076 10.1973 3.35742 11.1762 3.87334L9.83465 5.21484C9.19485 4.79007 8.42778 4.59973 7.66361 4.67614C6.89945 4.75254 6.18525 5.09098 5.64221 5.63402C5.09917 6.17706 4.76073 6.89126 4.68433 7.65542C4.60792 8.41959 4.79825 9.18666 5.22303 9.82646L3.6836 11.3659C2.8673 10.706 2.17072 9.9104 1.62436 9.0141ZM9.99926 7.99181C9.99926 8.52205 9.78862 9.03057 9.41369 9.4055C9.03876 9.78043 8.53024 9.99107 8 9.99107C7.70312 9.98992 7.41035 9.92157 7.14365 9.79114L9.79933 7.13546C9.92976 7.40216 9.99811 7.69493 9.99926 7.99181ZM6.00074 7.99181C6.00074 7.46158 6.21138 6.95305 6.58631 6.57812C6.96124 6.20319 7.46976 5.99255 8 5.99255C8.29688 5.9937 8.58965 6.06205 8.85635 6.19248L6.20067 8.84816C6.07024 8.58146 6.00189 8.28869 6.00074 7.99181ZM14.3756 9.0141C13.4866 10.4576 11.4774 12.8867 8 12.8867C6.89356 12.8929 5.80266 12.6262 4.82384 12.1103L6.16535 10.7688C6.80515 11.1936 7.57222 11.3839 8.33639 11.3075C9.10055 11.2311 9.81475 10.8926 10.3578 10.3496C10.9008 9.80656 11.2393 9.09236 11.3157 8.3282C11.3921 7.56403 11.2017 6.79697 10.777 6.15716L12.3164 4.61773C13.1327 5.27767 13.8293 6.07322 14.3756 6.96952C14.5655 7.27671 14.666 7.6307 14.666 7.99181C14.666 8.35293 14.5655 8.70691 14.3756 9.0141Z"
              fill="#4B5563"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default memo(TextField);
