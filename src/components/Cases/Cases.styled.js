import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const CasesContainer = styled.section`
  padding: 56px 0 40px 0;
  text-align: center;
  ${mediaTablet(`
padding: 48px 0 40px 0;
`)}
  ${mediaDesktop(`
padding: 80px 0;
`)}
`;

export const CasesQuestion = styled.p`
  padding-bottom: 16px;
  ${mediaTablet(`
font-size: 18px;
line-height: 25px;
`)}
  ${mediaDesktop(`
line-height: 33px;
`)}
`;

export const CasesTitle = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  padding-bottom: 24px;
  ${mediaTablet(`
font-size: 40px;
line-height: 54px;
`)}
  ${mediaDesktop(`
line-height: 48px;
`)}
`;

export const CasesDesc = styled.p`
  padding-bottom: 30px;
  ${mediaTablet(`
font-size: 18px;
line-height: 25px;
`)}
`;
