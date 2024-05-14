
console.log(`회원의 이름은 ${member.name}, 이메일은 ${member.email}`); //ES6 
 var multiline = ' 라인1\n라인2'; //ES5 이스케이프(역슬레시)문자 사용 
console.log(multiline); 
var multiline = `라인1라인2`; //ES6 
console.log(multiline); 
 var value1 = 1,value2 = 2; 
console.log('뎃셈의 답은 '+(value1+value2)+' 이다.'); //ES5 
console.log(`덧셈의 답은 ${value1+value2} 이다.`); //ES6 
 var boolean = false; 
console.log((boolean?'참':'거짓')+' 입니다.'); //ES5 
console.log(`${boolean?'참':'거짓'} 입니다.`); //ES6 