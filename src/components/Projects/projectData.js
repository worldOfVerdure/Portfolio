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

export const learntIntroText = [
  `Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque
  faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque
  sem placerat in id cursus mi.`,

  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo massa, molestie eu sem at,
  vestibulum lobortis tortor. Fusce sed diam eget augue consequat convallis. Vestibulum malesuada
  mattis arcu molestie aliquet. Phasellus in laoreet odio.`,

  `Vestibulum mollis lectus nisl, dictum
  suscipit nisl accumsan ut. Aliquam elementum placerat euismod. Curabitur id mollis arcu. Curabitur
  vitae vehicula felis, at tincidunt ipsum. Ut eget dolor vel nibh consectetur vehicula. Cras
  ultrices tempor pharetra. Integer hendrerit nibh non ultrices varius.`,

  `Praesent gravida mauris felis, vel molestie nibh vehicula eu. Pellentesque non ornare ante.
  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ligula
  sem, egestas eu odio ac, ornare varius lectus. Proin aliquet, metus eu lobortis maximus, ex eros
  volutpat nisi, nec elementum quam turpis eu purus. Donec euismod libero lorem, sagittis bibendum
  quam suscipit eget. Aenean eleifend sodales justo, vel bibendum tellus mollis ut.`
];

export const TEXT_BOX = [
  `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
  vitaepellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
  Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
  egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
  aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,

  
];

export const PROJECT_NAV_TEXT = ["Description", "Learnt", "Struggles"];
export const PROJECT_TITLES = ["Match Game", "Rotate Cube", "No Dice", "Task Tracker"];

export const PROJECT_DATA = [
  {
    description: descriptions[0],
    imgAlt: "Thumbnail of the match game project",
    learnt: learntIntroText[0],
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
    learnt: learntIntroText[1],
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
    learnt: learntIntroText[2],
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
    learnt: learntIntroText[3],
    links: {
      git: "https://worldofverdure.github.io/managementApp/"
      // video: 
    },
    tech: [TECH_NAMES.html, TECH_NAMES.css, TECH_NAMES.js, TECH_NAMES.react, TECH_NAMES.styled],
    title: PROJECT_TITLES[3]
  }
];
