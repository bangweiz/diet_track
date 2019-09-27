import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Profile from "./Profile";
import Statistic from "./Statistic";
import "./Sider.scss";

class Sider extends PureComponent {
  render() {
    return (
      <div className="sider">
        <Profile
          first_name={this.props.first_name}
          last_name={this.props.last_name}
          weight_kg={this.props.weight_kg}
          height_cm={this.props.height_cm}
        />
        <Statistic data={this.props.data} daily_goal={this.props.daily_goal} />
      </div>
    );
  }
}

Sider.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  weight_kg: PropTypes.number.isRequired,
  height_cm: PropTypes.number.isRequired,
  daily_goal: PropTypes.number.isRequired,
  data: PropTypes.array
}

export default Sider;
