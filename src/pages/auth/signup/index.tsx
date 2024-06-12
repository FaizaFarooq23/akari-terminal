/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import logo from '../../../../assets/icons/app-icon/sidebar-icons/akari-logo.svg';

import TextField from '../../../components/text-field';
import Toaster from '../../../components/toaster';

import style from '../auth.module.scss';
import Checkbox from '../../../components/checkbox';

const SignUp = () => {
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

  const handleLoginClick = () => {
    navigate('/login');
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
            label="Phone number"
            placeholder="(+227) 616 88 73 15"
            errorMessage={errors.password && 'Password is required'}
            name="password"
            register={register('password', {
              required: 'Password is required',
            })}
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
          <TextField
            label="Confirm password"
            placeholder="Please enter your password"
            type="password"
            errorMessage={errors.password && 'Password is required'}
            name="password"
            register={register('password', {
              required: 'Password is required',
            })}
          />
          <div className={style.termsDiv}>
            <Checkbox
              checked={false}
              name="checkbox"
              // handleChange={(e) => bugsChecked(e, [row])}
            />

            <div>
              <span>I have read and agree to the </span>
              <span style={{ color: '#5c73db', cursor: 'pointer' }}>
                {' '}
                terms and conditions
              </span>
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
        <div className={style.alreadyDiv}>
          <span>Already have an account? </span>
          <span
            style={{ color: '#5c73db', cursor: 'pointer' }}
            onClick={handleLoginClick}
          >
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
