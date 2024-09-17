import { ReactElement, useState } from "react";

export function Login(): ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    </div>
  );
}
