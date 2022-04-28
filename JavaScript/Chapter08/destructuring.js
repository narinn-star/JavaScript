// 구조 분해 (Destructuring)  배열이나 객체의 구조를 분해하는 문법

const rank = ['효준', '유나', '민환', '재하', '규식'];

// const macbook = rank[0];  //효준
// const ipad = rank[1]; //유나
// const airpods = rank[2];  //민환
// const coupon = rank[3]; //재하

const [macbook, ipad, airpods, coupon] = rank;  // 배열 크기와 갯수가 같지 않아도 되지만, 순서는 맞춰야 함
//const [macbook, ipad, airpods, ...coupon] = rank; // 효준(macbook), 유나(ipad), 민환(airpods), 재하(coupon), 규식(coupon)
//const [macbook, ipad, airpods, coupon] = rank; // (rank에 효준, 유나, 민환만 있을 때) : 효준(macbook), 유나(ipad), 민환(airpods), undefined(coupon)
//const [macbook, ipad, airpods, coupon = '없음'] = rank; // (rank에 효준, 유나, 민환만 있을 때) : 효준(macbook), 유나(ipad), 민환(airpods), 없음(coupon)

console.log(macbook);
console.log(ipad);
console.log(airpods);
console.log(coupon);

let mac = '효준';
let pad = '유나';
console.log('MacBook 당첨자 : ', mac);
console.log('iPad 당첨자 : ', pad);
// swap 할 때
[mac, pad] = [pad, mac];

console.log('MacBook 당첨자 : ', mac);
console.log('iPad 당첨자 : ', pad);

// const macbook = {
//   title: '맥북 프로 16형',
//   price: 3690000,
//   memory: '16GB',
//   storage: '1TB SSD 저장 장치',
//   display: '16형 Retina 디스플레이',
// };