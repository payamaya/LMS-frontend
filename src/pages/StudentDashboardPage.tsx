import { ReactElement } from "react";
import { StudentCourseCard } from "../components/StudentCourseCard";
import { StudentActivityScheduleCard } from "../components/StudentActivityScheduleCard";

export function StudentDashboardPage(): ReactElement {
	return (
		<div className="g-container">
			<h1 className="g-page-header">Student Dashboard</h1>
			<div className="g-page-card-container">
				<StudentCourseCard />
				<StudentActivityScheduleCard />
			</div>
		</div>
	);
}
