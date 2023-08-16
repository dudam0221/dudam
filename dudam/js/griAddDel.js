//$(document).ready 안에 function name() 함수를 선언하면 DOM 생성 후 사라지게 된다.
//$(document).ready 안에 있는 함수는 window에 있는 상위 스코프에서 찾는다. 이것을 상위 스코프에
//할당을 해버린다. 
//그 후에 버튼을 클릭을 하면 그 함수를 찾을 수 없으니 undefined라고 한다.
//$(document).ready 밖에 있는 함수는 전역 스코프이기 때문에 찾을 수 있다.
//함수를 변수에 담아 놓은 경우에는 $(document).ready 밖에 만들고  $(document).ready안에
//함수 호출 하면 정상 작동 한다. 예로 selectBox() 함수이다
//2023-02-23
let data= {};

//VO파일로 자바로 넘기고 VO파일로 화면에 데이터 받아와서 화면에 뿌리는 방법
let init = () => {
	$.ajax({
	        url : 'selectMapList.do',
	        type : 'post',
	        dataType : 'json',
	        data : JSON.stringify(data),
	        contentType : "application/json",
	          success : function(data){


				$('#resultList').empty();
					
				html = "";
				$(data).each(function(idx, item){
                    html += '<tr>';
				    html += '  <td><input type="checkbox" id="chk" name="chk"/></td>';
					html += '  <td><input type="text" id="deptno" name="deptno" value="'+ item.deptno +'" readonly/></td>';
				    html += '  <td><input type="text" id="dname" name="dname" value="'+ item.dname +'" readonly/></td>';
				    html += '  <td><input type="text" id="loc" name="loc" value="'+ item.loc +'" readonly/></td>';
				    html += '  <td><input type="text" id="empno" name="empno" value="'+ item.empno +'" readonly/></td>';
				    html += '  <td><input type="text" id="ename" name="ename" value="'+ item.ename +'" readonly/></td>';
				    html += '  <td><input type="text" id="job" name="job" value="'+ item.job +'" readonly/></td>';
				    html += '  <td><input type="text" id="mgr" name="mgr" value="'+ item.mgr +'" readonly/></td>';
				    html += '  <td><input type="text" id="hiredate" name="hiredate" value="'+ item.hiredate +'" readonly/></td>';
				    html += '  <td><input type="text" id="sal" name="sal" value="'+ item.sal +'" readonly/></td>';
				    html += '  <td><input type="text" id="comm" name="comm" value="'+ item.comm +'" readonly/></td>';
                    html += '  <td><input type="button" id="delBtn" name="" value="삭제" onclick="delFun(this);"/></td>';
				    html += '</tr>';
				});
					
				$('#resultList').append(html);
    	 	},
              error:function(request,status,error){
         		alert("관리자에게 문의하세요.");
          }
	});
		
}

let addFun = () =>{
	console.log("추가")
	
	html = "";
    html += '<tr>';
	html += '  <td><input type="checkbox" id="chk" name="chk"/></td>';
	html += '  <td><input type="text" id="deptno" name="deptno" value=""/></td>';
	html += '  <td><input type="text" id="dname" name="dname" value="" /></td>';
	html += '  <td><input type="text" id="loc" name="loc" value="" /></td>';
	html += '  <td><input type="text" id="empno" name="empno" value="" /></td>';
	html += '  <td><input type="text" id="ename" name="ename" value="" /></td>';
	html += '  <td><input type="text" id="job" name="job" value="" /></td>';
	html += '  <td><input type="text" id="mgr" name="mgr" value="" /></td>';
	html += '  <td><input type="text" id="hiredate" name="hiredate" value="" /></td>';
	html += '  <td><input type="text" id="sal" name="sal" value="" /></td>';
	html += '  <td><input type="text" id="comm" name="comm" value="" /></td>';
    html += '  <td><input type="button" id="delBtn" name="" value="삭제" onclick="delFun(this);"/></td>';
	html += '</tr>';
					
	$('#resultList').append(html);
	
}

let delFun = () => {
	console.log("삭제")
	$('#resultList > tr:last').remove();
}

//체크된 것의 특정 값 추출하여 자바로 넘기기
//자바로 넘길떼 empnoList += ',' + pEmpno;만 넘겨야 한다.
//push로 넘기니 자바에서 풀 수가 없다. 공부 더 해야 할거 같음
//20230628
let chkInsertFun = () => {
     //,로 구분 하여 변수에 담아 자바로 넘기기
	/*
	let empnoList = "";
	let chk = $('input[type="checkbox"]:checked');
	
	$(chk).each(function(i){
		let tr = chk.parent().parent().eq(i);
		let td = tr.children();
		
		let pEmpno = td.eq(4).find('input').val();
		
		empnoList += ',' + pEmpno;
		
	});
	
	data = {empno : empnoList}
	*/
	
	//push함수를 사용해서 배열로 자바로 넘기기
	let empnoList = [];
	let chk = $('input[type="checkbox"]:checked');
	
	$(chk).each(function(i){
		let tr = chk.parent().parent().eq(i);
		let td = tr.children();
		
		let pEmpno = td.eq(4).find('input').val();
		
		empnoList.push(pEmpno);
		
	});
	
	data = {empno : empnoList}
	
	$.ajax({
	             url : 'insertCheckGrid.do',
	             type : 'post',
	             dataType : 'json',
	             data : JSON.stringify(data),
				 contentType : "application/json",
	             success : function(data){
					console.log("성공");
					console.log(data);
					
    	 	 },
          error:function(request,status,error){
         		alert("관리자에게 문의하세요.");
          }
		});	
}

let lottonFun = () => {
	//로또 한게임생성

//1. 로또 번호는 6개
var lotto = []; //6개로 값이 나열될것이기 때문에 배열처리 - 값은 담지 않음

//6번처리 - 반복문
for(var i=0;i<6;i++){
  //새로 추가될 숫자 : 1~45사이의 숫자가 랜덤하게 처리
  //random() : 0~1미만사이의 랜덤한 소수
  //floor() : 내림처리해서 정수로 변경
  var num = Math.floor(Math.random() * 45) + 1;

  //현재 상태는 같은 숫자가 나올수 있음
  //lotto라는 배열에 담긴 숫자와 같이 같으면 안됨
  for(var j in lotto){
    while(num == lotto[j]){ //현재 새로나온 숫자가 기존 숫자와 같으면
      num = Math.floor(Math.random() * 45) + 1;
    }
  }

  //push() - 배열에 마지막에 값추가메서드
  lotto.push(num);
}

//오름차순으로 숫자 정렬
lotto.sort(function(a,b){
  return a - b;
});

console.log('이번주 로또 번호 : ' + lotto);
}

$(document).ready(function(){	
	init();	
});

