import { isWebpSupported } from 'react-image-webp/dist/utils';
import {
  BlogContainer,
  BlogImg,
  BlogTextContainer,
  BlogTextDate,
  BlogTextTitle,
  BlogTextDesc,
  BlogBtn,
} from './Blog.styled';
import blog from '../../styles/assets/images/blog.jpg';
import blogWebp from '../../styles/assets/images/blog.webp';
import blog2 from '../../styles/assets/images/blog@2x.jpg';
import blogWebp2 from '../../styles/assets/images/blog@2x.webp';

export function Blog() {
  return (
    <BlogContainer>
      <div>
        {isWebpSupported() ? (
          <BlogImg
            src={blogWebp}
            srcSet={`${blogWebp2} 2x`}
            alt={'blog'}
          />
        ) : (
          <BlogImg
            src={blog}
            srcSet={`${blog2} 2x`}
            alt={'blog'}
          />
        )}
      </div>
      <BlogTextContainer>
        <div>
          <BlogTextDate>April 16 2020</BlogTextDate>
          <BlogTextTitle>Blog Post One</BlogTextTitle>
          <BlogTextDesc>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptate, ipsum dignissimos
            quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque
            rerum temporibus doloribus iste maiores
            deleniti?
          </BlogTextDesc>
          <BlogBtn type="button">Read Our Blog</BlogBtn>
        </div>
      </BlogTextContainer>
    </BlogContainer>
  );
}
