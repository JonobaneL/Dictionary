import { Navigate, Outlet } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";

const PrivateRoutes = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  console.log(user);
  return user.uid ? <Outlet /> : <Navigate to="/log-in" />;
};

export default PrivateRoutes;
