import { useState, useEffect } from 'react';
import { Container } from '../Container';
import { NavLink } from 'react-router-dom';
import {
  HeaderStyled,
  HeaderContainer,
} from './Header.styled';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { useWindowDimensions } from '../../hooks';
import { breakPoints } from '../../constants';

export const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(120);
  const [headerVisual, setHeaderVisual] = useState(false);
  const windowDimensions = useWindowDimensions();

  const listenScrollEvent = e => {
    if (window.scrollY > headerHeight) {
      setHeaderVisual(true);
    }
  };

  useEffect(() => {
    if (windowDimensions.width >= breakPoints.TABLET) {
      setHeaderHeight(70);
    } else {
      setHeaderHeight(120);
    }
  }, [windowDimensions]);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  });

  return (
    <HeaderStyled visualHeader={headerVisual}>
      <Container>
        <HeaderContainer>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <Navigation />
        </HeaderContainer>
      </Container>
    </HeaderStyled>
  );
};
