// DOM 트리
const myTag = document.querySelector('#list-1');

console.log(myTag);
console.log(myTag.parentElement.nextElementSibling);

// 형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 부모 요소 노드
console.log(myTag.parentElement);

// 자식 요소 노드
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);

// 요소 노드 프로퍼티

// innerHTML : 요소 노드 내부의 HTML 코드를 문자열로 리턴
// console.log(myTag.innerHTML);
// myTag.innerHTML += '<li>Exotic</li>';

// outerHTML : 요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴
// console.log(myTag.outerHTML);
// myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>';

// textContent : HTML 태그 부분 제외한 텍스트만 리턴
console.log(myTag.textContent);
myTag.textContent = 'new Text';