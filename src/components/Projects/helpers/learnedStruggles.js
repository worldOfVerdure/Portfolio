import { PROJECT_TITLES } from "./projectData.js";
//PROJECT 1 TEXT
const Project1Learned = [
  ["Fisher-Yates Shuffle", `Also called the Knuth sort, this shuffle randomizes an array by having a
    pointer at the last index, i, of the array and generating a random value between 0 and i - 1.
    The random value points to another index, j. The values of i and j are swapped, and we decrement
    the i index. Considering everything after i sorted, we continue the algorithim until i=0. The 
    runtime and spacetime complexity being linear: O(n).`],
  ["Responsive Images", `The HTML attributes srcset and sizes allowed me to serve more appropriately
    sized images. Thus reducing the file size required when requesting the images.`],
  ["Timer", `By using the asynchronous setInterval() to execute a callback with a short delay, I was
    able render a working timer with a delay of 25ms.`],
  ["3-D Transformations", `Utilized absolute positioning, and the backface-visibility CSS property
    to create flipping card effects.`],
  ["Select Element", `Learned about styling and implementing the select element as well as add the
    change event as a listener to build the game.`]
];

const Project1Struggles = [
  ["Managing Game Data", `At first, all the various variables and methods was challenging to keep
    track of. I implemented and instantiated two classes to have objects for the game and timer
    data. Resetting the game became trivial with instantiating a new object, relying on the garbage
    collector to avoid memory leaks.`],
  ["Backface-Visibility", `Before I knew of this property, the card with higher precedence in the
    stacking context would flip with the card with the lower precedence, yet the higher precedence
    was still rendering. When this property was set to "hidden", the backface of the higher
    precedence was hidden as well.`]
  
];
//PROJECT 2 TEXT
const Project2Learned = [
  ["3-D Transforms", `By using a combination of the rotate() and translate() CSS methods, I was able
    to move the facets of the cube, relative to the perspective of their scene container.`],
  ["Various Input Fields", `The different types of inputs utilized being range, radio and checkbox
    This project gave me a stronger understanding of grouping inputs.`],
  ["Radio & Name", `A group of radio buttons can be bound by the name attribute having the same 
    value. Thus, only one radio in the group may be selected at a given time.`],
  ["Import/Export", `This was the first project that I modularized my JS files with ES modules. I
    later went on to to modularize my CSS and then components in React.`]
];

const Project2Struggles = [
  ["Persisting Values", `In the Firefox browser, I encountered a bug when I refreshed the page. 
    The range sliders would reset to their default positions, but the previously displayed value
    would persist. The solution was using the autocomplete attribute with the value "off."`],
  ["Understanding Scene", `At first I was struggling to grasp the need for a containing element to
    have a perspective property; thus, giving the facets the ability to transform in 3-D space.`]
];
//PROJECT 3 TEXT
const Project3Learned = [
  ["Improved w/ Flexbox", `This project was the first for me that required that I had flex
    containers nested. Some of these containers even had different flex-directions: a flex-direction
    of column containing flex-directions of row.`],
  ["Disabled Elements", `If a player held, they should no longer have access to their buttons. I was
    able to build appropriate logic to trigger toggleAttribute of the Element interface to toggle
    the Boolean HTML attribute, disabled.`],
  ["SVG's", `I didn't use the assets provided as the images of the victory flags and dice. I made my
    own with SVG's in HTML and basic geometry and the cartesian coordinate plane.`]
];

const Project3Struggles = [
  ["The Need to Plan!", `Being one of my first, projects I set out to complete, I was too excited
    and simply started to code without planning the design nor the logic flow of the JS itself.
    Coupled this with seeking to keep implementing more feratures, made for a great deal of bugs and
    mistakes. I had to learn to be more patient, draw the diagrams and logical flow charts. After
    doing this, implementation became easier.`]
];
//PROJECT 4 TEXT
const Project4Learned = [
  ["Lifting State", `The need arises to pass state variables as props to common siblings. However,
    if a state variable was written inside one of the siblings when it should be shared, this state
    needs to be lifted to the common parent. Doing so will help keep code DRY and more
    manageable.`],
  ["Using Modals", `I learned of using the dialog as a modal from a side project. I wanted to include
    a modal to give users more confirmation so if they misclicked or changed their mind, they
    wouldn't lose the text they wrote.`],
  ["Transient Props", `I built this with Styled Components and made use of transient props which
    are props used purely for styling purposes. With these props, I was able to control the
    sidebar's sliding with a button click changing state, a Boolean value, which then causes the
    side bar to slide on and off screen.`],
];

const Project4Struggles = [
  ["Setting up Backend", `I was looking into Express.js and Node.js to set up a backend server so
    that the text entered would be saved (would need a database). My eventual goal is to set up
    backend, though the current focus is frontend. I will implement a user object to save the text
    entered.`]
];

const Project1LearnedStruggles = {
  projectTitle: `${PROJECT_TITLES[0]}`,
  learned: Project1Learned,
  struggles: Project1Struggles
};

const Project2LearnedStruggles = {
  projectTitle: `${PROJECT_TITLES[1]}`,
  learned: Project2Learned,
  struggles: Project2Struggles
};

const Project3LearnedStruggles = {
  projectTitle: `${PROJECT_TITLES[2]}`,
  learned: Project3Learned,
  struggles: Project3Struggles
};

const Project4LearnedStruggles = {
  projectTitle: `${PROJECT_TITLES[3]}`,
  learned: Project4Learned,
  struggles: Project4Struggles
};

export const learnedStrugglesArray = [
  Project1LearnedStruggles,
  Project2LearnedStruggles,
  Project3LearnedStruggles,
  Project4LearnedStruggles
]; 
//Function returns index of ProjectLearntStrugglesArray
export function learnedStrugglesIndex(projectTitle) {
  switch(projectTitle) {
    case PROJECT_TITLES[0]:
      return 0;
    case PROJECT_TITLES[1]:
      return 1;
    case PROJECT_TITLES[2]:
      return 2;
    case PROJECT_TITLES[3]:
      return 3;
    default:
      throw new Error("Project not found. Unable to return a project index.");
  }
}
