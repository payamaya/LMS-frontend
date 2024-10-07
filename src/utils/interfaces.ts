export interface IActivity {
	id: string
	activityName: string
	description: string
	startTime: string
	endTime: string
	activityType: IActivityType
}

export interface IActivityType {
	id: string
	activityTypeName: string
}

export interface IBasicCourseInfo {
	id: string
	courseName: string
	description: string
	startDate: string
	teacher: IUser
}

export interface IDetailedCourse {
	id: string
	courseName: string
	description: string
	modules: IModule[]
	students: IUser[]
	startDate: string
	teacher: IUser
}

export interface IModule {
	id: string
	moduleName: string
	description: string
	startDate: string
	endDate: string
	state: string
	activities: IActivity[]
}

export interface IUser {
	id: string
	name: string
}

export interface IContext {
	teacherBasicData: IBasicCourseInfo[] | null
	activeCourse: IBasicCourseInfo | null
	detailedCourse: IDetailedCourse | null
	isLoading: boolean
	activeModule: IModule | null
	toggleActiveCourse: (id: string) => void
	fetchCourses: () => Promise<void>
	fetchCoursesById: (id: string) => Promise<void>
	fetchCourseForStudent: () => Promise<void>
	setActiveModule: React.Dispatch<React.SetStateAction<IModule | null>>
	fetchTeachers: () => Promise<void>
	teachers: IUser[] | null
}

export interface IAuthContext {
	isLoggedIn: boolean
	login: (username: string, password: string) => Promise<void>
	logout: () => void
	userRole: string | null
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}
