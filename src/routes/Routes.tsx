import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Loader from "../components/UI/Loader";
import PrivateRoutes from "./PrivateRoutes";

const LogIn = lazy(() => import("../pages/LogIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const UserInfo = lazy(() => import("../pages/UserInfo"));
const WordDetails = lazy(() => import("../pages/WordDetails"));
const WordPuzzle = lazy(() => import("../pages/WordPuzzle"));
const Quizzes = lazy(() => import("../pages/Quizzes"));
const Quiz = lazy(() => import("../pages/Quiz"));
const PasswordReset = lazy(() => import("../pages/PasswordReset"));
const Vocabulary = lazy(() => import("../pages/Vocabulary"));
const Remind = lazy(() => import("../pages/Remind"));
const SearchResults = lazy(() => import("../pages/SearchResults"));

const DictioanryRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader type="standart" />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-info" element={<UserInfo />} />
            <Route path="/word/:word/" element={<WordDetails />} />
            <Route path="/word-puzzle" element={<WordPuzzle />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/quizzes/:quizID" element={<Quiz />} />
            <Route path="/vocabulary-list" element={<Vocabulary />} />
            <Route path="/remind" element={<Remind />} />
            <Route
              path="/search-results/:request"
              element={<SearchResults />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};
export default DictioanryRoutes;
