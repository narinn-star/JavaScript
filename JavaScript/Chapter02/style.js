// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// ele.classList : add, remove, toggle
// console.log(today.classList);
// console.log(today.children[1].classList);
const item = tomorrow.children[1];
item.classList.add('done'); //('done', 'other') 여러개 추가
item.classList.remove('done');  //('done', 'other') 여러개 제거
item.classList.toggle('done') //있으면 제거, 없으면 추가 여러개 토글은 X
// toggle 두번째 파라미터 역할 : true, false : true는 추가만, false는 제거만

// ele.className
today.children[1].className = 'done';

// style 프로퍼티
today.children[0].style.textDecoration = 'line-through'; //text-decoration은 오류
today.children[0].style.backgroundColor = '#DDDDDD';  //background-color은 오류
today.children[2].style.textDecoration = 'line-through';
today.children[2].style.backgroundColor = '#DDDDDD';