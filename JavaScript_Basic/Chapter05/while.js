// while 반복문
let i = 30;

while(i % 7 !== 0){
  i++;
}

console.log(i);

//N의 약수 구하기
const N = 30;

let cnt = 0;
let tmp = 1;
while(tmp <= N){
  if(N % tmp === 0){
    cnt++;
    console.log(tmp);
  }
  tmp++;
}

console.log(`${N}의 약수는 총 ${cnt}개입니다.`);