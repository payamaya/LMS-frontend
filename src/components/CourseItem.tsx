import { ReactElement } from "react";
import { IBasicCourseInfo } from "../interfaces";

interface ICourseItem {
	data: IBasicCourseInfo;
	toggleActiveCourse: (id: number) => void;
	isActive: boolean;
}

export default function CourseItem({ data, toggleActiveCourse, isActive }: ICourseItem): ReactElement {
	return (
		<li className={`g-list-item g-border-style ${isActive ? "g-active" : ""}`} onClick={() => toggleActiveCourse(data.courseId)}>
			<h3 className="g-list-item-header">{data.courseName}</h3>
			<div className="g-list-item-text">
				{data.startDate} - {data.startDate}
			</div>
			<div className="g-list-item-text">Teacher: {data.teacher}</div>
		</li>
	);
}
