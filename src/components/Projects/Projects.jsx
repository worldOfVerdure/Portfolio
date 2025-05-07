import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import { PROJECT_DATA, PROJECT_TITLES } from "./projectData.js";
// import ProjectCard from "./ProjectCard.jsx";
import { styled } from "styled-components";
import { useState } from "react";

//TODO: scale card when hovered
//TODO: add state when card is clicked

export default function Projects() {
  // const [project, setProject] = useState(PROJECT_TITLES[0]); // PROJECT_TITLES[0] is a string
  return (
    <ProjectSection >
      <h2>Projects</h2>
      <MainProject >
        <ProjectNavTabs >
          <ul>
            {PROJECT_TITLES.map( title => <li key={title}>{title}</li>)}
          </ul>
        </ProjectNavTabs>
        {/* <ProjectCard>

        </ProjectCard> */}
      </MainProject>
    </ProjectSection>
  );
}

/*
 {PROJECT_DATA.map((projectObj, i) => (
          <ProjectCard 
            key={projectObj.title}
            index = {i}
            {...projectObj} 
          />
        ))}
*/

const MainProject = styled.main`
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

  & h2 {
    align-self: start;
  }
`;

const ProjectNavTabs = styled.nav`
  width: 100%;

  & ul {
    display: flex;
    gap: .5rem;
    justify-content: start;
    margin: 0;
    padding: 0;
  }
`;
