import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('prefers-color-scheme: dark').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className='bg-containerColor dark:bg-titleColor  '>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        closeButton={false}
        pauseOnHover={false}
        bodyClassName={'toast '}
        pauseOnFocusLoss={false}
        className={'top-9'}
      />

      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home theme={theme} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
