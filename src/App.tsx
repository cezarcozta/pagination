import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
