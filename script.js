
function showAddition() {
  const spanA = document.getElementById("a"),
    spanB = document.getElementById("b"),
    inputA = document.getElementById("a-input"),
    inputB = document.getElementById("b-input"),
    finalAnswer = document.getElementById("final-answer"),
    lineA = document.getElementById("a-line"),
    lineB = document.getElementById("b-line"),
    unit = 39;
  
  const a = getRandomInt(6, 9);
  const b = getRandomInt(11 - a, 14 - a);
  
  inputA.value = "";
  inputB.value = "";
  finalAnswer.value = "";
  
  spanA.innerHTML = a;
  spanB.innerHTML = b;

  lineA.style.width = a * unit + "px";
  lineA.style.height = (a * unit) / 3 + "px";

  lineB.style.width = b * unit + "px";
  lineB.style.height = (b * unit) / 3 + "px";

  
  inputA.addEventListener("input", function(event) {
    // console.log(event.target);
    if (event.target.value != a) {
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
    // console.log(event.target);
    if (event.target.value != b) {
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
    if (event.target.value != a + b) {
      event.target.classList.add("wrong");
    } else {
      event.target.classList.remove("wrong");
      event.target.disabled = true;
    }
   });
}

function getRandomInt(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", showAddition());