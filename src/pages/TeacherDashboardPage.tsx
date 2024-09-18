import { ReactElement } from "react";
import CourseSmallCard from "../components/CourseSmallCard";
import { BasicCourseInfo } from "../interfaces";

export function TeacherDashboardPage(): ReactElement {
  
  const data: BasicCourseInfo = {
    id: 1,
    name: "C# LTU",
    primary_teacher: "Linus Torvalds",
    startdate: "2024-05-17",
  };

  return (
    <div className="teacher-dashboard-main">
      <h1 className="teacher-header">Teacher Dashboard</h1>
      <div className="teacher-dashboard-course-window">
        <CourseSmallCard data={data} />
      </div>
    </div>
  );
}
