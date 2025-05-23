import { retrieveProjectData } from "./auxiliaryProjectFuncs.js";
import { styled } from "styled-components";

export default function Learnt({ selectedProject }) {
  const selectedProjectData = retrieveProjectData(selectedProject);
  return (
    <LearntIntroContainer >

      <LearntIntro >{selectedProjectData.learnt}</LearntIntro>
    </LearntIntroContainer>
  );
}

const LearntIntro = styled.p`
  margin: 0;
  text-align: center;
`;

const LearntIntroContainer = styled.section`
  & h3 {
    margin: 0;
  }
`;
