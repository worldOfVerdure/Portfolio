import Defined from "./Defined.jsx";
import { retrieveProjectData } from "./helpers/auxiliaryProjectFuncs.js";
import { styled } from "styled-components";

export default function Learnt({ selectedProject }) {
  const selectedProjectData = retrieveProjectData(selectedProject);
  return (
    <LearntIntroContainer >

      
    </LearntIntroContainer>
  );
}

const LearntIntroContainer = styled.section`
  & h3 {
    margin: 0;
  }
`;

const ListOfLearnings = styled.ul`

`;
