import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import PropTypes from "prop-types";

import { searchFood, clearFood } from "../../actions";
import Profile from "../Sider/Profile";
import "./Header.scss";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
  }

  render() {
    return (
      <div className="header">
        <div className="header-input-group">
          <label htmlFor="search" className="header-label">
            Search:
          </label>
          <Icon type="search" className="header-icon" />
          <input
            type="text"
            className="header-input"
            id="search"
            placeholder="Search foods..."
            autoComplete="off"
            value={this.state.searchValue}
            onChange={this.change}
          />
        </div>
        <Profile
          first_name={this.props.first_name}
          last_name={this.props.last_name}
          weight_kg={this.props.weight_kg}
          height_cm={this.props.height_cm}
        />
        <div className="header-date-group">
          <span className="header-date-btn">
            <Icon type="left" onClick={this.props.prevDay} />
          </span>
          <span className="header-date-title">{this.props.date}</span>
          <span className="header-date-btn">
            <Icon type="right" onClick={this.props.nextDay} />
          </span>
        </div>
      </div>
    );
  }

  change = e => {
    e.preventDefault();
    this.setState({ searchValue: e.currentTarget.value });
    e.currentTarget.value
      ? this.props.searchFood(e.currentTarget.value)
      : this.props.clearFood();
  };
}

Header.propTypes = {
  searchFood: PropTypes.func.isRequired,
  clearFood: PropTypes.func.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  weight_kg: PropTypes.number.isRequired,
  height_cm: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  prevDay: PropTypes.func.isRequired,
  nextDay: PropTypes.func.isRequired
}

export default connect(
  null,
  { searchFood, clearFood }
)(Header);
