import { ReactElement, useState } from "react";

export function CourseDetailsStudentsDropdown(): ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="course-details-students-dropdown">
			<button className="course-details-students-dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? "Hide Students" : "View Students"}
			</button>
			{
				isOpen && (
					<ul className="course-details-students-list">
						<li className="course-details-student-item">Adam</li>
						<li className="course-details-student-item">Eva</li>
					</ul>
				)
			}
		</div>
	);
}