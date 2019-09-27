import React from "react";
import PropTypes from "prop-types";

import "./ResultItem.scss";

const ResultItem = ({ item, toggleModal }) => {
  return (
    <div className="result-item" onClick={() => toggleModal(item)}>
      <img
        src={item.photo.thumb}
        alt={item.food_name}
        className="result-image"
      />
      <span className="result-title">{item.food_name}</span>
    </div>
  );
};

ResultItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired
}

export default ResultItem;
