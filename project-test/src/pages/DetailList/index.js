import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function DetailList() {
  const [listDetails, setListDetails] = useState([{}]);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=41a1e07b6755a00d6d92f63af67face9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
        );
        console.log(response);
        setListDetails(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
  }, []);
  return (
    <div>
      {listDetails.map((currentDetail) => {
        return (
          <div key={currentDetail.id}>
            <div className="card" style={{ width: "14rem" }}>
              <img
                src={`https://themoviedb.org/t/p/w220_and_h330_face/.${currentDetail.poster_path}`}
                className="card-img-top"
                alt="movie poster"
                style={{ width: "70px" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px" }}>
                  Title: {currentDetail.original_title}
                </h5>
                <p className="card-text" style={{ fontSize: "10px" }}>
                  Release date: {currentDetail.release_date}
                </p>
                <Link
                  to="/"
                  className="btn btn-primary"
                  style={{ fontSize: "10px" }}
                >
                  HOME
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
