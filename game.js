const game = ["stone", "paper", "scissor"];
const computerChoices = computerPicks();
function computerPicks() {
  let randomChoice = Math.floor(Math.random() * game.length);
  return game[randomChoice];
}
console.log(computerChoices);

