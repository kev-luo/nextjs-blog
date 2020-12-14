import React from "react";

import { StyledLayout, StyledHeader, HeaderHomeImg } from "../styles/Styled";

export default function Layout({ children }) {
  return (
    <StyledLayout>
      {children}
      <StyledHeader>
        <HeaderHomeImg src="/images/profile.jpg" alt="kevin" />
        <h1>Kevin</h1>
      </StyledHeader>
    </StyledLayout>
  );
}
