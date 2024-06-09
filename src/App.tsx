import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import './theme/theme.scss'; // theme
import 'primereact/resources/primereact.css'; // core css
import 'primeicons/primeicons.css'; // icons
import { CardStorage } from './contexts/CardContext';
import { TarotReadingStorage } from './contexts/TarotReadingContext';
import { ToastContextProvider } from './contexts/ToastContext';
import { ReportsStorage } from './contexts/ReportContext';
import { ThemeStorage } from './contexts/ThemeContext';
import { Container } from './components/Container/Container';
import 'primeflex/primeflex.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeStorage>
          <CardStorage>
            <TarotReadingStorage>
              <ReportsStorage>
                <ToastContextProvider>
                  <Container />
                </ToastContextProvider>{' '}
              </ReportsStorage>
            </TarotReadingStorage>
          </CardStorage>
        </ThemeStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
