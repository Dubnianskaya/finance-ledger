import styled from '@emotion/styled';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

import showcase from '../../styles/assets/images/showcase.jpg';
import showcaseWebp from '../../styles/assets/images/showcase.webp';
import showcase2 from '../../styles/assets/images/showcase@2x.jpg';
import showcaseWebp2 from '../../styles/assets/images/showcase@2x.webp';

export const MainContainer = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  ${mediaTablet(`
    padding: 0 32px;
  `)}
  ${mediaDesktop(`
  padding: 0 28px;
`)}
`;

export const HomePageContainer = styled.div`
  height: 533px;
  width: 100%;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${showcase});
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    -webkit-image-set(url(${showcaseWebp}) 1x);
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    -webkit-image-set(url(${showcase2}) 2x);
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    -webkit-image-set(url(${showcaseWebp2}) 2x);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${mediaTablet(`
height: 1024px;
`)}
  ${mediaDesktop(`
height: 768px;
`)}
`;
