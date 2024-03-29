import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    font-size: 1.5rem;
    width: 100%;
    height: 100%;
    padding: 0;
    overflow-x: hidden;
  }
  ul{
    padding-left: 0;
  }
`
