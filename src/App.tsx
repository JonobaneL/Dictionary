import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DictioanryRoutes from "./routes/Routes";
import PageWrapper from "./components/PageWrapper";
import { useTypeDispatch } from "./hooks/useTypeReduxHooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { fetchUserInfo } from "./store/reducers/userSlice";
import Notification from "./components/UI/Notification";

function App() {
  const dispatch = useTypeDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(fetchUserInfo(user?.uid || null));
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <PageWrapper>
          <DictioanryRoutes />
        </PageWrapper>
      </BrowserRouter>
      <Notification />
    </div>
  );
}

export default App;
