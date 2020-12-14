import styled from "styled-components";

import {
  heading2Xl,
  borderCircle,
  headingLg,
  colorInherit,
  headingMd,
  padding1px,
  list,
  listItem,
} from "./StyledUtils";

// Home page
// ====================================================================
export const HeroSection = styled.section`
  ${headingMd}
`;

export const PostsSection = styled.section`
  ${headingMd}
  ${padding1px}
`;

export const PostsTitle = styled.h2`
  ${headingLg}
`

export const PostsList = styled.ul`
  ${list}
`;

export const PostItem = styled.li`
  ${listItem}
`;

// layout component
// ====================================================================
export const StyledLayout = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeHeader = styled.h1`
  ${heading2Xl}
`;

export const NonHomeHeader = styled.h2`
  ${headingLg}
  a {
    ${colorInherit}
  }
`;

export const HeaderHomeImg = styled.img`
  ${borderCircle}
  width: 8rem;
  height: 8rem;
`;

export const HeaderImg = styled.img`
  ${borderCircle}
  width: 6rem;
  height: 6rem;
`;

export const Back = styled.div`
  margin: 3rem 0 0;
`;
