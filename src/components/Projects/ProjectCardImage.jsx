import { projectImages } from "./helpers/auxiliaryProjectFuncs";
import { styled } from "styled-components";

export default function ProjectCardImage( {imgHref, imgAlt, title} ) {
  const imgArray = projectImages(title);
  return (
    <BlueSkidoo
      href={imgHref}
      target="_blank"
    >
      <ProjectImage
        alt={imgAlt}
        loading="lazy"
        sizes="
          (max-width: 320px) 250px,
          (max-width: 425px) 300px,
          (max-width: 600px) 500px,
          (max-width: 950px) 700px,
          (max-width: 1200px) 900px,
          1200px
        "
        src={imgArray[3]}
        srcSet={`
          ${imgArray[0]} 250w,
          ${imgArray[1]} 300w,
          ${imgArray[2]} 500w,
          ${imgArray[3]} 700w,
          ${imgArray[4]} 900w,
          ${imgArray[5]} 1200w
        `}
      />
    </BlueSkidoo>
  );
}

const BlueSkidoo = styled.a`
  margin-bottom: 1rem;
  max-width: 35rem;
  width: 80%;
`;

const ProjectImage = styled.img`
  border-radius: .6rem;
  width: 100%;
`;
