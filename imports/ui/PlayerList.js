import React, { Component } from "react";
import Player from "./Player";
import PropTypes from "prop-types";
import FlipMove from "react-flip-move";

class PlayerList extends Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message item__message--empty">
            Add you first player to get started
          </p>
        </div>
      );
    } else {
      return this.props.players.map(function(player) {
        return (
          <Player
            key={player._id}
            score={player.score}
            name={player.name}
            playerId={player._id}
          />
        );
      });
    }
  }
  render() {
    return (
      <div>
        <FlipMove duration={450} easing="ease-out" maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

export default PlayerList;

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
