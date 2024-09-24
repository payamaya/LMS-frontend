import { ReactElement } from "react";
import { CourseDetailsCard } from "../components/CourseDetailsCard";
import CourseListCard from "../components/CourseListCard";

export function TeacherDashboardPage(): ReactElement {
	return (
		<div className="teacher-dashboard-container g-container">
			<h1 className="g-page-header">Teacher Dashboard</h1>
			<div className="g-page-card-container">
				<CourseListCard />
				<CourseDetailsCard />
			</div>
		</div>
	);
}
