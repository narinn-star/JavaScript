// if, else, if else 조건문
let temperature = 1;

if (temperature <= 0) {
  console.log('물이 업니당');
} else if (temperature < 100) {
  console.log('물이 얼지도 끓지도 않습니당');
} else if (temperature < 150) {
  console.log('물이 끓습니당');
} else {
  console.log('물이 끓습니당');
}

// 학점 계산 예제
function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
	let grade;
  if(totalScore >= 90){
    grade = 'A';
  } else if(totalScore >= 80){
    grade = 'B';
  } else if(totalScore >= 70){
    grade = 'C';
  } else if(totalScore >= 60){
    grade = 'D';
  } else{
    grade = 'F';
  }
  console.log(grade);
}

printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);