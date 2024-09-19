import { ReactElement, useState } from "react";

export function CourseDetailsStudentsDropdown(): ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="course-details-students-dropdown">
			<button className="course-details-students-dropdown-button" onClick={() => setIsOpen(!isOpen)}>
				<span className="material-symbols-outlined">keyboard_arrow_down</span>
				<p>View Students</p>
			</button>
			{isOpen && (
				<ul className="g-list">
					<li className="g-text">Adam</li>
					<li className="g-text">Eva</li>
				</ul>
			)}
		</div>
	);
}