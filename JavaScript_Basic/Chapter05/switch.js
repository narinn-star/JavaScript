// switch 조건문
let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택');
    break;
  case 2:
    console.log('고양이를 선택');
    break;
  case 3:
    console.log('코알라를 선택');
    break;
  case 4:
    console.log('강아지를 선택');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.'); 
}
// switch문은 암시적 형 변환을 허용하지 않기 때문에 switch문을 if else 문으로 대체할 때, 조건식에서 등호를 반드시 3개 입력해야한다.