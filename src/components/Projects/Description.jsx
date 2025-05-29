import { colorSelector, retrieveProjectData } from "./helpers/auxiliaryProjectFuncs";
import ParagraphSplitter from "./ParagraphSplitter.jsx";
import { styled } from "styled-components";

export default function Description({ selectedProject }) {
  const selectedProjectData = retrieveProjectData(selectedProject);
  return (
    <>
      <TechStack>
        <h3>Tech Stack</h3>
        <TechContainer >
          {selectedProjectData.tech.map(techName => {
            const colors = colorSelector(techName);
            return (
              <Tech
                $backColor={colors[0]}
                $borderColor={colors[1]}
                $textColor={colors[2]}
                key={`${selectedProjectData?.title} ${techName}`}
              >
                {techName}
              </Tech>
            );
          })}
        </TechContainer>
      </TechStack>
      <TextContainer >
        <h3>Project Details</h3>
        <Text >
          <ParagraphSplitter 
            mapKey={selectedProject?.title}
            paragraphs={selectedProjectData?.description}
          />
        </Text>
      </TextContainer>
    </>
  );
}

const Tech = styled.div`
  background-color: ${props => props.$backColor};
  border: .25rem solid ${props => props.$borderColor};
  border-radius: .8rem;
  color: ${props => props.$textColor};
  display: flex;
  flex-grow: none;
  justify-content: center;
  padding: .5rem .8rem;
  max-width: fit-content;
`;

const TechContainer = styled.div`
  align-items: center;
  border: .2rem solid #000;
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  justify-content: start;
  padding: 0 1rem;

  & > * {
    flex: 1 auto;
  }
`;

const TechStack = styled.section`
  border: .2rem solid #000;

  & h3 {
    margin: 1rem auto;
  }
`;

const Text = styled.div`
  max-height: 20rem;
  overflow-y: auto;

  & p {
    margin: 0;
    text-align: start;
  }
`;

const TextContainer = styled.section`
  min-height: 25vh;

  & h3 {
    margin: 0;
  }
`;
