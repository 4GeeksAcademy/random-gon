function generateCard() {
  const suits = ["spade", "club", "heart", "diamond"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const cardElement = document.getElementById("card");
  cardElement.className = `card ${randomSuit}`;
  cardElement.innerHTML = `${randomValue} ${getCardSymbol(randomSuit)}`;
}

function getCardSymbol(suit) {
  switch (suit) {
    case "spade":
      return "♠";
    case "club":
      return "♣";
    case "heart":
      return "♥";
    case "diamond":
      return "♦";
    default:
      return "";
  }
}

function resizeCard() {
  const cardElement = document.getElementById("card");
  const width = document.getElementById("cardWidth").value;
  const height = document.getElementById("cardHeight").value;

  if (width) cardElement.style.width = `${width}px`;
  if (height) cardElement.style.height = `${height}px`;
}
