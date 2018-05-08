import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TitleBar extends Component {
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string
};
TitleBar.defaultProps = {
  title: "default title"
};
