function ignoreFirst(first, ...others){
  let len = others.length;
  for(let i = 0; i < len; i++){
    console.log(others[i]);
  }
}


ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);