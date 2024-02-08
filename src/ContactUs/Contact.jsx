import React, { useState } from 'react';
import style from './Contact.module.css';

export default function Contact() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [userNameFocused, setUserNameFocused] = useState(false);
  const [userEmailFocused, setUserEmailFocused] = useState(false);
  const [userAgeFocused, setUserAgeFocused] = useState(false);
  const [userPasswordFocused, setUserPasswordFocused] = useState(false);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handleUserAgeChange = (event) => {
    setUserAge(event.target.value);
  };

  const handleUserPasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleUserNameFocus = () => {
    setUserNameFocused(true);
  };

  const handleUserNameBlur = () => {
    setUserNameFocused(false);
  };

  const handleUserEmailFocus = () => {
    setUserEmailFocused(true);
  };

  const handleUserEmailBlur = () => {
    setUserEmailFocused(false);
  };

  const handleUserAgeFocus = () => {
    setUserAgeFocused(true);
  };

  const handleUserAgeBlur = () => {
    setUserAgeFocused(false);
  };

  const handleUserPasswordFocus = () => {
    setUserPasswordFocused(true);
  };

  const handleUserPasswordBlur = () => {
    setUserPasswordFocused(false);
  };

  return (
    <div className={`all bg-white text-white p-5`}>
      <div className="container w-50">
        <h1 className={`text-center ${style.mainColor}`}>CONTACT SECTION</h1>
        <div className="bag d-flex align-items-cencer justify-content-center p-3 gap-2">
          <div className={`${style.line}`}></div>
          <i className={`fa-solid fa-star ${style.mainColor}`}></i>
          <div className={`${style.line}`}></div>
        </div>
        <form className='m-auto'>
          <div className={`form-group ${style.inputContainer}`}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className={`${style.placeholder} ${userNameFocused || userName ? style.focused : ''}`} htmlFor="userName">userName :</label>
              <input
                className={`form-control ${style.formcontrol} m-3 ${style.inputField}`}
                type="text"
                id="userName"
                placeholder='userName'
                value={userName}
                onChange={handleUserNameChange}
                onFocus={handleUserNameFocus}
                onBlur={handleUserNameBlur}
                required
              />
            </div>
          </div>
          <div className={`form-group ${style.inputContainer}`}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className={`${style.placeholder} ${userEmailFocused || userEmail ? style.focused : ''}`} htmlFor="userEmail">userEmail :</label>
              <input
                className={`form-control m-3 ${style.inputField} ${style.formcontrol}`}
                type="email"
                id="userEmail"
                placeholder='userEmail'
                value={userEmail}
                onChange={handleUserEmailChange}
                onFocus={handleUserEmailFocus}
                onBlur={handleUserEmailBlur}
                required
              />
            </div>
          </div>
          <div className={`form-group ${style.inputContainer}`}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className={`${style.placeholder} ${userAgeFocused || userAge ? style.focused : ''}`} htmlFor="userAge">userAge :</label>
              <input
                className={`form-control m-3 ${style.inputField} ${style.formcontrol}`}
                type="number"
                id="userAge"
                placeholder='userAge'
                value={userAge}
                onChange={handleUserAgeChange}
                onFocus={handleUserAgeFocus}
                onBlur={handleUserAgeBlur}
                required
              />
            </div>
          </div>
          <div className={`form-group ${style.inputContainer}`}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className={`${style.placeholder} ${userPasswordFocused || userPassword ? style.focused : ''}`} htmlFor="userPassword">userPassword :</label>
              <input
                className={`form-control m-3 ${style.inputField} ${style.formcontrol}`}
                type="password"
                id="userPassword"
                placeholder='userPassword'
                value={userPassword}
                onChange={handleUserPasswordChange}
                onFocus={handleUserPasswordFocus}
                onBlur={handleUserPasswordBlur}
                required
              />
            </div>
          </div>
          <button className={`text-white btn m-3 ${style.btnColor}`} type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
