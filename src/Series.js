function Series(props) {
  const currentHour = new Date().getHours();

  const isAvailable = props.SeriesObj.availableTime >= currentHour;
  return (
    <div className="series">
      <img
        src={props.SeriesObj.SrsPoster}
        style={{ filter: isAvailable ? `grayscale(0)` : `grayscale(1)` }}
      ></img>
    </div>
  );
}

export default Series;
