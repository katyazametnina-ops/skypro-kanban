import styled from "styled-components";

const getTopicColors = (topic, theme) => {
  if (topic === "Web Design") return theme.colors.topicWebDesign;
  if (topic === "Research") return theme.colors.topicResearch;
  if (topic === "Copywriting") return theme.colors.topicCopywriting;
  return { bg: "#ffffff", text: "#000000" };
};

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;

export const CardWrapper = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  transition: background-color 0.3s ease;

  overflow: hidden;
  word-break: break-word;

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: ${({ theme }) => theme.colors.cardBg};
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 30px;
  padding: 0 14px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ $topic, theme }) => getTopicColors($topic, theme).bg};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 1;
    color: ${({ $topic, theme }) => getTopicColors($topic, theme).text};
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  cursor: pointer;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${({ theme }) => theme.colors.gray};
    letter-spacing: 0.2px;
  }
`;
