import { ReactElement } from "react";
import { IBasicCourseInfo } from "../interfaces";

interface ICourseItem {
	data: IBasicCourseInfo;
	toggleActiveCourse: (id: string) => void;
	isActive: boolean;
}

export default function CourseItem({ data, toggleActiveCourse, isActive }: ICourseItem): ReactElement {
	return (
		<li className={`g-list-item g-border-style ${isActive ? "g-active" : ""}`} onClick={() => toggleActiveCourse(data.id)}>
			<h3 className="g-list-item-header">{data.courseName}</h3>
			<div className="g-list-item-text">
				{new Date(data.startDate).toLocaleDateString()} - {new Date(data.startDate).toLocaleDateString()}
			</div>
			<div className="g-list-item-text">Teacher: {data.teacher.name}</div>
		</li>
	);
}
