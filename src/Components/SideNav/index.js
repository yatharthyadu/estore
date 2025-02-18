import React from "react";
import "./_side-nav.scss";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div class="accordion">
        <div class="accordion-item individual-category">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              <div className="category-title">
                <a href="#">Men</a>
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li className="sub-items">
                  <a href="#">Coats</a>
                </li>
                <li className="sub-items">
                  <a href="#">Boots</a>
                </li>
                <li className="sub-items">
                  <a href="#">Party Wear</a>
                </li>
                <li className="sub-items">
                  <a href="#">Shirts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
