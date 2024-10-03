import { ReactElement, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { IBasicCourseInfo, IContext, IDetailedCourse, IModule, ITokens, IUser } from "../utils/interfaces.ts";
import { BASE_URL } from "../utils/constants.ts";
import { AuthProvider } from "../context/authProvider.tsx";

export function App(): ReactElement {
	const location = useLocation();
	const [teacherBasicData, setTeacherBasicData] = useState<IBasicCourseInfo[] | null>(null);
	const [activeCourse, setActiveCourse] = useState<IBasicCourseInfo | null>(null);
	const [detailedCourse, setDetailedCourse] = useState<IDetailedCourse | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [activeModule, setActiveModule] = useState<IModule | null>(null);
	const [teachers, setTeachers] = useState<IUser[] | null>(null);

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

	const fetchCourses = async (): Promise<void> => {
		setIsLoading(true);
		try {
			const token: any | null = localStorage.getItem("tokens");
			const parsedToken: ITokens = JSON.parse(token);

			const headers: HeadersInit = {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${parsedToken.accessToken}`,
			};

			const response = await fetch(`${BASE_URL}/courses`, {
				method: "GET",
				headers: headers,
			});
			const data: IBasicCourseInfo[] = await response.json();

			setTeacherBasicData(data);
		} catch (error) {
			console.error("Error fetching the api, error: ", error);
		} finally {
			setIsLoading(false);
		}
	};

	const fetchCoursesById = async (id: string): Promise<void> => {
		setIsLoading(true);
		try {
			const token: any | null = localStorage.getItem("tokens");
			const parsedToken: ITokens = JSON.parse(token);

			const headers: HeadersInit = {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${parsedToken.accessToken}`,
			};

			const response = await fetch(`${BASE_URL}/courses/${id}`, {
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


	const fetchTeachers = async (): Promise<void> => {
		setIsLoading(true);
		try {
			const token: any | null = localStorage.getItem("tokens");
			const parsedToken: ITokens = JSON.parse(token);

			const headers: HeadersInit = {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${parsedToken.accessToken}`,
			};

			const response = await fetch(`${BASE_URL}/users?onlyTeachers=true`, {
				method: "GET",
				headers: headers,
			});

			const data: IUser[] = await response.json();
			console.log(data);

			setTeachers(data);
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
		activeModule, // Add activeModule here
		toggleActiveCourse,
		fetchCourses,
		fetchCoursesById,
		fetchCourseForStudent,
		setActiveModule,
		fetchTeachers,
		teachers
	};

	return (
		<AuthProvider>
			<div className="app">
				{location.pathname !== "/" && <Navbar />}
				<main className="main-content">
					<Outlet context={context} />
				</main>
			</div>
		</AuthProvider>
	);
}
