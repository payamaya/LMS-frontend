import { ReactElement, useState } from "react";
import { IUser } from "../interfaces";

interface ICourseDetailsStudentsDropdownProps {
	students: IUser[] | undefined;
}

export function CourseDetailsStudentsDropdown({ students }: ICourseDetailsStudentsDropdownProps): ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="course-details-students-dropdown">
			<button className="course-details-students-dropdown-button" onClick={() => setIsOpen(!isOpen)}>
				<span className="material-symbols-outlined">keyboard_arrow_down</span>
				<p>View Students</p>
			</button>
			{isOpen && (
				<ul className="g-list">
					{students?.map((user) => (
						<li key={user.userId} className="g-text">{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
}