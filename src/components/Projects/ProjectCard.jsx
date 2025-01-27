import { colorSelector } from "./auxiliaryProjectFuncs.js";
import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import { styled } from "styled-components";

export default function ProjectCard(props) {
  return (
    <Card >
      <h3>{props.title}</h3>
      <img
        alt={props.imgAlt}
        sizes={`
          ((min-width: ${MEDIA_SIZES.mobileS}) and (max-width: ${MEDIA_SIZES.mobileM})) 250px,
          (max-width: ${MEDIA_SIZES.tablet}) 300px,
          (max-width: ${MEDIA_SIZES.laptop}) 500px,
          (max-width: ${MEDIA_SIZES.laptopL}) 700px,
          (max-width: ${MEDIA_SIZES.desktop}) 900px,
          1200px
        `}
        src={props.imgSrc}
        srcSet={`
          ../assets/projectCard/${props.srcSetName}/${props.srcSetName}-250.png 250w,
          ../assets/projectCard/${props.srcSetName}${props.srcSetName}-300.png 300w,
          ../assets/projectCard/${props.srcSetName}${props.srcSetName}-500.png 500w,
          ../assets/projectCard/${props.srcSetName}${props.srcSetName}-700.png 700w,
          ../assets/projectCard/${props.srcSetName}${props.srcSetName}-900.png 900w,
          ../assets/projectCard/${props.srcSetName}${props.srcSetName}-1200.png 1200w,
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
