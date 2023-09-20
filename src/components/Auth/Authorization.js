import React, { useState } from 'react';
import './Autorization.css';

const Authorization = ({ t }) => {
  const [authAction, setAuthAction] = useState(false);

  const handleSign = () => {
    setAuthAction(true);
  };

  const handleAuth = () => {
    setAuthAction(false);
  };

  return (
    <div>
      <form id="authorization">
        <div className="form-header">
          <label className="choose-action">
            <input
              className={`choose-action-login ${!authAction ? 'choose' : ''}`}
              type="button"
              value={t('LOGIN')}
              onClick={handleAuth}
            />
            <span>{t('or')}</span>
            <input
              className={`choose-action-sign ${authAction ? 'choose' : ''}`}
              type="button"
              value={t('SIGN IN')}
              onClick={handleSign}
            />
          </label>
        </div>
        {!authAction ? (
          <div className="auth-container">
            <label className="login" name="login">
              <span>{t('Login')}</span>
              <input className="user-data" type="text" name="login" />
            </label>
            <label className="password" name="password">
              <span>{t('Password')}</span>
              <input className="user-data" type="password" name="password" />
            </label>
            <button className="submit">{t('Submit')}</button>
          </div>
        ) : (
          <div className="auth-container">
            <label className="login" htmlFor="login">
              <span>{t('Username')}</span>
              <input className="user-data" type="text" name="login" />
            </label>
            <label className="password" htmlFor="password">
              <span>{t('Password')}</span>
              <input className="user-data" type="password" name="password" />
            </label>
            <button className="submit">{t('Sign in')}</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Authorization;
