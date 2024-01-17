import "./App.css";
import TotalBalance from "./components/totalBalance/TotalBalance";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <TotalBalance />
    </ContextProvider>
  );
}

export default App;
