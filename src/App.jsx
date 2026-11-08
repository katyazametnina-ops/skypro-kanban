import { Wrapper } from "./App.styled.js";
import AppRoutes from "./components/AppRoutes/AppRoutes.jsx";
import { TaskProvider } from "./context/TaskProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <Wrapper>
        <AppRoutes />
        <ToastContainer position="top-center" autoClose={3000} />
      </Wrapper>
    </TaskProvider>
  );
}

export default App;
