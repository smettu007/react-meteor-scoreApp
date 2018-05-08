import React, { Component } from "react";
import ReactDom from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import { Players } from "./../imports/api/players";
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

    let title = "score keep";

    ReactDom.render(
      <App players={players} title={title} />,
      document.getElementById("app")
    );
  });
});
