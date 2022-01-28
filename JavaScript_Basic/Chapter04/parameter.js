function sayHello(name){
  console.log(`안녕하세요 ${name}님!`);
}

sayHello('A');
sayHello('B');
sayHello('C');
sayHello();

console.log(sayHello('Hi'));

// 옵셔널 파라미터
function introduce(name, age, national = '한국'){
  console.log(`이름 ${name}`);
  console.log(`나이 ${age}`);
  console.log(`국적 ${national}`);
}

introduce('A', 4, '미국');
introduce('B', 4);