//stringify -> 오브젝트, 배열, 숫자, 문자를 json 문자형태로 변환
//배열을 json 문자열로 변화
let json = JSON.stringify(['apple','banana']);
console.log(json);

//오프젝트를 json 문자열로 변환
const rabbit= {
    name:'tori',
    color:'white',
    size:null,
    size1:1,
    birthDate: new Date()
}

let result = JSON.stringify(rabbit);
console.log(result);

// 위에서 원하는 것만 json으로 변환이 된다.
let result1 = JSON.stringify(rabbit,['name', 'color']);
console.log(result1);

//콜백 함수로 키와 밸유 값을 확인 할 수 있다.
let result2 = JSON.stringify(rabbit, function(key,value){
    console.log(key);
    console.log(value);
    return key === 'name' ? 'ellie' : value;
});
console.log("@@@@@@@@@@@@@@@")
console.log(result2);

const rabbit1= {
    name:'tori',
    color:'white',
    size:null,
    size1:1,
    birthDate: new Date()
}

//parse -> json을 오브젝트로 변환

let json1 = JSON.stringify(rabbit)
//-> 위에 것은 rabbit 오브젝트를 json 문자열로 변형
let result3 = JSON.parse(json1);
//-> 위에 것은 json 문자열을 오브젝트로 변경
console.log(result3);

let result4 = JSON.parse(json1, function(key,value){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>");
    console.log(key);
    console.log(value);
    return key === 'name' ? 'ellie' : value; 
});
console.log(result4);