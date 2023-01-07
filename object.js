//오브젝트는 key, value만 가지고 있는 집합체이다.
//데이터에 젒근을 하는 key, key가 가지고 있는 값  

const info = {name:'ellie',age:5};

function print(person){
    console.log(person.name);
    console.log(person.age);
}

print(info);

//오브젝트에서 값에 접근 방법
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
console.log('name' in info);

//for..in / for..of
//1.for..in 오브젝트 안에 모든 키를 출력 하고자 할때
for(key in info){
    console.log(key);
}

//2. for..of 배열 또는 리스트 안에 있는 값 출력
const arr = [1,2,3,4,5];
for(value of arr){
    console.log(value);
}

