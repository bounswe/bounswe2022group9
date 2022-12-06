import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProfilePage from "../pages/ProfilePage";
import DummyPage from "../pages/DummyPage";
import history from "../history";
import PublicRoute from "./PublicRoute";
import AuthRoute from "./AuthRoute";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import UserPage from "../pages/UserPage";

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
        <Route
          path="/profile"
          exact
          element={
            <AuthRoute>
              <ProfilePage />
            </AuthRoute>
          }
        />
        <Route
          path="/dummy/:id"
          element={
            <AuthRoute>
              <DummyPage />
            </AuthRoute>
          }
        />
        <Route
          path="/search/:text"
          element={
            <AuthRoute>
              <SearchPage />
            </AuthRoute>
          }
        />
        <Route
          path="/user/:id"
          element={
            <AuthRoute>
              <UserPage />
            </AuthRoute>
          }
        />
        <Route
          path="/search"
          element={
            <AuthRoute>
              <SearchPage />
            </AuthRoute>
          }
        />
        <Route
        path="/homepage"
        element={
          <AuthRoute>
            <HomePage />
          </AuthRoute>
        }
      />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}
