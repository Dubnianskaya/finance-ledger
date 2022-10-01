import { useState } from 'react';
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
import { BasicModal } from '../Modal';

export const CallbackForm = () => {
  const [nameValue, setNameValue] = useState('');
  const [mailValue, setMailValue] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          handleOpen();
          setNameValue('');
          setMailValue('');
        }}
      >
        {({ setFieldValue }) => {
          return (
            <Form name="contact" method="post">
              <input
                type="hidden"
                name="form-name"
                value="contact"
              />
              <InputContainer>
                <InputStyled
                  id="name"
                  name="name"
                  type="text"
                  value={nameValue}
                  onChange={e => {
                    setFieldValue('name', e.target.value);
                    setNameValue(e.target.value);
                  }}
                />
                <LabelStyled
                  htmlFor="name"
                  className={nameValue && 'filled'}
                >
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
                  value={mailValue}
                  onChange={e => {
                    setFieldValue('mail', e.target.value);
                    setMailValue(e.target.value);
                  }}
                />
                <LabelStyled
                  htmlFor="mail"
                  className={mailValue && 'filled'}
                >
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
          );
        }}
      </Formik>
      <BasicModal open={open} handleClose={handleClose} />
    </FormContainer>
  );
};
