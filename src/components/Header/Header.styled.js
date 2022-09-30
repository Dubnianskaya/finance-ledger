import styled from '@emotion/styled';
import { mediaTablet } from '../../functions/media';

const setHeaderOpacity = ({ visualHeader }) => {
  return visualHeader ? 'rgb(4, 4, 4, 0.8)' : 'transparent';
};

export const HeaderStyled = styled.header`
  background: ${setHeaderOpacity};
  width: 100%;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  ${mediaTablet(`
    padding: 16px 0;
  `)}
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mediaTablet(`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`)}
`;
