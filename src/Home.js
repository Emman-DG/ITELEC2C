import { MovieData } from "./MoviesData.js";
import Movie from "./Movies.js";
import { SeriesData } from "./SeriesData.js";
import Series from "./Series.js";
import { WatchedData } from "./WatchedData.js";
import Watched from "./Watched.js";

function Home() {
  return (
    <div>
      <div>
        <img src="./disney+/wandavision.jpg" className="spic" />
      </div>

      <h1>Movies</h1>
      <div className="flex">
        {MovieData.map((movie) => (
          <div className="card">
            <Movie MovieObj={movie} />
          </div>
        ))}
      </div>

      <h1>Series</h1>
      <div className="flex">
        {SeriesData.map((series) => (
          <div className="card">
            <Series SeriesObj={series} />
          </div>
        ))}
      </div>

      <h1>Watched</h1>
      <div className="flex">
        {WatchedData.map((watched) => (
          <div className="card">
            <Watched WatchedObj={watched} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
