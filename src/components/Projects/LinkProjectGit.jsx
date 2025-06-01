import { styled } from "styled-components";

export default function LinkToProject({ selectedProjectData }) {
  return (
    <ProjectLinkContainer >
      <ProjectLink
        href={selectedProjectData.links.project}
        target="_blank"
      >
        {"To Project"}
      </ProjectLink>
      <span>/</span>
      <ProjectLink
        href={selectedProjectData.links.git}
        target="_blank"
      >
        {"To Github"}
      </ProjectLink>
    </ProjectLinkContainer>
  );
}

const ProjectLink = styled.a`
  text-decoration: underline;
  margin: 1rem 0;

  &:first-child {
    margin-right: .5rem;
  }

  &:last-child {
    margin-left: .5rem
  }
`;

const ProjectLinkContainer = styled.nav`
  align-items: center;
  display: flex;
`;
