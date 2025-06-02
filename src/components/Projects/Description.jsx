import ParagraphSplitter from "./ParagraphSplitter.jsx";
import { retrieveProjectData } from "./helpers/auxiliaryProjectFuncs.js";
import { styled } from "styled-components";

export default function Description({ selectedProject }) {
  const selectedProjectData = retrieveProjectData(selectedProject);
  return (
    <TextContainer >
      <h3>Project Details</h3>
      <Text >
        <ParagraphSplitter 
          mapKey={selectedProject?.title}
          paragraphs={selectedProjectData?.description}
        />
      </Text>
    </TextContainer>
  );
}

const Text = styled.div`
  max-height: 25rem;
  overflow-y: auto;

  & p {
    line-height: 1.5;
    margin: 0 0 1rem 0;
    text-indent: 10%;
  }

  & p:last-child {
    margin: 0;
  }
`;

const TextContainer = styled.section`
  min-height: 25vh;

  & h3 {
    margin: 0 0 1rem 0;
  }
`;
