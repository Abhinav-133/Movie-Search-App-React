import React from 'react'
import MovieCard from './MovieCard';

function MovieList({data}) {
  const {moviedata}=data;
  console.log(moviedata);
  if(moviedata && moviedata.Response==="False")
  {
    return <h1>No Result Found</h1>

  }
      
  return (
    <div style={{
      display:"grid",
      gap:"2rem",
      gridTemplateColumns:"repeat(3, 1fr)",
      margin:"2rem"
    }}>
      {moviedata.Search.map(movie=>(
        // <p>{movie.Title}</p>
        <MovieCard {...movie}/>
      ))}
    </div>
  )
}

export default MovieList
