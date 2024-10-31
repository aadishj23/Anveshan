import React from 'react';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => (
  <div>
    <ScrollToTop />
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
