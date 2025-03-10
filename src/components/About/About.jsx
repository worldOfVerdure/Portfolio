import * as aboutMeText from "./aboutMeText.js";
import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import profilePic from "../../assets/images/profilePic-s.jpg";
import { styled } from "styled-components";

export default function About() {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <img src={profilePic} alt="Picture of webpage author" width="250" height="333" />
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
    float: left;
    margin: 0 2rem 1rem 0;
  }
`;

const AboutTextContainer = styled.div`

`;

const P = styled.p`
  font-size: clamp(1.8rem, calc(1.56rem + 1vw), 2.4rem);
  margin: 2rem auto;
  white-space: pre-wrap;

  // @media(min-width: ${MEDIA_SIZES.laptopL}) {
  //   width: 65%;
  // }
`;
