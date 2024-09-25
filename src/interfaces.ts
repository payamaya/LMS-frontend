export interface IActivity {
	id: string;
	activityName: string;
	description: string;
	startTime: string;
	endTime: string;
	activityType: IActivityType;
}

export interface IActivityType {
	id: string;
	activityTypeName: string;
}

export interface IBasicCourseInfo {
	id: string,
	courseName: string,
	description: string,
	startDate: string,
	teacher: IUser
}

export interface IDetailedCourse {
	id: string;
	courseName: string;
	description: string;
	startDate: string;
	teacher: IUser;
	students: IUser[];
	modules: IModule[];
}

export interface IModule {
	id: string;
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

export interface IStudentMockData {
	userId: number;
	name: string;
	email: string;
	course: IDetailedCourse;
}

export interface IContext {
	studentMockData: IStudentMockData | null;
	teacherBasicData: IBasicCourseInfo[] | null;
	activeCourse: IBasicCourseInfo | null;
	detailedCourse: IDetailedCourse | null;
	isLoading: boolean;
	toggleActiveCourse: (id: string) => void;
	fetchCourses: () => Promise<void>
	fetchCoursesById: (id: string) => Promise<void>
}
