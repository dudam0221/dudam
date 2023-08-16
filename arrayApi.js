{
    //배열에 있는 모든 요소를 구분자로 구분하여 스트링으로 변환하는 함수
    const fruits = ['apple','banana','orange'];
    const result = fruits.join();
    console.log(result);
}

{
    //스트링을 전달된 구분자로 해서 배열을 만드는 함수
    const fruits = 'apple, strawberry';
    const result = fruits.split(',');
    console.log(result);
}

{
    //주어진 배열의 순서를 거꾸로 만드는 함수
    const array = ['1','2','3','4','5'];
    const result = array.reverse();
    console.log(result);
}

{
    //배열안에 있는 특정 요소를 리턴하는 함수
    //2는 시작하는 인덱스, 마지막 인덱스는 배제 되니 4가 아니라 5가 된다.
    const array = ['1','2','3','4','5'];
    const result = array.slice(2,5);
    console.log(result);
    console.log(array);
}


    class Student {
        constructor(name, age, enrolled, score){
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const students = [
        new Student ('A', 29, true, 45),
        new Student ('B' , 28, false, 80),
        new Student ('C', 30, true, 90 ),
        new Student ('D', 40, false, 66 ),
        new Student ('E', 18, true, 88 ),
    ];
{   // 배열안에 있는 값 중에 첫번째로 true되는 값만 리턴 한다.
    const result1 = students.find(function(item, idx){
        return item.score === 90;
    });
    console.log("*****************");
    console.log(result1);
    // => 쓸때 "한문장"이면 function 와 {}, return, ; 생략가능 하다
    const result = students.find((item => item.score == 90))
    console.log(result);
}

{   // filter는 해당 하는 값을 "배열"로 리턴 한다.
    // const result = students.filter(function(item,idex){
    //     return item.enrolled;
    // });
    const result = students.filter(item => item.enrolled)
    console.log("filter : >>>>>>>>>>>>>")
    console.log(result);
}

{   //map은 배열안에 모든 요소를 콜백함수를 통해서 가공된 값으로 대체하는 것이다
    //아래는 item을 콜백함수를 통해서 아무것도 가공 하지 않고 그대로 보내니 5명의 학생 값이 나오는 것이다
    const result1 = students.map(item => item)
    console.log(result1);

    //배열에 값에서 콜백함수에서 score만 가져오라고 한것
    const result2 = students.map(o => o.score)
    console.log("map==========================")

    console.log(result2);

    const result3 = students.map(o => o.score * 2)
    console.log(result3);
// 매개변수가 한개 일때는 () 생략가능
    const result4 = students.map(o => o.score * 2)
    console.log("^^^^^^^^^^^^^^^^^^^^")
    console.log(result4);
}

{   //배열 요소에서 해당 하는 값이 하나라도 있으면 true를 리턴 해준다.
    const result = students.some(student => student.score < 50)
    console.log(result);

    //배열안에 있는 요서가 모두 충족을 해야지만 true리턴 아니면 false 리턴
    const result2 = students.every(student => student.score < 50)
    console.log(result2);
}

{   //reduce는 배열의 요소를 한개씩 호출 하면서 값을 누적한다.
    const result = students.reduce((prev, curr) => {
        console.log("---------------------->>>>>");
console.log(prev);
console.log(curr);
//return curr;  return 값이 prev안에 담기게 된다.
return prev + curr.score;
    },0); 
    console.log(result);
}
// ====> 위에 코드를 람다식으로 줄였다. {}, return, ; 삭제 했는것
{
    const result = students.reduce((prev, curr) => prev + curr.score,0)
    console.log(result);

    //평균
    const resultAvg = result / students.length;
    console.log("평균++++++++++++");
    console.log(resultAvg);
}

//map으로 하나의 새로운 배열을 만들고
//그 새로운 배열안에서 50점 이상의 값을 찾고
//50점 이상의 값을 스트링으로 출력한다.
{
    const result = students.map(o => o.score)
                           .filter(o => o > 50)
                           .join()
    console.log("$$$$$$$$$$$$");
    console.log(result);
}

const temp = [1,2,3];
let result = temp.map(o => {
    //console.log(o);
    //return o + 1;
    if(o % 2){
        return "홀수";
    }
    return "짝수";
});
console.log("====================");
console.log(result);

//람다식
// 매개변수가 하나일때 () 생략 가능 : (a) -> a * a ==> a -> a * a
// 블록 안의 문장이 하나 일때 {}, ; 생략 가능 : (int i) -> {console.log();} ==> (int i) -> console.log()
// 하나의 문장이 return 이면 {}, ; 생략 불가 : (int i) -> {return a > b ? a :b;}


// primise 함수
    // let promise = function(){ return new Promise(function(resolve, reject){
    //     setTimeout(()=>resolve("완료"),1000);
    //     });
    // };

    let promise = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료"),1000) 
    });

