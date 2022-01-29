let cnt1 = 1;
let pre = 0;
let cur = 1;
let last = 0;

while(cnt1 <= 50){
  if(cnt1 === 1){
    console.log(1);
  }
  else{
    last = pre + cur;
    pre = cur;
    cur = last;
    console.log(last)
  }
  cnt1++;
}