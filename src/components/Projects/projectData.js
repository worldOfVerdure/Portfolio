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

  `Lorem ipsum odor amet, consectetuer adipiscing elit. Torquent pellentesque sapien dignissim curae
  nisl montes eros. Ut aenean lobortis potenti a enim eros.`
]

const PROJECT_DATA = [
  {
    description: descriptions[0],
    imgAlt: "Thumbnail of the match game project",
    imgSrc: "../assets/thumbnails/#",
    links: {
      git: "https://github.com/worldOfVerdure/Mr.Game-Match"
      // video: 
    },
    tech: [TECH_NAMES.html, TECH_NAMES.css, TECH_NAMES.js],
    title: "Match Game"
  },
  {
    description: descriptions[1],
    imgAlt: "Thumbnail of the rotate cube project",
    imgSrc: "../assets/thumbnails/#",
    links: {
      git: "https://github.com/worldOfVerdure/rotateCube"
      // video: 
    },
    tech: [TECH_NAMES.html, TECH_NAMES.css, TECH_NAMES.js],
    title: "Rotate Cube"
  },

  {
    description: descriptions[2],
    imgAlt: "Thumbnail of the position card project",
    imgSrc: "../assets/thumbnails/#",
    links: {
      git: "https://github.com/worldOfVerdure/positionCards"
      // video: 
    },
    tech: [TECH_NAMES.html, TECH_NAMES.css, TECH_NAMES.js],
    title: "Position Card"
  },

  {
    description: descriptions[3],
    imgAlt: "Thumbnail of the of the dice game project",
    imgSrc: "../assets/thumbnails/#",
    links: {
      git: "https://github.com/worldOfVerdure/noDice"
      // video: 
    },
    tech: [TECH_NAMES.html, TECH_NAMES.css, TECH_NAMES.js],
    title: "No Dice"
  }
];

export default PROJECT_DATA;

/*
  Title
  Picture
  Tech Used
  Link to project
  Link to Video
  Description (maybe only when expanded, or show a portion with more feature)
*/
