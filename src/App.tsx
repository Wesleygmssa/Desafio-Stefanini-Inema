import React from 'react';
import AppProvider from './hooks';
import Home from './page/home';
import Global from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Global />
      <Home />
    </AppProvider>
  </>
);

export default App;
