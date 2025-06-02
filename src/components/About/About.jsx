import aboutMeParagraphs from "./aboutMeText.js";
import ParagraphSplitter from "../Projects/ParagraphSplitter.jsx";
import { styled } from "styled-components";

export default function About() {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <ParagraphSplitter
        mapKey="aboutMeP"
        paragraphs={aboutMeParagraphs}
      />
    </AboutSection>
  );
}

const AboutSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 90%;

  @media (width >= 1200px) {
    width: 65%;
  }

  & h2 {
    align-self: start;
    font-size: clamp(2.5rem, calc(1.86rem + 2vw), 4rem);
    margin-bottom: 1.5rem;
    width: fit-content;
  }

  & p {
    font-size: clamp(1.6rem, calc(1.2rem + 1vw), 2rem);
    line-height: 1.5;
    margin: 1.5rem auto;
    text-indent: 8%;

    @media (768px >= width < 1500px) {
      text-indent: 4%;
    }

    @media (width >= 1500px) {
      text-indent: 2%;
    }
  }
`;
