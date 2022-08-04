import { Routes, Route } from "react-router-dom";
import TestPage from "./pages/Test";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";
import SubjectsPage from "./pages/Subjects";



export function RoutesSite(){

    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}></Route>

            <Route path="/test" element={<TestPage/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
    );
};


export function RoutesApp(){

    return(
        <Routes>
            <Route path="/subjects" element={<SubjectsPage/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
    );
};