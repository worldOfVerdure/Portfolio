import { EMERALD_GREEN } from "../../auxiliary/colors.js";
import { styled } from "styled-components";

export default function Header() {
  const h1GreetingsText =`Salutations,`;
  const h1NameText = ` I am Andrew Chupka`;

  return (
    <StyledHeader>
      <h1>
        <pre>{h1GreetingsText}</pre>
        <pre>{h1NameText}</pre>
      </h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  color: ${EMERALD_GREEN.base};
  width: fit-content;

  & pre {
    margin: 0;
  }

  & pre:nth-child(1) {
    font-family: "Tangerine", cursive;
    font-size: clamp(5rem, calc(2.36rem + 2vw), 6.5rem);
    font-style: normal;
    font-weight: 700;
  }

  & pre:nth-child(2) {
    font-size: clamp(2.6rem, calc(1.96rem + 2vw), 4rem);
  }
`;
