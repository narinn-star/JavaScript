// 함수 실행 순서
function sayHello(){
  console.log('Hello');
  console.log('Welcome to CodeIt!');
}

console.log('함수 호출 전');
sayHello();
console.log('함수 호출 후');


function logParticipant(name){
  console.log(`${name}(이)가 대화에 참여했습니다.`);
}

logParticipant('동수');
logParticipant('윤하');
logParticipant('재준');
logParticipant('동훈');
logParticipant('영희');
logParticipant('신욱');