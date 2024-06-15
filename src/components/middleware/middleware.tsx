import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../pages/auth/login';

export default function Middleware({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('user');
    console.log('token', token);
    if (token) {
      setLoggedIn(true);
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (loggedIn) {
    return <div className=" w-full">{children}</div>;
  }

  return (
    <div>
      <Login />
    </div>
  );
}
