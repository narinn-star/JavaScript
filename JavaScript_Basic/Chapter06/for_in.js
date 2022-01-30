//for .. in (객체 안에 있는 property를 이용해 반복문을 사용)
let codeit = {
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: '자바스크립트 프로그래밍 기초'
}

for(let key in codeit){
  console.log(key)
  console.log(codeit[key])
}