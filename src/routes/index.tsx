import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import AutoListing from '../pages/auto-listing';
import AccountManager from '../pages/account-manager';
import CsvPage from '../pages/csv';
import Settings from '../pages/settings';
import Login from '../pages/auth/login';
import ForgotPassword from '../pages/auth/forgot-password';
import SignUp from '../pages/auth/signup';
import Middleware from '../components/middleware/middleware';

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Middleware>
              <Dashboard />
            </Middleware>
          }
        />
        <Route
          path="/auto-listing"
          element={
            <Middleware>
              <AutoListing />
            </Middleware>
          }
        />
        <Route
          path="/account-manager"
          element={
            <Middleware>
              <AccountManager />
            </Middleware>
          }
        />
        <Route
          path="/csv"
          element={
            <Middleware>
              <CsvPage />
            </Middleware>
          }
        />
        <Route
          path="/settings"
          element={
            <Middleware>
              <Settings />
            </Middleware>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
