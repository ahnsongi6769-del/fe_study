//operator 연산자

let x = 10;
let y = 10;
let z = '10';
console.log(x+y);
console.log(x-y);
console.log(2 ** 4); // 2*2*2*2


// == , ====

console.log( x== y); // 값이 같은가 
console.log (x == z);

console.log( x === y); // 값 + 타입(자료형)이 같은가 
console.log (x === z );

console.log(x > 5 && y >0);
console.log(x ==1 || y === '0');

let q= 10;
let w = '20';
let e = 30;

console.log(q+e);
console.log(q+w+e); // 문자타입은 연산 x , 뒤에 이어 붙여진다.


//형변환 
//String()
//Number()

console.log(q+String(e));
console.log(q + Number(w) +e);
console.log(Number('123.442'));
console.log(Number('12223'));


if(q == 10 ){
    console.log('10확인 출력') // q 가 10 이면 이거 출력 
}

q == 11 && console.log('&& 11확인 출력');
q == 10 && console.log('&& 10확인 출력');

// true && true ' end 연산자' 앞이 참이면, 뒤에가 실행됨 거짓이면 실행안됨 
// false || true 'or 연산자' 앞이 거짓,참 상관없이 뒤가 실행됨  