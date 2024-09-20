import { ReactElement, useState } from "react";
import { BasicCourseInfo } from "../interfaces";
import { CourseDetailsCard } from "../components/CourseDetailsCard";
import CourseItem from "../components/CourseItem";

export function TeacherDashboardPage(): ReactElement {
    const data: BasicCourseInfo[] =
	[
        {
            id: 2,
            name: "Introduction to c#",
            primary_teacher: "Linus Torvalds",
            startdate: "2024-05-17",
        },
    ];

    const [activeCourse, setActiveCourse] = useState<BasicCourseInfo>(data[0]);

    const toggleActiveCourse = (id: number): void => {
        const selectedCourse = data.find((course) => course.id === id);
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
								key={item.id}
								data={item}
								toggleActiveCourse={toggleActiveCourse}
								isActive={activeCourse.id === item.id} />
                        ))}
                    </ul>
                </div>
                <CourseDetailsCard />
            </div>
        </div>
    );
}
