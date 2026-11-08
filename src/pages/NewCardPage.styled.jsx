import styled from "styled-components";

export const PopNewCard = styled.div`
  width: 100%;
  min-width: 320px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 20px 16px;
  }
`;

export const PopNewCardContainer = styled.div`
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

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.text};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.gray};
  position: relative;

  @media screen and (max-width: 660px) {
    padding: 20px 16px 32px;
  }
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const PopNewCardForm = styled.form`
  width: 100%;
  max-width: 370px; /* Чтобы форма не растягивала календарь */
  display: flex;
  flex-direction: column;
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const SubTitle = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  height: 200px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 21px;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesTitle = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.2s ease;

  &._active-category {
    opacity: 1 !important;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const FormNewSubmit = styled.button`
  width: 132px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;

  display: block;
  margin-left: auto;
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }

  @media screen and (max-width: 660px) {
    width: 100%;
    height: 40px;
    margin-left: 0;
  }
`;
