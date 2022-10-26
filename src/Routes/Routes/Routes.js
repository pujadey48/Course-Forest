import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Page404 from "../../Page404";
import Blogs from "../../Pages/Blogs/Blogs";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import CourseContainer from "../../Pages/Courses/CourseContainer/CourseContainer";
import Home from "../../Pages/Home/Home";


 export const  routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/course',
                element: <CourseContainer></CourseContainer>,
                loader: () => fetch(`http://localhost:5000/allCourses`)
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/blog',
                element:<Blogs></Blogs>
            },
            {
              path: "*",
              element: <Page404></Page404>,
            },
        ]
    }
 ])