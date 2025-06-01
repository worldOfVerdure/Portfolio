import Defined from "./Defined.jsx";
import { learnedStrugglesArray, learnedStrugglesIndex } from "./helpers/learnedStruggles.js";
import { styled } from "styled-components";

export default function LearnedStruggles({ selectedProject, textType }) {
  const index = learnedStrugglesIndex(selectedProject);
  const textTypeLowerCase = textType.toLowerCase();
  return (
    <LearnedStrugglesContainer >
      {textType === "Learnt" ? <h3>What I learned</h3> : <h3>Struggles Overcame</h3>}
      <DescriptionLearnList >
        {learnedStrugglesArray[index][textTypeLowerCase].map((innerArray, rowIndex) => 
          <Defined 
            explanation={innerArray[1]}
            key={`${selectedProject} ${textType} ${rowIndex}`}
            topic={innerArray[0]}
          />
          )
        }
      </DescriptionLearnList>
    </LearnedStrugglesContainer>
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

const LearnedStrugglesContainer = styled.div`
   & h3 {
    margin: 0 0 1.5rem 0;
  }
`;
