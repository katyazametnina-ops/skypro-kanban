import {
  PageWrapper,
  AuthCard,
  Title,
  FooterText,
} from "./LoginPage.styled.js";
import { ErrorCode, HomeLink } from "./NotFoundPage.styled.js";

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <AuthCard>
        <ErrorCode>404</ErrorCode>
        <Title>Страница не найдена</Title>
        <FooterText>
          Такой страницы не существует
          <br />
          или она была удалена
        </FooterText>
        <HomeLink to="/">Вернуться на главную</HomeLink>
      </AuthCard>
    </PageWrapper>
  );
}
