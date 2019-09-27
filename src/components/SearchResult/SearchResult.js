import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addFood } from "../../actions/index";
import ResultItem from "./ResultItem";
import DetailModal from "./DetailModal";
import "./SearchResult.scss";

class SearchResult extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      common: [],
      branded: [],
      modalVisibility: false,
      targetItem: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { common, branded } = this.props.searchResults;
      this.setState({ common, branded });
    }
  }

  render() {
    if (this.state.common.length > 0 || this.state.branded.length > 0) {
      return (
        <>
          <div className="result-list">
            <div>
              <span className="result-category">Common</span>
              {this.renderList(this.state.common)}
            </div>
            <div>
              <span className="result-category">Braded</span>
              {this.renderList(this.state.branded)}
            </div>
          </div>
          {this.state.modalVisibility && (
            <DetailModal
              visibility={this.state.modalVisibility}
              target={this.state.targetItem}
              toggleModal={this.toggleModal}
              goToToday={this.props.goToToday}
            />
          )}
          <div
            className={`shield ${this.state.modalVisibility ? "active" : ""}`}
            onClick={this.close}
          />
        </>
      );
    } else {
      return null;
    }
  }

  renderList = items => {
    return items.map((item, index) => {
      return (
        <ResultItem key={index} item={item} toggleModal={this.toggleModal} />
      );
    });
  };

  toggleModal = item => {
    this.setState({
      modalVisibility: !this.state.modalVisibility,
      targetItem: item
    });
  };

  close = () => {
    this.setState({ modalVisibility: false, common: [], branded: [] });
  };
}

const mapStateToProps = state => ({
  searchResults: state.food
});

SearchResult.propTypes = {
  searchResults: PropTypes.array,
  addFood: PropTypes.func.isRequired,
  goToToday: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { addFood }
)(SearchResult);
