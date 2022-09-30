import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const BlogContainer = styled.section`
  ${mediaTablet(`
  display: flex;
  flex-direction: row-reverse;
`)}
`;

export const BlogImg = styled.img`
  width: 100%;
  ${mediaTablet(`
  height: 493px;
`)}
  ${mediaDesktop(`
height: 460px;
min-width: 670px;
`)}
`;

export const BlogTextContainer = styled.div`
  color: ${props => props.theme.fontColors.secondary};
  background: ${props => props.theme.backgrounds.blog};
  padding: 48px 20px 58px 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  ${mediaTablet(`
padding: 59px 32px 0 32px;
justify-content: flex-start;
`)}
  ${mediaDesktop(`
padding: 80px 20px 0 28px;
`)}
`;

export const BlogTextDate = styled.p`
  padding-bottom: 16px;
  ${mediaTablet(`
font-size: 18px;
line-height: 25px;
`)}
`;

export const BlogTextTitle = styled.p`
  font-size: 32px;
  line-height: 44px;
  padding-bottom: 24px;
  ${mediaTablet(`
font-size: 40px;
line-height: 54px;
`)}
`;

export const BlogTextDesc = styled.p`
  padding-bottom: 24px;
  ${mediaTablet(`
font-size: 18px;
line-height: 25px;
`)}
`;

export const BlogBtn = styled.button`
  background: transparent;
  color: ${props => props.theme.fontColors.secondary};
  font-size: 16px;
  line-height: 22px;
  padding: 16px 32px;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
  transition: ${props => props.theme.transitions.primary};
  ${mediaTablet(`
  font-size: 18px;
  line-height: 25px;
 `)}
  &:hover,
  &:focus {
    background-color: ${props =>
      props.theme.backgrounds.form};
    color: ${props => props.theme.hovers.secondary};
    border: 1px solid #0284D0;
    }
  }
`;
