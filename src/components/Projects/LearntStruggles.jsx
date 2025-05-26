import Defined from "./Defined.jsx";
import { learntStrugglesArray, learntStrugglesIndex } from "./helpers/learntStruggles.js";
import { styled } from "styled-components";

export default function LearntStruggles({ selectedProject, textType }) {
  const index = learntStrugglesIndex(selectedProject);
  const textTypeLowerCase = textType.toLowerCase();
  return (
    <DescriptionLearnList>
      {learntStrugglesArray[index][textTypeLowerCase].map((innerArray, rowIndex) => {
        <Defined 
          explanation={innerArray[1]}
          key={rowIndex}
          topic={innerArray[0]}
        />
      })}
    </DescriptionLearnList>
  );
}

const DescriptionLearnList = styled.dl`

`;
