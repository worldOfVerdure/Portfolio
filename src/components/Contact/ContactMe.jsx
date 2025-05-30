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
          <li><span>Name:</span></li>
          <li><span>Email:</span></li>
          <li><span>Tel #:</span></li>
          <li>
            <span>Social Media:</span>
            <ul>
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
          </li>
        </ul>
      </ContactAddress>
    </ContactFooter>
  );
}

const ContactAddress = styled.address`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ContactFooter = styled.footer`
  width: 90vw;
`;
