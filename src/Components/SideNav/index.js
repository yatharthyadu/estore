import React, { useEffect, useState } from "react";
import "./_side-nav.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Category/action";
import {
  filterByPrice,
  filterProducts,
} from "../../Redux/Product/productSlice";

const SideNav = () => {
  const dispatch = useDispatch();
  const fetchProductData = useSelector((state) => state.pr);
  const [products, setProducts] = useState();
  const [minPriceLimit, setMinPricelimit] = useState(10);
  const [maxPriceLimit, setMaxPricelimit] = useState(130);

  const accordionData = useSelector(
    (state) => state.categoryReducer.categories
  );

  useEffect(() => {
    if (!accordionData.length) {
      dispatch(getCategories());
    }
  }, [dispatch, accordionData]);

  const filterData = (selectedCategory) => {
    const payload = { selectedCategory, products };
    dispatch(filterProducts(payload));
  };

  const setPriceLimit = (e, stateFlag) => {
    if (stateFlag === "max") {
      setMaxPricelimit(e.target.value);
    } else if (stateFlag === "min") {
      setMinPricelimit(e.target.value);
    }
  };

  const applyPriceFilter = () => {
    const payload = { products, minPriceLimit, maxPriceLimit };
    dispatch(filterByPrice(payload));
  };

  // console.log(minPriceLimit)

  useEffect(() => {
    setProducts(fetchProductData.products);
  }, [fetchProductData.status]);

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion py-3">
        {accordionData.map((accordionCategory, index) => {
          if (accordionCategory.parent_category_id == null) {
            return (
              <div className="accordion-item individual-category" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseOne${index}`}
                    aria-expanded="true"
                    aria-controls={`collapseOne${index}`}>
                    <div className="category-title">
                      <a href="#">{accordionCategory.category}</a>
                    </div>
                  </button>
                </h2>
                <div
                  id={`collapseOne${index}`}
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <ul>
                      {accordionData
                        .filter(
                          (subCategory) =>
                            subCategory.parent_category_id ===
                            accordionCategory.id
                        )
                        .map((subCategory, subIndex) => (
                          <li className="sub-items" key={subIndex}>
                            <a href="#" onClick={() => filterData(subCategory)}>
                              {subCategory.category}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="price-filter-container">
        <div className="accordion-title">
          <h3>Filter by Price</h3>
        </div>
        <div>
          <label>Min : {minPriceLimit}</label>
          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e) => setPriceLimit(e, "min")}
          />
        </div>
        <div>
          <label>Max :{maxPriceLimit}</label>

          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e) => setPriceLimit(e, "max")}
          />
        </div>
        <button
          onClick={applyPriceFilter}
          className="btn btn-outline-dark my-3">
          Apply filter
        </button>
      </div>
    </div>
  );
};

export default SideNav;
