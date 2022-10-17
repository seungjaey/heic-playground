import type { NextPage } from 'next'
import styled from '@emotion/styled'

const Wrap = styled.main`
  width: 1050px;
  margin: 0 auto;
`;

const ImageSection = styled.section`
  margin-bottom: 16px;
  > .title {
    margin-bottom: 8px;
  }
  > .image {
    position: relative;
    width: 300px;
    height: 300px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const SAMPLE_HEIC_IMAGE_URL = 'https://res.kurly.com/temp/sample1.heic';

const Home: NextPage = () => {
  return (
    <Wrap>
      <ImageSection>
        <h2 className="title">{`HEIC with <img> tag`}</h2>
        <img
          className="image"
          src={SAMPLE_HEIC_IMAGE_URL}
          alt={"heic"}
        />
      </ImageSection>
      <ImageSection>
        <h2 className="title">{`HEIC with <canvas> tag`}</h2>
        <img
            className="image"
            src={SAMPLE_HEIC_IMAGE_URL}
            alt={"heic"}
        />
      </ImageSection>
    </Wrap>
  );
}

export default Home
