// AND와 OR의 연산 방식
console.log('Codeit' && 'JavaScript');

// 왼쪽 값이 true이면 오른쪽 값을 리턴, 왼쪽 값이 false이면 그대로 왼쪽 값을 리턴
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// 왼쪽 값이 true이면 그대로 왼쪽 값을 리턴, 왼쪽 값이 false이면 오른쪽 값을 리턴
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(null && undefined); // null
console.log(0 || true); // true
console.log('0' && NaN);  // NaN
console.log({} || 123); // {}

function print(value){
  const message = value || 'Codeit';  //value가 false이면 오른쪽 값인 Codeit 리턴

  console.log(message);
}

print();
print('JavaScript');