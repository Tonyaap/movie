import React from "react";
import "./App.css";
import { Switch } from "react-router-dom";
// import AboutPage from "./pages/AboutPage";
// import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
// import Homepage from "./pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} /> */}
      </Switch>
      <h1>hello!</h1>
    </div>
  );
}

export default App;
