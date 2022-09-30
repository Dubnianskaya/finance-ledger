import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const NavigationContainer = styled.nav`
  margin-top: 16px;
  ${mediaTablet(`
  margin-top: 0;
  `)}
`;

export const NavigationList = styled.ul`
  display: flex;
`;

export const Link = styled(NavLink)`
  color: ${props => props.theme.fontColors.secondary};
  text-decoration: none;
  position: relative;
  padding: 0 6px;
  &:hover,
  &:focus {
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 4px;
      bottom: -8px;
      background-color: ${props =>
        props.theme.hovers.primary};
      opacity: 0.5;
    }
  }
  ${mediaTablet(`
  padding: 0 10px;
  font-size: 18px;
  line-height: 25px;
  `)}
  ${mediaDesktop(`
  padding: 0 25px;
  `)}
`;
