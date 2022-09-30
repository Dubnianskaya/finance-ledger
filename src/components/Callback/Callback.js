import { isWebpSupported } from 'react-image-webp/dist/utils';
import {
  CallbackContainer,
  CallbackImg,
  CallbackFormContainer,
} from './Callback.styled';
import { CallbackForm } from '../CallbackForm';
import contact from '../../styles/assets/images/contact.jpg';
import contactWebp from '../../styles/assets/images/contact.webp';
import contact2 from '../../styles/assets/images/contact@2x.jpg';
import contactWebp2 from '../../styles/assets/images/contact@2x.webp';

export function Callback() {
  return (
    <CallbackContainer>
      <div>
        {isWebpSupported() ? (
          <CallbackImg
            src={contactWebp}
            srcSet={`${contactWebp2} 2x`}
            alt={'contact'}
          />
        ) : (
          <CallbackImg
            src={contact}
            srcSet={`${contact2} 2x`}
            alt={'contact'}
          />
        )}
      </div>
      <CallbackFormContainer id="contact">
        <CallbackForm />
      </CallbackFormContainer>
    </CallbackContainer>
  );
}
