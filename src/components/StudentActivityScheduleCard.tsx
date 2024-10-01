import { ReactElement } from "react";
import { useOutletContext } from "react-router-dom";
import { IContext } from "../utils/interfaces";

export function StudentActivityScheduleCard(): ReactElement {
	const { detailedCourse, activeModule } = useOutletContext<IContext>();

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
	console.log(activeModule);
	return (
		<div className="g-card">
			<h2 className="g-card-header">Activity Schedule</h2>
			<p className="g-text-subheading">{activeModule?.moduleName}</p>
			<div className="scrollable-content">
				<ul className="g-list">
					{activeModule?.activities.map((activity) => (
						<li key={activity.id} className="g-list-item">
							<h3 className="g-list-item-header">{activity.activityName}</h3>
							<p className="g-list-item-text">{new Date(activity.startTime).toLocaleString()}</p>
							<p className="g-list-item-text">Duration: {calculateDuration(activity.startTime, activity.endTime)}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
