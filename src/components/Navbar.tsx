import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Navbar(): ReactElement {
	return (
		<header className="navbar">
			<div className="navbar-container">
				<Link to="/" className="link-home">avatarbild</Link>
				<nav className="navbar-links">
					<Link to="/student" className="link-student-dashboard">Student Dashboard</Link>
					<Link to="/teacher" className="link-teacher-dashboard">Teacher Dashboard</Link>
					<Link to="/course/1" className="link-course-details">Course Details 1</Link>
				</nav>
				<button type="button" onClick={() => (console.log("logout clicked"))} className="button-logout">Logout</button>
			</div>
		</header>
	);
}
