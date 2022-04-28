// 구조 분해 (Destructuring)

// 배열에서 활용
function getArray() {
  return ['컴퓨터', '냉장고', '세탁기'];
}

const [el1, el2, el3] = getArray();

console.log(el1);
console.log(el2);
console.log(el3);


//function printWinners(...arg){
function printWinners([book, i, air, ...cou]) {
  //const [book, i, air, ...cou] = arg;

  console.log('이벤트 결과');
  console.log(`book의 주인공은 '${book}'님`);
  console.log(`i의 주인공은 '${i}'님`);
  console.log(`air 주인공은 '${air}'님`);
  console.log('수강권 주인공은');

  for (let student of cou) {
    console.log(`'${student}'님`);
  }
  console.log(`이상 총 ${cou.length}명 입니다.`);
}

// printWinners('효준', '효신', '재훈', '소원', '현승', '종훈');
const ranks = ['효준', '효신', '재훈', '소원', '현승', '종훈'];
printWinners(ranks);

// 객체에서 활용
function getObject() {
  return {
    이름: '코드잇',
    탄생: 2017,
    직업: '프로그래밍 강사',
  }
};

const { 이름: brand, 탄생, 직업 } = getObject();

console.log(brand);
console.log(탄생);
console.log(직업);

const products = {
  title: '맥북 프로 16형',
  price: 3690000,
  color: 'silver',
};

//function printSummary(object){
function printSummary({ 상품, 색상, 가격 }) {
  //const {상품, 색상, 가격} = object;

  console.log(`선택 상품 : ${상품}`);
  console.log(`색상 : ${색상}`);
  console.log(`가격 : ${가격}`);
  // console.log(`선택 상품 : ${object.title}`);
  // console.log(`색상 : ${object.color}`);
  // console.log(`가격 : ${object.price}`);
};

printSummary(products);

// 이벤트 리스너에서 활용
const btn = document.querySelector('#btn');

//btn.addEventListener('click', (event) => {
btn.addEventListener('click', ({ target }) => {
/*event.*/target.classList.toggle('checked');
});