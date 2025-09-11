/*
1. prompt and alert
  - NOT recommended in real code! We're using it temporarily until we learn the better technique.
2. conditionals. What are the results of different variations of dayTrained and paidAttention?
3. How can we improve this code? Transition to next block.
*/
{
  alert(
    "Your final exam draws near... A mysterious orb hovers in the center of campus. In order to graduate, you must cast a spell strong enough to charge the orb with magical energy."
  );
  const daysTrained = prompt("How many days will you train for?");
  const paidAttention = prompt("Did you pay attention in class? Y/N");
  alert(`You trained for ${daysTrained} grueling days...`);

  if (daysTrained >= 15 && paidAttention === "Y") {
    alert("Your power level is 9001!");
    alert("You cast your spell...");
    alert("The orb shines brightly. You pass!");
  } else if (daysTrained > 10 || paidAttention === "Y") {
    alert("Your power level is 300!");
    alert("You cast your spell...");
    alert("The orb glows dimly. You barely pass!");
  } else {
    alert("Your power level is 10!");
    alert("You cast your spell...");
    alert("The orb does not react. Try again next year!");
  }
}

// Encapsulation with functions
// Transition to next block.
{
  alert(
    "Your final exam draws near... A mysterious orb hovers in the center of campus. In order to graduate, you must cast a spell strong enough to charge the orb with magical energy."
  );
  const daysTrained = prompt("How many days will you train for?");
  const paidAttention = prompt("Did you pay attention in class? Y/N");
  alert(`You trained for ${daysTrained} grueling days...`);

  // We can use functions to encapsulate code and give it a descriptive name
  // This makes our code easier to read & closer to natural language
  if (daysTrained >= 15 && paidAttention === "Y") {
    passExam();
  } else if (daysTrained > 10 || paidAttention === "Y") {
    barelyPassExam();
  } else {
    failExam();
  }

  // Functions are hoisted, which means they can be used anywhere in the file.
  function passExam() {
    alert("Your power level is 9001!");
    alert("You cast your spell...");
    alert("The orb shines brightly. You pass!");
  }

  function barelyPassExam() {
    alert("Your power level is 300!");
    alert("You cast your spell...");
    alert("The orb glows dimly. You barely pass!");
  }

  function failExam() {
    alert("Your power level is 10!");
    alert("You cast your spell...");
    alert("The orb does not react. Try again next year!");
  }
}

/*
  Functions can take input and return output, which allows us to reuse code.
  This block is more lines of code than what we started with.
  LOC is not always the desired metric.
  Readability, modularity, maintainability, etc are also important!
*/
{
  alert(
    "Your final exam draws near... A mysterious orb hovers in the center of campus. In order to graduate, you must cast a spell strong enough to charge the orb with magical energy."
  );
  const daysTrained = prompt("How many days will you train for?");
  const paidAttention = prompt("Did you pay attention in class? Y/N");
  alert(`You trained for ${daysTrained} grueling days...`);

  const power = getPowerLevel(daysTrained, paidAttention);
  takeExam(power);

  // Distinguish between these parameters and the previous variables!
  function getPowerLevel(daysTrained, paidAttention) {
    let power;
    if (daysTrained >= 15 && paidAttention === "Y") {
      power = 9001;
    } else if (daysTrained > 10 || paidAttention === "Y") {
      power = 300;
    } else {
      power = 10;
    }
    alert(`Your power level is ${power}!`); // Review template literals
    return power; // What happens if we alert but don't return?
  }

  function takeExam(power) {
    alert("You cast your spell...");

    // We can update more than one variable in a conditional
    let orbStatus;
    let result;
    if (power > 9000) {
      orbStatus = "shines brightly";
      result = "You pass";
    } else if (power > 300) {
      orbStatus = "glows dimly";
      result = "You barely pass";
    } else {
      orbStatus = "does not react";
      result = "Try again next year";
    }

    alert(`The orb ${orbStatus}. ${result}!`);
  }
}
