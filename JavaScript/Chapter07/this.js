// this
console.log(this);  //Window 객체가 출력됨.

// const user = {
//   firstName: 'Tess',
//   lastName: 'Jang',
//   getFullName: function(){
//     return `${user.firstName} ${user.lastName}`;
//   },
// };

// console.log(user.getFullName());

// 위의 객체를 분리하기!

function getFullName(){
  //return `${user.firstName} ${user.lastName}`;
  return `${this.firstName} ${this.lastName}`;
}

const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: getFullName,
};

const admin = {
  firstName: 'Alex',
  lastName: 'Kim',
  getFullName: getFullName,
};

console.log(user.getFullName());
console.log(admin.getFullName()); //계속 user로 나오게 됨.-> this를 이용하면 admin에도 접근 가능

// ArrowFunction에서 this는 ArrowFunction이 선언되기 직전의 this값과 같게 동작함. 
//-> this 키워드 사용할 땐 일반 함수 사용하기!