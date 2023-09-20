import React from 'react';
import './Sign.css';

const Sign = ({ t }) => {
  return (
    <div className="auth-container">
      <label className="login" for="login">
        <span>{t('Username')}</span>
        <input className="user-data" type="text" name="login" />
      </label>
      <label className="password" for="password">
        <span>{t('Password')}</span>
        <input className="user-data" type="password" name="password" />
      </label>
      <button className="submit">{t('Sign up')}</button>
    </div>
  );
};

export default Sign;
