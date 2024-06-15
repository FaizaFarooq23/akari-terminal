/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../../../assets/icons/app-icon/sidebar-icons/akari-logo.svg';

import TextField from '../../../components/text-field';
import Toaster from '../../../components/toaster';

import style from '../auth.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const [licenseKey, setLicenseKey] = useState('');
  const [userData, setUserData] = useState({} as any);
  const [toaster, setToaster] = useState({
    visible: true,
    message: 'Something went wrong, try again',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.removeItem('user');
    window.electron.ipcRenderer.sendMessage('get-user-data');

    window.electron.ipcRenderer.once('get-user-data', (arg) => {
      const data = JSON.parse(arg);
      console.log('data', data);
      setUserData(data);
    });
  }, []);

  const onSubmit = async (data: any) => {
    if (!licenseKey) {
      setToaster({
        visible: true,
        message: 'Please enter a license key',
      });
      return;
    }
    let machineId = '';
    console.log(userData);
    if (userData.machineId) {
      machineId = userData.machineId;
      console.log(machineId);
    } else {
      console.log('no user data found');
      machineId = uuidv4();
      window.electron.ipcRenderer.sendMessage('save-user-data', { machineId });
    }

    const url = `https://akaricorporation.com/loginAkariTerminal?licenseKey=${licenseKey}&machineId=${machineId}`;
    console.log(url);
    const res = await fetch(url, {
      method: 'GET',
    });
    const response = await res.json();
    console.log(response);
    if (response.user) {
      localStorage.setItem('user', JSON.stringify(response.user));
      navigate('/dashboard');
    } else {
      setToaster({
        visible: true,
        message: response.message,
      });
    }
  };

  const licenseKeyChange = (e: any) => {
    setLicenseKey(e.target.value);
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
            label="License key"
            placeholder="Please enter your license Key"
            type="text"
            errorMessage={errors.email?.message}
            name="licenseKey"
            onChange={licenseKeyChange}
          // register={register('email', { required: 'Email is required' })}
          />
          {/* <TextField
            label="Password"
            placeholder="Please enter your password"
            type="password"
            errorMessage={errors.password && 'Password is required'}
            name="password"
            register={register('password', {
              required: 'Password is required',
            })}
          /> */}
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
