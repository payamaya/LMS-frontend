import { ReactElement, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { IBasicCourseInfo, IContext, IDetailedCourse, ITokens } from "../utils/interfaces.ts";
import { BASE_URL } from "../utils/constants.ts";
import { AuthProvider } from "../context/authProvider.tsx";

export function App(): ReactElement {
	const location = useLocation();
	const [teacherBasicData, setTeacherBasicData] = useState<IBasicCourseInfo[] | null>(null);
	const [activeCourse, setActiveCourse] = useState<IBasicCourseInfo | null>(null);
	const [detailedCourse, setDetailedCourse] = useState<IDetailedCourse | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// changes which course is active (clicked)
	const toggleActiveCourse = (id: string): void => {
		if (teacherBasicData != null) {
			const selectedCourse = teacherBasicData.find((course) => course.id === id);
			if (selectedCourse != null) {
				setActiveCourse(selectedCourse);
			}
		}
	};

	// active course changes its state
	useEffect(() => {
		if (activeCourse != null) {
			fetchCoursesById(activeCourse.id);
		}
	}, [activeCourse]);

	// fetch functions here before context
	// lärare: api/courses (ger lista av alla kurser med tomma modul och activities arrayer)
	const fetchCourses = async (): Promise<void> => {
		setIsLoading(true);
		try {
			const response = await fetch(`${BASE_URL}/courses`); // fetch the api endpoint
			const data: IBasicCourseInfo[] = await response.json(); // parse to json
			//console.log(data); // data variable will now keep the response object
			setTeacherBasicData(data);
		} catch (error) {
			console.error("Error fetching the api, error: ", error);
		} finally {
			setIsLoading(false);
		}
	};
	// lärare: api/courses/{id} (ger detaljerad info när vi klickat på en kurs inne på teacher dashboard)
	const fetchCoursesById = async (id: string): Promise<void> => {
		setIsLoading(true);
		try {
			const response = await fetch(`${BASE_URL}/courses/${id}`); // fetch the api endpoint
			const data: IDetailedCourse = await response.json(); // parse to json
			console.log(data); // data variable will now keep the response object
			setDetailedCourse(data);
		} catch (error) {
			console.error("Error fetching the api, error: ", error);
		} finally {
			setIsLoading(false);
		}
	};

	const fetchCourseForStudent = async (): Promise<void> => {
		setIsLoading(true);
		try {
			const token: any | null = localStorage.getItem("tokens");

			const parsedToken: ITokens = JSON.parse(token);
			const headers: HeadersInit = {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${parsedToken.accessToken}`,
			};

			const response = await fetch(`${BASE_URL}/Courses/Student`, {
				method: "GET",
				headers: headers,
			});
			const data: IDetailedCourse = await response.json();
			setDetailedCourse(data);
			
		} catch (error) {
			console.error("Error fetching the api, error: ", error);
		} finally {
			setIsLoading(false);
		}
	};

	// context
	const context: IContext = {
		teacherBasicData,
		isLoading,
		activeCourse,
		detailedCourse,
		toggleActiveCourse,
		fetchCourses,
		fetchCoursesById,
		fetchCourseForStudent,
	};

	return (
		<AuthProvider>
			<div className="app">
				{location.pathname !== "/" && <Navbar />}
				<main className="main-content">
					<Outlet context={context} />
					<button type="button" onClick={fetchCourseForStudent}>
						fetcha
					</button>
				</main>
			</div>
		</AuthProvider>
	);
}
