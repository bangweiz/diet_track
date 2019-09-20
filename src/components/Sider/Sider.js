import React, { PureComponent } from "react";

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

export default Sider;
