import React from "react"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.black};
  border: 1px ${({ theme }) => theme.black} solid;
`

const StyledForm = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
`
const StyledPerson = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`

const StyledInner = styled.form`
  width: auto;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  input {
    width: 550px;
    height: 60px;
    border: 1px solid ${({ theme }) => theme.orange};
    border-radius: 5px;
    z-index: 1;
    background-color: ${({ theme }) => theme.brown};
    &::placeholder {
      padding: 5px;
    }
  }

  p {
    width: auto;
    height: 20px;
    padding: 0 5px;
    position: absolute;
    top: -25px;
    left: 10px;
    color: ${({ theme }) => theme.orange};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: ${({ theme }) => theme.font.size.xs};
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.brown} 50%,
      ${({ theme }) => theme.black} 0%
    );
    z-index: 999;
  }
`
const StyledRadio = styled.form`
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const P = styled.p`
  width: auto;
  padding: 0 10px;
`

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledPerson>
          <StyledInner>
            <ErrorMessage errors={errors} name="First name" />
            <p>Imie </p>
            <input
              type="text"
              placeholder="Imie"
              {...register("First name", {
                required: "Podaj imie",
                maxLength: 80,
              })}
            />
          </StyledInner>

          <StyledInner>
            <ErrorMessage errors={errors} name="Email" />
            <p>E-mail </p>
            <input
              type="text"
              placeholder="E-mail"
              {...register("Email", {
                required: "Podaj Email",
                pattern: /^\S+@\S+$/i,
              })}
            />
          </StyledInner>

          <StyledInner>
            <p>Nr księgi wieczystej </p>
            <ErrorMessage errors={errors} name="Nr księgi wieczystej " />
            <input
              type="text"
              placeholder="Nr księgi wieczystej "
              {...register("Nr księgi wieczystej ", {
                required: "Podaj nazwisko",
                maxLength: 100,
              })}
            />
          </StyledInner>

          <StyledInner>
            <ErrorMessage errors={errors} name="Mobile number" />
            <p>Imie </p>
            <input
              type="tel"
              placeholder="Numer telefonu"
              {...register("Mobile number", {
                required: "Podaj numer telefonu",
                minLength: 6,
                maxLength: 12,
              })}
            />
          </StyledInner>
        </StyledPerson>
        <h3>Dane adresowe</h3>
        <StyledRadio>
          <ErrorMessage errors={errors} name="Company" />
          <input
            {...register("Company", { required: "Wybierz rodzaj" })}
            type="radio"
            value="Yes"
          />
          <P>Firma</P>

          <input
            className="radio"
            {...register("Person", { required: true })}
            type="radio"
            value="No"
          />
          <P>Ososba prwytna</P>
        </StyledRadio>
        <input type="submit" />
      </StyledForm>
    </StyledWrapper>
  )
}
