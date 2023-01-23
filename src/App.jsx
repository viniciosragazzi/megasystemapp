import AppRoute from "./routes/AppRoute";
import "./styles/global.css";
import ContextProvider from "./context/ContextApp";
function App() {
  return (
    <ContextProvider>
      <AppRoute />;
    </ContextProvider>
  );
}

export default App;
