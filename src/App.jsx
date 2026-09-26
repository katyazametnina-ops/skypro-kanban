import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import { Wrapper } from "./App.styled.js";

function App() {
  return (
    <>
      {
        <Wrapper>
          <PopExit />
          <PopNewCard />
          <PopBrowse />
          <Header />
          <Main />
        </Wrapper>
      }
    </>
  );
}

export default App;
