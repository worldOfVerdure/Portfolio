import { projectImages } from "./helpers/auxiliaryProjectFuncs";
import { styled } from "styled-components";

export default function ProjectCardImage( {imgAlt, title} ) {
  const imgArray = projectImages(title);

  return (
    <ProjectImage
        alt={imgAlt}
        sizes="
          (max-width: 320px) 250px,
          (max-width: 425px) 300px,
          (max-width: 600px) 500px,
          (max-width: 950px) 700px,
          (max-width: 1200px) 900px,
          1200px
        "
        src={imgArray[4]}
        srcSet={`
          ${imgArray[1]} 250w,
          ${imgArray[2]} 300w,
          ${imgArray[3]} 500w,
          ${imgArray[4]} 700w,
          ${imgArray[5]} 900w,
          ${imgArray[6]} 1200w
        `}
    />
  );
}

const ProjectImage = styled.img`
  border-radius: .6rem;
  max-width: 60rem;
  width: 80%;
`;
