const arr = [
  [
    {
      id: 1,
      name: "Goku",
    },
    {
      id: 2,
      name: "Vegita",
    },
  ],
  [
    {
      id: 1,
      name: "Freiza",
    },
    {
      id: 2,
      name: "Raditz",
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
