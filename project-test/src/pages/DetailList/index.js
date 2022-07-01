import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function DetailList() {
  // const [listDetails, setListDetails] = useState([{}]);
  const [myMovies, setMyMovies] = useState([{}]);
 

  const { _id } = useParams();
  console.log(_id);

  useEffect(() => {
    async function fetchMyMovies() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/tulio-project-test/${_id}`
        );
        console.log(response);
        setMyMovies(response.data);
        // console.log(myMovies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMyMovies(_id);
  }, [_id]);

  // useEffect(() => {
  //   async function fetchDetails() {
  //     try {
  //       const response = await axios.get(
  //         "https://api.themoviedb.org/3/discover/movie?api_key=41a1e07b6755a00d6d92f63af67face9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  //       );
  //       console.log(response);
  //       setListDetails(response.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchDetails();
  // }, []);
  return (
    <div>
      {/* {myMovies.map((currentList) => { */}
        {/* return ( */}
          <div key={myMovies._id}>
            <div className="card" style={{ width: "14rem" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px" }}>
                  {myMovies.owner}'s Movie List
                </h5>
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
        {/* ); */}
      {/* })} */}
    </div>
  );
}
