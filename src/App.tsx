import { BrowserRouter } from "react-router-dom";
import "./App.css";
import DictioanryRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <DictioanryRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
