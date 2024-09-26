import { FormEventHandler, ReactElement, useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authProvider";
import { jwtDecode } from "jwt-decode";

export function LoginPage(): ReactElement {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { isLoggedIn, login} = useContext(AuthContext);
	const navigate = useNavigate();

	if (isLoggedIn) {
		const token = localStorage.getItem('tokens');
		if (token) {
			const decodedToken = jwtDecode(token);
			console.log(decodedToken);
			console.log(decodedToken.aud);
			console.log(decodedToken.exp);
			console.log(decodedToken.iat?.toString());
			console.log(decodedToken.iss);
			console.log(decodedToken.jti);
			console.log(decodedToken.nbf);
			console.log(decodedToken.sub);
			// const userRole = decodedToken.;
	   
	   
		// 	if (userRole === 'Admin') {
		// 	  navigate('/admin-dashboard');
		// 	} else if (userRole === 'User') {
		// 	  navigate('/user-dashboard');
		// 	} else {
		// 	  navigate('/login');
		// 	}
		//   } else {
		// 	navigate('/login'); 

		  }
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
