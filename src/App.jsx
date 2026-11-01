import { Wrapper } from "./App.styled.js";
import AppRoutes from "./components/AppRoutes/AppRoutes.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { TaskProvider } from "./context/TaskProvider.jsx";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Wrapper>
          <AppRoutes />
        </Wrapper>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
