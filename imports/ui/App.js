import React, { Component } from "react";
import TitleBar from "./TItleBar";
import AddPlayer from "./AddPlayer";
import PLayerList from "./PlayerList";
import PropTypes from "prop-types";
class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} />
        <div className="wrapper">
          <PLayerList players={this.props.players} />
          <AddPlayer score={10} />
        </div>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};
