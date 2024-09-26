import { FormEventHandler, ReactElement, useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authProvider";

export function LoginPage(): ReactElement {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { isLoggedIn, login } = useContext(AuthContext);
	const navigate = useNavigate();

	if (isLoggedIn) {
		return <Navigate to="/teacher" replace />;
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		await login(username, password);
		navigate("/student");
	};

	return (
		<div className="login-page-container">
			<div className="login-page">
				<div className="login-page-title">Login</div>
				<form className="login-page-form" onSubmit={handleSubmit}>
					<input type="text" className="login-page-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
					<input type="password" className="login-page-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
