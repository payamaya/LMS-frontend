import { ReactElement, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { IMockContext } from "../interfaces";

export function CourseDetailsStudentsDropdown(): ReactElement {
	const [isOpen, setIsOpen] = useState(false);
	const { data } = useOutletContext<IMockContext>();

	return (
		<div className="course-details-students-dropdown">
			<button className="course-details-students-dropdown-button" onClick={() => setIsOpen(!isOpen)}>
				<span className="material-symbols-outlined">keyboard_arrow_down</span>
				<p>View Students</p>
			</button>
			{isOpen && (
				<ul className="g-list">
					{data.course.users.map((user) => (
						<li key={user.userId} className="g-text">{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
}