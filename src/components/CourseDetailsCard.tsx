import { ReactElement } from "react";
import { CourseDetailsModuleDropdown } from "./CourseDetailsModuleDropdown";
import { CourseDetailsStudentsDropdown } from "./CourseDetailsStudentsDropdown";

export function CourseDetailsCard(): ReactElement {
	return (
		<div className="course-details-card">
			<h2>Introduction to React</h2>
			<p>15 students enrolled</p>
			<CourseDetailsStudentsDropdown />
			<CourseDetailsModuleDropdown />
			<CourseDetailsModuleDropdown />
			<div className="course-details-card-buttons">
				<button className="edit-button">Edit</button>
			</div>
		</div>
	);
}