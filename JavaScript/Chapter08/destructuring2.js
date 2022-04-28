// 구조 분해 (Destructuring)
const macbooks = {
  titles: '맥북 프로 16형',
  price: 3690000,
  memory: '16GB',
  storage: '1TB SSD 저장 장치',
  display: '16형 Retina 디스플레이',
};

// const titles = macbooks.titles;
// const price = macbooks.price;
//const {titles, price} = macbooks;
const {titles, price, ...rest} = macbooks;
// const {titles: product, ... rest} = macbooks; => 오류, console.log(product);로 해야함.

console.log(titles);
console.log(price);
console.log(rest);

const propertyNames = 'titles';
const { [propertyNames]: product } = macbooks;

console.log(product);