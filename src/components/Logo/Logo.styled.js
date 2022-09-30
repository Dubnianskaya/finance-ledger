import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  transition: ${props => props.theme.transitions.primary};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const LogoSign = styled.p`
  font-size: 28px;
  line-height: 38px;
  margin-left: 8px;
  color: ${props => props.theme.fontColors.buttonSecondary};
  ${mediaTablet(`
  font-size: 35px;
  line-height: 48px;
  margin-left: 10px;
`)}
  ${mediaDesktop(`
  margin-left: 4px;
  `)}
`;

export const LogoSignWhite = styled.span`
  margin-left: 8px;
  color: ${props => props.theme.fontColors.secondary};
  ${mediaTablet(`
  margin-left: 4px;
  `)}
`;
