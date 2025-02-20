import React from "react";
import "./_side-nav.scss";
import { useSelector } from "react-redux";
import accordionSlice from "../../Redux/Accordion/accordionSlice";
const SideNav = () => {
  const accordionData = useSelector(accordionSlice.getInitialState);
  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div class="accordion">
        {accordionData.map((accordionCattegory, index) => {
          return (
            <div class="accordion-item individual-category">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapseOne" + index}
                  aria-expanded="true"
                  aria-controls={"collapseOne" + index}>
                  <div className="category-title">
                    <a href="#">{accordionCattegory.category}</a>
                  </div>
                </button>
              </h2>
              <div
                id={"collapseOne" + index}
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    {accordionCattegory.items.map((item) => {
                      return (
                        <li className="sub-items">
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
