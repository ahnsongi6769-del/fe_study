//java 배열 
// new int [3]
//동적으로 사용하는 것 ArrayList .add .remove


//js 배열 처리 할 때 유용한 기능들
/*
shift   : 앞 삭제  파괴적
unshift : 앞 추가  파괴적

pop     : 뒤 삭제  파괴적
push    : 뒤 추가  파괴적
*/

let arr = [1,2,3];
console.log(arr);
arr.unshift(10);
console.log(arr);
arr.push(30);
console.log(arr);
arr.shift();
arr.pop();
console.log(arr);

//concat 배열 연결 -> 비파괴적인 함수 
let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));
arr1 = arr1.concat(arr2); // 비파괴적 함수로 원본을 바꾸고 싶으면 "다시 저장"
console.log(arr1);

//파괴적 함수 : 함수 실행 후 원본에 영향이 가면 파괴적
//비파괴적 함수 : 함수 실행 후 원본에 영향이 없으면 비파괴적

// ... 전개연산자
let arr3 = [...arr2];
console.log(arr2);
console.log(arr3);
arr3[0] = 99;
console.log(arr2);
console.log(arr3);

//깊은 복사 : 값 자체를 통으로 새롭게 복사
// 얕은 복사 : 바라보는 주소만 복사

let x = [1,2,3];
let y = x;
let z = [...x];
console.log(x);
console.log(y);
console.log(z);

x[2] = 88;
console.log(x);
console.log(y);
console.log(z);

//let q = [...x]; // x 에 있는 값을 깊은 복사해서 q에 저장 
let q = [10,20,...x,30,40]; // 깊은 복사하면서 값 추가도 동시에 할 수 있다. 
console.log(q);

//splice 함수
//특정 위치에 추가 또는 삭제할 수 있는 함수 

//splice (인덱스, 삭제할 갯수)
//splice (인덱스, 삭제할 갯수, 추가할 값)

console.log('----------------------------------');
let arr4 = [1,2,3,4,5];
console.log(arr4)
arr4.splice(1,2); // 1인덱스부터 2개 를 지우겠다. -> 파괴적함수
console.log(arr4);
arr4.push(6);
arr4.unshift(0);
console.log(arr4); 
//arr4[2] = 50; 
arr4.splice(2,1,50); //삭제하고 다시 저장
console.log(arr4);
arr4.splice(2,0,99); // 하나도 안지우고 추가할 수 있음
console.log(arr4);
arr4.splice(4,1);
console.log(arr4);

console.log('--------객체----------');
let obj = {
    name:"김밥천국",
    menu: "참치김밥"
};

console.log(obj);
obj.menu = "치즈김밥";  //값 수정 및 저장
console.log(obj);
obj.price = 6000; // 새로운 키값으로 추가
console.log(obj);
delete obj.price; // 기존 특정 키값 삭제 
console.log(obj);