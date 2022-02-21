import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";
import Login from "../pages/Login";
import { PrivateRoute } from "./auth.routes";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<PrivateRoute />} >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/listagem/:type" element={<List />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRoutes;