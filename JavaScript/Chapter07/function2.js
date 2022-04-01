// 값으로서 함수
const pringJS = function (){
  console.log('JavaScript');
};

console.dir(0);
console.dir('codeit');
console.dir(true);
console.dir(null);
console.dir(undefined);
console.dir({});
console.dir([]);
console.dir(printJS);

printJS();

const myObject = {
  brand: 'Codeit',
  bornYear:2017,
  isVeryNice: true,
  sayHi: function(name){
    console.log(`Hi! ${name}`);
  }
};

myObject.sayHi('JavaScript');

const myArray = [
  'codeit',
  2017,
  true,
  function(name){
    console.log(`Hi! ${name}`);
  }
];

myArray[3]('Codeit');

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function(){
  console.log('button is clicked!');
});

// 콜백함수, 고차함수 등 함수를 다양하게 사용할 수 있는 방법이 많다..