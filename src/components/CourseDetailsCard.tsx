import { ReactElement } from "react";
import { CourseDetailsModuleDropdown } from "./CourseDetailsModuleDropdown";
import { CourseDetailsStudentsDropdown } from "./CourseDetailsStudentsDropdown";
import { IContext, IModule, IUser } from "../utils/interfaces";
import { useOutletContext } from "react-router-dom";

export function CourseDetailsCard(): ReactElement {
	const { detailedCourse }: IContext = useOutletContext<IContext>();

	const studentCount: number | undefined = detailedCourse?.students.length;

	const students: IUser[] | undefined = detailedCourse?.students;
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
			{modules?.map((module) => (
				<CourseDetailsModuleDropdown key={module.id} module={module} />
			))}
			<button className="edit-button">
				<span className="material-symbols-outlined">edit_square</span>
				<p>Edit Course</p>
			</button>
		</div>
	);
}
