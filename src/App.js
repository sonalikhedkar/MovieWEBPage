


import React from "react";
import { Route, Routes, Outlet,BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import TopRatedPage from "./components/TopRatedPage";
import UpcomingPage from "./components/UpcomingPage";
import "./styles.css";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";

const Head = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default function App() {
  return (
    <><Router>
      <Routes>
        <Route path="/" Component={Head }>
          <Route index Component={Home } />
        </Route>
        <Route path="/top-rated" Component={TopRatedPage} />
        <Route path="/upcoming" Component={UpcomingPage} />
        <Route path="/movie/:id" Component={MovieDetails} />

        <Route path="*" Component={Error } />
      </Routes>
      </Router>
    </>
  );
}

