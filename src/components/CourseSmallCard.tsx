import React, { ReactElement } from "react";
import { BasicCourseInfo } from "../interfaces";

interface ICourseSmallCardProps {
  data: BasicCourseInfo;
}

export default function CourseSmallCard({ data }: ICourseSmallCardProps): ReactElement {
  return (
    <div className="course-small-card-main">
      <div className="course-small-top">
        <div className="course-small-title">{data.name}</div>
        <div className="course-small-date">{data.startdate}</div>
      </div>
      <div className="small-card-teacher">{data.primary_teacher}</div>
    </div>
  );
}
