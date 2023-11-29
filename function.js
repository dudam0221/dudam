//=======특정한 값을 계산 하고 전달
//함수를 인자로 전할 할때는 함수 이름만 적어야 한다.
function add(a,b){
    //return a + b;
    const sum = a + b;
    return sum
}

//함수 선언
function doSomething(add){
    //add가 doSomething함수에 전달이 되었다. 아래 console 해보면 된다.
    console.log(add);
    //그래서 add을 호출 하기 위해서 add(111,12) 이렇게 사용한다.
    const result = add(111,12);
    console.log(result);
}

//함수 호출
doSomething(add);

//=======특정한 값을 전달 받아 기능을 수행 후 끝낸다.
function print(message){
    console.log(message);
}

print('babo');

function changeName(obj){
    obj.name = 'coder';
}
const nm = {name:'ellie'};

changeName(nm);
console.log(nm);

//=======콜백 함수를 다른 함수에 인자 값으로 전달 하는 방법
//함수에 인자로 전달 할 경우 함수의 이름만 넣어 주면 된다.
//조건이 love you이면 printYes() 함수를 호출 한다 이것이 콜백함수이다.
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

//const printYes = function(){
//    console.log('yes');
//}
const printYes = () => console.log("yes");

//const printNo = function(){
//    console.log('no');
//}
const printNo = () => console.log("no");

randomQuiz('love you', printYes, printNo);

//에로우 함수 function과 {}코드 블락 삭제 가능
// const simplePrint = function(){
//     console.log('simplePrint');
// }
const simplePrint = () => console.log('simpePrint');
simplePrint();

