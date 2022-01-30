// 내장 객체 _ Date 객체
let myDate = new Date();

console.log(myDate); //Date 객체를 생성한 시간 출력

let myDate1 = new Date(1000);  //1970.01.01 00:00:00 UTC + 1초
console.log(myDate1);

// new Date('YYYY-MM-DD')
let myDate2 = new Date('2000-05-16');
console.log(myDate2);

// new Date('YYYY-MM-DDThh:mm:ss')
let myDate3 = new Date('2000-05-16T23:01:43');
console.log(myDate3);

// new Date(YYYY, MM, DD, hh, mm, ss, ms)     //YYYY, MM까지만 필수 생략시 1, 0, 0, 0으로 초기화, month는 0부터 11까지
let myDate4 = new Date(2000, 4, 16, 23, 01, 43);
console.log(myDate4);

//Date.getTime()
console.log(myDate4.getTime());               //1970년 1월 1일 00:00:00 UTC부터 몇 밀리초 지났는지? => 타임스탬프