promise().then((o) =>{
console.log('this' + o);
}).catch((error) =>{
console.log('fail' + error)
});

 function goToSchool(){
    console.log("학교에갑니다.");
}
/* function arriveAtSchool(){
    setTimeout(function(){
        console.log("학교에 도착했습니다.");
    },1000);
} */
function arriveAtSchool(){
        console.log("학교에 도착했습니다.");
}
function study(){
    console.log("공부를 시작합니다.")
}

// goToSchool();
// arriveAtSchool();
// study();

// function arriveAtSchool_tube(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log("학교에 도착했습니다.");
//             resolve();
//         },1000);
//     });
// }

// goToSchool();
// arriveAtSchool_tube().then(function(){
// study();
// });

/* function arriveAtSchool_tube_adv(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            var status = Math.floor(Math.random() * 2);
            console.log("====================")
            console.log(status)
            if(status === 1){
                resolve("학교에 도착했습니다.");
            }else{
                reject("학교에 도착하지 못했습니다.");
            }
        },1000);
    });
}

function cure(){
    console.log("양호실 가서 약 발랐습니다.");
}

goToSchool();
arriveAtSchool_tube_adv().then(function(res){
    console.log(res);
    study();
}).catch(function(err){
console.log(err);
cure();
}); */



//체이닝
/* function arriveAtSchool_tube_adv(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            var status = Math.floor(Math.random() * 2);
            console.log("====================")
            console.log(status)
            if(status === 1){
                // resolve("학교에 도착했습니다111111.");
                resolve();
            }else{
                // reject("학교에 도착하지 못했습니다.");
                reject();
            }
        },1000);
    });
} */
function arriveAtSchool_tube_adv(){
    return new Promise((resolve, reject) =>{ 
        setTimeout(() => {
            var status = Math.floor(Math.random() * 2);
            console.log("====================")
            console.log(status)
            if(status === 1){
                // resolve("학교에 도착했습니다111111.");
                resolve();
            }else{
                // reject("학교에 도착하지 못했습니다.");
                reject();
            }
        },1000);
    });
}
function cure(){
    console.log("양호실 가서 약 발랐습니다.");
}
//res는 resolve()함수 않에 있는 텍스트 값을 받는다.
//err는 reject()함수 않에 있는 텍스트 값을 받는다.
arriveAtSchool_tube_adv().then(function(res){
    console.log(res);
    return goToSchool();
}).then(function(){
    return arriveAtSchool();
}).then(function(){
    return study();
}).catch(function(err){
console.log(err);
cure();
});

/* arriveAtSchool_tube_adv().then(function(res){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log(res);
}).then(function(){
    return goToSchool();
}).then(function(){
    return arriveAtSchool();
}).then(function(){
    return study();
}).catch(function(err){
console.log(err);
cure();
}); */

//====================chainnig
function ceck(){
    return new Promise((resolve, reject) =>{
        resolve();
    }).then(() =>{
        ceckInfo1();
    }).then(() =>{
        ceckInfo2();
    }).catch(() =>{
        console.log("오류발생");
    })
}

//콜백

let number = ['1', '2', '3', '4', '5'];

/* number.forEach(function(x){
    let num = x * 2;
    console.log("###################");
    console.log(num);
}); */

number.forEach(x => {
    let num = x * 2;
    console.log("###################");
    console.log(num);
});

function whatYourName(name, callback){
    console.log("1@ : @@@@@@@@@@@@@@@@@@")
    console.log('name : ' + name);
    console.log("2 : @@@@@@@@@@@@@@@@@@@")
    callback();
}

function finishFun(){
    console.log("3 : @@@@@@@@@@@@@@@@@@@")
    console.log("finish function");
}

console.log("4 : @@@@@@@@@@@@@@@@@@@")
whatYourName('sangmin', finishFun);

function add(x, Y){
    console.log("2 : &&&&&&&&&&&&&&&&&&&&&&&&")
    return x + Y;
}

function printResult(result){
    console.log("3 : &&&&&&&&&&&&&&&&&&&&&&&&")
    console.log(result);
}
console.log("1 : &&&&&&&&&&&&&&&&&&&&&&&&")
printResult(add(2,3));


function add_1(x, y, callback){
    console.log("2 ^^^^^^^^^^^^^^^^^^^^^^^^");
    let result = x + y;
    console.log("3 ^^^^^^^^^^^^^^^^^^^^^^^^");
    callback(result);
}

function printResult1(result){
    console.log("4 ^^^^^^^^^^^^^^^^^^^^^^^^");
    console.log(result);
}

console.log("1 ^^^^^^^^^^^^^^^^^^^^^^^^");
add_1(100, 1000, printResult1);
