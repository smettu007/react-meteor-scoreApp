import React, { Component } from "react";
import { Players } from "./../api/players";
class AddPlayer extends Component {

    handleSubmit = e => {
        let playerName = e.target.playerName.value;
        e.preventDefault();
        if (playerName) {
          e.target.playerName.value = "";
          Players.insert({
            name: playerName,
            score: this.props.score
          });
        }
      };
      
  render() {
    return (
      <div className="item">
        
        <form className="form" onSubmit={this.handleSubmit}>
        
          <input className="form__input" type="text" name="playerName" placeholder="Player Name" />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
