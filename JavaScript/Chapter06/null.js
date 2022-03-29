// null 병합 연산자 ??
const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'Codeit' ?? 'JavaScript';  // Codeit

console.log(example1, example2, example3);  // I love Codeit

const title1 = null || 'codeit'; 
const title2 = null ?? 'codeit';

console.log(title1);  //codeit
console.log(title2);  //codeit;

const title3 = false || 'codeit';
const title4 = false ?? 'codeit';

console.log(title3);  //codeit
console.log(title4);  //false;
