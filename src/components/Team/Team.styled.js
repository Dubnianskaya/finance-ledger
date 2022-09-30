import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const TeamContainer = styled.section`
  padding: 72px 0 50px 0;
  text-align: center;
  ${mediaTablet(`
padding: 50px 0 40px 0;
`)}
  ${mediaDesktop(`
padding: 80px 0 88px 0;
`)}
`;
export const TeamListItem = styled.div`
  cursor: pointer;
  &:hover,
  &:focus {
    .hovered {
      opacity: 1;
    }
  }
`;

export const TeamListImgContainer = styled.div`
  position: relative;
`;

export const TeamListHoverContainer = styled.div`
  opacity: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamIntro = styled.p`
  padding-bottom: 16px;
  ${mediaTablet(`
font-size: 20px;
line-height: 33px;
`)}
  ${mediaDesktop(`
line-height: 27px;
`)}
`;

export const TeamTitle = styled.h3`
  font-size: 32px;
  line-height: 44px;
  padding-bottom: 24px;
  ${mediaTablet(`
font-size: 40px;
line-height: 54px;
`)}
`;

export const TeamDesc = styled.p`
  padding-bottom: 63px;
  ${mediaTablet(`
font-size: 18px;
line-height: 25px;
padding-bottom: 24px;
`)}
  ${mediaDesktop(`
padding-bottom: 36px;
`)}
`;

export const TeamDataContainer = styled.div`
  padding: 16px 0;
  text-align: center;
`;
export const TeamDataName = styled.p`
  font-size: 20px;
  line-height: 27px;
  padding-bottom: 8px;
  ${mediaTablet(`
font-size: 32px;
line-height: 32px;
`)}
`;
export const TeamDataPosition = styled.p`
  ${mediaTablet(`
font-size: 18px;
line-height: 25px;
`)}
`;
