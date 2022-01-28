function square(x) {
  console.log('return 전');
  return x * x;
  console.log('return 후');
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');

function printSquare(x) {
  console.log(x * x);
}

function getSquare(x) {
  return x * x;
}

printSquare(3); //9 출력
getSquare(3);   //아무것도 출력되지 않음
console.log(printSquare(3));  //undefined가 출력됨

function calculateRectangleArea(width, length){
  return width*length;
}

let area1 = calculateRectangleArea(3, 4);
let area2 = calculateRectangleArea(5, 8);
let area3 = calculateRectangleArea(7, 2);

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);