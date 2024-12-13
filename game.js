const game = ["stone", "paper", "scissor"];
const computerChoices = computerPicks();
function computerPicks() {
  let randomChoice = Math.floor(Math.random() * game.length);
  return randomChoice;
}
console.log(computerChoices);
function user(choose) {
  if (game[choose] == undefined || choose > 2) {
    return "choose valid input";
  }
  console.log(`user choose: ${game[choose]}`);
  console.log(`computer choose: ${game[computerPicks()]}`);
  if (computerChoices == choose) {
    return "match tie";
  }
  if (computerChoices == 0 && choose == 1) {
    return "computer win";
  }
  if (computerChoices == 2 && choose == 1) {
    return "computer win";
  }
  if (computerChoices == 0 && choose == 2) {
    return "computer win";
  }
  return "user win";
}
let value = prompt("choose 0 for stone 1 for paper 2 for scissor");
console.log(user(value));
