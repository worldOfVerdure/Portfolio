import TECH_NAMES from "./techNames.js";

export function colorSelector(techName) {
  let backColor, borderColor, textColor;
  switch (techName) {
    case TECH_NAMES.css:
      backColor = "#3A64E8";
      borderColor = "#304DDC";
      textColor = "#FFF";
      break;
    case TECH_NAMES.html:
      backColor = "#E0703A";
      borderColor = "#D85D34";
      textColor = "#FFF";
      break;
    case TECH_NAMES.js:
      backColor = "#F7DB5E";
      borderColor = "#D1BB4E";
      textColor = "#323330";
      break;
    case TECH_NAMES.react:
      backColor = "#82D7F7";
      borderColor = "#24272E";
      textColor = "#414654";
      break;
    case TECH_NAMES.scss:
      backColor = "#C16A99";
      borderColor = "#C0639F";
      textColor = "#FFF";
      break;
    case TECH_NAMES.styled:
      backColor = "#A8609E";
      borderColor = "#F8D466";
      textColor = "#FFF";
      break;
    case TECH_NAMES.ts:
      backColor = "#4476C0";
      borderColor = "#0B254E";
      textColor = "#FFF";
      break;
  }
  return [backColor, borderColor, textColor];
}

export function imageURLPathSelector (title) {
  let images;
  switch (title) {
    case "Match Game":
      images = import.meta.glob("../../assets/projectCard/matchGame/*.png", { eager: true });
      break;
    case "Rotate Cube":
      images = import.meta.glob("../../assets/projectCard/rotateCube/*.png", { eager: true });
      break;
    case "Position Card":
      images = import.meta.glob("../../assets/projectCard/positionCards/*.png", { eager: true });
      break;
    case "noDice":
      images = import.meta.glob("../../assets/projectCard/noDice/*.png", { eager: true });
      break;
  }
  
//!zzz At the least, make sure the array is sorted before converting using forEach method.
  let imgArray = [];
  let newArray = Object.values(images).forEach(
    ({ default: path }) => {
      const url = new URL(path, import.meta.url);
      const data = {
        path: url.pathname
      };
      imgArray.push(data);
    }
  );
  // const imgArray = [];
  // Object.values(import.meta.glob(`${props.imgSrc}*.png`, { eager: true })).forEach(
  //   ({ default: path }) => {
  //     const url = new URL(path, import.meta.url);
  //     const data = {
  //       path: url.pathname,
  //     };
  //     imgArray.push(data);
  //   }
  // );
}

// let images;
// switch (imageFolderUrl) {
//   case "Project1": images = import.meta.globEager("/src/resources/projects/images/Project1/*.png");
//   case "Project2": images = import.meta.globEager("/src/resources/projects/images/Project2/*.png");
//   ...
// }
