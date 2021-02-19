import React from 'react';
import Home from './page/home';
import Global from './styles/global';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <Global />
    <AppProvider>
      <Home />
    </AppProvider>
  </>
);

export default App;
