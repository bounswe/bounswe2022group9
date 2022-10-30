import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
// import ConfirmationPage from "../pages/ConfirmationPage";
// import HomePage from "../pages/HomePage";
import history from "../history";
import PublicRoute from "./PublicRoute";
import AuthRoute from "./AuthRoute";

export default function RouteList() {
  return (
    <Router history={history}>
      <Routes>
        <Route
          path="/login"
          exact
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          exact
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}
