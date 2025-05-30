import { styled } from "styled-components";

export default function SocialMediaAnchor ( {imgAlt, imgSrc, link} ) {
  return (
    <Anchor
      href={link}
      target="_blank"
    >
      <img alt={imgAlt} src={imgSrc} />
    </Anchor>
  );
}

const Anchor = styled.a`
  & img {
    width: 4.8rem;
  }
`;
