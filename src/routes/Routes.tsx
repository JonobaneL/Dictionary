import { Route, Routes } from "react-router-dom";
import LogIn from "../pages/LogIn/LogIn";

const DictioanryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/log-in" element={<LogIn />} />
    </Routes>
  );
};
export default DictioanryRoutes;
