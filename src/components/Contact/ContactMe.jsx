import instagramIcon from "../../assets/images/socialMediaIcons/instagram.svg";
import linkedinIcon from "../../assets/images/socialMediaIcons/linkedin.svg";
import githubIcon from "../../assets/images/socialMediaIcons/github.svg";
import SocialMediaAnchor from "./SocialMediaAnchor.jsx";
import { styled } from "styled-components";

export default function ContactMe() {
  return (
    <ContactFooter>
      <h2>Contact Me</h2>
      <ContactAddress>
        <ul>
          <li>Name: Andrew Chupka</li>
          <li>Email: contact@andrewchupka.com</li>
          <li>Tel #: (407) 607-2105</li>
          <SocialMediaContainer>
            <h3>Social Media</h3>
            <nav>
              <ul>
                <li>
                  <SocialMediaAnchor
                    imgAlt="The Instagram icon"
                    imgSrc={instagramIcon}
                    link="https://www.instagram.com/fueled_by_decaf/"
                  />
                </li>
                <li>
                  <SocialMediaAnchor
                    imgAlt="The Linkedin icon"
                    imgSrc={linkedinIcon}
                    link="https://www.linkedin.com/in/andrew-chupka/"
                  />
                </li>
                <li>
                  <SocialMediaAnchor
                    imgAlt="The Github icon"
                    imgSrc={githubIcon}
                    link="https://github.com/worldOfVerdure"
                  />
                </li>
              </ul>
            </nav>
          </SocialMediaContainer>
        </ul>
      </ContactAddress>
    </ContactFooter>
  );
}

const ContactAddress = styled.address`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  & ul {
    list-style-type: none;
    padding: 0;
  }

  & ul > li {
    font-size: clamp(1.8rem, calc(1.4rem + 1.2vw), 2.4rem);
    margin-bottom: 1rem;
  }

  & ul > li:last-child {
    margin-bottom: 0;
  }
`;

const ContactFooter = styled.footer`
  align-items: start;
  display: flex;
  flex-direction: column;
  width: 90vw;

  @media (min-width: 500px) {
    margin: 0 auto;
    width: fit-content;
  }
`;

const SocialMediaContainer = styled.li` 
  align-items: start;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  & ul {
    display: flex;
    gap: 1rem;
    margin-left: 2rem;
  }
`;
