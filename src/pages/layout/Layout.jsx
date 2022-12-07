import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
    PropTypes.func,
    PropTypes.elementType,
    PropTypes.object,
  ]).isRequired,
};

export default Layout;
