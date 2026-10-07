import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
