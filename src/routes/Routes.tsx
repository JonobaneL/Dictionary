import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Loader from "../components/UI/Loader";

const LogIn = lazy(() => import("../pages/LogIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const TestPage = lazy(() => import("../pages/TestPage"));

const DictioanryRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Suspense>
  );
};
export default DictioanryRoutes;
