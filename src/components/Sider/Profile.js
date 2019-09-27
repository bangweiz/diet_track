import React from "react";
import PropTypes from "prop-types";

import Avart from "../../asset/avatar.png";
import "./Profile.scss";

const Profile = props => {
  return (
    <div className="profile">
      <div className="profile-weight">
        <span className="profile-number">{props.weight_kg}</span>
        <span className="profile-unit">kg</span>
      </div>
      <img
        className="profile-avatar"
        alt="avatar"
        src={Avart}
      ></img>
      <div className="profile-height">
        <span className="profile-number">{props.height_cm}</span>
        <span className="profile-unit">cm</span>
      </div>
      <span className="profile-name">
        {props.first_name}&nbsp;
        <span className="profile-last-name">{props.last_name}</span>
      </span>
    </div>
  );
};

Header.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  weight_kg: PropTypes.number.isRequired,
  height_cm: PropTypes.number.isRequired
}

export default Profile;
