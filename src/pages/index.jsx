import React, { useState } from "react";
import Header from "../components/Header/Header"
import About from "../components/About/About"
import Procedure from "../components/Procedure/Procedure"
import Form from "../components/Form/Form"
import SupportedCity from "../components/SupportedCity/SuppoetedCity"
import Modal from "../components/Modal/Modal"

const Homepage = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [contextModal, setcontextModal] = useState('')

  const toogleModalOpen = () => {
    setModalOpen(!isModalOpen)
  }
  console.log(isModalOpen);
  return (
    <main>
      <Header />
      <About />
      <Procedure />
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} contextModal={contextModal}/>
      <Form onClick={toogleModalOpen} setcontextModal={setcontextModal} setModalOpen={setModalOpen} isModalOpen={isModalOpen} />

      <SupportedCity />
    </main>
  )
}

export default Homepage
