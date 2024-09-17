import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components/App";
import { LoginPage } from "./pages/LoginPage";
import { StudentDashboardPage } from "./pages/StudentDashboardPage";
import { TeacherDashboardPage } from "./pages/TeacherDashboardPage";
import { CourseDetailsPage } from "./pages/CourseDetailsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LoginPage />} />
      <Route path="student" element={<StudentDashboardPage />} />
      <Route path="teacher" element={<TeacherDashboardPage />} />
      <Route path="course/:id" element={<CourseDetailsPage />} />
    </Route>
  )
);
