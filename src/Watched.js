function Watched(props) {
  const currentHour = new Date().getHours();

  const isAvailable = props.WatchedObj.availableTime >= currentHour;

  return (
    <div className="watched">
      <img
        src={props.WatchedObj.WatchedPoster}
        style={{ filter: isAvailable ? `grayscale(0)` : `grayscale(1)` }}
      ></img>
    </div>
  );
}

export default Watched;
