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
const PuzzleResults = lazy(() => import("../pages/PuzzleResults"));
const Quizzes = lazy(() => import("../pages/Quizzes"));
const Quiz = lazy(() => import("../pages/Quiz"));
const QuizResults = lazy(() => import("../pages/QuizResults"));

const TestPage = lazy(() => import("../pages/TestPage"));

const DictioanryRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader type="standart" />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-info" element={<UserInfo />} />
            <Route path="/word/:word/" element={<WordDetails />} />
            <Route path="/word-puzzle" element={<WordPuzzle />} />
            <Route path="/puzzle-results" element={<PuzzleResults />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/quizzes/:quizID" element={<Quiz />} />
            <Route path="/quiz-results" element={<QuizResults />} />
          </Route>
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};
export default DictioanryRoutes;
