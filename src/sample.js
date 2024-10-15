const field = {
  land: "land",
  water: "water",
  galaxy: "galaxy",
};
const arr = [
  [
    {
      id: 1,
      name: "Goku",
      live: field.land,
    },
    {
      id: 2,
      name: "Vegita",
      live: field.galaxy,
    },
  ],
  [
    {
      id: 1,
      name: "Freiza",
      live: field.galaxy,
    },
    {
      id: 2,
      name: "Raditz",
      live: field.galaxy,
    },
    {
      id: 3,
      name: "Fish",
      live: field.water,
    },
  ],
];
let ctr = 1;
// Add age to each character
arr.forEach((subArray) => {
  subArray.forEach((character) => {
    character.age = Math.floor(Math.random() * 30) + 1;
    character.gameId = ctr;
    ctr++;
  });
});

console.log(arr);
