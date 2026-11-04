import styled from "styled-components";

export const PopExit = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const PopExitContainer = styled.div`
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

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.cardBg};
  max-width: 370px;
  width: 100%;
  padding: 50px 28.5px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  transition: background-color 0.3s ease;
`;

export const PopExitTtl = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

export const ExitYesButton = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s;
  flex-shrink: 0;

  &:hover {
    background-color: #33399b;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const ExitNoButton = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid
    ${({ theme }) => (theme.colors.text === "#FFFFFF" ? "#ffffff" : "#565eef")};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  cursor: pointer;
  transition: 0.3s;
  flex-shrink: 0;

  a {
    width: 100%;
    height: 100%;
    color: ${({ theme }) =>
      theme.colors.text === "#FFFFFF" ? "#ffffff" : "#565eef"};
    display: flex;
    align-items: center;
    justify-content: center;
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

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`;
