import { ReactElement } from "react";
import { CourseDetailsModuleDropdown } from "./CourseDetailsModuleDropdown";
import { CourseDetailsStudentsDropdown } from "./CourseDetailsStudentsDropdown";

export function CourseDetailsCard(): ReactElement {
	return (
		<div className="g-card">
			<h2 className="g-card-header">Course Details</h2>
			<h3 className="g-list-item-header">Introduction to React</h3>
			<p className="n-students g-list-item-text">Number of students: 4</p>
			<CourseDetailsStudentsDropdown />
			<h3 className="g-list-item-header">Modules</h3>
			<CourseDetailsModuleDropdown />
			<CourseDetailsModuleDropdown />
			<button className="edit-button">
				<span className="material-symbols-outlined">edit_square</span>
				<p>Edit Course</p>
			</button>
		</div>
	);
}