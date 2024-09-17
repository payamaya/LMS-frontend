import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Navbar(): ReactElement {
	return (
		<header className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-link-home">
					<span className="material-symbols-outlined navbar-avatar">account_circle</span>
				</Link>
				<nav className="navbar-links">
					<Link to="/student" className="navbar-link-student-dashboard">Student Dashboard</Link>
					<Link to="/teacher" className="navbar-link-teacher-dashboard">Teacher Dashboard</Link>
					<Link to="/course/1" className="navbar-link-course-details">Course Details 1</Link>
				</nav>
				<button type="button" onClick={() => (console.log("logout clicked"))} className="navbar-button-logout">Logout</button>
			</div>
		</header>
	);
}
