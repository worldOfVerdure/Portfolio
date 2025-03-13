import About from "./components/About/About.jsx";
import { createGlobalStyle, styled } from "styled-components";
import { EMERALD_GREEN } from "./auxiliary/colors.js";
import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects/Projects.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <EntireContainer >
        <Header />
        <About />
        <Projects />
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
  * {
    box-sizing: border-box;
  }

  a:hover {
    cursor: pointer;
  }

  body {
    // background-color: ${EMERALD_GREEN.base};
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
