import PROJECT_DATA from "./projectData.js";
import ProjectCard from "./ProjectCard.jsx";
import { styled } from "styled-components";

//TODO: scale card when hovered
//TODO: add state when card is clicked

export default function Projects() {
  return (
    <ProjectSection >
      <h2>Projects</h2>
      <MainProject >
        {PROJECT_DATA.map((projectObj, i) => (
          <ProjectCard 
            key={projectObj.title}
            index = {i}
            {...projectObj} 
          />
        ))}
      </MainProject>
    </ProjectSection>
  );
}

const MainProject = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 90%;
`;
