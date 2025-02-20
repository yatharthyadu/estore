import React, { useEffect } from "react";
import "./_cat-nav.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../Redux/Category/action";

const CatNav = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  console.log(categories);
  return (
    <div className="cat-nav-container container">
      <ul>
        {categories.map((category) => {
          return (
            <li className="list-items">
              <a href="#">{category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CatNav;
