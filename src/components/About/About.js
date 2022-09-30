import {
  AboutContainer,
  AboutImg,
  AboutTextContainer,
  AboutTextQuestion,
  AboutTextTitle,
  AboutTextDesc,
  AboutBtn,
} from './About.styled';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import people from '../../styles/assets/images/people.jpg';
import peopleWebp from '../../styles/assets/images/people.webp';
import people2 from '../../styles/assets/images/people@2x.jpg';
import peopleWebp2 from '../../styles/assets/images/people@2x.webp';

export function About() {
  return (
    <AboutContainer>
      <div>
        {isWebpSupported() ? (
          <AboutImg
            src={peopleWebp}
            srcSet={`${peopleWebp2} 2x`}
            alt={'team'}
          />
        ) : (
          <AboutImg
            src={people}
            srcSet={`${people2} 2x`}
            alt={'team'}
          />
        )}
      </div>
      <AboutTextContainer>
        <div>
          <AboutTextQuestion>
            What you are looking for
          </AboutTextQuestion>
          <AboutTextTitle>
            We provide bespoke solutions
          </AboutTextTitle>
          <AboutTextDesc>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptate, ipsum dignissimos
            quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque
            rerum temporibus doloribus iste maiores
            deleniti?
          </AboutTextDesc>
          <AboutBtn type="button">Read More</AboutBtn>
        </div>
      </AboutTextContainer>
    </AboutContainer>
  );
}
