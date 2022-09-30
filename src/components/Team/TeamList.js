import { ImgFormat } from '../Image/ImgFormat';
import Grid from '@mui/material/Grid';
import {
  TeamDataContainer,
  TeamListItem,
  TeamListImgContainer,
  TeamDataName,
  TeamDataPosition,
  TeamListHoverContainer,
} from './Team.styled';
import { ContactList } from '../ContactsList';
import johnDoe from '../../styles/assets/images/person1.jpg';
import johnDoeWebp from '../../styles/assets/images/person1.webp';
import johnDoe2 from '../../styles/assets/images/person1@2x.jpg';
import johnDoeWebp2 from '../../styles/assets/images/person1@2x.webp';
import janeDoe from '../../styles/assets/images/person2.jpg';
import janeDoeWebp from '../../styles/assets/images/person2.webp';
import janeDoe2 from '../../styles/assets/images/person2@2x.jpg';
import janeDoeWebp2 from '../../styles/assets/images/person2@2x.webp';
import steveSmith from '../../styles/assets/images/person3.jpg';
import steveSmithWebp from '../../styles/assets/images/person3.webp';
import steveSmith2 from '../../styles/assets/images/person3@2x.jpg';
import steveSmithWebp2 from '../../styles/assets/images/person3@2x.webp';

export function TeamList() {
  return (
    <Grid
      justifyContent="center"
      container
      rowSpacing={{ sm: 1, md: 2 }}
      columnSpacing={{ sm: 1, md: 2 }}
    >
      <Grid item sm={8} md={4}>
        <TeamListItem>
          <TeamListImgContainer>
            <TeamListHoverContainer className="hovered">
              <ContactList />
            </TeamListHoverContainer>
            <ImgFormat
              img={johnDoe}
              imgWebp={johnDoeWebp}
              img2={johnDoe2}
              imgWebp2={johnDoeWebp2}
              alt="John Doe"
            />
          </TeamListImgContainer>
          <TeamDataContainer>
            <TeamDataName>John Doe</TeamDataName>
            <TeamDataPosition>President</TeamDataPosition>
          </TeamDataContainer>
        </TeamListItem>
      </Grid>
      <Grid item sm={8} md={4}>
        <TeamListItem>
          <TeamListImgContainer>
            <TeamListHoverContainer className="hovered">
              <ContactList />
            </TeamListHoverContainer>
            <ImgFormat
              img={janeDoe}
              imgWebp={janeDoeWebp}
              img2={janeDoe2}
              imgWebp2={janeDoeWebp2}
              alt="Jane Doe"
            />
          </TeamListImgContainer>
          <TeamDataContainer>
            <TeamDataName>Jane Doe</TeamDataName>
            <TeamDataPosition>
              Vice President
            </TeamDataPosition>
          </TeamDataContainer>
        </TeamListItem>
      </Grid>
      <Grid item sm={8} md={4}>
        <TeamListItem>
          <TeamListImgContainer>
            <TeamListHoverContainer className="hovered">
              <ContactList />
            </TeamListHoverContainer>
            <ImgFormat
              img={steveSmith}
              imgWebp={steveSmithWebp}
              img2={steveSmith2}
              imgWebp2={steveSmithWebp2}
              alt="Steve Smith"
            />
          </TeamListImgContainer>
          <TeamDataContainer>
            <TeamDataName>Steve Smith</TeamDataName>
            <TeamDataPosition>
              Marketing Head
            </TeamDataPosition>
          </TeamDataContainer>
        </TeamListItem>
      </Grid>
    </Grid>
  );
}
