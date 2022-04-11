import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import styled from "styled-components"

const Wrapper = styled.form`
  width: 100%;
  margin-top: 100px;
  height: 20vh;
  border: 1px solid red;
  color: black;
`
const ContactForm = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_m91wvcs",
        "template_ap418sd",
        form.current,
        "nSZ8CbfnbrLl4LOFb"
      )
      .then(
        result => {
          alert(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <Wrapper ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </Wrapper>
  )
}
export default ContactForm
