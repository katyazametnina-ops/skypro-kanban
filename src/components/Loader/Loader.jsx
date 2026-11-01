import { LoaderWrapper, Spinner, LoaderText } from "./Loader.styled.js";

export default function Loader() {
  return (
    <LoaderWrapper>
      <Spinner />
      <LoaderText>Данные загружаются...</LoaderText>
    </LoaderWrapper>
  );
}
