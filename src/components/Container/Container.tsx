import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import ProtectedRoute from '../../helpers/ProtectedRoute';
import RedirectRoute from '../../helpers/RedirectRoute';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Auth } from '../../pages/auth/Auth';
import { SignUp } from '../../pages/signup/SignUp';
import { RecoverPassword } from '../../pages/password/Password';
import { NotFound } from '../../pages/not-found/NotFound';
import { Home } from '../../pages/home/Home';
import { Cards } from '../../pages/cards/Cards';
import { CardTypes } from '../../pages/card-types/CardTypes';
import { TarotReading } from '../../pages/tarot-reading/TarotReading';
import { TarotReadingTypes } from '../../pages/tarot-reading-types/TarotReadingTypes';
// import { Reports } from '../../pages/reports/Reports';
import { User } from '../../pages/user/User';

export const Container = () => {
  const { theme } = React.useContext(ThemeContext) || {};
  const location = useLocation();
  const rotes = ['/auth', '/signup', '/password-reset'];

  return (
    <main
      className={
        theme &&
        (rotes.includes(location.pathname) ||
          location.pathname.includes('/password-reset'))
          ? 'light'
          : 'dark'
      }
    >
      <div className="container-root">
        <Header />

        <Routes>
          <Route
            path="/auth"
            element={
              <RedirectRoute>
                <Auth />{' '}
              </RedirectRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectRoute>
                {' '}
                <SignUp />{' '}
              </RedirectRoute>
            }
          />
          <Route
            path="/password-reset/:token"
            element={
              <RedirectRoute>
                {' '}
                <RecoverPassword />
              </RedirectRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path="/card-types"
            element={
              <ProtectedRoute>
                <CardTypes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cards"
            element={
              <ProtectedRoute>
                <Cards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/taror-reading-types"
            element={
              <ProtectedRoute>
                <TarotReadingTypes />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/Tarot-reading"
            element={
              <ProtectedRoute>
                <TarotReading />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </main>
  );
};
