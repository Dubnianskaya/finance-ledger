import {
  LogoContainer,
  LogoSign,
  LogoSignWhite,
} from './Logo.styled';
import sprite from '../../styles/assets/icons/icon-sprite.svg';

export const Logo = () => {
  return (
    <LogoContainer>
      <svg width="40" height="31" fill="#28A745">
        <use href={`${sprite}#icon-logo`}></use>
      </svg>
      <LogoSign>
        Finance
        <LogoSignWhite>Ledger</LogoSignWhite>
      </LogoSign>
    </LogoContainer>
  );
};
