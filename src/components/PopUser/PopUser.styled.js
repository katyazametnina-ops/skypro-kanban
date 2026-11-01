import styled from "styled-components";

export const PopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background-color: ${({ theme }) => theme.colors.cardBg};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 10px 39px 0px #94a6be66;
  }
`;

export const PopUserName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #565eef;
      transition: 0.5s;
    }

    &:checked::before {
      left: 12px;
    }
  }
`;
export const PopUserButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid
    ${({ theme }) => (theme.colors.text === "#FFFFFF" ? "#ffffff" : "#565eef")};
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
