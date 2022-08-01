import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";



export function RoutesSite(){

    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}></Route>

            <Route path="/test" element={<App/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
    );
};


export function RoutesApp(){

    return(
        <Routes>

            <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
    );
};