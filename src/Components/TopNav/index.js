import React from "react";
import "./_top-nav.scss";

const TopNav = () => {
  return (
    <div className="header bg-dark">
      <div className="row top-nav-row">
        <div className="brand my-1">
          <h1>eStore</h1>
        </div>
        <div className="inp-container p-0 my-4 w-50 h-25 bg-white">
          <div className="dropdown m-0 p-0">
            <select className="select-btn w-100 p-0 m-0">
              <option> Men</option>
              <option> Women</option>
              <option> Kids</option>
            </select>
          </div>
          <input className="form-control" placeholder="Search..." />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="login-container">
          <i className="fa fa-user-circle" />
          <h5>
            {" "}
            <a href="#">Login</a>
          </h5>{" "}
          /{" "}
          <h5>
            <a href="#">Register</a>
          </h5>
        </div>
        <div className="cart-wishlist">
          <ul>
            <li className="list-icon">
              <i className="fa fa-heart" />
            </li>
            <li className="list-icon">
              <i className="fa fa-shopping-cart" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
