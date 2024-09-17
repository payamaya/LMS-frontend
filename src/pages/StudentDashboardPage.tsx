import { ReactElement } from "react";

export function StudentDashboardPage(): ReactElement {
	return (
		<>
			<h1 className="student-dashboard-heading">Student Dashboard</h1>
			<div className="student-dashboard-container">

				<div className="student-dashboard-card">
					<h2 className="student-dashboard-course-heading">Introduction to React</h2>
					<p>Your current course</p>
					<h3>Participants</h3>
					<ul className="student-dashboard-course-participants">
						<li className="student-dashboard-course-participant">Adam</li>
						<li className="student-dashboard-course-participant">Eva</li>
					</ul>
					<h3>Modules</h3>
					<ul className="student-dashboard-course-modules">
						<li>
							<span className="student-dashboard-course-module-name">React Basics</span>
							<span className="student-dashboard-course-module-state completed">Completed</span>
						</li>
						<li>
							<span className="student-dashboard-course-module-name">State and Props</span>
							<span className="student-dashboard-course-module-state in-progress">In Progress</span>
						</li>
						<li>
							<span className="student-dashboard-course-module-name">Hooks</span>
							<span className="student-dashboard-course-module-state not-started">Not Started</span>
						</li>
					</ul>
				</div>

				<div className="student-dashboard-card">
					<h2 className="student-dashboard-activites-header">Activity Schedule</h2>
					<p>Your upcoming activities</p>
					<div className="student-dashboard-scrollable-content">
						<ul className="student-dashboard-activity-list">
							<li className="student-dashboard-activity">
								<h3 className="student-dashboard-activities-title">Watch React Fundamentals Video</h3>
								<p className="student-dashboard-activities-datetime">2023-06-15 at 10:00</p>
								<p className="student-dashboard-activities-duration">Duration: 1 hour</p>
							</li>
							<li className="student-dashboard-activity">
								<h3 className="student-dashboard-activities-title">Complete React Quiz</h3>
								<p className="student-dashboard-activities-datetime">2023-06-15 at 14:00</p>
								<p className="student-dashboard-activities-duration">Duration: 30 minutes</p>
							</li>
							<li className="student-dashboard-activity">
								<h3 className="student-dashboard-activities-title">Build a Simple React App</h3>
								<p className="student-dashboard-activities-datetime">2023-06-16 at 11:00</p>
								<p className="student-dashboard-activities-duration">Duration: 2 hours</p>
							</li>
							<li className="student-dashboard-activity">
								<h3 className="student-dashboard-activities-title">Peer Review Session</h3>
								<p className="student-dashboard-activities-datetime">2023-06-17 at 15:00</p>
								<p className="student-dashboard-activities-duration">Duration: 1 hour</p>
							</li>
							<li className="student-dashboard-activity">
								<h3 className="student-dashboard-activities-title">React Hooks Workshop</h3>
								<p className="student-dashboard-activities-datetime">2023-06-18 at 09:00</p>
								<p className="student-dashboard-activities-duration">Duration: 3 hours</p>
							</li>
						</ul>
					</div>
				</div>
			</div >
		</>
	);
}
