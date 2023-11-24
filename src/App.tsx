import { BrowserRouter } from "react-router-dom";
import DictioanryRoutes from "./routes/Routes";
import PageWrapper from "./components/PageWrapper";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PageWrapper>
        <DictioanryRoutes />
      </PageWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
