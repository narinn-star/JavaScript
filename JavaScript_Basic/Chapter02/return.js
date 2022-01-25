// return 문
function getTwo(){
  return 2;
}

console.log(getTwo());
console.log(2);

let x = 10;
let y = 20;

function myFunction(a, b) {
  return a + b;
}

let myAnswer = myFunction('x', 'y');

console.log(myAnswer);

// 실습
function interestCalculator(myMoney, saveTerm, interestRate){
  return myMoney * saveTerm * interestRate / 100;
}

let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

console.log('맡긴 금액은 ' + myMoney + '원');
console.log('이자는 ' + myInterest + '원');
console.log('최종 받을 금액은 ' + totalMoney + '원');