import Description from "./Description.jsx";
import LearntStruggles from "./LearntStruggles.jsx";
import LinkToProject from "./LinkToProject.jsx";
import ProjectCardImage from "./ProjectCardImage.jsx";
import { PROJECT_NAV_TEXT, PROJECT_TITLES } from "./helpers/projectData.js";
import { retrieveProjectData } from "./helpers/auxiliaryProjectFuncs.js";
import { styled } from "styled-components";
import { useState } from "react";

//TODO: scale card when hovered

export default function Projects() {
  // PROJECT_TITLES[0] and PROJECT_NAV_TEXT[0] are both strings.
  const [selectedNavText, setSelectedNavText] = useState(PROJECT_NAV_TEXT[0]);
  function handleInnerTabSelection (event) {
    const innerBtnText = event.target.innerText;
    switch (innerBtnText) {
      case PROJECT_NAV_TEXT[0]:
        setSelectedNavText(PROJECT_NAV_TEXT[0]);
        break;
      case PROJECT_NAV_TEXT[1]:
        setSelectedNavText(PROJECT_NAV_TEXT[1]);
        break;
      case PROJECT_NAV_TEXT[2]:
        setSelectedNavText(PROJECT_NAV_TEXT[2]);
        break;
      default:
        throw new Error("Project wasn't found.");
    }
  }

  const [selectedProject, setSelectedProject] = useState(PROJECT_TITLES[0]);
  //Pass the project title as a string, have it returned the data object.
  const selectedProjectData = retrieveProjectData(selectedProject);
  
  function handleTabSelection (event) {
    const btnText = event.target.innerText;

    switch (btnText) {
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
        throw new Error("The tab button text doesn't match any existing strings.");
    }
  }

  return (
    <ProjectSection >
      <h2>Projects</h2>
      <MainProject >
        <ProjectNavTabs >
          <ul>
            {PROJECT_TITLES.map(title => 
              <li key={title} >
                <NavButton
                  $currentSelected={selectedProject}
                  onClick={handleTabSelection}
                  $tabTitle={title}
                  type="button"
                >
                  {title}
                </NavButton>
              </li>
            )}
          </ul>
        </ProjectNavTabs>
        <ProjectCard>
          <h2>{selectedProject}</h2>
          <LinkToProject selectedProjectData={selectedProjectData} />
          <ProjectCardImage
            imgAlt={selectedProjectData.imgAlt}
            title={selectedProject}
          /> 
          <TextSection >
            <NavText>
              <ul>
                {PROJECT_NAV_TEXT.map(innerNavText =>
                  <li key={innerNavText} >
                    <NavButtonInner
                      $currentSelected={selectedNavText}
                      onClick={handleInnerTabSelection}
                      $tabTitle={innerNavText}
                      type="button"
                    >
                      {innerNavText}
                    </NavButtonInner>
                  </li>
                )}
              </ul>
            </NavText>
            <TextBox >
              {selectedNavText === "Description" && 
                <Description selectedProject={selectedProject} />
              }
              {(selectedNavText === "Learnt" || selectedNavText === "Struggles") && 
                <LearntStruggles
                  selectedProject={selectedProject}
                  textType={selectedNavText}
                />
              }
            </TextBox>
          </TextSection>
        </ProjectCard>
      </MainProject>
    </ProjectSection>
  );
}

const MainProject = styled.main`
  border: .1rem #000 solid;
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

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 4rem;
  // max-height: 95vh;
  max-width: 90%;

  & h2 {
    align-self: start;
  }
`;

const NavButton = styled.button`
  background-color: ${ props => {
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
  padding: 1.5rem 0;
  word-spacing: 50rem;

  &:hover {
    cursor: pointer;
  }
`;

const NavButtonInner = styled(NavButton)`
  padding: .5rem .6rem;
`;

const NavText = styled.nav`
  align-items: center;
  border: .2rem solid #000;
  border-radius: .4rem;
  display: flex;
  justify-content: center;

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

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

const TextSection = styled.section`
  margin: 0 auto;
  max-width: 90%;
`;
