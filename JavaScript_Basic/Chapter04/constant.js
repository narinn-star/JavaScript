// 상수 (constant)
const PI = 3.14;
let radius = 0;

function calculateArea(){
  return PI * radius * radius;
}

function printArea(){
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());