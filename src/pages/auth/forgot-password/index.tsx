import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import logo from '../../../../assets/icons/app-icon/sidebar-icons/akari-logo.svg';
import TextField from '../../../components/text-field';

import style from '../auth.module.scss';
import Toaster from '../../../components/toaster';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useState('');
  const [toaster, setToaster] = useState({
    visible: true,
    message: 'Request sent',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    if (!errors.email?.message) {
      setToast('error');
    } else {
      setToast('success');
    }
  };

  const handleHomeClick = () => {
    navigate('/login');
  };
  return (
    <div className={style.mainWrapper}>
      {toast && (
        <Toaster
          message={toaster.message}
          setVisible={setToaster}
          visible={toaster.visible}
          type={toast}
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
            onSuccess={toast}
            name="email"
            register={register('email', { required: 'Email is required' })}
          />
          <button type="submit">Send</button>
        </form>
        <div className={style.backToLogin}>
          <span onClick={handleHomeClick}>Back to login</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
