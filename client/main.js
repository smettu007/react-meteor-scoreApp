import React, { Component } from "react";
import ReactDom from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import { Players,calculatePlayerPositions } from "./../imports/api/players";
import App from "../imports/ui/App";

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find(
      {},
      {
        sort: {
          score: -1
        }
      }
    ).fetch();  

    let positionPlayers = calculatePlayerPositions(players);
    console.log(players)
    console.log(positionPlayers)
    let title = "score keep";

    ReactDom.render(
      <App players={positionPlayers} title={title} />,
      document.getElementById("app")
    );
  });
});
