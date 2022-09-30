import { useState } from 'react';
import { ImgFormat } from '../Image/ImgFormat';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Grid from '@mui/material/Grid';
import { casesArray } from './casesArray';

export function CasesImgList() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);

  return (
    <Grid
      justifyContent="center"
      container
      rowSpacing={{ sm: 1, md: 2 }}
      columnSpacing={{ sm: 1, md: 2 }}
    >
      {casesArray.map(
        ({ img, imgWebp, img2, imgWebp2, alt, id }) => (
          <Grid
            item
            sm={8}
            md={4}
            key={id}
            onClick={() => setIsOpen(true)}
          >
            <ImgFormat
              img={img}
              imgWebp={imgWebp}
              img2={img2}
              imgWebp2={imgWebp2}
              alt={alt}
            />
          </Grid>
        )
      )}
      {isOpen && (
        <Lightbox
          mainSrc={casesArray[imageIdx].img}
          nextSrc={
            casesArray[(imageIdx + 1) % casesArray.length]
              .img
          }
          prevSrc={
            casesArray[
              (imageIdx + casesArray.length - 1) %
                casesArray.length
            ].img
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setImageIdx(
              (imageIdx + casesArray.length - 1) %
                casesArray.length
            )
          }
          onMoveNextRequest={() =>
            setImageIdx((imageIdx + 1) % casesArray.length)
          }
        />
      )}
    </Grid>
  );
}
