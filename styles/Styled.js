import styled from "styled-components";

import { heading2Xl, borderCircle, headingLg, colorInherit, headingMd } from "./StyledUtils";

// Home page
export const StyledSection = styled.section`
  ${headingMd}
`

// layout component
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
`

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
