import { ReactElement } from "react";
import { BasicCourseInfo } from "../interfaces";

interface ICourseItem {
    data: BasicCourseInfo;
    toggleActiveCourse: (id: number) => void;
    isActive: boolean;
}

export default function CourseItem({ data, toggleActiveCourse, isActive }: ICourseItem): ReactElement {
    return (
        <li className={`g-list-item g-border-style ${isActive ? "g-active" : ""}`} onClick={() => toggleActiveCourse(data.id)}>
            <h3 className="g-list-item-header">{data.name}</h3>
            <div className="g-list-item-text">
                {data.startdate} - {data.startdate}
            </div>
            <div className="g-list-item-text">Teacher: {data.primary_teacher}</div>
        </li>
    );
}
