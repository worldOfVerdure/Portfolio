import MEDIA_SIZES from "../../auxiliary/mediaSizes";
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
        {PROJECT_DATA.map((projectObj) => {
          <ProjectCard key={projectObj.title} {...projectObj} />
        })}
      </MainProject>
    </ProjectSection>
  );
}

const MainProject = styled.main`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

/*
  Title
  Picture
  Tech Used
  Link to project
  Link to Video
  Description (maybe only when expanded, or show a portion with more feature)
*/
