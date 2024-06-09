import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ActionsMenu } from './ActionsMenu/ActionsMenu';

import User from '../../assets/user-default.png';

import './Header.scss';

export const Header = () => {
  const location = useLocation();
  const rotes = ['/auth', '/signup'];

  return (
    <>
      {' '}
      {!rotes.includes(location.pathname) &&
        !location.pathname.includes('/password-reset') && (
          <div className="header">
            <div className="header-container">
              <div className="actions"></div>

              <div className="user-actions">
                <div className="user-data">
                  <img src={User} alt="" />
                  <span> Usuario </span>
                </div>

                <ActionsMenu />
              </div>
            </div>
          </div>
        )}{' '}
    </>
  );
};
