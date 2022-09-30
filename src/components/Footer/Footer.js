import { Container } from '../Container';
import { StyledFooter, FooterText } from './Footer.styled';
import { ContactList } from '../ContactsList';

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <ContactList />
        <FooterText>
          Copyright © 2021 - FinanceLedger
        </FooterText>
      </Container>
    </StyledFooter>
  );
}
