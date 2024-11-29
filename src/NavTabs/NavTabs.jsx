import { styled } from "styled-components";
import { useState } from "react";
import * as pageColors from "../auxiliary/colors.js";

const NavContainer = styled.nav`
  overflow: inherit;
  position: fixed;
  right: -8.5rem;
  top: 0rem;
  width: fit-content;

  & ul {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const NavItem = styled.li`
  box-sizing: border-box;
  flex: auto;
  padding: .6rem 1rem;
  text-align: center;
  transition: transform .7s ease-in;
  transform: ${({$translate}) => $translate ? "translate(-85px)" : "translate(0)"};
  width: 100%;
  
  &:hover {
    cursor: pointer;
  }

  &:nth-child(1) {
    background-color: ${pageColors.MAGENTA};
  }

  &:nth-child(2) {
    background-color: ${pageColors.TEAL};
  }

  &:nth-child(3) {
    background-color: ${pageColors.GREY};
  }

  &:nth-child(4) {
    background-color: ${pageColors.HUNTER_GREEN};
  }
`;

const NavContent = styled.div`
  align-items: center;
  display: flex;
  gap: .7rem;
  justify-content: center;

  & a {
    color: #fff;
    height: 100%;
    width: 100%;
  }
`;

export default function NavTabs () { // look up changing state based on previous state
  const [linksClicked, setLinksClicked] = useState([false, false, false, false]);

  function handleClick(index) {
    setLinksClicked(linksClicked.map((e, i) => {
      if (i === index || e)
        return !e;      
      else
        return e;
    }));
  }
  /* Refactor this code later. Use map and a data.js auxillary file */
  return (
    <NavContainer>
      <ul>
        <NavItem $translate={linksClicked[0]}>
          <NavContent>
            <img 
              src="/navSVGs/sentiment_very_satisfied.svg"
              alt="SVG of a happy face my about me section."
              onClick={() => handleClick(0)} 
            />
            <a href="#">About Me</a>
          </NavContent>
        </NavItem>
        <NavItem $translate={linksClicked[1]}>
          <NavContent>
            <img
              src="/navSVGs/checklist.svg"
              alt="SVG of a person at a library for my learning section."
              onClick={() => handleClick(1)}
            />
            <a href="#">Skills</a>
          </NavContent>
        </NavItem>
        <NavItem $translate={linksClicked[2]}>
          <NavContent>
            <img 
              src="/navSVGs/engineering.svg"
              alt="SVG of a construction worker for my project section."
              onClick={() => handleClick(2)}
            />
            <a href="#">Projects</a>
          </NavContent>
        </NavItem>
        <NavItem $translate={linksClicked[3]}>
          <NavContent>
            <img 
              src="/navSVGs/mail.svg"
              alt="SVG of mail for my contact me section."
              onClick={() => handleClick(3)} 
            />
            <a href="#">Contact Me</a>
          </NavContent>
        </NavItem>
      </ul>
    </NavContainer>
  );
}
