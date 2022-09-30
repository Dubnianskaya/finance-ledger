import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const AboutContainer = styled.section`
  ${mediaTablet(`
  display: flex;
`)}
`;

export const AboutImg = styled.img`
  object-fit: cover;
  ${mediaTablet(`
  height: 589px;
`)}
  ${mediaDesktop(`
  height: 100%;
`)}
`;

export const AboutTextContainer = styled.div`
  color: ${props => props.theme.fontColors.secondary};
  background: ${props =>
    props.theme.backgrounds.bodySecondary};
  padding: 79px 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  ${mediaTablet(`
padding: 62px 32px 0 32px;
justify-content: flex-start;
`)}
  ${mediaDesktop(`
padding: 80px 20px;
`)}
`;

export const AboutTextQuestion = styled.p`
  padding-bottom: 16px;
  ${mediaTablet(`
font-size: 18px;
line-height: 25px;
`)}
`;

export const AboutTextTitle = styled.p`
  font-size: 32px;
  line-height: 44px;
  padding-bottom: 24px;
  width: 280px;
  ${mediaTablet(`
font-size: 40px;
line-height: 48px;
width: 336px;
`)}
  ${mediaDesktop(`
width: 642px;
`)}
`;

export const AboutTextDesc = styled.p`
  padding-bottom: 24px;
  width: 280px;
  ${mediaTablet(`
font-size: 18px;
line-height: 25px;
width: 336px;
`)}
  ${mediaDesktop(`
width: 642px;
`)}
`;

export const AboutBtn = styled.button`
  background: transparent;
  color: ${props => props.theme.fontColors.secondary};
  font-size: 16px;
  line-height: 22px;
  padding: 16px 32px;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
  transition: ${props => props.theme.transitions.primary};
  ${mediaTablet(`
  font-size: 18px;
  line-height: 25px;
 `)}
  &:hover,
  &:focus {
    background-color: ${props =>
      props.theme.backgrounds.form};
    color: ${props =>
      props.theme.fontColors.buttonSecondary};
    border: 1px solid #28A745;
    }
  }
`;
