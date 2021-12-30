import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardActions } from "@mui/material";
import { MovieSharp } from "@mui/icons-material";

export function Movie({ name, poster, rating, summary, id,DeleteButton, EditMovieButton }) {
  const [show, setShow] = useState(true);
  const history = useHistory();
  // const styles = { display: show ? "block" : "none" };
  return (
    <Card className="movie-container">
      <img className="movie-poster" src={poster} alt="{name}" />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">
            {name}
            <IconButton
              onClick={() => history.push("/movies/" + id)}
              color="primary"
              aria-label="Movie details"
            >
              <InfoIcon />
            </IconButton>
            <IconButton
              onClick={() => setShow(!show)}
              color="primary"
              aria-label={show ? "Hide" : "Show"}
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h3>
          <p className="movie-rating">⭐{rating}</p>
        </div>

        {/* <button onClick={() => setShow(!show)} className="movie-show-button">
              {show ? "Hide" : "Show"} description
            </button> */}
        {/* <p style={styles}>{summary}</p> */}
        {show ? <p>{summary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter />
        {EditMovieButton}
        {DeleteButton}
        
      </CardActions>
    </Card>
  );
}
