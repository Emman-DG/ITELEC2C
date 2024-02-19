function Movie(props) {
  const currentHour = new Date().getHours();

  const isAvailable = props.MovieObj.availableTime >= currentHour;

  return (
    <div className="movie">
      <img
        src={props.MovieObj.MvPoster}
        style={{ filter: isAvailable ? `grayscale(0)` : `grayscale(1)` }}
      ></img>
    </div>
  );
}

export default Movie;
