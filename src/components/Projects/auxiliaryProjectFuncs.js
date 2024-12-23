import TECH_NAMES from "./techNames.js";

export function colorSelector(techName) {
  let backColor, borderColor;
  switch (techName) {
    case TECH_NAMES.css:
      backColor = ;
      borderColor = ;
      break;
    case TECH_NAMES.html:
      backColor = ;
      borderColor = ;
      break;
    case TECH_NAMES.js:
      backColor = ;
      borderColor = ;
      break;
    case TECH_NAMES.react:
      backColor = ;
      borderColor = ;
      break;
    case TECH_NAMES.scss:
      backColor = ;
      borderColor = ;
      break;
    case TECH_NAMES.styled:
      backColor = ;
      borderColor = ;
      break;
    case TECH_NAMES.ts:
      backColor = ;
      borderColor = ;
      break;
  }
  return [backColor, borderColor];
}
