import { ReactElement } from "react";
import { CourseDetailsStudentsDropdown } from "../components/CourseDetailsStudentsDropdown";

export function StudentDashboardPage(): ReactElement {
	return (
		<div className="g-container">
			<h1 className="g-page-header">Student Dashboard</h1>
			<div className="g-page-card-container">
				<div className="g-card">
					<h2 className="g-card-header">Introduction to React</h2>
					<p className="g-text-subheading">Your current course</p>
					<h3 className="g-list-item-header">Participants</h3>
					<p className="n-students g-list-item-text">4 students enrolled</p>
					<CourseDetailsStudentsDropdown />
					<h3 className="g-list-item-header">Modules</h3>
					<ul className="g-list">
						<li className="course-modules-list-item">
							<span className="g-text">React Basics</span>
							<span className="g-text completed">Completed</span>
						</li>
						<li className="course-modules-list-item">
							<span className="g-text">State and Props</span>
							<span className="g-text in-progress">In Progress</span>
						</li>
						<li className="course-modules-list-item">
							<span className="g-text">Hooks</span>
							<span className="g-text not-started">Not Started</span>
						</li>
					</ul>
				</div>

				<div className="g-card">
					<h2 className="g-card-header">Activity Schedule</h2>
					<p className="g-text-subheading">Your upcoming activities</p>
					<div className="scrollable-content">
						<ul className="g-list">
							<li className="g-list-item">
								<h3 className="g-list-item-header">Watch React Fundamentals Video</h3>
								<p className="g-list-item-text">2023-06-15 at 10:00</p>
								<p className="g-list-item-text">Duration: 1 hour</p>
							</li>
							<li className="g-list-item">
								<h3 className="g-list-item-header">Complete React Quiz</h3>
								<p className="g-list-item-text">2023-06-15 at 14:00</p>
								<p className="g-list-item-text">Duration: 30 minutes</p>
							</li>
							<li className="g-list-item">
								<h3 className="g-list-item-header">Build a Simple React App</h3>
								<p className="g-list-item-text">2023-06-16 at 11:00</p>
								<p className="g-list-item-text">Duration: 2 hours</p>
							</li>
							<li className="g-list-item">
								<h3 className="g-list-item-header">Peer Review Session</h3>
								<p className="g-list-item-text">2023-06-17 at 15:00</p>
								<p className="g-list-item-text">Duration: 1 hour</p>
							</li>
							<li className="g-list-item">
								<h3 className="g-list-item-header">React Hooks Workshop</h3>
								<p className="g-list-item-text">2023-06-18 at 09:00</p>
								<p className="g-list-item-text">Duration: 3 hours</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
