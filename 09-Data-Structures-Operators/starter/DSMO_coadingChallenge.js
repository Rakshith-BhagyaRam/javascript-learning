"use strict";
/*   

/////////////////////////// CODEING CHALLENGE #1 \\\\\\\\\\\\\\\\\\\\\\\\



Coding Challenge　＃1　--> spread and rest　operator  


We're building a football betting app (soccer for my American friends �)!

Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
  players)
  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
  new array ('players1Final') containing all the original team1 players plus 
  'Thiago', 'Coutinho' and 'Perisic'
  5. Based on the game.odds object, create one variable for each odd (called 
    'team1', 'draw' and 'team2')
    6. Write a function ('printGoals') that receives an arbitrary number of player 
    names (not an array) and prints each of them to the console, along with the 
    number of goals that were scored in total (number of player names passed in)
    7. The team with the lower odd is more likely to win. Print to the console which 
    team is more likely to win, without using an if/else statement or the ternary 
    operator.
    Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
    Then, call the function again with players from game.scored
    GOOD LUCK �
    // provided Data
   
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

************************* Solutions ****************************


//1.
// const players1 = game.players[0];
// const players2 = game.players[1];
// console.log(players1,players2);

const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);

const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);

//3.
const allplayers = [...players1, ...players2];
console.log(allplayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5.

// approach 1
// const { team1 } = game.odds;
// const draw = game.odds.x;
// const { team2 } = game.odds;

// approach 2
// const {team1,x:draw,team2}=game.odds

//approach 3
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...name) {
  console.log(`${name.length} goals were scored by`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


 */

/*

///////////////////------- COADING CHALLENGE 2----------/////////////////
/// ----> for-of loop
/// ----> Optional Chaining ?
/// ---> Looping Objects: Object Keys, Values, and Entries


Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �


************************* Solutions ****************************


//1.

for (const [goal, player] of game.scored.entries()) {
  console.log(`"Goal ${goal + 1} : ${player}"`);
}

console.log(`------------------------`);

for (let i = 1; i <= game.scored.length; i++) {
  console.log(`"Goal ${i} : ${game.scored[i - 1]}"`);
}

//2.

let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
const avg = sum / Object.values(game.odds).length;
console.log(sum, avg);

//3.
for (const [team, odds] of Object.entries(game.odds)) {
  const teamstr = team === "x" ? "draw" : `victory ${game[team]}`;
  
  console.log(`odd of ${teamstr} ${odds}`);
}
const { team1, draw, team2 } = game;
console.log(team1);

for (let i = 0; i < game.odds.length; i++) {
  // const element = array[i];
}
*/

/*


///////////////////------- COADING CHALLENGE 3----------/////////////////

/// ---> Sets and Maps


Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK 😄

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
]);

//************************* Solutions ****************************

//1.

console.log("----------1---------");
const events = new Set(gameEvents.values());
console.log([...events]);
console.log(gameEvents);

//2.

console.log("----------2---------");
gameEvents.delete(64);
console.log(gameEvents);

//3

console.log("----------3---------");
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);

// bonus

console.log("--------Bonus 3.1------");
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);

//4.

console.log("----------4---------");
for (const [min, event] of gameEvents.entries()) {
  if (event === "⚽ GOAL") {
    min < 45
    ? console.log(`[first Half] ${min} :${event}  `)
    : console.log(`[Second Half] ${min} :${event}  `);
  }
}

console.log("--------Bonus 4.1------");

for (const [min, event] of gameEvents.entries()) {
  let half = min < 45 ? "First" : "Second";
  console.log(`[ ${half} Half] ${min} :${event}`);
}



///////////////////------- COADING CHALLENGE 4----------/////////////////

/// ----->  strings


Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs): 
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data! GOOD LUCK 😀

*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const text = document.querySelector("textarea").value;

//************************* Solutions ****************************

//  --------------------->  my solution <-------------------------
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  console.log(text);

  const newstring = text.split("\n");
  for (let i = 0; i < newstring.length; i++) {
    let str = [];
    const lower = newstring[i].toLowerCase();
    const splitNames = lower.split("_");
    for (const word of splitNames) {
      str.push(word[0].toUpperCase() + word.slice(1));
    }
    console.log(
      `${str
        .join("")
        .replace(str[0], str[0].toLowerCase())
        .trim()
        .padEnd(20," ")}   ${"✅".repeat(i + 1)}`
    );
  }
});

//  --------------------->  tutorial solution <-------------------------

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  console.log(text);

  const rows = text.split("\n");
  for (const [i,row] of rows.entries()) {
    const [first,second] = row.toLowerCase().trim().split("_");

const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
      console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});



// let str = [];
// const lower = string.toLowerCase();
// const splitNames = lower.split("_");
// for (const word of splitNames) {
//   str.push(word[0].toUpperCase() + word.slice(1));
// }
// console.log(str.join("").replace(str[0], str[0].toLowerCase()));
