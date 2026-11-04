import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 200px;
  gap: 16px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #94a6be;
  border-top-color: #565eef;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoaderText = styled.p`
  color: #94a6be;
  font-size: 14px;
`;
