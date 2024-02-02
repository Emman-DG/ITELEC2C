function Header() {
    return (
      <div className="header">
        <ul>
            <img src="./disney+/disney+.png" className="dimg"/>
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