// window : 전역객체 (Global Object)
console.log(window);      // == window.console.log(window);
console.log(window.innerWidth);   // == window.console.log(window.innerWidth);
console.log(window.innerHeight);  // == window.console.log(window.innerHeight);

// DOM (Document Object Model)
console.log(document);    // HTML 태그 출력
console.log(typeof document);
console.dir(document);    // 객체형태로 다양한 프로퍼티가 출력

const title = document.querySelector('#title');

// DOM을 활용하면 자바스크립트로 HTML태그를 객체처럼 자유롭게 다룰 수 있음 

// log와 dir의 차이
// log : 파라미터로 전달받은 값 위주 출력, dir : 객체의 속성을 더 자세하게 출력
// log : 파라미터로 전달된 모든 값 출력, dir : 파라미터로 전달된 값들 중 첫 번째 값만 출력
// log : 대상을 HTML 형태로 출력, dir : 대상을 객체 형태로 출력

// => 콘솔에서 값 자체를 확인하고 싶다면 log, 객체의 속성들을 살펴보고 싶다면 dir