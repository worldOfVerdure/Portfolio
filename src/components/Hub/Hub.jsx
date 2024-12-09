import avatar from "../../assets/images/lekatee-asset-sm.jpg";
import * as colors from "../../auxiliary/colors.js";
import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import { styled } from "styled-components";

const Avatar = styled.img`
  border-radius: 50%;
  grid-area: avatar;
  width: 175px;
`;

const NavHub = styled.nav`
  align-items: center;
  display: grid;
  grid-template-areas:
    "about about skills skills"
    ". avatar avatar ."
    "projects projects contact contact";
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 2.5fr 1fr; 
  justify-items: center;
  margin: 5rem auto 0;
  width: 100%;

  & div:nth-child(1) {
    background-color: ${colors.MAGENTA};
    clip-path: polygon(0 0, 70% 0, 100% 100%, 0 100%);
    grid-area: about;
  }

  & div:nth-child(2) {
    background-color: ${colors.TEAL};
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
    grid-area: skills;
  }

  & div:nth-child(4) {
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
    background-color: ${colors.GREY};
    grid-area: projects;  
  }

  & div:nth-child(5) {
    background-color: ${colors.HUNTER_GREEN};
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
    grid-area: contact;
  }

  & div:nth-child(1) a,
  & div:nth-child(4) a {
    margin-right: 3rem;
  }

  & div:nth-child(2) a,
  & div:nth-child(5) a {
    margin-left: 3rem;
  }

  @media (${MEDIA_SIZES.mobileM} <= width < ${MEDIA_SIZES.tablet}) {
    width: clamp(30rem, 80%, 40rem);
  }

  @media (width >= ${MEDIA_SIZES.tablet}) {
    margin: 0 auto;
  }

  @media (${MEDIA_SIZES.tablet} <= width < ${MEDIA_SIZES.laptop}) {
    width: 60%;
  }

  @media (width >= ${MEDIA_SIZES.laptop}) {
    width: clamp(35rem, 15%, 45rem);
  }
`;

export const HubLink = styled.div`
  align-items: center;
  border-radius: 1rem;
  display: flex;
  font-size: 2.2rem;
  height: 5rem;
  justify-content: center;
  width: 13rem;
`;

export default function Hub () {
  return (
    <NavHub> 
      <HubLink>
        <a href="#about">About</a>
      </HubLink>
      <HubLink>
        <a href="#">Skills</a>
      </HubLink>
      <Avatar src={avatar} alt="A picture of the website author." />
      <HubLink>
        <a href="#">Projects</a>
      </HubLink>
      <HubLink>
        <a href="#">Contact</a>
      </HubLink>
    </NavHub>
  );
}
