import { isWebpSupported } from 'react-image-webp/dist/utils';

export function ImgFormat({
  img,
  imgWebp,
  img2,
  imgWebp2,
  alt,
}) {
  return (
    <>
      {isWebpSupported() ? (
        <img
          src={imgWebp}
          srcSet={`${imgWebp2} 2x`}
          alt={alt}
        />
      ) : (
        <img src={img} srcSet={`${img2} 2x`} alt={alt} />
      )}
    </>
  );
}
