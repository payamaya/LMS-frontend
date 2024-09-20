export interface IActivity {
	activityId: number;
	activityName: string;
	description: string;
	startTime: string;
	endTime: string;
	activityType: IActivityType;
}

export interface IActivityType {
	activityTypeId: number;
	activityTypeName: string;
}

export interface IBasicCourseInfo {
	courseId: number,
	courseName: string,
	description: string,
	startDate: string
	teacher: string,
}

export interface IDetailedCourse {
	courseId: number;
	courseName: string;
	description: string;
	startDate: string;
	users: IUser[];
	modules: IModule[];
}

export interface IModule {
	moduleId: number;
	moduleName: string;
	description: string;
	startDate: string;
	endDate: string;
	state: string;
	activities: IActivity[];
}

export interface IUser {
	userId: number;
	name: string;
	email: string;
}

export interface IMockData {
	userId: number;
	name: string;
	email: string;
	course: IDetailedCourse;
}

export interface IMockContext {
	data: IMockData;
	isLoading: boolean;
}
