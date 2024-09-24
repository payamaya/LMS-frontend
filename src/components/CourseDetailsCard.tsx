import { ReactElement } from "react";
import { CourseDetailsModuleDropdown } from "./CourseDetailsModuleDropdown";
import { CourseDetailsStudentsDropdown } from "./CourseDetailsStudentsDropdown";
import { IMockContext, IModule, IUser } from "../interfaces";
import { useOutletContext } from "react-router-dom";

export function CourseDetailsCard(): ReactElement {
	const { detailedCourse }: IMockContext = useOutletContext<IMockContext>();

	const studentCount: number | undefined = detailedCourse?.users.length;
	const students: IUser[] | undefined = detailedCourse?.users;
	const modules: IModule[] | undefined = detailedCourse?.modules;

	if (detailedCourse == null) {
		return (
			<div className="g-card">
				<h2 className="g-card-header">Course Details</h2>
				<p className="g-text">Select a course to view details</p>
			</div>
		);
	}

	return (
		<div className="g-card">
			<h2 className="g-card-header">Course Details</h2>
			<h3 className="g-list-item-header">{detailedCourse?.courseName}</h3>
			<p className="n-students g-list-item-text">Number of students: {studentCount}</p>
			<CourseDetailsStudentsDropdown students={students} />
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
