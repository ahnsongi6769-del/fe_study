// function 함수

function func01(){
    console.log('func01()');
}

func01();

const func02 = function(){

    console.log('func02()');
}
func02();

const func03 = function func33(){ //func33 은 일시적인 변수 밖에 있는 변수명을 인식함 

    console.log('func03()');
}
func03();

const func04 = () => {

    console.log('func04()');
}
func04();

// -------------------------------

function func05(a,b){
    console.log('func05()'+ a + ' '+ b);
}
func05(10,20);
func05("A","B");

const func06 = function(a,b){
     console.log('func06()'+ a + ' '+ b);
}
func06(50,60);

const func07 = function func77 (a,b){
     console.log('func07()'+ a + ' '+ b);
}
func07(99,88);

