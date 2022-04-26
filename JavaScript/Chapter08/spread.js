//Spread 구문 (Spread Syntax)
const numbers = [1,2,3];

console.log(...numbers);  // 1, 2, 3으로 출력됨
console.log(1, 2, 3);

//rest 파라미터와는 조금 다름을 알아야 함
const sumAll = (...args) => {
  let sum = 0;
  for(arg of args){
    sum += arg;
  }
  return sum;
}

console.log(sumAll(1, 2, 3, 4));

// 객체 참조
const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing];
//const interactiveWeb = webPublishing.slice();

interactiveWeb.push('JavaScript');

console.log(webPublishing);
console.log(interactiveWeb);

// 합치기
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr4 = arr1.concat(arr2);
console.log(arr4);

// 함수 호출할 때 Argument로 사용
const introduce = (name, birth, job) => {
  console.log('안녕하세요! 반갑습니다');
  console.log(`저는 ${name}입니다.`);
  console.log(`${birth}년 생이고`);
  console.log(`직업은 ${job}입니다.`);
  console.log('잘 부탁드립니다 :)');
};

const myArr = ['코드잇', 2017, '프로그래밍 강사'];
introduce(...myArr);

// 배열을  펼쳐 객체로 만들면? _ 배열의 인덱스가 프로퍼티의 네임이 됨
const members = ['태호', '종훈', '우재'];
const newObject = {...members};
console.log(newObject);