import { ReactElement, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { IBasicCourseInfo, IContext, IDetailedCourse, IStudentMockData } from "../utils/interfaces.ts";
import { BASE_URL } from "../utils/constants.ts";

export function App(): ReactElement {
	const location = useLocation();
	const [studentMockData, setStudentMockData] = useState<IStudentMockData | null>(null);
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
			//console.log(data); // data variable will now keep the response object
			setDetailedCourse(data);
		} catch (error) {
			console.error("Error fetching the api, error: ", error);
		} finally {
			setIsLoading(false);
		}
	};
	// student: api/user/{token} token som input parameter någonstans, ska ge ungefär samma json svar som raden ovan

	// context
	const context: IContext = {
		studentMockData,
		teacherBasicData,
		isLoading,
		activeCourse,
		detailedCourse,
		toggleActiveCourse,
		fetchCourses,
		fetchCoursesById,
		//future API call functions here to pass down
	};

	return (
		<div className="app">
			{location.pathname !== "/" && <Navbar />}
			<main className="main-content">
				<Outlet context={context} />
				<button type="button" onClick={fetchCourses}>
					fetcha
				</button>
			</main>
		</div>
	);
}
