import React from "react"
import Select from "react-select"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import styled from "styled-components"
import { customStyles } from "src/assets/styles/custom"
import {
  StyledWrapper,
  StyledForm,
  StyledPerson,
  StyledSection,
  StyledInner,
  StyledRadio,
  P,
  StyledController,
  StyledRadioWrapper,
} from "./FormStyles"

const StyledButton = styled.div`
  width: 100%;
  margin: 30px 0;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  input {
    width: 300px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.orange};
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 400;
    padding-top: 20px;
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
`

const StyledTitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    clip-path: polygon(0 13%, 0 0, 100% 0, 100% 100%, 87% 100%, 87% 13%);
    background-color: ${({ theme }) => theme.orange};
    right: 30px;
    top: 29px;
  }
`
const StyledTitle = styled.div`
  width: 200px;
  height: auto;
  margin: 40px 0px 10px 0px;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-weight: 400;
  display: flex;
  justify-content: center;
  position: relative;
`
const Back = styled.div`
  width: 150px;
  height: 60px;
  background-color: ${({ theme }) => theme.orange};
  position: absolute;
  left: -48px;
  top: 0px;
  border-radius: 5px;
  z-index: 1;
`
const H1 = styled.p`
  margin: 0;
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.xxl};
  z-index: 999;
  position: relative;
  font-family: ${({ theme }) => theme.font.family.gilda};
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
    { value: "działaka", label: "Działka" },
    { value: "inne", label: "Inne" },
  ]

  return (
    <StyledWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledTitleSection>
        <StyledTitle>
          <Back />
          <H1>Kontakt</H1>
        </StyledTitle>
      </StyledTitleSection>
      <StyledForm>
        <StyledPerson>
          <StyledSection>
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
          </StyledSection>

          <StyledSection>
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
          </StyledSection>
          <StyledSection>
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
          </StyledSection>
          <StyledSection>
            <StyledController>
              <p>Rodzaj nieruchomości</p>
              <Select
                label="Age"
                options={options}
                styles={customStyles}
                width="200px"
              />
            </StyledController>
          </StyledSection>
          <StyledSection>
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
          </StyledSection>
          <StyledSection>
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
          </StyledSection>

          <StyledSection>
            <StyledInner>
              <ErrorMessage
                errors={errors}
                name="Adres"
                render={({ message }) => <p className="error">{message}</p>}
              />
              <p>Adres</p>
              <input
                type="text"
                placeholder="Adres"
                {...register("Adres", {
                  required: "Podaj Adres",
                  maxLength: 80,
                })}
              />
            </StyledInner>
          </StyledSection>
          <StyledSection>
            <StyledInner>
              <ErrorMessage
                errors={errors}
                name="Floor"
                render={({ message }) => <p className="error">{message}</p>}
              />
              <p className="see">Piętro </p>
              <input
                type="text"
                placeholder="Piętro"
                {...register("Floor", {
                  required: "Podaj piętro",
                  maxLength: 10,
                })}
              />
            </StyledInner>
          </StyledSection>
          <StyledSection>
            <StyledInner>
              <ErrorMessage
                errors={errors}
                name="Area"
                render={({ message }) => <p className="error">{message}</p>}
              />
              <p className="see">Powierzchnia nieruchomości</p>
              <input
                type="text"
                placeholder="Powierzchnia nieruchomości"
                {...register("Area", {
                  required: "Podaj powierzchnie nieruchomości",
                  maxLength: 10,
                })}
              />
            </StyledInner>
          </StyledSection>
          <StyledSection>
            <StyledInner>
              <ErrorMessage
                errors={errors}
                name="Year"
                render={({ message }) => <p className="error">{message}</p>}
              />
              <p className="see">Rok budowy</p>
              <input
                type="text"
                placeholder="Rok budowy"
                {...register("Year", {
                  required: "Podaj rok budowy",
                  maxLength: 10,
                })}
              />
            </StyledInner>
          </StyledSection>
          <StyledSection>
            <StyledInner Big>
              <ErrorMessage
                errors={errors}
                name="Info"
                render={({ message }) => <p className="error">{message}</p>}
              />

              <p>inne informacje dotyczące nieruchomości </p>
              <input
                type="text"
                placeholder="Inne informacje dotyczące nieruchomości"
                {...register("Info", {
                  required: "Podaj informację dotyczące nieruchomości",
                  maxLength: 80,
                })}
              />
            </StyledInner>
          </StyledSection>
          <StyledSection>
            <StyledRadioWrapper>
              <StyledRadio>
                <ErrorMessage
                  errors={errors}
                  name="balcony"
                  render={({ message }) => <p className="error">{message}</p>}
                />

                <input
                  {...register("balcony", { required: "Wybierz rodzaj" })}
                  type="radio"
                  value="Yes"
                />
                <P>Balkon</P>
              </StyledRadio>

              <StyledRadio>
                <ErrorMessage
                  errors={errors}
                  name="lift"
                  render={({ message }) => <p className="error">{message}</p>}
                />

                <input
                  {...register("lift", { required: "Wybierz rodzaj" })}
                  type="radio"
                  value="Yes"
                />
                <P>Winda</P>
              </StyledRadio>

              <StyledRadio>
                <ErrorMessage
                  errors={errors}
                  name="parking"
                  render={({ message }) => <p className="error">{message}</p>}
                />

                <input
                  {...register("parking", { required: "Wybierz rodzaj" })}
                  type="radio"
                  value="Yes"
                />
                <P>Miejsce parkingowe</P>
              </StyledRadio>
            </StyledRadioWrapper>
          </StyledSection>
        </StyledPerson>
        <StyledButton>
          <input type="submit" value="Wyślij" />
          <p>
            Dane podane w formularzu będą przetwarzane przez xxx, w celu
            realizacji zgłoszenia i zgodnie z jego zakresem oraz według zasad
            zawartych w Polityce Prywatności.
          </p>
        </StyledButton>
      </StyledForm>
    </StyledWrapper>
  )
}
