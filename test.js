function getResult() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    let result1 = ((-b) + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let result2 = ((-b) - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    document.getElementById("result1").value = parseFloat(result1)
   document.getElementById("result2").value =  parseFloat(result2);
   
  }
  function calculate() {
    num1 = document.getElementById("num1").value; //.value;
    num2 = document.getElementById("num2").value; //.value;
    let result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").value = parseFloat(result); //parseFloat ממיר למספר את הסטרינג
  }
