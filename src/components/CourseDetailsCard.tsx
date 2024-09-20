import { ReactElement } from "react";
import { CourseDetailsModuleDropdown } from "./CourseDetailsModuleDropdown";
import { CourseDetailsStudentsDropdown } from "./CourseDetailsStudentsDropdown";
import { IDetailedCourse, IModule, IUser } from "../interfaces";

interface ICourseDetailsCardProps {
	data: IDetailedCourse | undefined;
};

export function CourseDetailsCard({ data }: ICourseDetailsCardProps): ReactElement {

	const studentCount: number | undefined = data?.users.length;
	const students: IUser[] | undefined = data?.users;
	const modules: IModule[] | undefined = data?.modules;

	if (data == null) {
		return <div className="g-card">
			<h2 className="g-card-header">Course Details</h2>
			<p className="g-text">Select a course to view details</p>
		</div>;
	}

	return (
		<div className="g-card">
			<h2 className="g-card-header">Course Details</h2>
			<h3 className="g-list-item-header">{data?.courseName}</h3>
			<p className="n-students g-list-item-text">Number of students: {studentCount}</p>
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
