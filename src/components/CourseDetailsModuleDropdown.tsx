import { ReactElement, useState } from "react";

export function CourseDetailsModuleDropdown(): ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="course-details-modules-dropdown">
			<button className="course-details-module-dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>React Basics</button>
			{
				isOpen && (
					<div className="course-details-module-details">
						<div className="course-details-module-detail-item">
							<span>React Fundamentals Video</span>
							<span>1 hour</span>
						</div>
						<div className="course-details-module-detail-item">
							<span>React Quiz</span>
							<span>30 minutes</span>
						</div>
					</div>
				)
			}
		</div >
	);
}