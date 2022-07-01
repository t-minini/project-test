import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function CreateList() {
  const [list, setList] = useState({
    owner: "",
    description: "",
    movies: [{}],
  });

  const [movies, setMovies] = useState([{}]);

  useEffect(() => {
    async function fetchApiMovies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=41a1e07b6755a00d6d92f63af67face9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
        );
        // console.log(response);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApiMovies();
  }, []);

  function handleChange(event) {
    setList({ ...list, [event.target.name]: event.target.value });
    console.log(list);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const update = await axios.post(
        "https://ironrest.herokuapp.com/tulio-project-test",
        list
      );
      console.log(update);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>CREATE YOUR LIST</div>

      <form>
        <label htmlFor="owner-input">User:</label>
        <input
          id="owner-input"
          type="string"
          value={list.owner}
          name="owner"
          onChange={handleChange}
        />
        <label htmlFor="description-input">List name:</label>
        <input
          id="description-input"
          type="string"
          value={list.description}
          name="description"
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit} type="submit">
          Create
        </button>
      </form>
      <Link to={"/"} type="button" className="btn btn-primary">
        HOME PAGE
      </Link>
      <div>
        {movies.map((currentMovie) => {
          return (
            <div key={currentMovie.id}>
              <div className="card" style={{ width: "14rem" }}>
                <img
                  src={`https://themoviedb.org/t/p/w220_and_h330_face/.${currentMovie.poster_path}`}
                  className="card-img-top"
                  alt="movie poster"
                  style={{ width: "70px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "15px" }}>
                    Title: {currentMovie.original_title}
                  </h5>
                  <p className="card-text" style={{ fontSize: "10px" }}>
                    Release date: {currentMovie.release_date}
                  </p>
                  <button
                    className="btn btn-success"
                    style={{ fontSize: "10px" }}
                  >
                    ADD TO LIST
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ fontSize: "10px" }}
                  >
                    REMOVE FROM LIST
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
