import { colorSelector } from "./auxiliaryProjectFuncs.js";
import { styled } from "styled-components";

export default function ProjectCard({ projectProp }) {
  return (
    <Card >
      <h3>{projectProp.title}</h3>
      <img src={projectProp.imgSrc} alt={projectProp.imgAlt} />
      <TechContainer >
        {projectProp.tech.map((techName) => {
          const colors = colorSelector(techName);
          <Tech
            //!zzz Fix this transient prop
            ${backColor} = {colors[0]}
            ${borderColor} = {colors[1]}
            key = {techName}
          >
            {techName}
          </Tech>
        })}
      </TechContainer>
    </Card>
  );
}

const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;
`;

const Tech = styled.div`
  background-color: ${backColor};
  border: .3rem solid ${borderColor};
  border-radius: .8rem;
`;

const TechContainer = styled.div`
  align-items: space-between;
  display: flex;
  justify-content: space-around;

  & > * {
    flex: 1 auto;
  }
`;
