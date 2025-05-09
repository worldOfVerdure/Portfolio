import TECH_NAMES from "./techNames.js";

const descriptions = [
  `Lorem ipsum odor amet, consectetuer adipiscing elit. Dis nisl fringilla semper himenaeos rutrum
  purus? Praesent commodo felis, commodo accumsan finibus nunc. Cubilia ac massa accumsan eget
  molestie potenti. Id enim leo blandit interdum condimentum.`,

  `Lorem ipsum odor amet, consectetuer adipiscing elit. Diam penatibus habitasse efficitur interdum
  class aptent malesuada pulvinar suscipit. Gravida varius vehicula accumsan pretium tempor cras
  inceptos sollicitudin risus. Curae id tortor potenti cubilia elit nullam. Malesuada lobortis in 
  sapien malesuada ac semper.`,

  `Lorem ipsum odor amet, consectetuer adipiscing elit. Montes adipiscing sociosqu rhoncus neque
  blandit volutpat velit fermentum. Lacinia maecenas sodales ipsum nibh fusce class. Sed hac
  faucibus netus laoreet eros auctor convallis sapien eros. Tempus sapien pretium at integer
  faucibus consequat egestas.`,

  `Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices phasellus magnis nulla laoreet
  libero viverra augue quisque. Varius proin laoreet himenaeos lacus, facilisi eu aptent.
  Pellentesque fermentum ex nec nisl; facilisis porttitor quam. Ex et nullam proin lectus purus sed
  tempor. Varius congue magna ullamcorper aliquet consectetur faucibus.`
];

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
