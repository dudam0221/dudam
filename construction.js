//생성자 정의
function Teacher(name, age, subject){
    this.name = name
    this.age = age
    this.subject = subject

    //생성자 함수 내부에서 메소드 정의
    this.teach = (item) => {
        console.log(`${item}에게 ${this.subject}를 가르칩니다.` )
    }
}

//생성자 함수에 변수 입력 후 jay 변수에 담는다.
//생성자 함수 호출은 new를 사용하여 호출

const jay = new Teacher("sang", "10", "korea")

console.log(jay)

// 생성자 함수 내부 메소드 호출
jay.teach("min");

//==================================================================콜백함수
//callback함수 정의
//호출하는 함수에다가 매개변수를 써주고 그 함수에다가 매개변수 + ()게 해주는게 콜백함수다
//콜백함수는 순차적으로 실행하는 함수이다.
function first(callback){
callback();
}

function second(){
}

//호출부분
first(second);

//first 함수 실행 후 second함수를 실행 하고 싶을때
//first();
//second();
//이렇게 해도 console.log는 1, 2 이렇게 찍힌다.
//그렇지만 공통으로 만든 first함수를 실행 후 second를 실행을 하고 싶을 때 콜백함수를 쓴다.
//이때 fitst함수에 매개변수를 넣어주고 first함수 안에 매개변수와 이름이 같은 매개변수를 써주고 ()만 
//해주면 콜백함수가 된다.

function introduce(lastName, firstName, callback){
    console.log(1)
    let fullName = lastName + firstName;
    callback(fullName);
}

// introduce 매소드를 호출 하면서 변수 값을 "이", "상민"을 
//function안에 변수 i는 fullname의 값을 받아 온다.
introduce("이", "상민", function(i){
});

let cry = () => console.log("cry");
let sing = () => console.log("sing");
let dance = () => console.log("dance");

let check = (mode, callback1, callback2) => {
    console.log("?????????")
    console.log(mode)
    if(mode == "good"){
        callback1();
    }else{
        callback2();
    }
}

const str = "not good";
check(str, dance, sing);
//check(str, dance, cry)

//==========================================async, await 함수
//async를 함수 앞에 붙히면 promise를 사용하지 않아도 promise 처럼 값을 반환한다.
// return은 promise 객체를 반환 한다. 그래서 .then(()=>{})를 이용 할 수 있다.

//====================================async 함수만 사용
// async function f(){
//     return Promise.resolve(100)
// }
async function f(){
    return 1;
}
//f().then(alert);

async function func(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료"), 5000)
    });

    let result = await promise;

    console.log(result);
}

func();

function p(){
    return new Promise((resolve, reject) =>{
        resolve();
    });
}
p().then(() => console.log("되지?"));

async function p2(){
    return "hello"
}
p2().then((o)=>console.log(o));

// ============================ async와 await함수 같이 사용
let delay = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => resolve(), 3000)
    })
}

async function getApple(){
    // delay함수를 사용 하지도 않아도 된다.
    // await delay();
    return "apple";
}

async function getBanana(){
    // delay함수를 사용 하지도 않아도 된다.
    // await delay();
    return "banana";
}

// let getFruites = () => {
    // getApple().then((a) => {
    //     getBanana().then((b) =>{
    //         console.log(`${a} and ${b}`)
    //     })
    // })
// }

//위 코드 보다 좀더 간결 하게 작성
async function getFruites(){
    let strA = await getApple();
    let strB = await getBanana();

    console.log(`${strA} 그리고 ${strB}`)
}

//async와 await함수 호출 부분
getFruites();

//object에 
let obj = {a:1
,b:2
,c:3}

//Object의 value 값만 가지고 올때
let temp = Object.values(obj);
console.log("=================")
console.log(temp)

//Object의 key 값만 가지고 올때
let temp2 = Object.keys(obj);
console.log("~~~~~~~~~~~~")
console.log(temp2)

//Object의 key, value 값만 가지고 올때
let temp1 = Object.entries(obj);
console.log("++++++++++++++")
console.log(temp1)




