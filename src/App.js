// import logo from "./logo.svg";
import "./App.css";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { MovieList } from "./MovieList";
import { ColorList } from "./ColorList";
import { Welcome } from "./Welcome";
import { AddMovie } from "./AddMovie";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useHistory,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { EditMovie } from "./EditMovie";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import AddIcon from "@mui/icons-material/Add";
import PaletteIcon from "@mui/icons-material/Palette";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { BasicForm } from "./BasicForm";

function App() {
     const [mode, setMode] = useState("light");

  // const [movies, setMovies] = useState([]);
  const history = useHistory();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // useEffect(()=>{
  //   fetch("https://618e943850e24d0017ce1373.mockapi.io/movies")
  //     .then((data) => data.json())
  //     .then((mvs) => setMovies(mvs));

  // },[]);


  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ minHeight: "100vh" }} elevation={3}>
        <div className="App">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ marginBottom: "50px" }} position="static">
              <Toolbar>
                <Button
                  startIcon={<HomeIcon />}
                  onClick={() => history.push("/")}
                  color="inherit"
                >
                  Home
                </Button>
                <Button
                  startIcon={<TheatersIcon />}
                  onClick={() => history.push("/movies")}
                  color="inherit"
                >
                  Movies
                </Button>
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => history.push("/movies/add")}
                  color="inherit"
                >
                  Add movies
                </Button>
                {/* <Button
                  startIcon={<PaletteIcon />}
                  onClick={() => history.push("/color-game")}
                  color="inherit"
                >
                  Color game
                </Button> */}
                {/* <Button
                  startIcon={<AddIcon />}
                  onClick={() => history.push("/form")}
                  color="inherit"
                >
                  Form
                </Button> */}
                <Button
                  startIcon={
                    mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
                  }
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  style={{ marginLeft: "auto" }}
                  color="inherit"
                >
                  {mode === "light" ? "dark" : "light"} mode
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Switch>
            {/* <Counter /> */}
            <Route exact path="/films">
              <Redirect to="/movies" />
            </Route>

            <Route exact path="/movies/add">
              <AddMovie />
            </Route>

            <Route exact path="/movies/:id">
              <MovieDetails />
            </Route>

            <Route exact path="/movies/edit/:id">
              {/* <MovieDetails movies={movies} /> */}
              <EditMovie />
            </Route>

            <Route exact path="/movies">
              <MovieList />
            </Route>

            <Route exact path="/color-game">
              <ColorList />
            </Route>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/form">
              <BasicForm />
            </Route>
            <Route Path="**">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function MovieDetails() {
  const { id } = useParams();
  // const movie = movies[id];
  const history = useHistory();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch("https://618e943850e24d0017ce1373.mockapi.io/movies/" + id)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);
  return (
    <div>
      {/* <h1>Movie id is {id}</h1> */}
      <iframe
        width="100%"
        height="480"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>

        <p>{movie.summary}</p>
        <Button
          variant="contained"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      {/* <h1 className="not-found">404</h1> */}
      <img
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt="404 NOT FOUND"
      />
    </div>
  );
}





export default App;




