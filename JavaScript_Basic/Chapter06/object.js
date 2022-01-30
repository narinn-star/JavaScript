// 객체, object
// 속성, Property (Property Name / Property Value)
// Property Name : String형   //PropertyValue : 모든 자료형

let github = {
  brandName: '깃허브',
  bornYear: 2000,
  'is VeryNice': true,
  worstRepository: null,
  bestRepository: {
    title : 'JavaScript Programming',
    language: 'JavaScript'
  }
};

console.log(typeof(github));

// 프로퍼티 접근
// 점 표기법 (objectName.propertyName) _ Property Name이 따옴표로 묶여있을 경우엔 사용불가능
console.log(github.bornYear);

// 대괄호 표기법 (objectName['propertyName])
console.log(github['is VeryNice']);

// 변수 생성
let propertyName = 'brandName';
console.log(github[propertyName]);

// 객체 안의 객체 접근
console.log(github.bestRepository.title);
console.log(github.bestRepository['language']);

// 객체 수정하기
console.log('수정 전 : ' + github.brandName);
github.brandName = 'gitHub';
console.log('수정 후 : ' + github.brandName);

// 객체 추가하기
console.log('추가 전 : ' + github.ceo);
github.ceo = '이나린';
console.log('추가 후 : ' + github.ceo);

// 객체 삭제하기
console.log('삭제 전 : ' + github.worstRepository);
delete github.worstRepository;
console.log('삭제 후 : ' + github.worstRepository);

// in 연산자
console.log('bestRepository' in github);   // => console.log(github.bestRepository !== undefined);