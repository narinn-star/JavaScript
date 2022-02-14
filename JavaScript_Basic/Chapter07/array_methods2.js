let mem = ['rabbit', 'bear', 'frog', 'monkey', 'cat'];  //length : 5

console.log(mem);

// 배열의 첫 요소 삭제 _ shift()
mem.shift();
console.log(mem);

// 배열의 마지막 요소 삭제 _ pop()
mem.pop();
console.log(mem);

// 배열의 첫 요소로 값 추가 _ unshift(value)
mem.unshift('dog');
console.log(mem);

// 배열의 마지막 요소로 값 추가 _ push(value)
mem.push('horse');
console.log(mem);

// 배열 특정 값 찾기 _ indexof(value), lastIndexOf(value) : index 리턴

// 배열 내 특정 값 있는지 확인하기 _ includes(value) : true/false 리턴

// 배열 뒤집기 _ reverse()