// showTitle 함수를 완성해 주세요.
function showTitle(e) {
	// 여기에 코드를 작성해 주세요.
  if(e.target.dataset.title) {  //이벤트 객체의 target 프로퍼티에 담긴 요소에 data-title 속성의 값을 가지고 있는지 확인
    const span = document.createElement('span');
    span.classList.add('title');
    span.textContent = e.target.dataset.title;
    e.target.append(span);
  }
}

// removeTitle 함수를 완성해 주세요.
function removeTitle(e) {
	// 여기에 코드를 작성해 주세요.
  if(e.target.dataset.title){
    e.target.lastElementChild.remove();
  }
}

const house = document.querySelector('.map');

// '대상'과 '타입'을 수정해 주세요.
house.addEventListener('mouseover', showTitle);
house.addEventListener('mouseout', removeTitle);