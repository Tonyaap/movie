import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function MoviePage() {
  const [movieData, set_movieData] = useState({});
  const route_parameters = useParams();

  console.log("What is params", route_parameters);

  useEffect(() => {
    async function fetchData() {
      const singleMovie = await Axios.get(
        `http://www.omdbapi.com/?i=${route_parameters.imdb_id}&apikey=64e0848e`
      );
      console.log("single movie", singleMovie);

      set_movieData(singleMovie.data);
    }
    fetchData();
  }, [route_parameters.imdb_id]);

  return (
    <div>
      <h1> {movieData.Title} </h1>
      <p> Year: {movieData.Year} </p>
      <img alt={movieData.Title} src={movieData.Poster} />

      <p> Plot: {movieData.Plot} </p>
    </div>
  );
}
