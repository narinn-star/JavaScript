// arguments
function printArguments(a, b, c){
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(arguments); //유사배열 출력
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
  /*
  for(const arg of arguments) {
    console.log(arg);
  }
  */
  console.log('-----------------------');
}

printArguments('Young', 'Mark', 'Koby');
printArguments('Captain');  //없는 값은 undefined
printArguments('Jayden', 'Scott');  //없는 값은 undefined
printArguments('Suri', 'Jack', 'Joy', 'Noel');  //마지막 넘친 값은 무시됨