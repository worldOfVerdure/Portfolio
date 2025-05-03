import backgroundImage from "../../assets/images/header/headerBackground.png";
import githubIcon from "../../assets/images/socialMediaIcons/github.svg";
import instagramIcon from "../../assets/images/socialMediaIcons/instagram.svg";
import linkedinIcon from "../../assets/images/socialMediaIcons/linkedin.svg";
import profilePic from "../../assets/images/header/profilePic-s.jpg";
import SocialMediaAnchor from "./SocialMediaAnchor.jsx";
import { styled } from "styled-components";

export default function Header() {
  const h1GreetingsText =`Welcome,`;
  const h1NameText = `  I am Andrew Chupka`;

  return (
    <StyledHeader>
      <h1>
        <pre>{h1GreetingsText}</pre>
        <pre>{h1NameText}</pre>
      </h1>
      <Avatar src={profilePic} alt="Picture of the webpage author." />
      <SocialMediaNavContainer>
        <ul>
          <SocialMediaLink>
            <SocialMediaAnchor 
              imgAlt="The Instagram icon"
              imgSrc={instagramIcon}
              link="#"
            />
          </SocialMediaLink>
          <SocialMediaLink>
            <SocialMediaAnchor 
              imgAlt="The Linkedin icon"
              imgSrc={linkedinIcon}
              link="https://www.linkedin.com/in/andrew-chupka/"
            />
          </SocialMediaLink>
          <SocialMediaLink>
            <SocialMediaAnchor 
              imgAlt="The Github icon"
              imgSrc={githubIcon}
              link="https://github.com/worldOfVerdure"
            />
          </SocialMediaLink>
        </ul>
      </SocialMediaNavContainer>
    </StyledHeader>
  );
}

const Avatar = styled.img`
    border-radius: 50%;
    margin: 0 0 2rem 4rem;
    width: 18rem;
`;

const SocialMediaLink = styled.li`
  display: inline-block;

  &:nth-child(1) {
    margin: 0 1rem 0 4rem;
  }

  &:nth-child(2) {
    margin-right: 1rem;
  }
`;

const SocialMediaNavContainer = styled.nav`
  width: 100%;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

const StyledHeader = styled.header`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  color:rgb(255, 153, 0);
  height: 85vh;
  width: 100%;

  & h1 {
    margin-bottom: 5rem;
  }

  & pre {
    margin: 0;
    text-shadow: #000 .1rem .2rem;
  }

  & pre:nth-child(1) {
    font-family: "Tangerine", cursive;
    font-size: clamp(5rem, calc(4.8rem + 2vw), 6.5rem);
    font-style: normal;
    font-weight: 700;
  }

  & pre:nth-child(2) {
    font-size: clamp(2.6rem, calc(1.96rem + 2vw), 4rem);
  }
`;
