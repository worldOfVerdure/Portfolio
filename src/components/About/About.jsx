import * as aboutMeText from "./aboutMeText.js";
import { styled } from "styled-components";

export default function About() {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <P>{aboutMeText.p1}</P>
      <P>{aboutMeText.p2}</P>
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

const P = styled.p`
  font-size: clamp(1.6rem, calc(1.2rem + 1vw), 2rem);
  line-height: 1.4;
  margin: 1.5rem auto;
  white-space: pre-wrap;
`;
