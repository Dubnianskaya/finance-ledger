import styled from '@emotion/styled';

const setHoverStyles = ({ isTeamStyles }) => {
  return isTeamStyles
    ? 'rgba(255,255,255, 0.8)'
    : '#28A745';
};

export const ContactsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const IconLink = styled.a`
  &:hover,
  &:focus {
    svg {
      fill: ${setHoverStyles};
    }
  }
`;

export const FacebookIcon = styled.svg`
  border-radius: 50%;
  display: inline-block;
`;

export const Icons = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;
