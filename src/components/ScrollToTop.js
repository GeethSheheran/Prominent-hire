// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ isModalOpen }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isModalOpen) {
      window.scrollTo(0, 0);
    }
  }, [pathname, isModalOpen]);

  return null;
};

export default ScrollToTop;
