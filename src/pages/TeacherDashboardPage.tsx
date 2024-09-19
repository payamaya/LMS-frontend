import { ReactElement } from "react";
import { BasicCourseInfo } from "../interfaces";
import { CourseDetailsCard } from "../components/CourseDetailsCard";
import CourseItem from "../components/CourseItem";

export function TeacherDashboardPage(): ReactElement {
  
  const data: BasicCourseInfo = {
    id: 1,
    name: "C# LTU",
    primary_teacher: "Linus Torvalds",
    startdate: "2024-05-17",
  };

  return (
    <div className="teacher-dashboard-container g-container">
      <h1 className="g-page-header">Teacher Dashboard</h1>
      <div className="g-page-card-container">
        <div className="g-card">
          <h2 className="g-card-header">Courses</h2>
          <ul className="g-list">
            <CourseItem data={data} />
          </ul>
        </div>
        <div className="g-card">
          <CourseDetailsCard />
        </div>
      </div>
    </div>
  );
}