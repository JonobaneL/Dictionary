import { Navigate, Outlet } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";
import Loader from "../components/UI/Loader";

const PrivateRoutes = () => {
  const { user, isLoading } = useTypeSelector((state) => state.userReducer);

  if (isLoading === false)
    return user.uid ? <Outlet /> : <Navigate to="/log-in" />;

  return <Loader type="standart" />;
};

export default PrivateRoutes;
