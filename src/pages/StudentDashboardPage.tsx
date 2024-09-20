import { ReactElement } from "react";
import { CourseDetailsStudentsDropdown } from "../components/CourseDetailsStudentsDropdown";
import { useOutletContext } from "react-router-dom";
import { MockContext } from "../interfaces";

export function StudentDashboardPage(): ReactElement {
	// import context
	const { data, isLoading } = useOutletContext<MockContext>();

	const getModuleStateLabel = (state: string): string => {
		switch (state) {
			case "completed":
				return "Completed";
			case "in-progress":
				return "In Progress";
			case "not-started":
				return "Not Started";
			default:
				return "";
		}
	};

	// AI Helper function to calculate the time duration
	const calculateDuration = (startTime: string, endTime: string): string => {
		const start = new Date(startTime);
		const end = new Date(endTime);
		const diffInMs = end.getTime() - start.getTime(); // Difference in milliseconds

		const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
		const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

		if (diffInHours >= 24) {
			const days = Math.floor(diffInHours / 24);
			const hours = diffInHours % 24;
			if (hours === 0) {
				return `${days}d`;
			} else {
				return `${days}d ${hours}h`;
			}
		}

		if (diffInMinutes === 0) {
			return `${diffInHours}h`; // Show only hours if minutes are zero
		}
		return `${diffInHours}h ${diffInMinutes}m`;
	};

	return (
		<div className="g-container">
			<h1 className="g-page-header">Student Dashboard</h1>
			<div className="g-page-card-container">
				<div className="g-card">
					<h2 className="g-card-header">{data.course.courseName}</h2>
					<p className="g-text-subheading">Your current course</p>
					<h3 className="g-list-item-header">Participants</h3>
					<p className="n-students g-list-item-text">{data.course.users.length} students enrolled</p>
					<CourseDetailsStudentsDropdown />
					<h3 className="g-list-item-header">Modules</h3>
					<ul className="g-list">
						{data.course.modules.map((module) => (
							<li key={module.moduleId} className="course-modules-list-item">
								<span className="g-text">{module.moduleName}</span>
								<span className={`g-text ${module.state}`}>
									{getModuleStateLabel(module.state)}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div className="g-card">
					<h2 className="g-card-header">Activity Schedule</h2>
					<p className="g-text-subheading">Your upcoming activities</p>
					<div className="scrollable-content">
						<ul className="g-list">
							{data.course.modules.map((module) =>
								module.activities.map((activity) => (
									<li key={activity.activityId} className="g-list-item">
										<h3 className="g-list-item-header">{activity.activityName}</h3>
										<p className="g-list-item-text">
											{new Date(activity.startTime).toLocaleString()}
										</p>
										<p className="g-list-item-text">
											Duration: {calculateDuration(activity.startTime, activity.endTime)}
										</p>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
