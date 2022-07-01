import { Link, useParams } from "react-router-dom";
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

  const { _id } = useParams();

  async function handleDelete() {
    try {
      const response = await axios.delete(
        `https://ironrest.herokuapp.com/tulio-project-test/${_id}`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

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
            <div key={currentList._id}>
              <div className="card" style={{ width: "14rem" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "15px" }}>
                    {currentList.owner}'s Movie List
                  </h5>
                  <Link
                    to={`/detail-list/${currentList._id}`}
                    type="button"
                    className="btn btn-primary"
                    style={{ fontSize: "10px" }}
                  >
                    SEE DETAILS
                  </Link>
                </div>
                <div>
                  <button
                    onClick={handleDelete}
                    className="btn btn-danger"
                    style={{ fontSize: "10px" }}
                  >
                    REMOVE LIST
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
