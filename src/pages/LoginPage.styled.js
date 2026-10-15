import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #151419;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 368px;
  background-color: #20202c;
  border-radius: 10px;
  padding: 50px;
  border: 0.7px solid #4e5566;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px 10px;
  margin-bottom: 7px;
  background-color: #20202c;
  border: 0.7px solid #94a6be66;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #94a6be;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #20202c inset;
    -webkit-text-fill-color: #ffffff;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 20px;
`;

export const FooterText = styled.p`
  text-align: center;
  color: #94a6be66;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;

export const StyledLink = styled.span`
  color: #94a6be66;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const ErrorText = styled.p`
  color: #ff6b6b;
  font-size: 13px;
  text-align: center;
  margin-bottom: 10px;
`;
