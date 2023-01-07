let currencyRatio = {
    USD:{
        KRW:1271.34,
        USD:1,
        VND:23635.00,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00079,
        VND:18.59,
        unit:"원"
    },
    VND:{
        KRW:0.054,
        USD:0.000042,
        VND:1,
        unit:"동"
    }
}

console.log(currencyRatio.USD.unit);

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a")
    .forEach((menu) => menu.addEventListener("click",function(){
        document.getElementById("from-button").textContent=this.textContent;
        fromCurrency = this.textContent;
        
        toConvert();
}));

document.querySelectorAll("#to-currency-list a")
    .forEach((menu) => menu.addEventListener("click",function(){
        document.getElementById("to-button").textContent = this.textContent;
        //alert(this.textContent);
        toCurrency = this.textContent;
        
        fromConvert();
}));

function fromConvert(){
    let amount = document.getElementById("to-input").value;
    let convertAmount = amount * currencyRatio[toCurrency][fromCurrency];
   
    document.getElementById("from-input").value = convertAmount;

    let fromUnit = currencyRatio[toCurrency].unit;
   
    let toUnit = currencyRatio[fromCurrency].unit;
   
    document.getElementById("to-unit").textContent = amount + fromUnit;
    document.getElementById("from-unit").textContent = convertAmount + toUnit;
}

function toConvert(){
     let amount = document.getElementById("from-input").value;
     let convertAmount = amount * currencyRatio[fromCurrency][toCurrency];
    document.getElementById("to-input").value = convertAmount;

    let fromUnit = currencyRatio[fromCurrency].unit;
    let toUnit = currencyRatio[toCurrency].unit;
    document.getElementById("from-unit").textContent = amount + fromUnit;
    document.getElementById("to-unit").textContent = convertAmount + toUnit;
}


let names = ["a","b","c","d","e","f","g","h"];

// function printName(item){
//     console.log(item);
// }
// names.forEach(item => console.log(item));

// forEach는 반환 값이 없어서 변수로 받을 수 없다.
names.forEach((item, index) => console.log("forEach : " + item, index));

// map은 return 반환 값이 있으므로 변수로 받을 수 있다. 배열을 반환한다.
let data = names.map(item => {
    return item;
});

console.log(data);
//map은 API를 통해서 데이터가 넘어 오는데 object로 온것을 필요 한것만 뽑아서 사용할때
let personList = [{name : 'Larry', age : 30, ceo : true},
                 {name : 'Tim Cock', age : 40, ceo : true},
                 {name : 'Elon Musk', age : 55, ceo : false}]
let data1 = personList.map(item => {
    return item.name;
});
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log(data1);

data1.forEach(item => console.log(item))
temp = [];
personList.forEach(item => {
    console.log("*****************************")
    if(item.age > 30){
        console.log("%%%%%%%%%%%%%%%%%%%%%")
        console.log(item);
        temp.push({name:item.name, age:item.age})
    }
});
console.log("&&&&&&&&&&&&&&&&&&&&======")
console.log(temp);

// filter는 true로 되는 값을 전체 타 보여 준다.
let data2 = personList.filter(item =>{
    return item.age > 30;
});
console.log('==============')
console.log(data2);

let data100 = personList.filter(item => item.name.includes("L"));

console.log('++++++++++++')
console.log(data100)

// 해당되는 값이 있느냐 없느냐를 true, false로만 나타난다.
let data3 = personList.some(item =>{
    return item.name.startsWith("L");
});

console.log(data3);

let data4 = personList.every(item => {
    return item.name.startsWith("L");
});

console.log(data4);

let data5 = personList.find(item => {
    return item.name.startsWith("L");
});

console.log(data5);

let data6 = personList.reduce((acc,cur) => {
    if(cur.age > 30){
        acc.push(cur.name);
    } 
        return acc
},[]);
console.log("@@@@@@@@@@@@@@@@@@@2")
console.log(data6);

// map과 filter 같이 사용
newArr = [];
let data7 = personList.filter(item => item.age > 30)
.map(item => {
    newArr.push(item.name + "최고")
});


console.log("<><><><><><><><><><>")
console.log(newArr);

//ES6
// let myFunc = (name) => {
//     return name;
// }
let myFunc = (name) => name;
console.log(myFunc("영희"));

//===========================객체지향
//사용 목적
let name = " SANMSUNG STORE";
//this.name은 class 에 있는 값을 구분 하기 위해서
class product{//겹치는 부분을 따로 빼는 것을 추상화
    name="";
    price=0;
    //생성자
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
   // class 안에 함수를 만들어 사용 하는 것을 캡슐화라고 한다.
   // 변수들과 함수를 한개의 class에서 같이 팩키지로 같이 사용 할 수 있다.
   // getter, setter
    getPrice(){
        return this.price + "만원";
    }
    //setter를 쓰는 이유는 직접적은 값을 넣어서 사용 하지 못하기위해
    //함수를 만들어서 setter를 한다.
    setPrice(price){
        if(price < 0){
            throw Error("마이너스 값은 안됨");
        }else{
            this.price = price;
        }
        
    }
}

//class tv {
//    name="";
//    price=0;
//    size=''
//    constructor(name, price, size){
//        this.name=name,
//        this.price=price,
//        this.size=size
//    }
//}

class tv extends product{//상속 => 부모에 있는 것을 내껏 처럼 사용하는 것
    size='';
    //생성자
    constructor(name, price, size){
        super(name,price) // super은 tv보다 위에 있는 product에 있는 name,price
        this.size=size;
    }
}
//객체 생성
let tv1 = new tv('noona',200,'56inch');
console.log("|||||||||||||||||||||||")
//객체 호출
console.log(tv1);
console.log(tv1.name);
//캡슐화
console.log(tv1.getPrice());

tv1.setPrice(1000)
console.log(tv1.getPrice());

//ES6 문법
//object shothand assignment
let nameEs6 = 'noona';
let ageEs6 = 17;

//let person = {
//    nameEs6 : nameEs6,
//    ageEs6 : ageEs6
//}
//위에 것이 일반 적인데 아래 처럼 사용 가능
//key, value가 같을 경우
let person = {
     nameEs6,
     ageEs6
    }
console.log(person);

//Destructuring
let person1 = {
    person1Name : 'noona',
    person1Age : 20
}
//person1안에 있는 키와 값을 변수로 vlaue 값을 뽑아 낼려고 할떄
//기존 : 
//let nm = person1.person1Name;
//let ag = person1['person1Age'];
//console.log(nm,ag);
//변경
let {person1Name, person1Age} = person1
console.log(person1Name,person1Age);
//배열에 적용 -> 순서대로 a,b 이렇게 들어 간다.
let arr = [1,2,3,4];
let [a,b] = arr;
console.log(a,b);
let [c,d, ...rest] = arr;
console.log(rest);

//spread
let person2 = {person2Name : 'sangmin', person2age : 46}
let person3 = {...person2}
console.log(person3);

//3항 연산자
let temp1 = person2 ? person2.person2Name : 'there is no name';
console.log(temp1);

//form안에 있는것 배열로 만들기
let method = "Put";
let data101 = $('#temp100').serializeObject();





