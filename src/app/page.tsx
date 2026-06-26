import "./page.scss";
import "./components.scss";
import Link from "next/link";

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
          <ul className="sideNav">
            <li className="sideNavItem sideNavItemActive">
              <Link href="/hotel" className="sideNavLink">
                <svg className="sideNavIcon">
                  <use xlinkHref="img/sprite.svg#icon-home"></use>
                </svg>
                <span>Hotel</span>
              </Link>
            </li>
            <li className="sideNavItem">
              <a href="#" className="sideNavLink">
                <svg className="sideNavIcon">
                  <use xlinkHref="img/sprite.svg#icon-aircraft-take-off"></use>
                </svg>
                <span>Flight</span>
              </a>
            </li>
            <li className="sideNavItem">
              <a href="#" className="sideNavLink">
                <svg className="sideNavIcon">
                  <use xlinkHref="img/sprite.svg#icon-key"></use>
                </svg>
                <span>Car rental</span>
              </a>
            </li>
            <li className="sideNavItem">
              <a href="#" className="sideNavLink">
                <svg className="sideNavIcon">
                  <use xlinkHref="img/sprite.svg#icon-map"></use>
                </svg>
                <span>Tours</span>
              </a>
            </li>
          </ul>
          <div className="legal">
            &copy; 2017 by trillo. All rights reserved.
          </div>
        </nav>
        <main className="hotel-view">
          Hotel View
        </main>
      </div>
    </div>
  );
}
