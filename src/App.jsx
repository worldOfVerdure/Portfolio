import { createGlobalStyle, styled } from "styled-components";
import Header from "./components/Header/Header.jsx";
// import MEDIA_SIZES from "./auxiliary/mediaSizes.js";
//import { styled } in created...

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

// const IntroSection = styled.section`
//   margin: 0 auto;
//   width: 100%;

//   @media (${MEDIA_SIZES.mobileM} < width < ${MEDIA_SIZES.tablet}) {
//     width: 90%;
//   }

//   @media (${MEDIA_SIZES.tablet} < width < ${MEDIA_SIZES.laptop}) {
//     width: 80%;
//   }

//   @media (${MEDIA_SIZES.laptop} <= width < ${MEDIA_SIZES.laptopL}) {
//     width: 50%;
//   }

//   @media (${MEDIA_SIZES.laptopL} <= width < ${MEDIA_SIZES.desktop}) {
//     margin-top: 5%;
//     width: 30%;
//   }

//   @media (width >= ${MEDIA_SIZES.desktop}) {
//     width: 25%;
//   }
// `;

// const Main = styled.main`
//   margin-top: 12rem;
//   width: 100%;
// `;

const EntireContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <EntireContainer >
        <Header />
        
      </EntireContainer>
    </>
  );
}
