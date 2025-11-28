// 내장 객체 

let str = "hellohi@gmail.com";

console.log(str.length);  // 문자 길이
console.log(str.includes("@")); // 문자 안에 특정 문자가 포함되어 있는가 ?
console.log(str.indexOf("@")); // 해당문자가 있는 인덱스 찾기 

console.log(str.includes("!")); // 없으면 false
console.log(str.indexOf("!")); //없으면 -1

//if(str.indexOf("!") == -1); 

//substring 비파괴적 함수
console.log(str.substring(0,4)); // 특정위치 문자 잘라내기
                    // 0<= i < 4 의미 
console.log(str.substring(5,10)); // 특정 위치 문자 잘라내기 
                    // 5<= i < 10 의미
console.log(str);

//이메일 아이디 : 처음 ~ @
// 도메인 주소 : @ 다음 ~ 끝

console.log(str.indexOf("@"));
console.log(str.substring(0,str.indexOf("@")));
console.log(str.substring(str.indexOf("@")+1)); // 매개변수 하나만 쓰면 그 위치 부터 끝까지 
console.log(str.substring(str.indexOf("@")+1,str.length));


//문자에 앞뒤 공백제거 
//"abc" 가입 " abc"

let test = " abc ";
console.log("|"+ test+ "|");
console.log("|"+ test.trim()+ "|");
console.log("|"+ test+ "|");
test = test.trim();
console.log("|"+ test+ "|");

//문자 분리 split
let phone = '010-1234-5678';
let spt = phone.split("-");
console.log(spt);
console.log(spt[1]);
console.log(spt[2]);


console.log('-------------------');

//date
let today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()); // 월을 나타내는 ( 0~11 1 ~ 12월)
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getDay()); // 요일을 나타내는 ( 0~6 일월화수목금토)

console.log(Math.abs(-10)); // 절대값
console.log(Math.round(123.56)) // 반올림