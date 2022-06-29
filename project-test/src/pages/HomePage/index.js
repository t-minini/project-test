import axios from "axios";

export function HomePage() {
  //lidando com promises + axios com async/await
  async function fetchApiMovies() {
    // async/await combinado com o try/catch
    try {
      const respDb = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=41a1e07b6755a00d6d92f63af67face9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      );
      // console.log(respDb.data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchApiMovies();

  return (
    <>
      <div>
        <h1>TESTE!!</h1>
      </div>
    </>
  );
}
