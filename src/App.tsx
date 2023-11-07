import { BrowserRouter } from "react-router-dom";
import "./App.css";
import DictioanryRoutes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DictioanryRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
