function getResult() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  let result1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  let result2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  if (isNaN(result1)) {
    result1 = "לא קיים";
  }
  if (isNaN(result2)) {
    result2 = "לא קיים";
  }
  document.getElementById(
    "result"
  ).innerHTML = `<h3>x1=${result1}, x2=${result2}</h3>`;
  // "x1: " + result1 + ", x2: " + result2;
}
function fade() {
  let result = document.getElementById("result");
  result.classList.add("fade");
}
function calculate() {
  num1 = document.getElementById("num1").value; //.value;
  num2 = document.getElementById("num2").value; //.value;
  let result = parseFloat(num1) + parseFloat(num2);
  document.getElementById("resultOfExrcise1").value = parseFloat(result); //parseFloat ממיר למספר את הסטרינג
}
