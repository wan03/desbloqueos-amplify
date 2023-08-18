import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '../../components/navbar/Navbar';
import theme from '../../themeConfig';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main className="app-general">{children}</main>
    </ThemeProvider>
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
