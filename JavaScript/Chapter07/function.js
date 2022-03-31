// 함수를 만드는 방법

// 함수 선언  //호이스팅이 가능함. (선언 전에 호출 가능)
// function 함수이름(파라미터) {
//   동작
//   return 리턴값
// }

//함수 표현식
const printCodeit = function(){
  console.log('Codeit');
};

printCodeit();

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click',function(){
  console.log('button is clicked!');
})