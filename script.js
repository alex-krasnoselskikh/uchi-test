
function showAddition() {
  const spanA = document.getElementById("a"),
    spanB = document.getElementById("b"),
    inputA = document.getElementById("a-input"),
    inputB = document.getElementById("b-input"),
    finalAnswer = document.getElementById("final-answer"),
    lineA = document.getElementById("a-line"),
    lineB = document.getElementById("b-line"),
    unit = 39;
  
  const numberA = getRandomInt(6, 9);
  const numberB = getRandomInt(11 - numberA, 14 - numberA);
  
  inputA.value = "";
  inputB.value = "";
  finalAnswer.value = "";
  
  spanA.innerHTML = numberA;
  spanB.innerHTML = numberB;

  lineA.style.width = numberA * unit + "px";
  lineA.style.height = (numberA * unit) / 3 + "px";

  lineB.style.width = numberB * unit + "px";
  lineB.style.height = (numberB * unit) / 3 + "px";

  
  inputA.addEventListener("input", function(event) {
    if (event.target.value != numberA) {
      document.querySelectorAll(".a")
        .forEach(element => element.classList.add("wrong"));
    } else {
      document.querySelectorAll(".a")
        .forEach(element => element.classList.remove("wrong"));
      event.target.disabled = true;
      lineB.style.display = "block";
    }
  });
  
  inputB.addEventListener("input", function(event) {
    if (event.target.value != numberB) {
      document.querySelectorAll(".b")
        .forEach(element => element.classList.add("wrong"));
    } else {
      document.querySelectorAll(".b")
        .forEach(element => element.classList.remove("wrong"));
      event.target.disabled = true;
      document.getElementById("question-mark").style.display = "none";
      finalAnswer.style.display = "inline-block";
    }

  });

  finalAnswer.addEventListener("input", function (event) {
    if (event.target.value != numberA + numberB) {
      event.target.classList.add("wrong");
    } else {
      event.target.classList.remove("wrong");
      event.target.disabled = true;
    }
   });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", showAddition());