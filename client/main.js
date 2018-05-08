import React from "react";
import ReactDom from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
//this is branch section3
import { Players } from "./../imports/api/players";

const renderPlayers = function(playersList) {
  return playersList.map(function(player) {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => Players.update({_id:player._id},{$inc:{score:1}})}>+1</button>
        <button onClick={() => Players.update({_id:player._id},{$inc:{score:-1}})}>-1</button>
        <button onClick={() => Players.remove(player._id)}>X</button>
      </p>
    );
  });
};
const handleSubmit = e => {
  let playerName = e.target.playerName.value;
  e.preventDefault();
  if (playerName) {

    e.target.playerName.value="";
    Players.insert({
      name:playerName,
      score:0
    })
  }
};
Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();

    let title = "score keep";
    let name = "mike";
    let jsx = (
      <div>
        <p>Hello</p>

        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDom.render(jsx, document.getElementById("app"));
  });
});
