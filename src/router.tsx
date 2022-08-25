import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/User/Login";
import SubjectsRegisterPage from "./pages/SubjectRegister";
import SubjectsPage from "./pages/Subjects";
import TestPage from "./pages/Test";
import UserRegisterPage from "./pages/User/Register";
import QuestionRegisterPage from "./pages/Questions/Register";

interface IRouterProps {
    isLogged: boolean
};

export function Router({ isLogged } : IRouterProps){

    return(

        <>
            {
                isLogged ? (
                    <Routes>
                        <Route path="/test" element={<TestPage/>}></Route>
                        <Route path="/users/register" element={<UserRegisterPage/>}></Route>
                        <Route path="/" element={<ErrorPage/>}></Route>
                        <Route path="/subjects" element={<SubjectsPage/>}></Route>
                        <Route path="/subjects/register" element={<SubjectsRegisterPage/>}></Route>
                        <Route path="/subjects/register/:id" element={<SubjectsRegisterPage/>}></Route>

                        <Route path="/questions/register" element={<QuestionRegisterPage/>}></Route>
                        <Route path="*" element={<ErrorPage/>}></Route>
                    </Routes> 
                   
                ):(
                    <Routes>
                        <Route path="/" element={<LoginPage/>}></Route>
                        <Route path="*" element={<ErrorPage/>}></Route>
                    </Routes>
                )
            }
        </>
    );
};