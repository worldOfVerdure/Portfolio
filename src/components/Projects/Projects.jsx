import ProjectCardImage from "./ProjectCardImage.jsx";
import { PROJECT_TITLES } from "./projectData.js";
import { retrieveProject } from "./auxiliaryProjectFuncs.js";
import { styled } from "styled-components";
import { useState } from "react";

//TODO: scale card when hovered

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(PROJECT_TITLES[0]); // PROJECT_TITLES[0] is a string

  const selectedProjectData = retrieveProject(selectedProject);
  
  function handleTabSelection (event) {
    const innerBtnText = event.target.innerText;

    switch (innerBtnText) {
      case PROJECT_TITLES[0]:
        setSelectedProject(PROJECT_TITLES[0]);
        break;
      case PROJECT_TITLES[1]:
        setSelectedProject(PROJECT_TITLES[1]);
        break;
      case PROJECT_TITLES[2]:
        setSelectedProject(PROJECT_TITLES[2]);
        break;
      case PROJECT_TITLES[3]:
        setSelectedProject(PROJECT_TITLES[3]);
        break;
      default:
        console.log("The tab button text doesn't match any existing strings.");
    }
  }

  return (
    <ProjectSection >
      <h2>Projects</h2>
      <MainProject >
        <ProjectNavTabs >
          <ul>
            {PROJECT_TITLES.map(title => 
              <li key={title}>
                <NavButton
                  $currentSelected={selectedProject}
                  onClick={handleTabSelection}
                  $tabTitle={title}
                  type="button"
                >
                  {title}
                </NavButton>
              </li>)
            }
          </ul>
        </ProjectNavTabs>
        <ProjectCard>
          <h2>{selectedProject}</h2>
          <p>
            Link to Project:&nbsp;
            <a
              href={selectedProjectData.links.git}
              target="_blank"
            >
              {selectedProject}
            </a>
          </p>
          <ProjectCardImage
            imgAlt={selectedProjectData.imgAlt}
            title={selectedProject}
          />
          <hr />
        </ProjectCard>
      </MainProject>
    </ProjectSection>
  );
}

const MainProject = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;
`;

const ProjectCard = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  & h2 {
    margin: 0 auto;
    width: fit-content;
  }

  & hr {
    border: .5rem solid green;
    border-radius: .5rem;
    width: 65%;
  }
`;

const ProjectNavTabs = styled.nav`
  border-bottom: .2rem solid #000;
  width: 100%;

  & ul {
    display: flex;
    gap: 1rem;
    justify-content: start;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  & li {
    flex: 1 1 0;
    text-align: center;
  }
`;

const NavButton = styled.button`
  background-color: ${props => {
      if (props.$tabTitle === props.$currentSelected)
        return "#D3D3D3";
      else
        return "transparent";
    }};
  border: none;
  border-bottom: ${props => {
      if (props.$tabTitle === props.$currentSelected)
        return ".2rem solid rgb(209, 10, 10)";
      else
        return "none";
    }};
  border-radius: 1rem 1rem 0 0;
  color: ${props => {
      if (props.$tabTitle === props.$currentSelected)
        return "#fff";
      else
        return "#000";
    }};
  font-size: clamp(1.6rem, calc(1.2rem + 1vw), 2rem);
  margin-bottom: -.2rem;
  min-height: 100%;
  padding: 1.5rem 0;
  word-spacing: 50rem;

  &:hover {
    cursor: pointer;
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
