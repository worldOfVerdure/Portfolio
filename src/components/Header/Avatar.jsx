import avatarImages from "./helpers/images.js";
import { styled } from "styled-components";

export default function Avatar() {
  return (
    <AvatarImg
      alt="Portrait of the website author."
      sizes="
        (max-width: 320px) 200px,
        600px
      "
      src={avatarImages[3]}
      srcSet={`
        ${avatarImages[0]} 200w,
        ${avatarImages[1]} 400w,
        ${avatarImages[2]} 600w,
        ${avatarImages[3]} 800w,
        ${avatarImages[4]} 1000w,
        ${avatarImages[5]} 1400w,
      `}
    />
  );
}

const AvatarImg = styled.img`
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  width: 25rem;
`;
