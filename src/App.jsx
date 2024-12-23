import About from "./components/About/About.jsx";
import { createGlobalStyle, styled } from "styled-components";
import Header from "./components/Header/Header.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <EntireContainer >
        <Header />
        <About />
      </EntireContainer>
    </>
  );
}

const EntireContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const GlobalStyle = createGlobalStyle`
  a:hover {
    cursor: pointer;
  }

  body {
    box-sizing: border-box;
    font-size: 1.6rem;
    margin: 0;
    width: 100%;
  }
  // Some styles are in a selector
  h2 {
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }
`;
