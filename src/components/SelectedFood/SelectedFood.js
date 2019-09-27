import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FoodList from "./FoodList";
import "./SelectedFood.scss";

class SelectedFood extends PureComponent {
  constructor(props) {
    super(props);
    this.siderRef = React.createRef();
  }

  componentDidMount() {
    if (document.body.clientWidth >= 768) {
      this.siderRef.current.style.height = `${document.body.clientHeight - 128}px`;
    }
  }

  render() {
    return (
      <div className="food" ref={this.siderRef}>
        {this.renderList(this.props.savedFood)}
      </div>
    );
  }

  renderList = items => {
    if(this.props.data.length === 0) {
      if(items.length > 0 ) {
        return items.map((item, index) => {
          return <FoodList key={index} target={item} />
        });
      } else {
        return null;
      }
    } else {
      return this.props.data.map((item, index) => {
        return <FoodList key={index} target={item} />
      });
    }
  }
}

const mapStateToProps = state => ({
  savedFood: state.savedFood
});

FoodList.propTypes = {
  savedFood: PropTypes.array,
  data: PropTypes.array
}

export default connect(
  mapStateToProps,
  {}
)(SelectedFood);
