import React from "react"
import { theme } from "assets/styles/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "assets/styles/GlobalStyle"
import PropTypes from "prop-types"
import Footer from "components/Footer/Footer"
import Nav from "components/Nav/Nav"

function MainTemplate({ children }) {
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
