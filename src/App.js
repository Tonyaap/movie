import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
// import Homepage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
        <Route path="/movie/:imdb_id" component={MoviePage} />
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route path="/" component={HomePage} /> */}
      </Switch>
    </div>
  );
}

export default App;
