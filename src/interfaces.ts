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
