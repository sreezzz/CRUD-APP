import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { AddMovie } from "./AddMovie";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function MovieList() { 
  const history = useHistory();

  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch("https://618e943850e24d0017ce1373.mockapi.io/movies", {
      method:"Get",
    })
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  };
  const deleteMovie = (id) => {
    fetch("https://618e943850e24d0017ce1373.mockapi.io/movies/" + id, {
      method: "DELETE",
    }).then(() => getMovies());
  }; 
  useEffect(getMovies, []);
    
  return (
    <section>
      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
            id={mv.id}
            DeleteButton={
              <IconButton className="movie-show-button"
                onClick={() => deleteMovie(mv.id)}
                color="error"
                aria-label="Delete" 
              >
                <DeleteIcon />
              </IconButton>
            }
            EditMovieButton={
              <IconButton
                style={{marginLeft:"auto"}}
                onClick={() => history.push("/movies/edit/" + mv.id)}
                color="secondary"
                aria-label="Edit"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </section>
  );
}