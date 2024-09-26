import { FormEventHandler, ReactElement, useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authProvider";

export function LoginPage(): ReactElement {
	const [loginDetails, setLoginDetails] = useState({
		username: "",
		password: "",
	});
	const { isLoggedIn, login } = useContext(AuthContext);
	const navigate = useNavigate();
  
	if (isLoggedIn) {
	  return <Navigate to="/student" replace />;
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
	
		await login(loginDetails.username, loginDetails.password);
		navigate("/student");
	  };

	return (
		<div className="login-page-container">
			<div className="login-page">
				<div className="login-page-title">Login</div>
				<form className="login-page-form" onSubmit={handleSubmit}>
					<input type="text" className="login-page-input" placeholder="Username" value={loginDetails.username} onChange={(e) => setLoginDetails({ ...loginDetails, username: e.target.value })} />
					<input
						type="password"
						className="login-page-input"
						placeholder="Password"
						value={loginDetails.password}
						onChange={(e) =>
							setLoginDetails({
								...loginDetails,
								password: e.target.value,
							})
						}
					/>
					<button type="submit" className="login-page-button">
						Submit
					</button>
				</form>
			</div>
			<Link to="/student">To Student Dashboard</Link>
			<Link to="/teacher">To Teacher Dashboard</Link>
		</div>
	);
}
