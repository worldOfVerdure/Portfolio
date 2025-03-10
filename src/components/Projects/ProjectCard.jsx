import { colorSelector, projectImages } from "./auxiliaryProjectFuncs.js";
import { styled } from "styled-components";

export default function ProjectCard(props) {
  const imgArray = projectImages(props.title);

  return (
    <Card >
      <h3>{props.title}</h3>
      <img
        alt={props.imgAlt}
        sizes="
          (max-width: 325px) 250px,
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
      <TechContainer >
        {props.tech.map(techName => {
          const colors = colorSelector(techName);
          return (
          <Tech
            $backColor={colors[0]}
            $borderColor={colors[1]}
            $textColor={colors[2]}
            key={`${props.title} ${techName}`}
          >
            {techName}
          </Tech>
          );
        })}
      </TechContainer>
      <DescriptP >
        {props.description}
      </DescriptP>
      <LinkContainer >
        <ul>
          <li>
            <a
              href={props.links["git"]}
              rel="noopener noreferrer"
              target="_blank"
            >
              Github Page Link
            </a>
          </li>
        </ul>
      </LinkContainer>
    </Card>
  );
}

const Card = styled.div`
  align-items: center;
  border: .2rem solid #000;
  display: flex;
  max-width: 35rem;
  padding: 1rem;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;

  & img {
    border-radius: .6rem;
    max-width: 60rem;
    width: 80%;
  }
`;

const DescriptP = styled.p`

`;

const LinkContainer = styled.nav`
  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

const Tech = styled.div`
  background-color: ${props => props.$backColor};
  border: .4rem solid ${props => props.$borderColor};
  border-radius: .8rem;
  color: ${props => props.$textColor};
  display: flex;
  justify-content: center;
  padding: .5rem 2rem;
  width: fit-content;
`;

const TechContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  justify-content: space-around;
  margin-top: 2rem;

  & > * {
    flex: 1 auto;
  }
`;
