import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
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
  // align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;

  @media (min-width: ${MEDIA_SIZES.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: ${MEDIA_SIZES.laptopL}) {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }
`;

const ProjectSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 90%;
`;
