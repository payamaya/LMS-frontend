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

	// context
	const mockContext: IMockContext = {
		data: studentMockData,
		isLoading
		//future API call functions here to pass down
	};

	/*
	// fetch functions
	// todo: promise return ett interface, beroende på vilken endpoint vi skickar så kan vi få det interfacet
	const fetchData = async (url: string): Promise<any> => {
		setIsLoading(true)
		try {
			const response = await fetch(url); // fetch the api endpoint
			const data = await response.json(); // parse to json
			setData(data);
		}
		catch (error) {
			console.error("Error fetching the api, error: ", error);
			return null;
		}
		finally {
			setIsLoading(false);
		}
	}
	*/

	return (
		<div className="app">
			{location.pathname !== '/' && <Navbar />}
			<main className="main-content">
				<Outlet context={mockContext} />
			</main>
		</div >
	)
}
