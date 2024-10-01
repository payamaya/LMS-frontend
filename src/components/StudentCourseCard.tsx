import { ReactElement, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { IContext } from "../utils/interfaces";
import { CourseDetailsStudentsDropdown } from "../components/CourseDetailsStudentsDropdown";

export function StudentCourseCard(): ReactElement {
	const {fetchCourseForStudent, detailedCourse} = useOutletContext<IContext>();

	// helper function: get state text from state
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

	useEffect(() => {
		fetchCourseForStudent();
	},[])

	return (
		<div className="g-card">
			<h2 className="g-card-header">{detailedCourse?.courseName}</h2>
			<p className="g-text-subheading">{detailedCourse?.description}</p>
			<h3 className="g-list-item-header">Participants</h3>
			<p className="n-students g-list-item-text">{detailedCourse?.students.length} students enrolled</p>
			<CourseDetailsStudentsDropdown students={detailedCourse?.students} />
			<h3 className="g-list-item-header">Modules</h3>
			<ul className="g-list">
				{detailedCourse?.modules.map((module) => (
					<li key={module.id} className="course-modules-list-item">
						<span className="g-text">{module.moduleName}</span>
						<span className={`g-text ${module.state}`}>{getModuleStateLabel(module.state)}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
