import { FormEventHandler, ReactElement, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authProvider";
import { jwtDecode } from "jwt-decode";

export function LoginPage(): ReactElement {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { isLoggedIn, login } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoggedIn) {
			const token = localStorage.getItem("tokens");
			if (token) {
				const decodedToken: any = jwtDecode(token);
				const userRole: string = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

				navigate(`/${userRole.toLowerCase()}`);

			} else {
				navigate("/");
			}
		}
	}, [isLoggedIn, navigate]);

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		await login(username, password);
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
