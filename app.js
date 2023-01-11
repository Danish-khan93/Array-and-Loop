// question 1 start

// js literals decleared array
var cites = [];
// js object notation decleared array
var cites = new cites();
// string array
var cites = ["peshawar", "islmabad", "lahore", "karachi"];
// number array
var num = [1, 2, 3, 4, 5, 6, 7];
// Boolean array
var checked = [true, false];
// mixed array
var mixedArray = ["hello world", 23, true];
document.write("<h1>Qualification</h1>");
var pakistanEducationScale = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil",
  "PhD",
];
for (var i = 0; i < pakistanEducationScale.length; i++)
  document.write(i + ") " + pakistanEducationScale[i] + " <br>");
console.log(pakistanEducationScale);

// question 1 end

// question 2 start

var studentName = ["Danish", "Umair", "Arsalan"];
var scoreOfStudent = [300, 400, 450];
var totalMarks = 500;
for (var i = 0; i < studentName.length; i++) {
  document.write(
    "Score of  " +
      studentName[i] +
      " is " +
      scoreOfStudent[i] +
      " Percentage is " +
      (scoreOfStudent[i] / totalMarks) * 100 +
      "% <br>"
  );
}

// question 2 end

// question 3 start

var color = ["red", "yellow", "orange", "green"];
console.log(color);
var userColorStart = prompt("what color you want at the beginning");
color.unshift(userColorStart);
console.log(color);
var userColorEnd = prompt("what color you want at the ending");
color.push(userColorEnd);
console.log(color);
color.unshift("purpel", "gary");
console.log(color);
color.shift();
console.log(color);
color.pop();
console.log(color);
var userAddColorInArray = prompt(
  "enter the index number between 0 " + (color.length - 1)
);
var userAddColor = prompt("enter your color ");
color.splice(userAddColorInArray, 0, userAddColor);
console.log(color);
var userDelColorInArray = prompt(
  "enter the index number between 0 " + (color.length - 1)
);
var howManyColorDel = Number(prompt("how many color you want to delete "));
color.splice(userAddColorInArray, howManyColorDel);
console.log(color);
color.splice(userDelColorInArray, 1);
console.log(color);

// question 3 end

// question 4 start

var score = [320, 250, 160, 400];
console.log(score);
score.sort();
console.log(score);

// question 4 end

// question 5 start

var cities = ["karachi", "lahore", "islmabad", "peshawer", "qutta", "hydrabad"];
var selectedcites = cities.slice(1, 4);
console.log(selectedcites);

// question 5 end

// question 6 start

var arr = ["This ", " is ", " my ", " cat"];
var str = arr.join("");
console.log(str);

// question 6 end

// question 7 start

var storeInventory = ["pent", "T-shirt", "coat", "shirts", "trouser"];
console.log(storeInventory);
for (var i = 0; i < storeInventory.length + 4; i++) {
  console.log(storeInventory.shift());
}
// question 7 end

// question 8 start

var storeInventory = ["pent", "T-shirt", "coat", "shirts", "trouser"];
console.log(storeInventory);
for (var i = 0; i < storeInventory.length + 4; i++) {
  console.log(storeInventory.pop());
}

// question 8 end

// question 9 start

var select = document.getElementById("selectCompany");
var options = ["Samsung", "Nokia", "Apple", "Motorola", "Sony", "Haire"];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

// question 9 end

// question 10 start

var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// question 10 end

// question 11 start

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// question 11 end

// question 12 start

var userInput = Number(prompt("enter a number"));
document.write("table of " + userInput + "<br>");
var userDefineLength = Number(prompt("enter the length of the table"));
document.write("length of table  " + userDefineLength + "<br>");
for (var i = 1; i <= userDefineLength; i++) {
  console.log(userInput + " X " + i + " = " + userInput * i);
  document.write(userInput + " X " + i + " = " + userInput * i + " <br>");
}

// question 12 end

// question 13 start

fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  console.log("Element at Index " + i + " is " + fruits[i]);
}

// question 13 end

// question 14 start

// counting

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// revers counting

for (var i = 10; i >= 1; i--) {
  console.log(i);
}

// even

for (var i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// odd

for (var i = 0; i < 20; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// series

for (var i = 1; i < 22; i++) {
  if (i % 2 === 0) {
    console.log(i + "K");
  }
}

// question 14 end

// question 15 start

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Wellcome to the ABC Bakery What do you want sir");
var matchFound = false;
for (var i = 0; i < bakery.length; i++) {
  if (userSearch === bakery[i]) {
    matchFound = true;
    alert(
      userSearch +
        " Available at the index of " +
        bakery.indexOf(userSearch) +
        " in our Bakery"
    );
  }
}
if (matchFound === false) {
  alert("it is not in the list");
}
// question 15 end

// question 16 start

var num = [24, 53, 78, 91, 12];
var sortedNum = num.sort();
console.log(sortedNum);
var largestNum = sortedNum.pop();
console.log("the Largest number in the array is " + largestNum);
// question 16 end

// question 17 start

var num = [24, 53, 78, 91, 12];
var sortedNum = num.sort();
console.log(sortedNum);
var smallestNum = sortedNum.shift();
console.log("the Smallest number in the array is " + smallestNum);

// question 17 end

// question 18 start

var multiple = 5;
for (var i = 1; i <= 20; i++) {
  console.log(multiple * i);
}

// question 18 end
