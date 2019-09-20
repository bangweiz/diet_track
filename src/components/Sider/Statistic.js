import React, { PureComponent } from "react";
import { connect } from "react-redux";

import "./Statistic.scss";

class Statistic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      totalCal: 0,
      breakfast: 0,
      lunch: 0,
      dinner: 0,
      snack: 0,
      percentage: 0
    };
    this.barRef = React.createRef();
    this.perRef = React.createRef();
  }

  componentDidUpdate(prevProp) {
    if (this.props !== prevProp) {
      if (this.props.data.length === 0) {
        this.calculate(this.props.savedFood);
      } else {
        this.calculate(this.props.data);
      }
    }
  }

  render() {
    return (
      <div className="statistic">
        <div className="statistic-cal">
          <div className="statistic-cal-consumed">
            <span className="number">{this.state.totalCal} Cal</span>
            <span className="description">consumed</span>
          </div>
          <div className="statistic-cal-goal">
            <span className="number">{this.props.daily_goal} Cal</span>
            <span className="description">daily goal</span>
          </div>
        </div>
        <div className="statistic-percentage">
          <span className="progress-bar">
            <span ref={this.barRef} className="progress-bar-before"></span>
          </span>
          <span ref={this.perRef} className="number">{this.state.percentage}%</span>
        </div>
        <div className="statistic-meal">
          <div className="statistic-meal-common">
            <span className="number">{this.state.breakfast}</span>
            <span className="meal">Breakfast</span>
          </div>
          <div className="statistic-meal-common">
            <span className="number">{this.state.lunch}</span>
            <span className="meal">Lunch</span>
          </div>
          <div className="statistic-meal-common">
            <span className="number">{this.state.dinner}</span>
            <span className="meal">Dinner</span>
          </div>
          <div className="statistic-meal-common">
            <span className="number">{this.state.snack}</span>
            <span className="meal">Snack</span>
          </div>
        </div>
      </div>
    );
  }

  calculate = items => {
    let totalCal = 0;
    let breakfast = 0;
    let lunch = 0;
    let dinner = 0;
    let snack = 0;
    let percentage = 0;

    items.forEach(item => {
      switch (item.meal_type) {
        case "breakfast": {
          breakfast += item.nf_calories;
          totalCal += item.nf_calories;
          break;
        }
        case "lunch": {
          lunch += item.nf_calories;
          totalCal += item.nf_calories;
          break;
        }
        case "dinner": {
          dinner += item.nf_calories;
          totalCal += item.nf_calories;
          break;
        }
        case "snack": {
          snack += item.nf_calories;
          totalCal += item.nf_calories;
          break;
        }
        default: {
          break;
        }
      }
    });
    percentage = Math.floor((totalCal / this.props.daily_goal) * 100);
    this.barRef.current.style.width = percentage > 100 ? '100%' : (percentage + '%');
    this.perRef.current.style.marginLeft = `${(2.88 * percentage) > 288 ? 280 : (2.88 * percentage)}px`;
    this.setState({ totalCal, breakfast, lunch, dinner, snack, percentage });
  }
}

const mapStateToProps = state => ({
  savedFood: state.savedFood
});

export default connect(
  mapStateToProps,
  {}
)(Statistic);
