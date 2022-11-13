import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Pages/Appointment/Appointment";
import Home from "../Components/Pages/Home/Home";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element:<Appointment></Appointment>
            }
        ]
    }
])