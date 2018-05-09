import React, { Component } from "react";
import { Players } from "../api/players";
import PropTypes from "prop-types";

class Player extends Component {
  render() {

    let itemClassName = `item item--position-${this.props.playerRank}`

    return (
      <div className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.name}</h3>
            <p className="player__stats"> {this.props.playerPosition} place {this.props.score} point(s).</p>
          </div>

          <div className="player__actions">
            <button
              className="button button--round"
              onClick={() =>
                Players.update(
                  { _id: this.props.playerId },
                  { $inc: { score: 1 } }
                )
              }
            >
              +1
            </button>
            <button
              className="button button--round"
              onClick={() =>
                Players.update(
                  { _id: this.props.playerId },
                  { $inc: { score: -1 } }
                )
              }
            >
              -1
            </button>
            <button
              className="button button--round"
              onClick={() => Players.remove(this.props.playerId)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;

Player.propTypes = {
  score: PropTypes.number,
  playerId: PropTypes.string,
  name: PropTypes.string
};
