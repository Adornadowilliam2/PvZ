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
export const data = [
  [
    {
      name: "sunflower",
      image: sunflower,
    },
    {
      name: "peashooter",
      image: peashooter,
    },
    {
      name: "potatomine",
      image: potatomine,
    },
    {
      name: "wallnut",
      image: wallnut,
    },
    {
      name: "cherrybomb",
      image: cherrybomb,
    },
    {
      name: "snow pea",
      image: snowpea,
    },
    {
      name: "garlic",
      image: garlic,
    },
    {
      name: "chili",
      image: chili,
    },
    {
      name: "squash",
      image: squash,
    },
    {
      name: "spikeweed",
      image: spikeweed,
    },
    {
      name: "cabbage catapult",
      image: cabbagecatapult,
    },
    {
      name: "corn catapult",
      image: corncatapult,
    },
    {
      name: "tallnut",
      image: tallnut,
    },
  ],
  [
    {
      name: "zombie",
      image: zombie,
    },
    {
      name: "muzan",
      image: muzan,
    },
    {
      name: "giant",
      image: giant,
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
