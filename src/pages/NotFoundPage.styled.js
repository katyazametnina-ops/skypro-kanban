import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorCode = styled.p`
  font-size: 64px;
  font-weight: 700;
  color: #565eef;
  text-align: center;
  margin-bottom: 10px;
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  background-color: #565eef;
  color: #ffffff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #33399b;
  }
`;
