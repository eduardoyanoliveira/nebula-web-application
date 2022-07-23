import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";



export function RoutesSite(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}></Route>

                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};


export function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>

                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};