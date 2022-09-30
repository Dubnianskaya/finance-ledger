import { useState, useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  FormTitle,
  InputContainer,
  LabelStyled,
  InputStyled,
  Error,
  FormBtn,
} from './CallbackForm.styled';
import sprite from '../../styles/assets/icons/icon-sprite.svg';

export const CallbackForm = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [filledName, setFilledName] = useState(false);
  // const [filledMail, setFilledMail] = useState(false);

  // useEffect(() => {
  //     if(name.length > 0) {
  //         setFilledName(true)
  //     }
  //     if(email.length > 0) {
  //         setFilledMail(true)
  //     }
  // }, [name, email])

  return (
    <FormContainer>
      <FormTitle>Request Callback</FormTitle>
      <Formik
        initialValues={{
          name: '',
          mail: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string('Must be a string'),
          mail: Yup.string()
            .email('Wrong email')
            .required('This is a required field'),
        })}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form>
          <InputContainer>
            <InputStyled
              id="name"
              name="name"
              type="text"
            />
            <LabelStyled htmlFor="name">
              Enter your name
            </LabelStyled>
            <ErrorMessage
              name="name"
              render={msg => (
                <Error>
                  <svg
                    width="14"
                    height="14"
                    fill="#f0000f"
                  >
                    <use
                      href={`${sprite}#icon-worning`}
                    ></use>
                  </svg>
                  {msg}
                </Error>
              )}
            />
          </InputContainer>
          <InputContainer>
            <InputStyled
              id="mail"
              name="mail"
              type="email"
            />
            <LabelStyled htmlFor="mail">
              Enter email*
            </LabelStyled>
            <ErrorMessage
              name="mail"
              render={msg => (
                <Error>
                  <svg
                    width="14"
                    height="14"
                    fill="#f0000f"
                  >
                    <use
                      href={`${sprite}#icon-worning`}
                    ></use>
                  </svg>
                  {msg}
                </Error>
              )}
            />
          </InputContainer>
          <FormBtn type="submit">Send</FormBtn>
        </Form>
      </Formik>
    </FormContainer>
  );
};
