import React from "react"
import Header from "../components/Header/Header"
import About from "../components/About/About"
import Procedure from "../components/Procedure/Procedure"
import Form from "../components/Form/Form"
import FOrmik from "../components/Form/FOrmik"
import SupportedCity from "../components/SupportedCity/SuppoetedCity"


const Homepage = () => {
  return (
    <main>
      <Header />

      <About />
      <Procedure />
      <Form />
        <FOrmik />
      <SupportedCity />
    </main>
  )
}

export default Homepage
