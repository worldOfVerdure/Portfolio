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
        {PROJECT_DATA.map(projectObj => (
          <ProjectCard key={projectObj.title} {...projectObj} />
        ))}
      </MainProject>
    </ProjectSection>
  );

  /* oldArray = [1, 2, 3];
     newArray = olArray.map((e) => 2 * e);
     So newArray = [2, 4, 6]
  */
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
  width: 90%;
`;

/*
  Title
  Picture
  Tech Used
  Link to project
  Link to Video
  Description (maybe only when expanded, or show a portion with more feature)
*/
