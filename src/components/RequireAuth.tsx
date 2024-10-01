import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authProvider";

interface IRequireAuthProps {
  children: ReactElement;
}

export function RequireAuth({ children }: IRequireAuthProps): ReactElement {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn === false) {
    return <Navigate to="/" />;
  }

  return children;
}