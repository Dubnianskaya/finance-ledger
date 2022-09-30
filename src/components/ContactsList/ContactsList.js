import {
  ContactsList,
  FacebookIcon,
  IconLink,
  Icons,
} from './ContactsList.styled';
import sprite from '../../styles/assets/icons/icon-sprite.svg';

export function ContactList() {
  return (
    <ContactsList>
      <Icons>
        <IconLink
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon
            width="35"
            height="35"
            fill="#FFFFFF"
          >
            <use
              href={`${sprite}#icon-facebook-filled`}
            ></use>
          </FacebookIcon>
        </IconLink>
      </Icons>
      <Icons>
        <IconLink
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="35" height="35" fill="#FFFFFF">
            <use href={`${sprite}#icon-twitter`}></use>
          </svg>
        </IconLink>
      </Icons>
      <Icons>
        <IconLink
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="35" height="35" fill="#FFFFFF">
            <use href={`${sprite}#icon-youtube`}></use>
          </svg>
        </IconLink>
      </Icons>
      <Icons>
        <IconLink
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="35" height="35" fill="#FFFFFF">
            <use href={`${sprite}#icon-linkedin`}></use>
          </svg>
        </IconLink>
      </Icons>
    </ContactsList>
  );
}
