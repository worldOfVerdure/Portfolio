import * as colors from "../../auxiliary/colors.js";
import { styled } from "styled-components";
import { HubLink } from "../Hub/Hub.jsx";

const AboutSection = styled.section`
  
`;

const AboutH2 = styled(HubLink)`
  background-color: ${colors.MAGENTA};
  clip-path: polygon(0 0, 70% 0, 100% 100%, 0 100%);
`;

export default function About() {
  return (
    <AboutSection>
      <AboutH2 as="h2">About</AboutH2>
    </AboutSection>
  );
}
