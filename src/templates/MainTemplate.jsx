import React from "react"
import { theme } from "src/assets/styles/theme"
import { ThemeProvider } from "styled-components"
import {GlobalStyle} from "src/assets/styles/GlobalStyle"
import PropTypes from "prop-types"
import Footer from "src/components/Footer/Footer"
import Nav from "src/components/Nav/Nav"

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        <main>{children}</main>

        <Footer />
      </ThemeProvider>
    </>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainTemplate
