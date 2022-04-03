// Rest Parameter
function printArguments(...args) {
  for (const arg of args){
    console.log(arg);
  }
  console.log(args.splice(0,2));  // 
  //console.log(arguments.splice(0, 2));  // 유사배열이기 때문에 오류발생(배열 function 사용할 수 없음)
  console.log('-------------');
};

printArguments('Young', 'Mark', 'Koby');
printArguments('Captain');
printArguments('Jayden', 'Scott');
printArguments('Suri', 'Jack', 'Joy', 'Noel');


function printRank(first, second, ...others){ //일반 파라미터랑 같이 사용될 때는 마지막에 넣어야 함. 앞엔 유사배열, 뒤엔 배열로 할당되기 때문
  console.log('코드잇 레이스 최종 결과');
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for(const arg of  others){
    console.log(`참가자: ${arg}`);
  }
}

printRank('Phil', 'Won', 'Emma', 'Min', 'Luke');