let n = 1;
while(n <= 10){
  console.log(n);
  n++;
  break;
}

for(let j = 1; j <= 10; j++){
  if(j % 2 === 0){
    continue;
  }
  console.log(j);
}