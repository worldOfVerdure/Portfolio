import { colorSelector, retrieveProjectData } from "./helpers/auxiliaryProjectFuncs";
import { styled } from "styled-components";

export default function TechStack({ selectedProject }) {
  const selectedProjectData = retrieveProjectData(selectedProject);
  return (
    <TechStackSection>
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
      </TechStackSection>
  );
}

const Tech = styled.div`
  background-color: ${props => props?.$backColor};
  border: .25rem solid ${props => props?.$borderColor};
  border-radius: .8rem;
  color: ${props => props?.$textColor};
  display: flex;
  flex-grow: none;
  justify-content: center;
  padding: .5rem .8rem;
  max-width: fit-content;
`;

const TechContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  justify-content: start;
  padding: 0 1rem;

  & > * {
    flex: 1 auto;
  }
`;

const TechStackSection = styled.section`
  margin-bottom: 2rem;

  & h3 {
    margin: 1rem auto;
  }
`;
