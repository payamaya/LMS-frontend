import { ReactElement} from "react";
import { CourseDetailsCard } from "../components/CourseDetailsCard";
import CourseDropDownCard from "../components/CourseDropDownCard";

export function TeacherDashboardPage(): ReactElement {

	return (
		<div className="teacher-dashboard-container g-container">
			<h1 className="g-page-header">Teacher Dashboard</h1>
			<div className="g-page-card-container">
				<CourseDropDownCard  />
				<CourseDetailsCard />
			</div>
		</div>
	);
}
