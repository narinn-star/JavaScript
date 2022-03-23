// 이벤트 위임 (Event Delegation)
const list = document.querySelector('#list');

// 이 상태로는 아래 '일기 쓰기'에는 이벤트가 적용되지 않음.
// for (let item of list.children) {
//   item.addEventListener('click', function(e) {
//     e.target.classList.toggle('done');
//   })
// }

// 부모 요소에 이벤트 핸들러 하나만 등록해줘도 모든 자식 요소의 이벤트를 다룰 수 있음
// 문제 : 글자가 아닌 앞에 리스트 부분 (빈 부분)만 클릭해도 이벤트가 적용되는 오류가 나타남
// list.addEventListener('click', function(e) {
//   e.target.classList.toggle('done');
// })

list.addEventListener('click', function(e){
  // if(e.target.tagName === 'LI') OR
  if(e.target.classList.contains('item')) {
    e.target.classList.toggle('done');
  }
})

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);


// 이벤트 위임을 사용하면 새로운 자식요소를 추가/삭제 하더라도 이벤트에 대한 제어를 신경쓰지 않아도 되는 장점!  
// + 여러개의 핸들러를 만들지 않아도 되는 장점 + 성능에도 좋음