let member = ['rabbit', 'bear', 'frog', 'monkey', 'cat'];  //length : 5

console.log(member);

// splice
//member.splice(1);      //1번부터 모두 사라짐
//member.splice(1, 1);   //1번만 삭제
//member.splice(1, 2);   //1번부터 2번까지 사라짐
member.splice(1, 1, 'dog', 'pig');    //1번 지우고 1번 : dog, 2번 : pig 넣음 
console.log(member);
member.splice(1, 0, 'horse', 'duck');    // 아무것도 삭제하지 않고 1번에 horse, 2번에 duck 넣음
console.log(member);