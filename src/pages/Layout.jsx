import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import NewsLetter from './../components/NewsLetter';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Layout;
