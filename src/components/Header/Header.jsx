import MEDIA_SIZES from "../../auxiliary/mediaSizes";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  margin-left: 1.5rem;
  padding-left: .8rem;
  width: 100%;

  & pre {
    margin: 0;
  }

  & pre:nth-child(1) {
    font-size: clamp(2.5rem, calc(1.86rem + 2vw), 4rem);
  }

  & pre:nth-child(2) {
    font-size: clamp(3rem, calc(2.36rem + 2vw), 4.5rem);
  }

  @media (${MEDIA_SIZES.tablet} <= width < ${MEDIA_SIZES.laptop}) {
    margin-left: 5rem;
  }

  @media (${MEDIA_SIZES.laptopL} <= width <= ${MEDIA_SIZES.desktop}) {
    margin-left: 3rem;
  }

  @media (width > ${MEDIA_SIZES.desktop}) {
    margin-left: calc(8rem + 2vw);
  }
`;

const h1TitleText =`Portfolio of`;
const h1NameText = `  Andrew Chupka`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>
        <pre>{h1TitleText}</pre>
        <pre>{h1NameText}</pre>
      </h1>
    </StyledHeader>
  );
}
