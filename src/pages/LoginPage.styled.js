import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 368px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 10px;
  padding: 50px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  transition: background-color 0.3s ease;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  margin-bottom: 7px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.cardBg}
      inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const FooterText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;

export const StyledLink = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ErrorText = styled.p`
  color: #ff6b6b;
  font-size: 13px;
  text-align: center;
  margin-bottom: 10px;
`;
