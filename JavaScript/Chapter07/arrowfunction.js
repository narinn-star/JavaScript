// Arrow Function (이름이 없는 익명 함수)
// const getTwice = function(number){
//   return number * 2;
// };

// const getTwice = (number) => {
//   return number * 2;
// };

const getTwice = (number) => number * 2;  //return 문 외에 다른 것이 필요하다면 이처럼 생략 불가능.

console.log(getTwice(5));

// const myBtn = document.querySelector('#myBtn');

// myBtn.addEventListener('click', function(){
//   console.log('button is clicked!');
// });

// const myBtn = document.querySelector('#myBtn');

// myBtn.addEventListener('click', () => {
//   console.log('button is clicked!');
// });

// ArrowFunction에는 Arguments가 없음!! 

