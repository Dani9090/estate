import React from "react"
import Header from "../components/Header/Header"
import About from "../components/About/About"
import Procedure from "../components/Procedure/Procedure"
import Form from "../components/Form/Form"

const Homepage = () => {
  return (
    <main>
      <Header />
      <About />
      <Procedure />
      <Form />
    </main>
  )
}

export default Homepage
