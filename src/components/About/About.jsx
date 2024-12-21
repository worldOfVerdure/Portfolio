import * as aboutMeText from "./aboutMeText.js";
import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import { styled } from "styled-components";

const AboutSection = styled.section`
  margin: 0 auto;

  & h2 {
    font-size: 2.3rem;
    margin-right: 3rem;
    width: fit-content;
  }

  @media (${MEDIA_SIZES.mobileS} <= width < ${MEDIA_SIZES.mobileL}) {
    width: 90%;
  }

  @media (${MEDIA_SIZES.mobileM} <= width < ${MEDIA_SIZES.tablet}) {
    width: clamp(30rem, 80%, 40rem);
  }

  @media (${MEDIA_SIZES.tablet} <= width < ${MEDIA_SIZES.laptop}) {
    width: 60%;
  }

  @media (${MEDIA_SIZES.laptop} <= width < ${MEDIA_SIZES.desktop}) {
    width: 25%;
  }

  @media (width >= ${MEDIA_SIZES.desktop}) {
    width: 15%;
  }
`;

const P = styled.p`
  @media (${MEDIA_SIZES.mobileS} <= width < ${MEDIA_SIZES.mobileL}) {
    margin: 3rem auto;
    width: 75%;
  }
`;

export default function About() {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <P>{aboutMeText.p1}</P>
      <P>{aboutMeText.p2}</P>
      <P>{aboutMeText.p3}</P>
    </AboutSection>
  );
}
