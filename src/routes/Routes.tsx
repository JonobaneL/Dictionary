import { Route, Routes } from "react-router-dom";
import LogIn from "../pages/LogIn/LogIn";
import Home from "../pages/Home/Home";

const DictioanryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log-in" element={<LogIn />} />
    </Routes>
  );
};
export default DictioanryRoutes;
