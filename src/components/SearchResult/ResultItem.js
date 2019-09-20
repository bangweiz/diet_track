import React from "react";

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

export default ResultItem;
