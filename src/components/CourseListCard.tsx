import { useOutletContext } from "react-router-dom";
import { IBasicCourseInfo, IContext } from "../utils/interfaces";
import CourseItem from "./CourseItem";
import { useEffect } from "react";

export default function CourseListCard() {
	const { teacherBasicData, toggleActiveCourse, activeCourse, fetchCourses, isLoading }: IContext = useOutletContext<IContext>();

	useEffect(() => {
		fetchCourses();
	}, []);

	return (
		<div className="g-card">
			<h2 className="g-card-header">Courses</h2>
			{isLoading ? (<p>Loading courses...</p>) : teacherBasicData && teacherBasicData.length > 0 ? (
				<ul className="g-list">
					{teacherBasicData.map((item: IBasicCourseInfo) => (
						<CourseItem
							key={item.id}
							data={item}
							toggleActiveCourse={toggleActiveCourse}
							isActive={activeCourse?.id === item.id}
						/>
					))}
				</ul>
			) : (
				<p>No courses available.</p>
			)}
		</div>
	);
}