import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DictioanryRoutes from "./routes/Routes";
import PageWrapper from "./components/PageWrapper";
import { useTypeDispatch } from "./hooks/useTypeReduxHooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { setUser } from "./store/reducers/userSlice";
import Notification from "./components/UI/Notification";

function App() {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(
        setUser({
          isLoading: false,
          error: null,
          email: user?.email || null,
          uid: user?.uid || null,
        })
      );
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
