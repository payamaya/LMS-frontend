import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components/App";
import { Login } from "./pages/Login";
import { StudentDashboard } from "./pages/StudentDashboard";
import { TeacherDashboard } from "./pages/TeacherDashboard";
import { CourseDetails } from "./pages/CourseDetails";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Login />} />
			<Route path="student" element={<StudentDashboard />} />
			<Route path="teacher" element={<TeacherDashboard />} />
			<Route path="course/:id" element={<CourseDetails />} />
		</Route>
	)
);