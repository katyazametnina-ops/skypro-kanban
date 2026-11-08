import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
  }

  /* Категории */
  ._orange,
  ._orange p {
    background-color: ${({ theme }) => theme.colors.topicWebDesign.bg} !important;
    color: ${({ theme }) => theme.colors.topicWebDesign.text} !important;
  }

  ._green,
  ._green p {
    background-color: ${({ theme }) => theme.colors.topicResearch.bg} !important;
    color: ${({ theme }) => theme.colors.topicResearch.text} !important;
  }

  ._purple,
  ._purple p {
    background-color: ${({ theme }) => theme.colors.topicCopywriting.bg} !important;
    color: ${({ theme }) => theme.colors.topicCopywriting.text} !important;
  }

  /* Активный статус (серая плашка) */
  ._gray {
    background-color: #94a6be !important;
    color: ${({ theme }) => (theme.colors.text === "#FFFFFF" ? "#151419" : "#ffffff")} !important;
  }
`;
