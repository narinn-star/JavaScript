// 숫자 표기법
let millionaire = 1000000000;
let myNumber = 1e9;   //지수 표기법

console.log(millionaire);
console.log(myNumber);

console.log(25e5 === 2500000);    //10의 거듭제곱(5)만큼 곱함 
console.log(16e-5 === 0.00016);   //10의 거듭제곱(5)만큼 나눔

// 16진법 (Hexadecimal)
let hex1 = 0xff;  //255
let hex2 = 0xFF;  //255

// 8진법 (Octal)
let octal = 0o377;  //255

// 2진법 (binary numeral system)
let binary = 0b11111111;  //255

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);

// toFixed(0 ~ 100)
let myNumber2 = 0.3591;
console.log(myNumber2.toFixed(3));  //0.359 -> 문자열로 리턴됨! Number(myNumber2.toFixed(3))으로 형변환 해서 사용하기
                                                              //+myNumber2.toFixed(3)과 같음
// toString(2 ~ 36)
console.log(myNumber2.toString(2)); //진법 변화 -> 문자열로 리턴
//console.log(255.toString(2)) -> 소수점으로 인식해서 메소드 호출이 안됨
//console.log(255..toString(2)) -> 정수에서 바로 메소드 호출할 때는 점 두개 또는 괄호를 사용

// 절댓값 : Math.abs(x) : x의 절댓값 리턴
// 최댓값 : Math.max(여러 수 파라미터로 넘김) : 여러 수 중 가장 큰 값 리턴
// 최솟값 : Math.min(여러 수 파라미터로 넘김) : 여러 수 중 가장 작은 값 리턴
// 거듭제곱 : Math.pow(x, y) : x의 y승 리턴
// 제곱근 : Math.sqrt(x) : x의 제곱근 리턴
// 반올림 : Math.round(x) : x의 반올림된 값 리턴
// 버림과 올림 : Math.floor(x), Math.ceil(x) : x의 버림 값, 올림 값 각각 리턴
// 난수 : Math.random() : 0이상 1 미만의 값이 랜덤으로 리턴