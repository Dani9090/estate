import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import styled from "styled-components"
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
    Select,
    StyledButton,
    StyledTitleSection,
    StyledTitle,
    Back,
    H1

} from "./FormStyles"

const StyledFormik = styled(Formik)`
  width: 80%;
  margin: 50px 0;
  position: relative;
`

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

const ValidationSchemaExample = () => (
    <StyledWrapper>
        <StyledTitleSection>
            <StyledTitle>
                <Back />
                <H1>Kontakt</H1>
            </StyledTitle>
        </StyledTitleSection>
        <StyledFormik
            initialValues={{
                name: '',
                email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="name"  />
                               {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                              ) : null}

                    <Field name="email" type="email" />
                               {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                              ) : null}
                             <ErrorMessage name="email" />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </StyledFormik>
    </StyledWrapper>
);
export default ValidationSchemaExample