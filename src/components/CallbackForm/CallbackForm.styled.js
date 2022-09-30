import styled from '@emotion/styled';
import { Field } from 'formik';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormTitle = styled.h3`
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: 69px;
  ${mediaTablet(
    ` font-size: 40px;
    line-height: 54px;
    margin-bottom: 24px;`
  )}
  ${mediaDesktop(` margin-bottom: 31px;`)}
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  position: relative;
  transition: ${props => props.theme.transitions.primary};
  ${mediaDesktop(` 
  margin-bottom: 25px;
 `)}
  .filled {
    top: -20px;
    ${mediaTablet(` top: -24px;`)}
  }
`;
export const LabelStyled = styled.label`
  position: absolute;
  left: 12px;
  top: 14px;
  color: ${props => props.theme.fontColors.placeHolder};
  ${mediaTablet(
    ` font-size: 18px;
  line-height: 25px;`
  )}
`;

export const InputStyled = styled(Field)`
  width: 100%;
  padding: 16px 8px;
  font-size: 14px;
  line-height: 16px;
  background-color: ${props =>
    props.theme.backgrounds.bodyPrimary};
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: rgb(137, 196, 244, 0.4);
    border: 1px solid #f5f5f5;
    + label {
      top: -20px;
      ${mediaTablet(` top: -24px;`)}
    }
  }
`;

export const Error = styled.p`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -18px;
  left: 8px;
  font-size: 14px;
  line-height: 16px;
  color: #f0000f;
`;

export const FormBtn = styled.button`
    background: ${props =>
      props.theme.backgrounds.buttonPrimary};
    color: ${props => props.theme.fontColors.secondary};
    font-size: 18px;
    line-height: 25px;
    margin-top: 24px;
    padding: 16px 56px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: ${props => props.theme.transitions.primary};
    &:hover,
    &:focus {
    background-color: ${props =>
      props.theme.hovers.primary};
    }
    }
    ${mediaDesktop(` margin-top: 40px;`)}
`;
