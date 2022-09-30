import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const CallbackContainer = styled.section`
  ${mediaTablet(`
  display: flex;
`)}
`;

export const CallbackImg = styled.img`
  width: 100%;
  ${mediaTablet(`
  height: 354px;
  min-width: 368px;
`)}
  ${mediaDesktop(`
height: 454px;
min-width: 670px;
`)}
`;

export const CallbackFormContainer = styled.div`
  background: ${props => props.theme.backgrounds.form};
  padding: 51px 20px 25px 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  ${mediaTablet(`
padding: 32px 32px 0 32px;
justify-content: flex-start;
`)}
  ${mediaDesktop(`
padding: 56px 28px 0 20px;
`)}
`;
