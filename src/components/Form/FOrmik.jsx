import React from 'react';
import styled from "styled-components"
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import {

    StyledForm,
    StyledPerson,
    StyledSection,
    StyledInner,
    StyledRadio,
    P,
    StyledController,
    StyledRadioWrapper,
    StyledButton,
    StyledTitleSection,
    StyledTitle,
    Back,
    H1,
} from "./FormStyles"

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 30vh;
  margin: 0 auto;
  background-color: ${({theme}) => theme.black};
  border: 1px solid ${({theme}) => theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    clip-path: polygon(0 0, 13% 0, 13% 87%, 100% 87%, 100% 100%, 0% 100%);
    background-color: ${({theme}) => theme.orange};
    left: 30px;
    bottom: 30px;
  }
`


const Select = styled(Field)`
  width: auto;
  min-width: 450px;
  display: flex;
  justify-content: flex-start;
  position: relative;
  z-index: 1;
  color: ${({theme}) => theme.white};
  height: 60px;
  border: 1px solid ${({theme}) => theme.orange};
  border-radius: 5px;
  background-color: ${({theme}) => theme.brown};
  padding-left: 5px;
  font-family: ${({theme}) => theme.font.family.montserrat};
  font-weight: 300;

  &::placeholder {
    padding: 5px;
  }

  option {
    border: 1px solid red;
  }

  p {
    width: auto;
    height: 20px;
    padding: 0 5px;
    position: absolute;
    top: -25px;
    left: 0;
    color: ${({theme}) => theme.orange};
    font-family: ${({theme}) => theme.font.family.montserrat};
    font-size: ${({theme}) => theme.font.size.xs};
    background: linear-gradient(to top,
    ${({theme}) => theme.brown} 50%,
    ${({theme}) => theme.black} 0%);
    z-index: 9;

  }

  .error {
    z-index: 999;
    color: red;
    border: 1px red solid;
  }

`
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Wymagane dłuższe imie!')
        .max(50, 'Za długie imie!')
        .required('Podaj imię'),
    book: Yup.string()
        .min(8, 'Zbyt krótka')
        .max(50, 'Za długa!')
        .required('Podaj nr księgi wieczystej'),
    email: Yup.string().email('Invalid email').required('Podaj mail'),

    price: Yup.number().min(2, 'Nie no, za tyle to nie xd').integer().default(0),
    phonenumber:  Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    adres: Yup.string().min(10, 'Nie poprawny Adres!').required('Podaj Adres'),
   floor: Yup.number().integer().default(0),
});

const FOrmik = (...props) => {

    const {values
    } = props;

    const options = [
        {value: "mieszkanie", label: "Mieszkanie"},
        {value: "dom", label: "Dom"},
        {value: "działaka", label: "Działka"},
        {value: "inne", label: "Inne"},
    ]
    console.log(values)
    return (<StyledWrapper>
        <StyledTitleSection>
            <StyledTitle>
                <Back/>
                <H1>Kontakt</H1>
            </StyledTitle>
        </StyledTitleSection>
        <Formik
            initialValues={{
                firstName: '',
                book: '',
                email: '',
                estatetype: '',
                price: 0,
                phonenumber: '',
                adres: '',
                floor: 0,
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <StyledPerson>
                        <StyledSection>
                            <StyledInner>
                                <p>Imie </p>
                                <Field name="firstName" placeholder="Imie"/>
                                {errors.firstName && touched.firstName ? (
                                    <p className="error">{errors.firstName}</p>
                                ) : null}
                            </StyledInner>
                        </StyledSection>

                        <StyledSection>
                            <StyledInner>
                                <p>Email </p>
                                <Field name="email" placeholder="Email" type="email"/>
                                {errors.email && touched.email ? (
                                    <p className="error">{errors.email}</p>) : null}
                            </StyledInner>
                        </StyledSection>

                        <StyledSection>
                            <StyledInner>
                                <p>Nr księgi wieczystej</p>
                                <Field name="book" placeholder="Nr księgi wieczystej"/>
                                {errors.book && touched.book ? (
                                    <p className="error">{errors.book}</p>
                                ) : null}
                            </StyledInner>
                        </StyledSection>
                        <StyledSection>
                            <StyledController>
                                {/*<p>Rodzaj nieruchomości</p>
                                {console.log(errors.estatetype)}
                                {errors.estatetype && <p className="error">{errors.estatetype}</p>}*/}
                                <Select as="select" name="estatetype" defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT" selected disabled>Wybierz rodzaj
                                    </option>
                                    {options.map(option => (
                                        <option key={option.value}
                                                value={option.label}>{option.label}</option>
                                    ))}
                                </Select>

                            </StyledController>
                        </StyledSection>

                        <StyledSection>
                            <StyledInner>
                                <p>Cena </p>
                                <input type="tel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" name="price" placeholder="Telefon kontaktowy"/>
                                {errors.price && touched.price ? (
                                    <p className="error">{errors.price}</p>
                                ) : null}
                            </StyledInner>
                        </StyledSection>

                             <StyledSection>
                                <StyledInner>
                                    <p>Telefon kontaktowy</p>
                                    <Field name="phoneNumber" placeholder="Telefon kontaktowy"/>
                                    {errors.phonenumber && touched.phonenumber ? (
                                        <p className="error">{errors.phonenumber}</p>
                                    ) : null}
                                </StyledInner>
                            </StyledSection>

                        <StyledSection>
                            <StyledInner>
                                <p>Adres</p>
                                <Field name="adres" placeholder="Adres"/>
                                {errors.adres && touched.adres ? (
                                    <p className="error">{errors.adres}</p>
                                ) : null}
                            </StyledInner>
                        </StyledSection>

                        <StyledSection>
                            <StyledInner>

                                <p>Piętro </p>
                                <input name="floor" type="number" placeholder="Piętro"/>
                                {errors.floor && touched.floor ? (
                                    <p className="error">{errors.floor}</p>
                                ) : null}
                            </StyledInner>
                        </StyledSection>




                            <StyledButton>
                                <button type="submit">Wyślij</button>
                                <p>
                                    Dane podane w formularzu będą przetwarzane przez xxx, w celu
                                    realizacji zgłoszenia i zgodnie z jego zakresem oraz według
                                    zasad
                                    zawartych w Polityce Prywatności.
                                </p>
                            </StyledButton>
                    </StyledPerson>
                </Form>
                )}
                </Formik>

                </StyledWrapper>)

            };
            export default FOrmik
