function factorial(n){
  let result = 1;
  
  if(n == 0 || n == 1){
    result = 1;
  }
  else{
    for(let i = 1; i <= n; i++){
      result = result*i;
    }
  }

  return result;
}

console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));