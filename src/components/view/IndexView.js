import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../Header/Header";
import Sider from "../Sider/Sider";
import SelectedFood from "../SelectedFood/SelectedFood";
import AddButton from "../common/AddButton";
import SearchResult from "../SearchResult/SearchResult";
import "./IndexView.scss";

class IndexView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { date: "Today", data: [] };
  }

  render() {
    const {
      first_name,
      last_name,
      weight_kg,
      height_cm,
      daily_goal
    } = this.props.diet;

    return (
      <div className="App">
        <Header
          first_name={first_name}
          last_name={last_name}
          weight_kg={weight_kg}
          height_cm={height_cm}
          prevDay={this.prevDay}
          nextDay={this.nextDay}
          date={this.state.date}
        />
        <div className="content">
          <Sider
            data={this.state.data}
            first_name={first_name}
            last_name={last_name}
            weight_kg={weight_kg}
            height_cm={height_cm}
            daily_goal={daily_goal}
          />
          <SelectedFood data={this.state.data} />
        </div>
        <SearchResult goToToday={this.goToToday} />
        <AddButton />
      </div>
    );
  }

  goToToday = () => {
    this.setState({ date: "Today", data: [] });
  };

  prevDay = () => {
    switch (this.state.date) {
      case "Today": {
        this.setState({
          date: "Yesterday",
          data: this.props.diet.data_points[1].intake_list
        });
        break;
      }
      case "Yesterday": {
        this.setState({
          date: "TDBY",
          data: this.props.diet.data_points[2].intake_list
        });
        break;
      }
      case "TDBY": {
        this.setState({ date: "Today", data: [] });
        break;
      }
      default: {
        break;
      }
    }
  };

  nextDay = () => {
    switch (this.state.date) {
      case "Today": {
        this.setState({
          date: "TDBY",
          data: this.props.diet.data_points[2].intake_list
        });
        break;
      }
      case "Yesterday": {
        this.setState({ date: "Today", data: [] });
        break;
      }
      case "TDBY": {
        this.setState({
          date: "Yesterday",
          data: this.props.diet.data_points[1].intake_list
        });
        break;
      }
      default: {
        break;
      }
    }
  };
}

const mapStateToProps = state => ({
  diet: state.diet
});

IndexView.propTypes = {
  diet: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  {}
)(IndexView);
