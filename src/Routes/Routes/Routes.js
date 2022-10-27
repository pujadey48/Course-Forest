import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Page404 from "../../Page404";
import Blogs from "../../Pages/Blogs/Blogs";
import FAQ from "../../Pages/Blogs/FAQ";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import CourseContainer from "../../Pages/Courses/CourseContainer/CourseContainer";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


 export const  routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch(`https://assignment-10-server-pujadey48.vercel.app/allCourses`)
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
                path: '/faq',
                element:<FAQ></FAQ>
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
                path:'/checkOut/:id',
                loader: ({ params }) => fetch(`https://assignment-10-server-pujadey48.vercel.app/courses/${params.id}`),
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
              path: "*",
              element: <Page404></Page404>,
            },
        ]
    }
 ])