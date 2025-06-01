// components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Для современных браузеров
    window.scrollTo({
      top: 0,
      behavior: 'instant' // или 'auto'
    });
    
    // Фолбэк для старых браузеров
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;