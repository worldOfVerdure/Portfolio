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
  font-size: clamp(1.7rem, calc(1.3rem + 1.1vw), 2rem);
  margin: 1rem 0;
  text-decoration: underline;

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
