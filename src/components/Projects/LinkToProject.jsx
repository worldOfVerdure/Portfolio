import { styled } from "styled-components";

export default function LinkToProject({ selectedProjectData }) {
  const anchorText = `Project Link: ${selectedProjectData.title}`
  return (
    <ProjectLink
      href={selectedProjectData.links.git}
      target="_blank"
    >
      {anchorText}
    </ProjectLink>
  );
}

const ProjectLink = styled.a`
  text-decoration: none;
`;
