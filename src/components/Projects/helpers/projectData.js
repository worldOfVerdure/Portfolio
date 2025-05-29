import descriptions from "./descriptions.js";
import TECH_NAMES from "./techNames.js";

export const PROJECT_NAV_TEXT = ["Description", "Learnt", "Struggles"];
export const PROJECT_TITLES = ["Match Game", "Rotate Cube", "No Dice", "Task Tracker"];

export const PROJECT_DATA = [
  {
    description: descriptions[0],
    imgAlt: "Thumbnail of the match game project",
    links: {
      git: "https://worldofverdure.github.io/GameNMatch/"
      // video: 
    },
    tech: [TECH_NAMES.html, TECH_NAMES.css, TECH_NAMES.js],
    title: PROJECT_TITLES[0]
  },
  {
    description: descriptions[1],
    imgAlt: "Thumbnail of the rotate cube project",
    links: {
      git: "https://github.com/worldOfVerdure/rotateCube"
      // video: 
    },
    tech: [TECH_NAMES.html, TECH_NAMES.css, TECH_NAMES.js],
    title: PROJECT_TITLES[1]
  },
  {
    description: descriptions[2],
    imgAlt: "Thumbnail of the of the dice game project",
    links: {
      git: "https://github.com/worldOfVerdure/noDice"
      // video: 
    },
    tech: [TECH_NAMES.html, TECH_NAMES.css, TECH_NAMES.js],
    title: PROJECT_TITLES[2]
  },
  {
    description: descriptions[3],
    imgAlt: "Thumbnail of a programmer at work to signify a project under construction",
    links: {
      git: "https://worldofverdure.github.io/managementApp/"
      // video: 
    },
    tech: [TECH_NAMES.html, TECH_NAMES.css, TECH_NAMES.js, TECH_NAMES.react, TECH_NAMES.styled],
    title: PROJECT_TITLES[3]
  }
];
