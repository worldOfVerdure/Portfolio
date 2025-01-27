import { colorSelector } from "./auxiliaryProjectFuncs.js";
import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import { styled } from "styled-components";

export default function ProjectCard(props) {
  const imgArray = [];
  Object.values(import.meta.glob(`${props.imgSrc}*.png`, { eager: true })).forEach(
    ({ default: path }) => {
      const url = new URL(path, import.meta.url);
      const data = {
        path: url.pathname,
      };
      imgArray.push(data);
    }
  );

  return (
    <Card >
      <h3>{props.title}</h3>
      <img
        alt={props.imgAlt}
        sizes="
          (max-width: 325px) 250px,
          (max-width: 425px) 300px,
          (max-width: 1200px) 500px,
          700px
        "
        src={imgArray[0]}
        srcset={`
          ${imgArray[0]} 250w
          ${imgArray[1]} 300w
          ${imgArray[2]} 500w
          ${imgArray[3]} 700w
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
  padding: 1rem;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;

  & img {
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

  & li {

  }
`;

const Tech = styled.div`
  background-color: ${props => props.$backColor};
  border: .4rem solid ${props => props.$borderColor};
  border-radius: .8rem;
  color: ${props => props.$textColor};
  padding: .5rem 2rem;
  width: fit-content;
`;

const TechContainer = styled.div`
  align-items: space-between;
  box-sizing: content-box;
  display: flex;
  gap: .8rem;
  justify-content: space-around;

  & > * {
    flex: 1 auto;
  }
`;
