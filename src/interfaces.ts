export interface IActivity {
	id: string;
	moduleId: string;
	activityName: string;
	description: string;
	startTime: string;
	endTime: string;
	activityType: IActivityType;
	activityTypeId: string;
}

export interface IActivityType {
	id: string;
	activityTypeName: string;
}

export interface IBasicCourseInfo {
	id: string,
	courseName: string,
	description: string,
	startDate: string
	teacher: string,
}

export interface IDetailedCourse {
	id: string;
	courseName: string;
	description: string;
	startDate: string;
	users: IUser[];
	modules: IModule[];
}

export interface IModule {
	id: string;
	courseId: string;
	moduleName: string;
	description: string;
	startDate: string;
	endDate: string;
	state: string;
	activities: IActivity[];
}

export interface IUser {
	id: string;
	name: string;
}
