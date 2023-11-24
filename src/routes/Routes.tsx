import { Route, Routes } from "react-router-dom";
import LogIn from "../pages/LogIn";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const DictioanryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
export default DictioanryRoutes;
