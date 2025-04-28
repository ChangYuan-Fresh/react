import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AutoOnTop from './AutoOnTop';

function FrontLayout() {
  return (
    <>
      <AutoOnTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default FrontLayout;
