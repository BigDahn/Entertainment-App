import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Series from "./pages/Series";
import SingleSeries from "./pages/SingleSeries";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<Movie />} />
          <Route path="series" element={<Series />} />
          <Route path="series/:seriesId" element={<SingleSeries />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
