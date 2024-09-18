import { ReactElement } from "react";
import { CourseDetailsCard } from "../components/CourseDetailsCard";

export function CourseDetailsPage(): ReactElement {
	return (
		<div className="course-details-container">
			<h1>Details Dashboard</h1>
			<div className="course-details-cards">
				<CourseDetailsCard />
			</div>
		</div>
	);
}
