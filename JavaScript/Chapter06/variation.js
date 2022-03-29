// 변수와 스코프
var title = 'Codeit'; // 권장 X

// 호이스팅 현상 O, 중복 선언 가능, 코드블록 외에서도 변수 사용 가능(function scope)
console.log(v); // undefined
var v = '선언됨';
console.log(v); // 선언됨

// 호이스팅 현상 X, 중복 선언 불가, 코드블록 외에서는 변수 사용 불가능(block scope)
let age = 20;
const PI = 3.14;