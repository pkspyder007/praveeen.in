const cardColors = [
  "#1a9561",
  "#3f3bd8",
  "#fd9b01",
  "#9fa8bb",
  "#50919f",
  "#1655e7",
  "#fac473",
];

// random card color
const we = document.querySelectorAll("#work .card-container");

we.forEach((card, i) => {
  card.style.backgroundColor = cardColors[i];
});

const projects = document.querySelectorAll("#projects .card-container");

projects.forEach((card, i) => {
  card.style.backgroundColor = cardColors[cardColors.length - i - 1];
});
