import { Container } from '../Container';
import {
  TeamContainer,
  TeamIntro,
  TeamTitle,
  TeamDesc,
} from './Team.styled';
import { TeamList } from './TeamList';

export function Team() {
  return (
    <TeamContainer>
      <Container>
        <TeamIntro>Who we are</TeamIntro>
        <TeamTitle>Our Professional Team</TeamTitle>
        <TeamDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Architecto, sapiente!
        </TeamDesc>
        <TeamList />
      </Container>
    </TeamContainer>
  );
}
