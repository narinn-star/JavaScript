// 참조형 복사하기 (Reference Type Copy)
// let numbers1 = [1, 2, 3];
// let numbers2 = numbers1;

// numbers2.push(4);

// console.log(numbers1);
// console.log(numbers2);

let numbers1 = [1, 2, 3];
let numbers2 = numbers1.slice();

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);

// let course1 = {
//   title: '파이썬 프로그래밍 기초',
//   language : 'Python'
// };

// let course2 = course1;

// course2.title = '알고리즘의 정석';

// console.log(course1);
// console.log(course2);

let course1 = {
  title: '파이썬 프로그래밍 기초',
  language : 'Python'
};

let course2 = Object.assign({}, course1);

course2.title = '알고리즘의 정석';

console.log(course1);
console.log(course2);