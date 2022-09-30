import styled from '@emotion/styled';
import { mediaTablet } from '../../functions/media';

export const StyledFooter = styled.footer`
  background-color: ${props =>
    props.theme.backgrounds.footer};
  padding: 20px 0;
`;

export const FooterText = styled.p`
  color: ${props => props.theme.fontColors.secondary};
  text-align: center;
  margin-top: 12px;
  ${mediaTablet(
    ` font-size: 18px;
    line-height: 25px;
    margin-top: 10px;`
  )}
`;
