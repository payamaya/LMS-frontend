import { ReactElement, useEffect, useState } from "react";
import { IBasicCourseInfo, IDetailedCourse } from "../interfaces";
import { CourseDetailsCard } from "../components/CourseDetailsCard";
import data from "../courses-mock.json";
import detailedData from "../courses-courseid-mock.json";
import CourseItem from "../components/CourseItem";

export function TeacherDashboardPage(): ReactElement {
	const [activeCourse, setActiveCourse] = useState<IBasicCourseInfo | null>(null);
	const [detailedCourse, setDetailedCourse] = useState<IDetailedCourse>();

	useEffect(() => {
		setDetailedCourse(detailedData.find((detailedCourse) => detailedCourse.courseId == activeCourse?.courseId));
	}, [activeCourse]);

	const toggleActiveCourse = (id: number): void => {
		const selectedCourse = data.find((course) => course.courseId === id);
		if (selectedCourse) setActiveCourse(selectedCourse);
	};

	return (
		<div className="teacher-dashboard-container g-container">
			<h1 className="g-page-header">Teacher Dashboard</h1>
			<div className="g-page-card-container">
				<div className="g-card">
					<h2 className="g-card-header">Courses</h2>
					<ul className="g-list">
						{data.map((item) => (
							<CourseItem
								key={item.courseId}
								data={item}
								toggleActiveCourse={toggleActiveCourse}
								isActive={activeCourse?.courseId === item.courseId}
							/>
						))}
					</ul>
				</div>
				<CourseDetailsCard data={detailedCourse} />
			</div>
		</div>
	);
}
