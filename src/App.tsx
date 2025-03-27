import "./App.css"
import {HashRouter, Route, Routes} from "react-router-dom";
import "./components/Index/IndexPage.tsx";
import IndexPage from "./components/Index/IndexPage.tsx";
import LoginPage from "./components/Login/LoginPage.tsx";
import DashboardPage from "./components/Dashboard/DashboardPage.tsx";
import RegisterPage from "./components/Register/RegisterPage.tsx";


export default function App() {


    return (
        <>
            <HashRouter>
                <Routes>
                    <Route index={true} element={<IndexPage/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path={"/dashboard"} element={<DashboardPage/>}/>
                    <Route path={"/register"} element={<RegisterPage/>}/>
                </Routes>
            </HashRouter>
        </>
    )
}