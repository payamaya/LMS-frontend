import { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authProvider";

export function Navbar(): ReactElement {
	const {logout} = useContext(AuthContext);

	return (
		<header className="navbar">
			<Link to="/" className="navbar-link-home">
				<span className="material-symbols-outlined navbar-avatar">person</span>
			</Link>
			<nav className="navbar-links">
				<Link to="/student" className="navbar-link-student-dashboard">Student Dashboard</Link>
				<Link to="/teacher" className="navbar-link-teacher-dashboard">Teacher Dashboard</Link>
				<Link to="/course/1" className="navbar-link-course-details">Course Details 1</Link>
			</nav>
			<button type="button" onClick={logout} className="navbar-button-logout">Logout</button>
		</header>
	);
}
