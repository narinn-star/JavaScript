// 모던한 프로퍼티 표기법

// = 객체의 프로퍼티를 좀 더 간결하게 표현하는 방법
// const user = {
//   title: 'Codeit',
//   birth: 2017,
//   job: '프로그래밍 강사'
// };

const title = 'Codeit';
const birth = 2017;
const job = '프로그래밍 강사';

const user = {
  title, // == title: title,
  birth, // == birth: birth,
  job,   // == job: job,
};

console.log(user);

// 함수에서도 가능! (객체 외부)
function getFullName(){
  return `${this.firstName} ${this.lastName}`;
};

const user2 = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName, // == getFullName: getFullName,
};

const admin = {
  firstName: 'Alex',
  lastName: 'Kim',
  getFullName, // == getFullName: getFullName,
};

console.log(user2.getFullName());
console.log(admin.getFullName());

// (객체 내부)
const user3 = {
  firstName:'Tess',
  lastName: 'Jang',
  getFullName2(){ // == getFullName2: function() { ... }
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user3.getFullName2());

// 프로퍼티 네임을 표현식으로 나타내는 방법
// 계산된 속성명 (computed property namd)
const user4 = {
  //[표현식]: 값, // 표현식의 값을 프로퍼티로 쓸 수 있게 됨
  ['Code' + 'it']: 'value',
};

console.log(user4);

const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'Name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};

console.log(codeit);