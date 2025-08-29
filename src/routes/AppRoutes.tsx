import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./PotectedRoute";
import PersonalPage from "../pages/PersonalPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/lk" element={
                <ProtectedRoute>
                    <PersonalPage />
                </ProtectedRoute>
            }>
            </Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactPage/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    )
}