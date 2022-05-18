import React/*, {useState}*/ from "react"
import {useForm} from "react-hook-form"
import {ErrorMessage} from "@hookform/error-message"


import {
    StyledWrapper,
    StyledForm,
    StyledPerson,
    StyledSection,
    StyledInner,
    StyledRadio,
    StyledController,
    StyledRadioWrapper,
    Select,
    StyledButton,
    StyledTitleSection,
    StyledTitle,

    H1

} from "./Form.styles"
import PropTypes from "prop-types";



export default function Form({setModalOpen}) {


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    async function onSubmit(data) {
        const body = {
            data : data
        };
        const res = await fetch(
            `${process.env.GATSBY_SERVERLESS_BASE}/SendMail`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(body),
            }
        );
        const text = JSON.parse(await res.text());
        if (res.status >= 400 && res.status < 600) {
            alert(text.message);
        } else {
            setModalOpen(true)
        }
    }
    const options = [
        {value: "mieszkanie", label: "Mieszkanie"},
        {value: "dom", label: "Dom"},
        {value: "działaka", label: "Działka"},
        {value: "inne", label: "Inne"},
    ]

    return (
         <StyledWrapper id="kontakt" onSubmit={handleSubmit(onSubmit)}>

            <StyledTitleSection>
                <StyledTitle>

                    <H1>Kontakt</H1>
                </StyledTitle>
            </StyledTitleSection>
            <StyledForm>
                <StyledPerson>
                    <StyledSection>
                        <StyledInner>
                            <ErrorMessage
                                errors={errors}
                                name="FirstName"
                                render={({message}) => <p className="error">{message}</p>}
                            />
                            <p>Imie </p>
                            <input
                                type="text"
                                placeholder="Imie"
                                {...register("FirstName", {
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
                                render={({message}) => <p className="error">{message}</p>}
                            />
                            <p>E-mail </p>
                            <input
                                type="text"
                                placeholder="E-mail"
                                {...register("Email", {
                                    required: "Podaj Email",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Co to ma byc"
                                    },
                                })}
                            />
                        </StyledInner>
                    </StyledSection>
                    <StyledSection>
                        <StyledInner>
                            <ErrorMessage
                                errors={errors}
                                name="Book"
                                render={({message}) => <p className="error">{message}</p>}
                            />
                            <p>Nr księgi wieczystej </p>
                            <input
                                type="text"
                                name="message"
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
                            <Select {...register("EstateType")} menuIsOpen={true} name="EstateType" >
                                <option disabled>Wybierz rodzaj</option>
                                {options.map(option => (
                                    <option key={option.value} value={option.label}>{option.label}</option>
                                ))}
                            </Select>
                        </StyledController>
                    </StyledSection>
                    <StyledSection>
                        <StyledInner>
                            <ErrorMessage
                                errors={errors}
                                name="Price"
                                render={({message}) => <p className="error">{message}</p>}
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
                                name="MobileNumber"
                                render={({message}) => <p className="error">{message}</p>}
                            />
                            <p>Telefon kontaktowy</p>
                            <input
                                type="tel"
                                placeholder="Telefon kontaktowy"
                                {...register("MobileNumber", {
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
                                render={({message}) => <p className="error">{message}</p>}
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
                                render={({message}) => <p className="error">{message}</p>}
                            />
                            <p className="see">Piętro </p>
                            <input
                                type="number"
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
                                render={({message}) => <p className="error">{message}</p>}
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
                                render={({message}) => <p className="error">{message}</p>}
                            />
                            <p className="see">Rok budowy</p>
                            <input
                                type="text"
                                placeholder="Rok budowy"
                                {...register("Year", {
                                    required: "Podaj rok budowy",
                                    maxLength: 6,
                                })}
                            />
                        </StyledInner>
                    </StyledSection>
                    <StyledSection>
                        <StyledInner Big>
                            <ErrorMessage
                                errors={errors}
                                name="Info"
                                render={({message}) => <p className="error">{message}</p>}
                            />
                            <p>inne informacje dotyczące nieruchomości </p>
                            <textarea
                                cols="100"
                                rows="3"
                                name="text"
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
                                <label>
                                    <input {...register("balcony")} type="checkbox" value='Jest'/>
                                     Balkon</label>
                            </StyledRadio>
                            <StyledRadio>
                                <label>
                                <input {...register("lift")} type="checkbox" value='Jest'/>
                                Winda</label>
                            </StyledRadio>
                            <StyledRadio>
                                <label>
                                <input {...register("parking")} type="checkbox" value='Jest'/>
                                Miejsce parkingowe</label>
                            </StyledRadio>
                        </StyledRadioWrapper>
                    </StyledSection>
                </StyledPerson>
                <StyledButton>
                    <input type="submit" value="Wyślij"/>
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
Form.propTypes = {
    setModalOpen:PropTypes.func,
}

