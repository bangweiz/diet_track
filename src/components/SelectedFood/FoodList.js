import React from "react";
import PropTypes from "prop-types";

import "./FoodList.scss";

const FoodList = ({ target }) => {
  return (
    <div className="foodlist-item">
      <img
        className="foodlist-image"
        alt={target.food_name}
        src={target.thumb}
      ></img>
      <div className="foodlist-main">
        <div className="foodlist-main-info">
          <span className="foodlist-main-name">{target.food_name}</span>
          <span className="foodlist-main-number">
            {target.serving_qty} {target.serving_unit} ({target.serving_weight_grams}g)
          </span>
        </div>
        <div className="foodlist-main-info">
          <span className="foodlist-main-cal">{target.nf_calories} Cal</span>
          <span className="foodlist-main-category">{target.meal_type}</span>
        </div>
      </div>
    </div>
  );
};

FoodList.propTypes = {
  target: PropTypes.object.isRequired
}

export default FoodList;
