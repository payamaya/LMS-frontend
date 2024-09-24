import { useOutletContext } from "react-router-dom";
import { IBasicCourseInfo, IMockContext } from "../interfaces";
import CourseItem from "./CourseItem";

export default function CourseDropDownCard() {
	const { teacherBasicData, toggleActiveCourse, activeCourse }: IMockContext = useOutletContext<IMockContext>();

	return (
		<div className="g-card">
			<h2 className="g-card-header">Courses</h2>
			<ul className="g-list">
				{teacherBasicData.map((item: IBasicCourseInfo) => (
					<CourseItem key={item.courseId} data={item} toggleActiveCourse={toggleActiveCourse} isActive={activeCourse?.courseId === item.courseId} />
				))}
			</ul>
		</div>
	);
}
