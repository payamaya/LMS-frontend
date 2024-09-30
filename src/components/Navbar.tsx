import { ReactElement, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authProvider";
import { jwtDecode } from "jwt-decode";

export function Navbar(): ReactElement {
	const { logout } = useContext(AuthContext);
	const [role, setRole] = useState<string>();

	const tempDecodeTokenRole = () => {
		const token: any = localStorage.getItem("tokens");
		const decodedToken: any = jwtDecode(token);
		const userRole: string = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
		setRole(userRole);
	}

	useEffect(() => {
		tempDecodeTokenRole();
	}, []);

	return (
		<header className="navbar">
			<Link to="/" className="navbar-link-home">
				<span className="material-symbols-outlined navbar-avatar">person</span>
			</Link>
			<nav className="navbar-links">
				{role === "Student" && (
					<Link to="/student" >Student Dashboard</Link>
				)}
				{role === "Teacher" && (
					<>
						<Link to="/teacher" >Teacher Dashboard</Link>
						<Link to="/course/1" >Course Details</Link>
					</>
				)}
			</nav>
			<button type="button" onClick={logout} className="navbar-button-logout">Logout</button>
		</header>
	);
}
