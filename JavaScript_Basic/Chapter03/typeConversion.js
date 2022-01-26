// 형 변환
console.log('10' + '5');
console.log(Number('10') + Number('5'));

let x = 1;                      // '', 0, Nan <- falsy
console.log(x);
console.log(Boolean(x));
console.log(typeof x);
console.log(typeof Boolean(x));

console.log('4' - true);
//자동 형변환 관계 중요

//비교 연산 (===, !==, ==, !=)
//===, !== : 일치, 불일치 : 자동 형변환 일어나지 않음 : 조금 더 안전 (형변환이 안되기 때문)
//== != : 동등, 부등 : 자동 형변환이 일어남
