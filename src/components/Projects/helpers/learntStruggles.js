import { PROJECT_TITLES } from "./projectData.js";
//PROJECT 1 TEXT
const Project1Learnt = [
  ["Responsive Images", "Utilized srcset and sizes HTML attributes to serve a more appropriately sized image"],
  ["Timers", "Using the asynchronous setInterval() to execute a callback with a short delay"],
  ["3d Transformations", "Utilized absolute positioning, and the backface-visibility CSS property to create flipping card effects"],
  ["Select Element", "First time working with a select element and the change event"]
];

const Project1Struggles = [
  ["Managing Game Data", `At first, all the various variables and methods was challenging to keep track
    of. I implemented and instantiated two classes to have objects for the game and timer data.
    Resetting the game became trivial with instantiating a new object, relying on the garbage
    collector to avoid memory leaks.`],
  ["Backface-Visibility", `Before I knew of this property, the card with higher precedence in the
    stacking context would flip with the card with the lower precedence, yet the higher precedence
    was still rendering. When this property was set to "hidden", the backface of the higher
    precedence was hidden away.`]
  
];
//PROJECT 2 TEXT
const Project2Learnt = [
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."]
];

const Project2Struggles = [
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."]
];
//PROJECT 3 TEXT
const Project3Learnt = [
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."]
];

const Project3Struggles = [
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."]
];
//PROJECT 4 TEXT
const Project4Learnt = [
  ["Index 0 P4", "Learnt about structuring divs and properties to create 3-D effect."],
  ["Index 0 P4", "Learnt about structuring divs and properties to create 3-D effect."],
  ["Index 0 P4", "Learnt about structuring divs and properties to create 3-D effect."],
  ["Index 0 P4", "Learnt about structuring divs and properties to create 3-D effect."]
];

const Project4Struggles = [
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."],
  ["3-D CSS", "Learnt about structuring divs and properties to create 3-D effect."]
];

const Project1LearntStruggles = {
  projectTitle: `${PROJECT_TITLES[0]}`,
  learnt: Project1Learnt,
  struggles: Project1Struggles
};

const Project2LearntStruggles = {
  projectTitle: `${PROJECT_TITLES[1]}`,
  learnt: Project2Learnt,
  struggles: Project2Struggles
};

const Project3LearntStruggles = {
  projectTitle: `${PROJECT_TITLES[2]}`,
  learnt: Project3Learnt,
  struggles: Project3Struggles
};

const Project4LearntStruggles = {
  projectTitle: `${PROJECT_TITLES[3]}`,
  learnt: Project4Learnt,
  struggles: Project4Struggles
};

export const learntStrugglesArray = [
  Project1LearntStruggles,
  Project2LearntStruggles,
  Project3LearntStruggles,
  Project4LearntStruggles
]; 
//Function returns index of ProjectLearntStrugglesArray
export function learntStrugglesIndex(projectTitle) {
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
