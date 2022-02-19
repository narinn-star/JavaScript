function calculateChange(payment, cost) {
  // 코드를 작성해 주세요.
  payment = payment -  cost;

    let tmp = 1;
    if(payment >= 50000){
      tmp = Math.floor(payment / 50000);
      console.log(`50000원 지폐: ${tmp}장`);
      payment -= 50000 * tmp;
    }
    else{
      console.log('50000원 지폐: 0장');
    }
    if(payment >= 10000){
      tmp = Math.floor(payment / 10000);
      console.log(`10000원 지폐: ${tmp}장`);
      payment -= 10000 * tmp;
    }
    else{
      console.log('10000원 지폐: 0장');
    }
    if(payment >= 5000){
      tmp = Math.floor(payment / 5000);
      console.log(`5000원 지폐: ${tmp}장`);
      payment -= 5000 * tmp;
    }
    else{
      console.log('5000원 지폐: 0장');
    }
    if(payment >= 1000){
      tmp = Math.floor(payment / 1000);
      console.log(`1000원 지폐: ${tmp}장`);
      payment -= 1000 * tmp;
    }
    else{
      console.log('1000원 지폐: 0장');
    }
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);

// 모범
// function calculateChange(payment, cost) {
//   // 코드를 작성해 주세요.
//   let change = payment - cost; // 거스름돈 총액

//   const fiftyCount = (change - (change % 50000)) / 50000;
//   change = change - 50000 * fiftyCount;

//   const tenCount = (change - (change % 10000)) / 10000;
//   change = change - 10000 * tenCount;

//   const fiveCount = (change - (change % 5000)) / 5000;
//   change = change - 5000 * fiveCount;

//   const oneCount = (change - (change % 1000)) / 1000;
//   change = change - 1000 * oneCount;

//   console.log(`50000원 지폐: ${fiftyCount}장`);
//   console.log(`10000원 지폐: ${tenCount}장`);
//   console.log(`5000원 지폐: ${fiveCount}장`);
//   console.log(`1000원 지폐: ${oneCount}장`);
// }

// // 테스트 코드
// calculateChange(100000, 33000);
// console.log('');
// calculateChange(500000, 378000);