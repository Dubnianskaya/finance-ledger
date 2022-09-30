import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  ${mediaTablet(`
  margin-top: 378px;
  `)}
  ${mediaDesktop(`
  margin-top: 272px;
`)}
`;

export const HeroTitle = styled.h2`
  width: 241px;
  text-align: center;
  font-family: 'OpenSansSemiBold';
  color: ${props => props.theme.fontColors.secondary};
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 16px;
  ${mediaTablet(`
  width: 100%;
  font-size: 55px;
  line-height: 75px;
  `)}
`;

export const HeroDesc = styled.p`
  color: ${props => props.theme.fontColors.secondary};
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 24px;
  text-align: center;
  ${mediaTablet(`
  font-size: 40px;
  line-height: 48px;
  `)}
  ${mediaDesktop(`
  line-height: 54px;
`)}
`;

export const HeroBtn = styled.button`
  background: ${props =>
    props.theme.backgrounds.buttonPrimary};
  color: ${props => props.theme.fontColors.secondary};
  font-size: 18px;
  line-height: 25px;
  padding: 16px 32px;
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
`;

export const BtnIcon = styled.span`
  margin-right: 8px;
`;
