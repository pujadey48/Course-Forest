import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Page404 from "../../Page404";
import Blogs from "../../Pages/Blogs/Blogs";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import CourseContainer from "../../Pages/Courses/CourseContainer/CourseContainer";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";


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
                loader: () => fetch(`https://assignment-10-server-pujadey48.vercel.app/allCourses`)
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://assignment-10-server-pujadey48.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/blog',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
              path: "*",
              element: <Page404></Page404>,
            },
        ]
    }
 ])