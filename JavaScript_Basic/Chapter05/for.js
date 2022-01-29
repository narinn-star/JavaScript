// for 반복문
for(let i = 1; i <= 10; i++){
  console.log(i + ' 이얍!');
}

for(let i = 2; i <= 20; i += 2){
  console.log(i);
}

function printTriangle(height) {
  let message = '';
  for (let i = 0; i < height; i++) {
    message += '*';
    console.log(message);
  }
}

// function printTriangle(height) {
// 	for(let i = 1; i <= height; i++){
// 	    console.log('*'.repeat(i));
// 	}
// }

console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);