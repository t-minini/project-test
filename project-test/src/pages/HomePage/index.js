import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// import { CreateLink } from "../CreateList";

export function HomePage() {
  const [myMovies, setMyMovies] = useState([{}]);

  useEffect(() => {
    async function fetchMyMovies() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/tulio-project-test"
        );
        // console.log(response);
        setMyMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMyMovies();
  }, []);


  return (
    <>
      <div>
        <Link to="/create-list" type="button" className="btn btn-primary">
          CREATE YOUR OWN LIST HERE!
        </Link>
      </div>
      <div>
        {myMovies.map((currentList) => {
          return (
            <div key={currentList.id}>
              <div className="card" style={{ width: "14rem" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "15px" }}>
                    {currentList.owner}'s Movie List
                  </h5>
                  <p className="card-text" style={{ fontSize: "10px" }}>
                    Release date: {currentList.release_date}
                  </p>
                  <Link to="/detail-list"
                  type="button"
                    className="btn btn-primary"
                    style={{ fontSize: "10px" }}
                  >
                    SEE DETAILS
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
