
function showAdd(a, b) {
  const spanA = document.getElementById("a");
  const spanB = document.getElementById("b");
  
  spanA.innerHTML = a;
  spanB.innerHTML = b;

  const lineA = document.getElementById("a-line");
  const lineB = document.getElementById("b-line");
  const unit = 39;
  
  lineA.style.width = a * unit + "px";
  lineA.style.height = (a * unit) / 3 + "px";

  lineB.style.width = b * unit + "px";
  lineB.style.height = (b * unit) / 3 + "px";

  const inputA = document.getElementById("a-input");
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
  const inputB = document.getElementById("b-input");
  inputB.addEventListener("input", function(event) {
    // console.log(event.target);
    if (event.target.value != b) {
      document.querySelectorAll(".b")
        .forEach(element => element.classList.add("wrong"));
    } else {
      document.querySelectorAll(".b")
        .forEach(element => element.classList.remove("wrong"));
      event.target.disabled = true;
    }
    document.getElementById("question-mark").style.display = "none";
    document.getElementById("final-answer").style.display = "inline-block";
  });
  const finalAnswer = document.getElementById("final-answer");
  finalAnswer.addEventListener("input", function (event) {
    if (event.target.value != a + b) {
      event.target.classList.add("wrong");
    } else {
      event.target.classList.remove("wrong");
      event.target.disabled = true;
    }

   });
}

document.addEventListener("DOMContentLoaded", showAdd(8, 5));