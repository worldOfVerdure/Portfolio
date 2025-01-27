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
