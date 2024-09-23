import { ReactElement, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { IBasicCourseInfo, IDetailedCourse, IMockContext, IStudentMockData } from "../interfaces.ts";
import studentUserIdMockData from "../courses-user-userid-mock.json";
import teacherBasicMockData from "../courses-mock.json";
import teacherDetailedMockData from "../courses-courseid-mock.json";

export function App(): ReactElement {
	const location = useLocation();
	const [studentMockData, setStudentMockData] = useState<IStudentMockData>(studentUserIdMockData);
	const [teacherBasicData, setTeacherBasicData] = useState<IBasicCourseInfo[]>(teacherBasicMockData);
	const [teacherDetailedData, setTeacherDetaildData] = useState<IDetailedCourse[]>(teacherDetailedMockData);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// fetch function here before context

	// context
	const mockContext: IMockContext = {
		studentMockData,
		teacherBasicData,
		teacherDetailedData,
		isLoading
		//future API call functions here to pass down
	};

	return (
		<div className="app">
			{location.pathname !== '/' && <Navbar />}
			<main className="main-content">
				<Outlet context={mockContext} />
			</main>
		</div >
	)
}
