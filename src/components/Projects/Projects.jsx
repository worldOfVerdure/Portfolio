// import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import { PROJECT_DATA, PROJECT_TITLES } from "./projectData.js";
import { styled } from "styled-components";
import { useState } from "react";

//TODO: scale card when hovered
//TODO: add state when card is clicked

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(PROJECT_TITLES[0]); // PROJECT_TITLES[0] is a string
  
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
        {/* <ProjectCard>

        </ProjectCard> */}
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
    font-size: clamp(1.6rem, calc(1.2rem + 1vw), 2rem);
    padding: 1.5rem 0;
  }

  &:hover {
    cursor: hover;
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


/*
 & button {
    background-color: ${props => {
      if (props.$tabTitle === props.$currentSelected)
        return "#D3D3D3";
      else
        return "transparent";
    }};
    border: none;
    font-size: clamp(1.6rem, calc(1.2rem + 1vw), 2rem);
    padding: 1.5rem 0;
  }

  & button:hover {
    cursor: hover;
  }
*/
