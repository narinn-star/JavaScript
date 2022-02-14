// 다차원 배열 (multidimensional array)
let twoDimensional = [[1, 2], [3, 4]];

console.log(twoDimensional[0][1]);

let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

// 여기에 코드를 작성해 주세요.
for(let i = 0; i < groups.length; i++){
  teams[0].push(groups[i][0]);
}

for(let j = 0; j < groups.length; j++){
  teams[1].push(groups[j][1]);
}

// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);