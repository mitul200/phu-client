import OfferedCourse from "../pages/faculty/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "offered course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];
