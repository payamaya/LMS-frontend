import { ReactElement } from "react";

export function StudentDashboardPage(): ReactElement {
	return (
		<div className="student-dashboard-container">
			<h1 className="student-dashboard-heading">Student Dashboard</h1>
			<div className="student-dashboard-course-card">
				<h2 className="student-dashboard-course-heading">Introduction to React</h2>
				<p>Your current course</p>
				<h3>Participants</h3>
				<ul className="student-dashboard-course-participants">
					<li>Adam</li>
					<li>Eva</li>
				</ul>
				<h3>Modules</h3>
				<ul className="student-dashboard-course-modules">
					<li>
						<span className="student-dashboard-course-module">React Basics</span>
						<span className="student-dashboard-course-module-state">Completed</span>
					</li>
					<li>
						<span className="student-dashboard-course-module">State and Props</span>
						<span className="student-dashboard-course-module-state">In Progress</span>
					</li>
					<li>
						<span className="student-dashboard-course-module">Hooks</span>
						<span className="student-dashboard-course-module-state">Not Started</span>
					</li>
				</ul>
			</div>
			<div className="student-dashboard-activities-card"></div>
		</div >
	);
}
