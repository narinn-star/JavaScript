// String
let myString = 'Hi Narin';

// 문자열 길이
console.log(myString.length); //length 프로퍼티 (공백 포함)

// 요소 접근
console.log(myString[3]); //대괄호 표기법
console.log(myString.charAt(3));  //charAt 메소드

// 요소 탐색 (탐색할 요소가 없으면 -1 반환)
console.log(myString.indexOf('i'));   //앞 부터 탐색
console.log(myString.lastIndexOf('i'));   //뒤 부터 탐색

// 대소문자 변환
console.log(myString.toUpperCase());  //대문자
console.log(myString.toLowerCase());  //소문자

// 양 끝 공백 제거 (공백이 있을 시)
console.log(myString.trim());   //trim 메소드

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 2)); //0부터 1까지
console.log(myString.slice(3)); //3부터 끝까지
console.log(myString.slice()); //문자열 전체

// for..of문
for(let str of myString){
  console.log(str);
}