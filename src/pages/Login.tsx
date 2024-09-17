import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

export function Login(): ReactElement {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
	console.log(loginDetails);
  };

  return (
    <div className="login-page">
      <div className="login-page-title">Login</div>
      <div className="login-page-form">
        <div className="login-page-input-field">
          Username
          <input type="text" className="login-page-input" value={loginDetails.username} onChange={(e) => setLoginDetails({ ...loginDetails, username: e.target.value })} />
        </div>
        <div className="login-page-input-field">
          Password
          <input
            type="password"
            className="login-page-input"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                password: e.target.value,
              })
            }
          />
        </div>
        <button className="login-page-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
		<Link to="/student">To Student Dashboard</Link>
		<Link to="/teacher">To Teacher Dashboard</Link>
    </div>
  );
}
