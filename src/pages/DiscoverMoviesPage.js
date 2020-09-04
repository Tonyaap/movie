import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");

  const [searchState, set_searchState] = useState("idle");

  const [movies, set_movies] = useState([]);

  const history = useHistory();

  const route_parameters = useParams();
  console.log("routeparameters", route_parameters);

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
    console.log("ROUTEPARAM", routeParam);
  };

  useEffect(() => {
    async function fetchUrl() {
      set_searchState("Searchin...");
      const queryParam = encodeURIComponent(route_parameters.searchtext);
      const response = await Axios.get(
        `https://omdbapi.com/?apikey=64e0848e&s=${queryParam}`
      );

      console.log("RESPONSE", response);

      if (response.data.Response === "False") {
        set_searchState("Not found");
        set_movies([]);
      } else {
        set_searchState("Done!");
        console.log("URLHISTORY", response);

        set_movies(response.data.Search);
      }
    }

    if (route_parameters.searchtext !== undefined) {
      fetchUrl();
    }
  }, [route_parameters.searchtext]);

  console.log("WHAT IS MOVIEDATA", movies);

  // const search = async () => {

  //   set_searchState("Searching...");
  //   const queryParam = encodeURIComponent(searchText);

  //   const data = await fetch(
  //     `https://omdbapi.com/?apikey=64e0848e&s=${queryParam}`
  //   ).then((r) => r.json());

  // set_searchState("done");

  // if (data.Search !== undefined) {
  //   set_movies(data.Search);
  // } else {
  //   set_searchState("Film not found...");
  // }

  // console.log("DATA.SEARCH", data.Search);

  console.log("What is searchState?", searchState);

  return (
    <div>
      <h1>Discover some movies!</h1>
      <div>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
      </div>
      <button onClick={navigateToSearch}>Search</button>
      <p> Status: {searchState} </p>
      <div className="row">
        {!movies
          ? "Movie not found"
          : movies.map((movie) => {
              return (
                <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                  <div>
                    {" "}
                    <ul>
                      <h2> {movie.Title} </h2>
                      <img alt={movie.Title} src={movie.Poster} />
                      <p> Year: {movie.Year} </p>
                    </ul>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
