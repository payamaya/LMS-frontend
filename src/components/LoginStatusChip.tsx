import { ReactElement, useContext } from "react";
import { AuthContext } from "../context/authProvider";

export function LoginStatusChip(): ReactElement {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div id="login-status-chip">
      <p>Logged in: {isLoggedIn.toString()}</p>
      <button disabled={!isLoggedIn} onClick={logout}>
        Log out
      </button>
    </div>
  );
}