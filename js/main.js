/**
 * to do: Mark Application
 */

let input = prompt("Enter mark");
let markInput = +input;

if (markInput >= 80 && markInput <= 100) {
  console.log("A+");
} else if (markInput >= 70 && markInput <= 79) {
  console.log("A");
} else if (markInput >= 60 && markInput <= 69) {
  console.log("A-");
} else if (markInput >= 50 && markInput <= 59) {
  console.log("B");
} else if (markInput >= 40 && markInput <= 49) {
  console.log("C");
} else if (markInput >= 33 && markInput <= 39) {
  console.log("D");
} else if (markInput >= 0 && markInput <= 32) {
  console.log("F");
} else if (markInput > 100 || markInput < 0) {
  console.log("Wrong input");
} else {
  console.log("Invalid input");
}
