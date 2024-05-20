import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import ForUser from "./templates/ForUser";

function App() {
  return (
    <BrowserRouter>
      <ForUser />
    </BrowserRouter>
  );
}

export default App;
