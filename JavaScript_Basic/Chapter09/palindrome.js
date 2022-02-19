function isPalindrome(word) {
  // 여기에 코드를 입력해 주세요.
  let arr = [];
  let res = [];
  for(let a of word){
    arr.push(a);
    res.push(a);
  }
  arr.reverse();
  return (JSON.stringify(arr) === JSON.stringify(res))
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));