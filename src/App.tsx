import React, {createContext, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './ui-kit/theme/theme';
import './ui-kit/fonts/fonts.css';
import {AppLayout} from './components/Layout';
import {BrowserRouter} from 'react-router-dom';
import {AppRouter} from './Router';
import {initialProjectData} from './constants/common';

export const ProjectContext = createContext<any | undefined>(undefined);
const App: React.FC = () => {
  const [values, setValues] = useState(initialProjectData);

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProjectContext.Provider value={[values, setValues]}>
          <AppLayout>
            <AppRouter />
          </AppLayout>
        </ProjectContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
