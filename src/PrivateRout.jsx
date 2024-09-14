import { Navigate } from "react-router-dom";
import { isLogIn } from "./utils";

const PrivateRoute = ({ children }) => {
  return <>{isLogIn() ? children : <Navigate to={"/login"} />}</>;
};

export default PrivateRoute;
