function calcSum() {
  let fruit = document.getElementById("fruit").value; //הגדרת משתנה שמכיל את הערך של הפריט שנבחר
  let kg = +document.getElementById("kg").value; //  ממיר+ הגדרת משתנה שמכיל את הערך של הכמות שנבחר
  const sum = fruit * kg;
  if (fruit === "Apple Smit") {
    //הגדרת התנאים של הפריט שנבחר
    document.getElementById(
      "sum"
    ).innerHTML = `The sum of ${kg} kg ${fruit} is ${(kg * 9.9).toFixed(2)}₪`;
  } else if (fruit === "Apple Pink") {
    document.getElementById(
      "sum"
    ).innerHTML = `The sum of ${kg} kg ${fruit} is ${(kg * 19.9).toFixed(2)}₪`;
  } else if (fruit === "Apple Hermon") {
    document.getElementById(
      "sum"
    ).innerHTML = `The sum of ${kg} kg ${fruit} is ${(kg * 14.9).toFixed(2)}₪`;
  } else if (fruit === "Bananas") {
    document.getElementById(
      "sum"
    ).innerHTML = `The sum of ${kg} kg ${fruit} is ${(kg * 6.5).toFixed(2)}₪`;
  } else if (fruit === "Water Melons") {
    document.getElementById(
      "sum"
    ).innerHTML = `The sum of ${kg} kg ${fruit} is ${(kg * 4.9).toFixed(2)}₪`;
  } else if (fruit === "Mango Maia") {
    document.getElementById(
      "sum"
    ).innerHTML = `The sum of ${kg} kg ${fruit} is ${(kg * 24.9).toFixed(2)}₪`;
  } else {
    document.getElementById(
      "sum"
    ).innerHTML = `The sum of ${kg} kg ${fruit} is ${(kg * 0).toFixed(2)}₪`;
  }
}
function logMessage() {
  switch (document.getElementById("fruit").value) {
    case "Apple Smit":
      console.log("Apple Smit");
      break;
    case "Apple Pink":
      console.log("Apple Pink");
      break;
    case "Apple Hermon":
      console.log("Apple Hermon");
      break;
    case "Bananas":
      console.log("Bananas");
      break;
    case "Water Melons":
      console.log("Water Melons");
      break;
    case "Mango Maia":
      console.log("Mango Maia");
      break;
    default:
      console.log("No fruit selected");
  }
}
