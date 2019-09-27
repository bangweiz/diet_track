import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Icon, Spin } from "antd";
import PropTypes from "prop-types";

import {
  targetFood,
  clearTargetFood,
  addFood,
  clearFood
} from "../../actions/index";
import { isEmpty } from "../../utils/isEmpty";
import "./DetailModal.scss";

class DetailModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      serves: 1.0,
      meal: "breakfast",
      grams: 0,
      cal: 0
    };
    this.selectRef = React.createRef();
  }

  componentDidMount() {
    if (!this.props.target.nix_brand_id) {
      this.props.targetFood(this.props.target.food_name, "common");
    } else {
      this.props.targetFood(this.props.target.nix_item_id, "branded");
    }
  }

  componentDidUpdate(prevPro) {
    if (prevPro.item !== this.props.item && this.props.item) {
      this.setState({
        grams: this.props.item.serving_weight_grams,
        cal: Math.floor(this.props.item.nf_calories)
      });
    }
  }

  componentWillUnmount() {
    this.props.clearTargetFood();
  }

  render() {
    if (isEmpty(this.props.item)) {
      return <Spin className="item-modal-spinner" size="large" />;
    } else {
      return (
        <div className={`item-modal ${this.props.visibility ? "active" : ""}`}>
          <div>
            <img
              src={this.props.item.photo.thumb}
              alt={this.props.item.food_name}
              className="item-image"
            />
            <span className="item-title">{this.props.item.food_name}</span>
            <Icon
              type="close"
              className="close-btn"
              onClick={this.toggleModal}
            />
          </div>
          <div className="item-amount-container">
            <div className="item-amount">
              <span className="item-amount-label">Servings</span>
              <span className="item-amount-input">{this.state.serves}.0</span>
              <span className="item-amount-unit">
                {this.props.item.serving_unit}
              </span>
              <Icon
                type="up"
                className="item-amount-up"
                onClick={this.addOne}
              />
              <Icon
                type="down"
                className="item-amount-down"
                onClick={this.removeOne}
              />
            </div>
            <div className="item-weight">
              <span className="item-number">{this.state.grams}</span>
              <span className="item-unit">grams</span>
            </div>
            <div className="item-cal">
              <span className="item-number">{this.state.cal}</span>
              <span className="item-unit">calories</span>
            </div>
          </div>
          <div className="form">
            <form onSubmit={this.submit}>
              <span className="item-span">add to today</span>
              <Icon
                type="down"
                className="item-input-icon"
                onClick={this.focus}
              />
              <select
                className="item-input"
                name="meal"
                onChange={this.change}
                value={this.state.meal}
                ref={this.selectRef}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
              </select>
              <button className="add-btn" type="submit">
                ADD
              </button>
            </form>
          </div>
        </div>
      );
    }
  }

  toggleModal = () => {
    this.props.toggleModal("");
  };

  focus = () => {
    this.selectRef.current.focus();
  };

  change = e => {
    this.setState({ meal: e.target.value });
  };

  addOne = () => {
    this.setState({
      serves: this.state.serves + 1,
      grams: this.props.item.serving_weight_grams + this.state.grams,
      cal: Math.floor(this.props.item.nf_calories) + this.state.cal
    });
  };

  removeOne = () => {
    let { serves } = this.state;
    serves = serves > 0 ? serves - 1 : 0;
    this.setState({
      serves,
      grams: this.props.item.serving_weight_grams * serves,
      cal: Math.floor(this.props.item.nf_calories) * serves
    });
  };

  submit = e => {
    e.preventDefault();
    if (this.state.serves > 0) {
      this.props.addFood({
        food_name: this.props.item.food_name,
        meal_type: this.state.meal,
        nf_calories: this.state.cal,
        serving_qty: this.state.serves,
        serving_size: 1,
        serving_unit: this.props.item.serving_unit,
        serving_weight_grams: this.state.grams,
        thumb: this.props.item.photo.thumb
      });
    }
    this.toggleModal();
    this.props.clearFood();
    this.props.goToToday();
  };
}

const mapStateToProps = state => ({
  item: state.target
});

DetailModal.propTypes = {
  targetFood: PropTypes.func.isRequired,
  clearTargetFood: PropTypes.func.isRequired,
  addFood: PropTypes.func.isRequired,
  clearFood: PropTypes.func.isRequired,
  goToToday: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  target: PropTypes.object.isRequired,
  visibility: PropTypes.bool.isRequired
}

export default connect(
  mapStateToProps,
  { targetFood, clearTargetFood, addFood, clearFood }
)(DetailModal);
