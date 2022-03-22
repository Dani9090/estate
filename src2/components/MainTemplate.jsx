import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import Nav from "components/Nav/Nav"

export function MainTemplate({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        {children}
      </ThemeProvider>
    </>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
