import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const IconLink = styled.a`
  &:hover,
  &:focus {
    svg {
      fill: ${props =>
        props.theme.backgrounds.buttonPrimary};
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
