import React from "react";
import { Icon } from "antd";

import "./AddButton.scss";

const AddButton = () => {
  return (
    <span className="add-btn" onClick={focus}>
      <Icon type="plus" className="add-btn-icon" />
    </span>
  );
};

const focus = () => {
  document.getElementById("search").focus();
}

export default AddButton;
