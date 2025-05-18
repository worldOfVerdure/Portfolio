import { colorSelector } from "./auxiliaryProjectFuncs";
import { PROJECT_DATA } from "./projectData";
import { styled } from "styled-components";

export default function Description() {
  return (
    <>
      <TechStack>
        <h3>Tech Stack</h3>
        <hr />
        <TechContainer >
          {PROJECT_DATA.tech.map(techName => {
            const colors = colorSelector(techName);
            return (
            <Tech
              $backColor={colors[0]}
              $borderColor={colors[1]}
              $textColor={colors[2]}
              key={`${props.title} ${techName}`}
            >
              {techName}
            </Tech>
            );
          })}
        </TechContainer>
      </TechStack>
    </>
  );
}

const Tech = styled.div`
  background-color: ${props => props.$backColor};
  border: .4rem solid ${props => props.$borderColor};
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
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  justify-content: start;
  margin-top: 2rem;

  & > * {
    flex: 1 auto;
  }
`;

const TechStack = styled.section`

`;
