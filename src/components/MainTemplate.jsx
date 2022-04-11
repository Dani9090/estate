import * as React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "src/assets/styles/GlobalStyle"
import { theme } from "src/assets/styles/theme"
import Nav from "src/components/Nav/Nav"
import "src/assets/styles/normalize.css"
import Footer from "./Footer/Footer"

export var MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
