import "./page.scss";
import "./components.scss";

export default function Home() {
  return (
    <div className={"container"}>
      <header className="header">
        <img src="/img/logo.png" alt="logo" className="logo" />
        <form action="#" className="search">
          <input type="text" className="searchInput" placeholder="Search hotels" />
          <button className="searchButton">
            <svg className="searchIcon">
              <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
            </svg>
          </button>
        </form>
        <nav className="userNav">
          <div className="userNavIconBox">
            <svg className="userNavIcon">
              <use xlinkHref="img/sprite.svg#icon-bookmark" />
            </svg>
            <span className="userNavNotification">7</span>
          </div>

          <div className="userNavIconBox">
            <svg className="userNavIcon">
              <use xlinkHref="img/sprite.svg#icon-chat" />
            </svg>
            <span className="userNavNotification">13</span>
          </div>

          <div className="userNavUser">
            <img src="img/user.jpg" alt="User photo" className="userNavUserPhoto" />
            <span className="userNavUserName">Jonas</span>
          </div>
        </nav>
      </header>
      <div className="content">
        <nav className="sidebar">
          Navigation
        </nav>
        <main className="hotel-view">
          Hotel View
        </main>
      </div>
    </div>
  );
}
