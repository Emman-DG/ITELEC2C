function Header() {
  const currentTime = new Date();
  const enableTime = new Date();
  const disableTime = new Date();

  enableTime.setHours(12, 0, 0); // Set opening time to 12:00 PM
  disableTime.setHours(20, 0, 0); // Set closing time to 10:00 PM

  const isOpen = currentTime >= enableTime && currentTime <= disableTime;

  // {isOpen ? "We're open from 12:00 to 22:00. Come visit us or order Online" : "Sorry, we are currently closed."}
  //   <br />
  return (
    <div className="header">
      <ul>
        <img src="./disney+/disney+.png" className="dimg" />
        <li className="TopBar">
          <a href="#">Home</a>
        </li>
        <li className="TopBar">
          <a href="#">Search</a>
        </li>
        <li className="TopBar">
          <a href="#">Watchlist</a>
        </li>
        <li className="TopBar">
          <a href="#">Originals</a>
        </li>
        <li className="TopBar">
          <a href="#">Movies</a>
        </li>
        <li className="TopBar">
          <a href="#">Series</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
