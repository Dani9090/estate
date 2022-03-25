import React from "react"
import chroma from "chroma-js"
import Select from "react-select"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import styled from "styled-components"

const StyledWrapper = styled.form`
  width: 100%;
  height: auto;
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
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`

const StyledInner = styled.form`
  width: auto;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.white};

  input {
    width: 550px;
    height: 60px;
    border: 1px solid ${({ theme }) => theme.orange};
    border-radius: 5px;
    z-index: 1;
    background-color: ${({ theme }) => theme.brown};
    color: ${({ theme }) => theme.white};
    padding-left: 5px;

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
    z-index: 9;
  }

  .error {
    z-index: 999;
    color: red;
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
const StyledController = styled.div`
  background-color: ${({ theme }) => theme.black};
  border: 1px ${({ theme }) => theme.black} solid;

  .css-1jwi8f4-singleValue {
    color: ${({ theme }) => theme.white};
  }
`

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  })
  const onSubmit = data => console.log(data)

  const options = [
    { value: "mieszkanie", label: "Mieszkanie" },
    { value: "dom", label: "Dom" },
    { value: "dziłaka", label: "Działka" },
    { value: "inne", label: "Inne" },
  ]
  const customStyles = {
    option: (provided, state) => ({
      ...provided,

      background: state.isSelected ? "hsl(14, 64%, 54%)" : "hsl(355,13%,20%)",
      color: state.isSelected ? "white" : "black",
      padding: 5,
      width: "545px",
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 550,
      height: 60,
      border: "1px solid hsl(39, 96%, 65%)",
      borderRadius: "5px",
      background: "hsl(355,13%,20%)",
      display: "flex",
      color: "red",
    }),
    menu: () => ({
      width: 550,
      border: "1px solid hsl(39, 96%, 65%)",
      borderRadius: "5px",
      background: "hsl(355,13%,20%)",
    }),

    Input: () => ({
      color: "red",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 1 : 1
      const transition = "opacity 300ms"

      return { ...provided, opacity, transition }
    },
  }
  return (
    <StyledWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledForm>
        <StyledPerson>
          <StyledInner>
            <ErrorMessage
              errors={errors}
              name="First name"
              render={({ message }) => <p className="error">{message}</p>}
            />
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
            <ErrorMessage
              errors={errors}
              name="Email"
              render={({ message }) => <p className="error">{message}</p>}
            />
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
            <ErrorMessage
              errors={errors}
              name="Book"
              render={({ message }) => <p className="error">{message}</p>}
            />
            <p>Nr księgi wieczystej </p>
            <input
              type="text"
              placeholder="Nr księgi wieczystej "
              {...register("Book", {
                required: "Podaj numer księgi",
                maxLength: 100,
              })}
            />
          </StyledInner>

          <StyledController>
            <Select
              label="Age"
              options={options}
              styles={customStyles}
              width="200px"
            />
          </StyledController>

          <StyledInner>
            <ErrorMessage
              errors={errors}
              name="Price"
              render={({ message }) => <p className="error">{message}</p>}
            />
            <p className="see">Oczekiwana Cena </p>
            <input
              type="text"
              placeholder="Oczekiwana Cena"
              {...register("Price", {
                required: "Oczekiwana Cena",
                maxLength: 80,
              })}
            />
          </StyledInner>

          <StyledInner>
            <ErrorMessage
              errors={errors}
              name="Mobile number"
              render={({ message }) => <p className="error">{message}</p>}
            />
            <p>Telefon kontaktowy</p>
            <input
              type="tel"
              placeholder="Telefon kontaktowy"
              {...register("Mobile number", {
                required: "Podaj numer telefonu",
                minLength: 6,
                maxLength: 12,
              })}
            />
          </StyledInner>

          <StyledInner>
            <ErrorMessage
              errors={errors}
              name="Info"
              render={({ message }) => <p className="error">{message}</p>}
            />

            <p>inne informacje dotyczące nieruchomości </p>
            <input
              type="text"
              placeholder="inne informacje dotyczące nieruchomości"
              {...register("Info", {
                required: "Podaj informację dotyczące nieruchomości",
                maxLength: 80,
              })}
            />
          </StyledInner>
          <StyledInner>
            <ErrorMessage errors={errors} name="Adres" />
            <p>Adres</p>
            <input
              type="text"
              placeholder="Adres"
              {...register("Adres", {
                required: "Adres",
                maxLength: 80,
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
