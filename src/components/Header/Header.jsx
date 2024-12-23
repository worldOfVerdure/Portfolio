import { styled } from "styled-components";

export default function Header() {
  const h1TitleText =`Portfolio of`;
  const h1NameText = `  Andrew Chupka`;

  return (
    <StyledHeader>
      <h1>
        <pre>{h1TitleText}</pre>
        <pre>{h1NameText}</pre>
      </h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: fit-content;

  & pre {
    margin: 0;
  }

  & pre:nth-child(1) {
    font-size: clamp(2.6rem, calc(1.96rem + 2vw), 4rem);
  }

  & pre:nth-child(2) {
    font-size: clamp(3rem, calc(2.36rem + 2vw), 4.5rem);
  }
`;
