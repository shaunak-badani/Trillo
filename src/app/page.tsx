import "./page.scss";
import "./components.scss";
import "./layout.scss";
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
          <div className="gallery">
            <figure className="galleryItem">
              <img src="img/hotel-1.jpg" alt="Photo of hotel 1" className="galleryPhoto" />
            </figure>
            <figure className="galleryItem">
              <img src="img/hotel-2.jpg" alt="Photo of hotel 1" className="galleryPhoto" />
            </figure>
            <figure className="galleryItem">
              <img src="img/hotel-3.jpg" alt="Photo of hotel 1" className="galleryPhoto" />
            </figure>
          </div>
          <div className="overview">
            <h1 className="overviewHeading">Hotel Las Pasmas</h1>
            <div className="overviewStars">
              <svg className="overviewIconStar">
                <use xlinkHref="img/sprite.svg#icon-star"></use>
              </svg>
              <svg className="overviewIconStar">
                <use xlinkHref="img/sprite.svg#icon-star"></use>
              </svg>
              <svg className="overviewIconStar">
                <use xlinkHref="img/sprite.svg#icon-star"></use>
              </svg>
              <svg className="overviewIconStar">
                <use xlinkHref="img/sprite.svg#icon-star"></use>
              </svg>
              <svg className="overviewIconStar">
                <use xlinkHref="img/sprite.svg#icon-star"></use>
              </svg>
            </div>
            <div className="overviewLocation">
              <svg className="overviewIconLocation">
                <use xlinkHref="img/sprite.svg#icon-location-pin"></use>
              </svg>
              <button className="btnInline">
                Albufeira, Portugal
              </button>
            </div>
            <div className="overviewRating">
              <div className="overviewRatingAverage">8.6</div>
              <div className="overviewRatingCount">429 votes</div>
            </div>
          </div>
          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
              </p>
              <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>
              <ul className="list">
                <li className="listItem">Close to the beach</li>
                <li className="listItem">Breakfast included</li>
                <li className="listItem">Free airport shuttle</li>
                <li className="listItem">Free wifi in all rooms</li>
                <li className="listItem">Air conditioning and heating</li>
                <li className="listItem">Pets allowed</li>
                <li className="listItem">We speak all languages</li>
                <li className="listItem">Perfect for faimilies</li>

              </ul>
              <div className="recommend">
                <p className="recommendCount">
                  Lucy and 3 other friends recommend this hotel.
                </p>
                <div className="recommendFriends">
                  <img src="img/user-3.jpg" alt="Friend 1" className="recommendPhoto" />
                  <img src="img/user-4.jpg" alt="Friend 2" className="recommendPhoto" />
                  <img src="img/user-5.jpg" alt="Friend 3" className="recommendPhoto" />
                  <img src="img/user-6.jpg" alt="Friend 4" className="recommendPhoto" />
                </div>
              </div>
            </div>
            <div className="userReviews">
              <figure className="review">
                <blockquote className="reviewText">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                </blockquote>
                <figcaption className="reviewUser">
                  <img src="img/user-1.jpg" alt="User 1" className="reviewPhoto" />
                  <div className="reviewUserBox">
                    <p className="reviewUserName">Nick Smith</p>
                    <p className="reviewUserDate">Feb 23rd, 2017</p>
                  </div>
                  <div className="reviewRating">7.8</div>
                </figcaption>
              </figure>

              <figure className="review">
                <blockquote className="reviewText">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                </blockquote>
                <figcaption className="reviewUser">
                  <img src="img/user-2.jpg" alt="User 2" className="reviewPhoto" />
                  <div className="reviewUserBox">
                    <p className="reviewUserName">Mary Thomas</p>
                    <p className="reviewUserDate">Sept 13, 2017</p>
                  </div>
                  <div className="reviewRating">9.3</div>
                </figcaption>
              </figure>

              <button className="btnInline">
                Show all <span>&rarr;</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
