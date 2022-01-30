// 메소드 (Method)

let greetings = {
  sayHello: function(name){
    console.log(`Hello ${name}!`);
  },
  sayHi: function(){
    console.log('Hi!');
  },
  sayBye: function(){
    console.log('Bye!');    //console이라는 객체에 log라는 메소드
  }
};

greetings.sayHello('Narin');
greetings['sayHello']('Narin');