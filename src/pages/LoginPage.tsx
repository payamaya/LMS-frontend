import { ReactElement, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export function LoginPage(): ReactElement {
	const [loginDetails, setLoginDetails] = useState({
		username: "",
		password: "",
	});
	const { isLoggedIn, login } = useAuthContext();
	const navigate = useNavigate();
  
	if (isLoggedIn) {
	  return <Navigate to="/" replace />;
	}

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log(loginDetails);
	};

	return (
		<div className="login-page-container">
			<div className="login-page">
				<div className="login-page-title">Login</div>
				<form className="login-page-form">
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
					<button type="submit" className="login-page-button" onClick={handleSubmit}>
						Submit
					</button>
				</form>
			</div>
			<Link to="/student">To Student Dashboard</Link>
			<Link to="/teacher">To Teacher Dashboard</Link>
		</div>
	);
}
