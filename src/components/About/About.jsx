import * as aboutMeText from "./aboutMeText.js";
import * as colors from "../../auxiliary/colors.js";
import { HubLink } from "../Hub/Hub.jsx";
import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import { styled } from "styled-components";
// TODO: zzz I need to make AboutSection shrink comprable the Hub component. This will make them
// TODO: line-up vertically.
const AboutDiv = styled(HubLink)`
  background-color: ${colors.MAGENTA};
  clip-path: polygon(0 0, 70% 0, 100% 100%, 0 100%);

  & h2 {
    font-size: 2.3rem;
    margin-right: 3rem;
    width: fit-content;
  }
`;

const AboutSection = styled.section`
  margin: 0 auto;

  @media (${MEDIA_SIZES.mobileM} <= width < ${MEDIA_SIZES.tablet}) {
    width: clamp(30rem, 80%, 40rem);
  }

  @media (width >= ${MEDIA_SIZES.tablet}) {
    margin: 0 auto;
  }

  @media (${MEDIA_SIZES.tablet} <= width < ${MEDIA_SIZES.laptop}) {
    width: 60%;
  }

  @media (width >= ${MEDIA_SIZES.laptop}) {
    width: clamp(35rem, 15%, 45rem);
  }
`;

const P = styled.p`

`;

export default function About() {
  return (
    <AboutSection>
      <AboutDiv>
        <h2 id="about">About</h2>
      </AboutDiv>
      <P>{aboutMeText.p1}</P>
      <P>{aboutMeText.p2}</P>
      <P>{aboutMeText.p3}</P>
    </AboutSection>
  );
}
