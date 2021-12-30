import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom"; 
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MovieList } from "./MovieList";

export function EditMovie() {
  const { id } = useParams();
  
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch("https://618e943850e24d0017ce1373.mockapi.io/movies/" + id)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);
  // const movie = movies[id];
  console.log(id, movie);

  return  movie ? <EditMovieForm movie={movie}/> : "";
  
}
 
function EditMovieForm({movie}){

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const setMovieName = (event) => setName(event.target.value);
  const history = useHistory();

  const editMovie = () => {
    console.log({ name, poster, rating, summary, trailer });
    const updatedMovie = { name, poster, rating, summary, trailer };

    // const copyMovies = [...movies];
    // copyMovies[id] = updatedMovie;
    // setMovies(copyMovies);
    // history.push("/movies")

    fetch("https://618e943850e24d0017ce1373.mockapi.io/movies/" + movie.id, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        history.push("/movies");
      })
      .catch((err) => console.log(err));
  };

  return <div className="add-movie-form">
      <TextField
        value={name}
        onChange={setMovieName}
        label="Name"
        variant="outlined"
      />
      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="outlined"
      />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined"
      />
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="outlined"
      />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)} 
        label="Trailer"
        variant="outlined"
      />
      <Button onClick={editMovie} variant="contained" color="success">
        Save movie
      </Button>
    </div>
} 