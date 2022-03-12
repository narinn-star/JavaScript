// id로 태그 선택하기 : document.getElementById('id값');
const myNumberTag = document.getElementById('myNumber');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function() {
  myNumber--;
  myNumberTag.textContent = myNumber;
};

increaseBtn.onclick = function() {
  myNumber++;
  myNumberTag.textContent = myNumber;
};

// class로 태그 선택하기 : document.getElementsByClassName('class이름');
// 여러 태그를 한꺼번에 선택할 때 사용
const colorBtns = document.getElementsByClassName('color-btn');

for (let btn of colorBtns) {
  // 이벤트 핸들링(Event Handling)
  btn.onclick = function() {  // 이벤트 핸들러(Event Handler)
    myNumberTag.style.color = btn.dataset.color;
  };
}

// 태그 이름으로 태그 선택하기 : document.getElementsByTagName('태그이름');

// css 선택자로 태그 선택하기 : document.querySelector('#myNumber' OR '.color-btn');
// document.querySelectorAll('.color-btn'); 