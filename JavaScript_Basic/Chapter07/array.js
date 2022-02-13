// 배열 (Array)
let courseRanking = [
  '자바스크립트 프로그래밍 기초',
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파ㅣ썬 프로그래밍 기초'
];

// indexing  (0 ~ ...)
console.log(courseRanking[0]);


let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

// for(let data in dataType){
//   console.log(dataType[data]);
// }

for(let i = 0; i < 6; i++){
  console.log(dataType[i]);
}

// 배열 요소 다루기
let members = ['rabbit', 'bear', 'frog', 'monkey', 'cat'];  //length : 5

console.log(members.length);
members[6] = 'dog';
console.log(members);         // ['rabbit', 'bear', 'frog', 'monkey', 'cat', empty, 'dog']
delete members[6];
console.log(members);         // ['rabbit', 'bear', 'frog', 'monkey', 'cat', empty × 2]
