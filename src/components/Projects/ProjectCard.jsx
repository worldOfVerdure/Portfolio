import { colorSelector } from "./auxiliaryProjectFuncs.js";
import { styled } from "styled-components";

export default function ProjectCard(props) {
  return (
    <Card >
      <h3>{props.title}</h3>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <TechContainer >
        {props.tech.map((techName) => {
          const colors = colorSelector(techName);
          <Tech
            $backColor={colors[0]}
            $borderColor={colors[1]}
            $textColor={colors[2]}
            key={techName}
          >
            {techName}
          </Tech>
        })}
      </TechContainer>
      <DescriptP >
        {props.description}
      </DescriptP>
      <LinkContainer >
        <ul>
          <li>
            <a
              href={props.links[0]}
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
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;
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
  background-color: ${$backColor};
  border: .4rem solid ${$borderColor};
  border-radius: .8rem;
  color: ${$textColor};
  padding .5rem;
  width: fit-content;
`;

const TechContainer = styled.div`
  align-items: space-between;
  display: flex;
  gap: .8rem;
  justify-content: space-around;

  & > * {
    flex: 1 auto;
  }
`;
