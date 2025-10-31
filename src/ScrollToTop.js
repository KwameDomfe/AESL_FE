import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {

  const location = useLocation();
  
  useEffect(() => {
    const main = document.getElementById('layout-main-content');
    if (main) {
      main.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  
  return null;
}
