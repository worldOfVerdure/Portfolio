import TECH_NAMES from "./techNames.js";
import matchGame from "../../assets/images/projectCard/matchGame/matchGame.png";
import matchGame250 from "../../assets/images/projectCard/matchGame/matchGame-250.png";
import matchGame300 from "../../assets/images/projectCard/matchGame/matchGame-300.png";
import matchGame500 from "../../assets/images/projectCard/matchGame/matchGame-500.png";
import matchGame700 from "../../assets/images/projectCard/matchGame/matchGame-700.png";
import matchGame900 from "../../assets/images/projectCard/matchGame/matchGame-900.png";
import matchGame1200 from "../../assets/images/projectCard/matchGame/matchGame-1200.png";
import rotateCube from "../../assets/images/projectCard/rotateCube/rotateCube.png";
import rotateCube250 from "../../assets/images/projectCard/rotateCube/rotateCube-250.png";
import rotateCube300 from "../../assets/images/projectCard/rotateCube/rotateCube-300.png";
import rotateCube500 from "../../assets/images/projectCard/rotateCube/rotateCube-500.png";
import rotateCube700 from "../../assets/images/projectCard/rotateCube/rotateCube-700.png";
import rotateCube900 from "../../assets/images/projectCard/rotateCube/rotateCube-900.png";
import rotateCube1200 from "../../assets/images/projectCard/rotateCube/rotateCube-1200.png";
import noDice from "../../assets/images/projectCard/noDice/noDice.png";
import noDice250 from "../../assets/images/projectCard/noDice/noDice-250.png";
import noDice300 from "../../assets/images/projectCard/noDice/noDice-300.png";
import noDice500 from "../../assets/images/projectCard/noDice/noDice-500.png";
import noDice700 from "../../assets/images/projectCard/noDice/noDice-700.png";
import noDice900 from "../../assets/images/projectCard/noDice/noDice-900.png";
import noDice1200 from "../../assets/images/projectCard/noDice/noDice-1200.png";
import managementApp from "../../assets/images/projectCard/managementApp/managementApp.png";
import managementApp250 from "../../assets/images/projectCard/managementApp/managementApp-250.png";
import managementApp300 from "../../assets/images/projectCard/managementApp/managementApp-300.png";
import managementApp500 from "../../assets/images/projectCard/managementApp/managementApp-500.png";
import managementApp700 from "../../assets/images/projectCard/managementApp/managementApp-700.png";
import managementApp900 from "../../assets/images/projectCard/managementApp/managementApp-900.png";
import managementApp1200 from "../../assets/images/projectCard/managementApp/managementApp-1200.png";

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

export function projectImages (projectTitle) {
  let projectImageArray;
  switch (projectTitle) {
    case "Match Game":
      projectImageArray = [
        matchGame, 
        matchGame250, 
        matchGame300, 
        matchGame500, 
        matchGame700, 
        matchGame900, 
        matchGame1200
      ];
      break
    case "Rotate Cube":
      projectImageArray = [
        rotateCube,
        rotateCube250,
        rotateCube300,
        rotateCube500,
        rotateCube700,
        rotateCube900,
        rotateCube1200
      ];
      break;
    case "No Dice":
      projectImageArray = [
        noDice,
        noDice250,
        noDice300,
        noDice500,
        noDice700,
        noDice900,
        noDice1200
      ];
      break;
    case "Management App":
      projectImageArray = [
        managementApp,
        managementApp250,
        managementApp300,
        managementApp500,
        managementApp700,
        managementApp900,
        managementApp1200
      ];
      break;
    default :
      console.log("An invalid project title was passed.");
  }
  return projectImageArray;
}
