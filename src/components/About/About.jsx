import * as aboutMeText from "./aboutMeText.js";
import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import profilePic from "../../assets/images/profilePic-s.jpg";
import { styled } from "styled-components";

export default function About() {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <img src={profilePic} alt="Picture of webpage author" />
      <P>{aboutMeText.p1}</P>
      <P>{aboutMeText.p2}</P>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  margin: 3rem auto;
  width: 90%;

  & h2 {
    font-size: clamp(2.5rem, calc(1.86rem + 2vw), 4rem);
    margin-bottom: 5rem;
    width: fit-content;
  }

  & img {
    border-radius: 50%;
    display: block;
    margin: 0 2rem 0 1rem;
  }

  @media (${MEDIA_SIZES.mobileM} <= width < ${MEDIA_SIZES.tablet}) {
    width: clamp(30rem, 80%, 40rem);
  }

  @media (min-width: 768px) {
    & img {
      float: left;
    }
  }

  @media (${MEDIA_SIZES.tablet} <= width < ${MEDIA_SIZES.laptop}) {
    width: 70%;
  }

  @media (${MEDIA_SIZES.laptop} <= width < ${MEDIA_SIZES.desktop}) {
    width: 46%;
  }

  @media (width >= ${MEDIA_SIZES.desktop}) {
    width: 25%;
    width: clamp(30rem, 80%, 40rem);
  }
`;

const P = styled.p`
  font-size: clamp(2.2rem, calc(1.56rem + 2vw), 2.8rem);
  margin: 2rem auto;
  white-space: pre-wrap;
`;
