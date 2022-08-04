import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";
import SubjectsPage from "./pages/Subjects";

interface IRouterProps {
    isLogged: boolean
};

export function Router({ isLogged } : IRouterProps){

    console.log(isLogged)

    return(

        <>
            {
                isLogged ? (
                    <Routes>
                        <Route path="/" element={<ErrorPage/>}></Route>
                        <Route path="/subjects" element={<SubjectsPage/>}></Route>
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