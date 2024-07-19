import React from "react";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  const newUrl = new URL(request.url);
  // console.log(newUrl.searchParams.get("search"));
  const searchTerm = newUrl.searchParams.get("search") || "marvel";
  const response = await axios.get(
    `https://www.omdbapi.com/?i=tt3896198&apikey=92004e3a&s=${searchTerm}`
  );
  return {moviedata:response.data,searchTerm};
  
}
function Home() {
  const data=useLoaderData();

  return (

    <div>
      <SearchForm searchTerm={data.searchTerm} />
      <MovieList data={data}/>
    </div>
  );
}

export default Home;
