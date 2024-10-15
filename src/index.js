import sunflower from "./assets/sunflower.png";
import wallnut from "./assets/wallnut.png";
import cherrybomb from "./assets/cherrybomb.png";
import potatomine from "./assets/potatomine.png";
import peashooter from "./assets/peashooter.png";
import zombie from "./assets/zombie.png";
import muzan from "./assets/michael.png";
import giant from "./assets/giant.png";
import snowpea from "./assets/snowpea.png";
import garlic from "./assets/garlic.png";
import chili from "./assets/chili.png";
import squash from "./assets/squash.png";
import corncatapult from "./assets/corncatapult.png";
import cabbagecatapult from "./assets/cabbagecatapult.png";
import tallnut from "./assets/tallnut.png";
import spikeweed from "./assets/spikeweed.png";
import puffshroom from "./assets/puffshroom.png";
import sunshroom from "./assets/sunshroom.png";
import hypnoshroom from "./assets/hypnoshroom.png";
import iceshroom from "./assets/iceshroom.png";
import doomshroom from "./assets/doomshroom.png";
const field = {
  day: "day",
  night: "night",
};
export const data = [
  [
    {
      name: "sunflower",
      image: sunflower,
      field: field.day,
    },
    {
      name: "peashooter",
      image: peashooter,
      field: field.day,
    },
    {
      name: "potatomine",
      image: potatomine,
      field: field.day,
    },
    {
      name: "wallnut",
      image: wallnut,
      field: field.day,
    },
    {
      name: "cherrybomb",
      image: cherrybomb,
      field: field.day,
    },
    {
      name: "snow pea",
      image: snowpea,
      field: field.day,
    },
    {
      name: "garlic",
      image: garlic,
      field: field.day,
    },
    {
      name: "chili",
      image: chili,
      field: field.day,
    },
    {
      name: "squash",
      image: squash,
      field: field.day,
    },
    {
      name: "spikeweed",
      image: spikeweed,
      field: field.day,
    },
    {
      name: "cabbage catapult",
      image: cabbagecatapult,
      field: field.day,
    },
    {
      name: "corn catapult",
      image: corncatapult,
      field: field.day,
    },
    {
      name: "tallnut",
      image: tallnut,
      field: field.day,
    },
    {
      name: "puff shroom",
      image: puffshroom,
      field: field.night,
    },
    {
      name: "sun shroom",
      image: sunshroom,
      field: field.night,
    },
    {
      name: "doom shroom",
      image: doomshroom,
      field: field.night,
    },
    {
      name: "ice shroom",
      image: iceshroom,
      field: field.night,
    },
    {
      name: "hypno shroom",
      image: hypnoshroom,
      field: field.night,
    },
  ],
  [
    {
      name: "zombie",
      image: zombie,
      field: field.day,
    },
    {
      name: "muzan",
      image: muzan,
      field: field.day,
    },
    {
      name: "giant",
      image: giant,
      field: field.day,
    },
  ],
];

let ctr = 1;
data.forEach((subArray) => {
  subArray.forEach((character, index) => {
    character.gameId = ctr;
    ctr++;
    character.id = index + 1;
  });
});
