function teraToGiga(tera){
  console.log(tera + 'TB : ');
  console.log(tera * 1024 +'GB');
}

function teraToMega(tera){
  console.log(tera + 'TB : ');
  console.log(tera * 1024 * 1024 +'MB');
}

teraToGiga(2);
teraToMega(2);

function bmiCalculator(name, weight, tall){
  console.log(name + '님의 체질량지수 : ' + weight / (tall * tall / 10000));
}

bmiCalculator('A', 43.52, 160);
bmiCalculator('B', 61.25, 175);
bmiCalculator('C', 77.76, 180);

