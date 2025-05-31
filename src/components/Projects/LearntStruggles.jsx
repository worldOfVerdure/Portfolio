import Defined from "./Defined.jsx";
import { learntStrugglesArray, learntStrugglesIndex } from "./helpers/learntStruggles.js";
import { styled } from "styled-components";

export default function LearntStruggles({ selectedProject, textType }) {
  const index = learntStrugglesIndex(selectedProject);
  const textTypeLowerCase = textType.toLowerCase();
  return (
    <LearntStrugglesContainer >
      {textType === "Learnt" ? <h3>What I learned</h3> : <h3>Struggles Overcame</h3>}
      <DescriptionLearnList >
        {learntStrugglesArray[index][textTypeLowerCase].map((innerArray, rowIndex) => 
          <Defined 
            explanation={innerArray[1]}
            key={`${selectedProject} ${textType} ${rowIndex}`}
            topic={innerArray[0]}
          />
          )
        }
      </DescriptionLearnList>
    </LearntStrugglesContainer>
  );
}

const DescriptionLearnList = styled.dl`
  max-height: 25rem;
  overflow-y: auto;

  & dd {
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  & dd:last-child {
    margin-bottom: 0;
  }

  dt {
    margin-bottom: .5rem;
  }

  dt::after {
    content: ":";
  }
`;

const LearntStrugglesContainer = styled.div`
   & h3 {
    margin: 0 0 1.5rem 0;
  }
`;
