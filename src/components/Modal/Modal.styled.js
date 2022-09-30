import styled from '@emotion/styled';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const ModalTitle = styled.p`
  font-family: 'OpenSansSemiBold';
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 8px;
`;
export const BackLink = styled(AnchorLink)`
color: ${props => props.theme.fontColors.buttonSecondary};
text-decoration: none;
&:hover,
&:focus {
    color: ${props => props.theme.hovers.primary};
    }
    }
`;
