import { Container } from '../Container';
import {
  CasesContainer,
  CasesQuestion,
  CasesTitle,
  CasesDesc,
} from './Cases.styled';
import { CasesImgList } from './CasesImgList';

export function Cases() {
  return (
    <Container>
      <CasesContainer id="cases">
        <CasesQuestion>This is what we do</CasesQuestion>
        <CasesTitle>Business Cases</CasesTitle>
        <CasesDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Architecto, sapiente!
        </CasesDesc>
        <CasesImgList />
      </CasesContainer>
    </Container>
  );
}
