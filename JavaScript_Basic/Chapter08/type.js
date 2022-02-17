// 기본형 (Primitive Type)
let a = 3;
let b = a;

console.log(a);
console.log(b);
b = 5;
console.log(a);
console.log(b);

// 참조형 (Reference Type)
let x = {name = 'Narin'};
let y = x;

console.log(x);
console.log(y);
y.birth = 2000;
console.log(x);
console.log(y);