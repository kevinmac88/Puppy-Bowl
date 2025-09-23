const surpriseBtn = document.querySelector("#surprise");
const usernameInput = document.querySelector("#username");
const dataForm = document.querySelector("form");
const cheatCodeInput = document.querySelector("#cheatcode");

// State variable - array to keep the cheatcode keypresses
const cheatCode = [];
const correctCheatCode = [38, 40, 38, 40];
cheatCodeInput.addEventListener("keydown", (e) => {
  cheatCode.push(e.keyCode);
  console.log(cheatCode);
  if (cheatCode.length === 4) {
    for (let i = 0; i < cheatCode.length; i++) {
      if (cheatCode[i] !== correctCheatCode[i]) {
        alert("sorry wrong code");
        return;
      }
    }
    alert("You get 30 lives");
  }
});

surpriseBtn.addEventListener("click", function () {
  alert("SURPRISE!");
});

usernameInput.addEventListener("change", (e) => {
  console.log(e);
  console.log(e.target.value);
});

dataForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // submit to server, look at response
  alert("Notice the inputs are still populated!");
});
