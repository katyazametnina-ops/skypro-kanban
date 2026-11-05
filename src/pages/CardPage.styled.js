import styled from "styled-components";

export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.text};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  position: relative;
  transition: background-color 0.3s ease;

  word-break: break-word;
  overflow-wrap: break-word;
`;

export const PopBrowseTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;

  word-break: break-word;
  overflow-wrap: break-word;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: none;

  word-break: break-word;
  overflow-y: auto;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: ${({ $active, theme }) =>
    $active
      ? theme.colors.text === "#FFFFFF"
        ? "#151419"
        : "#ffffff"
      : theme.colors.gray};
  background-color: ${({ $active }) => ($active ? "#94a6be" : "transparent")};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: ${({ $isEditing }) => ($isEditing ? "pointer" : "default")};
  display: ${({ $hide }) => ($hide ? "none" : "inline-block")};

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const BtnBorder = styled.button`
  border-radius: 4px;
  border: 0.7px solid
    ${({ theme }) => (theme.colors.text === "#FFFFFF" ? "#ffffff" : "#565eef")};
  outline: none;
  background: transparent;
  height: 30px;
  padding: 0 14px;
  margin-right: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s;

  a {
    color: ${({ theme }) =>
      theme.colors.text === "#FFFFFF" ? "#ffffff" : "#565eef"};
    text-decoration: none;
    transition: 0.3s;
  }

  &:hover {
    background-color: #33399b;
    border-color: #33399b;

    a {
      color: #ffffff;
    }
  }
`;

export const BtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  height: 30px;
  padding: 0 14px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s;

  a {
    color: #ffffff;
    text-decoration: none;
  }

  &:hover {
    background-color: #33399b;
  }
`;
