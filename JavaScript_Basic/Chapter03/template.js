// 템플릿 문자열
let year = 2000;
let month = 5;
let day = 16;

console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.');
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간, 최종 급여는 ${total}원`);
}

calcWage('A', 200, 11340);
calcWage('B', 170, 12160);
calcWage('C', 160, 13070);
calcWage('D', 220, 10980);