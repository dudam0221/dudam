// =========================================Json과 Object 차이점

// ============ JSON와 OBJECT 사용 목적 ============
//Json은 서버와 데이터를 교환할 때 사용하는 Data 형태이다.
//Object는 자바스크립트 내부 문법에서 사용하는 데이터 유형이다.


// ============ JSON와 OBJECT 사용 형태 ============
//JSON은 key, value가 전부 string이다. 그래서 key에도 ""이 있어야 한다.
//JSON 형태 : let str = {"name":"소니", "age":30}
let str = {"name":"소니", "age":30};
console.log("JSON =======================")
console.log(str);

//오브젝트는 key, value만 가지고 있는 집합체이다.
//오브젝트(객테)는 key에 ""이 필요없다.
//오브젝트 형태 : let obj = {name : "samsung", age : 50}
let obj  = {name : "samsung", age : 50};
console.log("OBJECT =======================")
console.log(obj);

// ============ parse(), stringfy() 사용 목적 ============
//parse는 json을 자바스크립트에 사용되는 Object로 변형을 하기 위해 사용하는 함수
//JSON.parse()

//stringify는 자바스크립트에 사용되는 Object를 json으로 변형을 해서 사용하기 위해 사용하는 함수
//JSON.stringfy()

//object를 stringify함수로 JSON 형태를 만들고 parse로 object형태로 변환해서 key로 value 값 뽑아내기
let strExam = {name:"LG", age:30};

//1. object를 JSON형태로 변환하기 stringify함수를 사용해서
let transJson = JSON.stringify(strExam);
console.log("1. object를 JSON형태로 변환하기 stringify함수를 사용해서")
console.log(transJson)

//2. JSON을 object로 변환하기 parae함수를 사용해서
let transObj = JSON.parse(transJson)
console.log("2. JSON을 object로 변환하기 parae함수를 사용해서")
console.log(transObj)

//3. object를 key로 value값 뽑아내기
let objValue = transObj.name;
console.log("3. object를 key로 value값 뽑아내기")
console.log(objValue)

//4. 함수를 만들어서 stringfy로 변환 후 parse로 object로 만들어서 key로 value값 뽑아 내기
let printExam = (personInfo) => {
    console.log("함수를 만들어서 stringfy로 변환 후 parse로 object로 만들어서 key로 value값 뽑아 내기")
    console.log(personInfo.name)
    console.log(personInfo.age)
}

printExam(transObj);



//JSON.stringify로 "두번 변형"을 시켰을 때는 JSON.parse도 "두번 변형"을 해서 key로 value값을 뽑아내야 한다.
let strStringfyTrans1 = JSON.stringify(strExam);
console.log("1. 첫번째 stringify로 변형")
console.log(strStringfyTrans1)

let strStringfyTrans2 = JSON.stringify(strStringfyTrans1);
console.log("2. 두번째 stringify로 변형")
console.log(strStringfyTrans2)

let strParseTrans1 = JSON.parse(strStringfyTrans2);
console.log("3. 첫번째 parse로 변형")
console.log(strParseTrans1)

let strParseTrans2 = JSON.parse(strParseTrans1)
console.log("4. 두번째 parse로 변형")
console.log(strParseTrans2)

console.log("5. object형태에서 key값으로 value 뽑아내기")
console.log(strParseTrans2.name)




//=========================오브젝트에서 값에 접근 방법 
const info = {name:'ellie',age:5};

function print(person){
    console.log(person.name);
    console.log(person.age);
}

print(info);

//코딩하는 순간에 그 값을 알고 싶을때 사용
console.log(info.name);

//2. computed properties
//user로 부터 값을 입력 받아 value값을 출력 할때
//여기서는 "키"는 항상 스트링이어야 한다.
console.log(info['name']);

function printValue(obj,key){
    let result = obj[key];
    console.log("result : " + result);
    console.log(obj[key]);
}
//여기서는 "키"는 항상 스트링이어야 한다.
printValue(info,'name');

//오브젝트 안에 해당 키가 있는지 없는지 찾는 방법
//in을 사용 해서 해당 오브젝트 안에 키가 있는지 찾는다
console.log("in을 사용 해서 해당 오브젝트 안에 키가 있는지 찾는다")
console.log('name' in info);

//for..in / for..of
//1.for..in 오브젝트 안에 모든 키를 출력 하고자 할때
for(key in info){
    console.log("오브젝트 안에 모든 키를 출력 하고자 할때")
    console.log(key);
}

//2. for..of 배열 또는 리스트 안에 있는 값 출력
const arr = [1,2,3,4,5];
for(value of arr){
    console.log("배열 또는 리스트 안에 있는 값 출력")
    console.log(value);
}

//3. 배열 또는 리스트 안에 있는 것을 for..of말고 map를 사용
//map을 사용하면 map이 읽어서 새로운 배열을 리턴해준다.
let arrStr = arr.map(item => item);
console.log("배열 또는 리스트 안에 있는 것을 for..of말고 map를 사용")
console.log(arrStr)
