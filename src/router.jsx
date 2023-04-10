import {
    createBrowserRouter,
} from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout";
import GuestLayout from "./Components/GuestLayout";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import TestVersionLayout from "./Components/TestVersionLayout";
import Teams from "./Views/Teams";

const router = createBrowserRouter([
    {
        path:"/",
        element: <DefaultLayout/>,
        children:[
            {
                path: "teams",
                element: <Teams/>
            },
        ]

    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "login",
                element: <LoginForm />
            },
            {
                path: "signup",
                element: <SignupForm />
            },
        ]
    },
    {
        path: "/testversion",
        element: <TestVersionLayout/>,
        children:[
            {
                path: "teams",
                element: <Teams/>
            },
        ]
    }
]);

export default router