import { ReactElement, useState } from "react";

export function CourseDetailsModuleDropdown(): ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="course-details-modules-dropdown">
			<button className="g-list-item course-details-modules-dropdown-button" onClick={() => setIsOpen(!isOpen)}>
				<p>React Basics</p>
				<span className="material-symbols-outlined">keyboard_arrow_down</span>
			</button>
			{isOpen && (
				<ul className="g-list">
					<li className="g-text">
						<span>React Fundamentals Video</span>
						<span>1 hour</span>
					</li>
					<li className="g-text">
						<span>React Quiz</span>
						<span>30 minutes</span>
					</li>
				</ul>
			)}
		</div >
	);
}