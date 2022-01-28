// Scope : 범위, 영역
function myFunction(){
  let x = 3;      //지역 변수, 함수 내에서만 존재
  console.log(x);
}

myFunction();
//console.log(x) : 오류, 함수 안에서만 x가 존재.