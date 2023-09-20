import React from "react";
import "./Autorizzation.css";

const Authorization = () => {
  return (
    <div className="auth-container">
      <form id="authorization">
        <div className="form-header">
          <label className="choose-action">
            <input
              className="choose-action-login choose"
              type="button"
              value="LOGIN"
            />
            <span>or</span>
            <input
              className="choose-action-sign"
              type="button"
              value="SIGN IN"
            />
          </label>
          <button className="close-form">x</button>
        </div>

        <label className="login" for="login">
          <span>Login:</span>
          <input className="user-data" type="text" name="login" />
        </label>
        <label className="password" for="password">
          <span>Password:</span>
          <input className="user-data" type="password" name="password" />
        </label>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export default Authorization;
