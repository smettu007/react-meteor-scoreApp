import {Mongo} from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

// export const Players = [
//     {
//       _id: "1",
//       name: "Lauren",
//       score: 99
//     },
//     {
//       _id: "2",
//       name: "Cory",
//       score: -1
//     },
//     {
//       _id: "3",
//       name: "Andrew",
//       score: -12
//     }
//   ];