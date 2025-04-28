import { useLocation } from 'react-router';
import { useEffect } from 'react';

const AutoOnTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);

    const isProductCategoryPage =
      segments[0] === 'products' && segments.length === 2;
    if (!isProductCategoryPage) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }, [pathname]);

  return null;
};

export default AutoOnTop;
