import { createGlobalStyle, styled } from "styled-components";
import Header from "./Header/Header.jsx";
import NavTabs from "./NavTabs/NavTabs.jsx";
import Hub from "./Hub/Hub.jsx";
import MEDIA_SIZES from "./auxiliary/mediaSizes.js";

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  a:visited {
    color: #fff;
  }

  body {
    box-sizing: border-box;
    font-size: 1.6rem;
    margin: 0 auto;
    min-height: 100vh;
    overflow: hidden;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }
`;

const IntroSection = styled.section`
  margin: 0 auto;
  width: 100%;

  @media (${MEDIA_SIZES.mobileM} < width < ${MEDIA_SIZES.tablet}) {
    width: 90%;
  }

  @media (${MEDIA_SIZES.tablet} < width < ${MEDIA_SIZES.laptop}) {
    width: 80%;
  }

  @media (${MEDIA_SIZES.laptop} <= width < ${MEDIA_SIZES.laptopL}) {
    width: 50%;
  }

  @media (${MEDIA_SIZES.laptopL} <= width < ${MEDIA_SIZES.desktop}) {
    margin-top: 5%;
    width: 30%;
  }

  @media (width >= ${MEDIA_SIZES.desktop}) {
    width: 25%;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <NavTabs />
      <IntroSection>
        <Header />
        <Hub />
      </IntroSection>
    </>
  );
}
