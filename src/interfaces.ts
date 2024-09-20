export interface BasicCourseInfo {
	id: number,
	name: string,
	primary_teacher: string,
	startdate: string
}

// interfaces.ts
export interface User {
	userId: number;
	name: string;
	email: string;
}

export interface Activity {
	activityId: number;
	activityName: string;
	description: string;
	startTime: string; // ISO date string
	endTime: string;   // ISO date string
	activityType: {
		activityTypeId: number;
		activityTypeName: string;
	};
}

export interface Module {
	moduleId: number;
	moduleName: string;
	description: string;
	startDate: string;
	endDate: string;
	state: string;
	activities: Activity[];
}

export interface Course {
	courseId: number;
	courseName: string;
	description: string;
	startDate: string;
	users: User[];
	modules: Module[];
}

export interface MockData {
	userId: number;
	name: string;
	email: string;
	course: Course;
}

export interface MockContext {
	data: MockData;
	isLoading: boolean;
}
