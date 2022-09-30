import { Container } from '../Container';
import sprite from '../../styles/assets/icons/icon-sprite.svg';
import {
  HeroContainer,
  HeroTitle,
  HeroDesc,
  HeroBtn,
  BtnIcon,
} from './Hero.styled';

export function Hero() {
  return (
    <Container>
      <section>
        <HeroContainer>
          <HeroTitle>The Sky Is The Limit</HeroTitle>
          <HeroDesc>
            We provide world class financial assistance
          </HeroDesc>
          <HeroBtn type="button">
            <BtnIcon>
              <svg width="8" height="12" fill="#FFFFFF">
                <use href={`${sprite}#icon-arrow`}></use>
              </svg>
            </BtnIcon>
            Read More
          </HeroBtn>
        </HeroContainer>
      </section>
    </Container>
  );
}
