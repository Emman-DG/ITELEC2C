function Movie(props) {
    return (
      <div className="movie">
        <img src={props.MovieObj.MvPoster}></img>
      </div>
    );
  }

export default Movie;