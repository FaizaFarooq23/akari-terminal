/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import logo from '../../../../assets/icons/app-icon/sidebar-icons/akari-logo.svg';

import TextField from '../../../components/text-field';
import Toaster from '../../../components/toaster';

import style from '../auth.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const [toaster, setToaster] = useState({
    visible: true,
    message: 'Something went wrong, try again',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    navigate('/');
  };

  const handleForgotClick = () => {
    navigate('/forgot-password');
  };
  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  return (
    <div className={style.mainWrapper}>
      {(errors.email?.message || errors.password?.message) && (
        <Toaster
          message={toaster.message}
          setVisible={setToaster}
          visible={toaster.visible}
          type="error"
        />
      )}
      <div className={style.content}>
        <div className={style.logoDiv}>
          <img src={logo} alt="app logo" />
          <span>Login to Akari Terminal.</span>
        </div>
        <form className={style.formDiv} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            placeholder="Please enter your email address"
            type="email"
            errorMessage={errors.email?.message}
            name="email"
            register={register('email', { required: 'Email is required' })}
          />
          <TextField
            label="Password"
            placeholder="Please enter your password"
            type="password"
            errorMessage={errors.password && 'Password is required'}
            name="password"
            register={register('password', {
              required: 'Password is required',
            })}
          />
          <button type="submit">Login</button>
          <button onClick={handleSignUpClick}>Sign Up</button>
        </form>
        <div className={style.forgotPw}>
          <span onClick={handleForgotClick}>Forgot password?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
