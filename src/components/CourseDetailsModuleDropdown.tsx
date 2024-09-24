import { ReactElement, useState } from "react";
import { IModule } from "../interfaces";

interface ICourseDetailsModuleDropdownProps {
	module: IModule;
}

export function CourseDetailsModuleDropdown({ module }: ICourseDetailsModuleDropdownProps): ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	console.log(module);

	// AI Helper function to calculate the time duration
	const calculateDuration = (startTime: string, endTime: string): string => {
		const start = new Date(startTime);
		const end = new Date(endTime);
		const diffInMs = end.getTime() - start.getTime(); // Difference in milliseconds

		const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
		const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

		if (diffInHours >= 24) {
			const days = Math.floor(diffInHours / 24);
			const hours = diffInHours % 24;
			if (hours === 0) {
				return `${days}d`;
			} else {
				return `${days}d ${hours}h`;
			}
		}

		if (diffInMinutes === 0) {
			return `${diffInHours}h`; // Show only hours if minutes are zero
		}
		return `${diffInHours}h ${diffInMinutes}m`;
	};

	return (
		<div className="course-details-modules-dropdown">
			<button className="g-list-item course-details-modules-dropdown-button" onClick={() => setIsOpen(!isOpen)}>
				<p>{module.moduleName}</p>
				<span className="material-symbols-outlined">keyboard_arrow_down</span>
			</button>
			{isOpen && (
				<ul className="g-list">
					{module.activities.map((activity) => (
						<li className="g-text">
							<span>{activity.activityName}</span>
							<span>Duration: {calculateDuration(activity.startTime, activity.endTime)}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
