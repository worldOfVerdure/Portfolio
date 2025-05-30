import backgroundImage from "../../assets/images/header/headerBackground.png";
import { styled } from "styled-components";

export default function Header() {
  const h1GreetingsText =`Welcome,`;
  const h1NameText = `  I am Andrew Chupka`;

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
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  color:rgb(250, 183, 83);
  height: 40vh;
  width: 100%;

  & h1 {
    margin-bottom: 5rem;
  }

  & pre {
    margin: 0;
    text-shadow: #000 .1rem .2rem;
  }

  & pre:nth-child(1) {
    font-family: "Tangerine", cursive;
    font-size: clamp(5rem, calc(4.8rem + 2vw), 6.5rem);
    font-style: normal;
    font-weight: 700;
  }

  & pre:nth-child(2) {
    font-size: clamp(2.6rem, calc(1.96rem + 2vw), 4rem);
  }
`;
