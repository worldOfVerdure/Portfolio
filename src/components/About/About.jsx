import * as aboutMeText from "./aboutMeText.js";
import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import profilePic from "../../assets/images/profilePic-s.jpg";
import { styled } from "styled-components";

export default function About() {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <P>{aboutMeText.p1}</P>
      <P>{aboutMeText.p2}</P>
      <Avatar src={profilePic} alt="Picture of webpage author" />
    </AboutSection>
  );
}

const AboutSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 90%;

  & h2 {
    align-self: start;
    font-size: clamp(2.5rem, calc(1.86rem + 2vw), 4rem);
    margin-bottom: 1.5rem;
    width: fit-content;
  }
`;

const Avatar = styled.img`
    border-radius: 50%;
    width: 18rem;
`;

const AboutTextContainer = styled.div`

`;

const P = styled.p`
  font-size: clamp(1.6rem, calc(1.2rem + 1vw), 2rem);
  line-height: 1.4;
  margin: 1.5rem auto;
  white-space: pre-wrap;

  // @media(min-width: ${MEDIA_SIZES.laptopL}) {
  //   width: 65%;
  // }
`;
