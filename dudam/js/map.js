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

$(document).on('click', '#resultList tr', function(){
    // td 값을 가지고 올때
	//let param = $(this).find('td:eq(2)').text();
	
	//td안에 input의 value값ㅇ르 가지고 올때 -> td:eq(4) td의 인덱스의 4번째를 의미
	let deptno = $(this).find('td:eq(1)').find('input').val();
	let empno = $(this).find('td:eq(4)').find('input').val();

    data = {deptno : deptno, empno : empno}
	$.ajax({
	         url : 'selectDtlMap.do',
	         type : 'post',
	         dataType : 'json',
			 data : JSON.stringify(data),
			 contentType : "application/json",
	         success : function(data){
		
		//자바에서 배열로 넘어 온 것을 변수로 담는 방법
		const resultList = data.resultList.map(item => item);
//		console.log("***********")
//		console.log(resultList)
		
		//컬럼값이 job인 값을 가지고 와서 배열로 반환한다.
		const resultList1 = data.resultList.map(item => item.job);
//		console.log("***********")
//		console.log(resultList1)
		
		//람다식 사용 하지 않은것
		const resultList2 = data.resultList.map(function(item){
			return item;
		});
//		console.log("++++++++++++++++++")
//		console.log(resultList)
		
		//job 값에서 SALEMAN 값을 가지고 있는 것만 가져 오고 싶을때
		const resultFilter = data.resultList.filter(item => item.job == "SALESMAN")
//		console.log("$$$$$")
//		console.log(resultFilter)
		
		//reudce 함수를 사용 하여 sal(급여)의 총 합계를 구한다.
		//reduce는 특정 배열 값을 하나로 합칠때 많이 사용한다.
		const resultReduce = data.resultList.reduce((prev, curr) => prev + curr.sal,0);
//		console.log("~~~~~~~~~~~~")
//		console.log(resultReduce)
		
		//map과 filter함수를 사용 -> map함수를 사용해 급여 값을 뽑는다. filter함수 사용 하여 급여가 1200이상인 값만 뽑아서 배열로 반환한다. 
		const resultMapFilter = data.resultList.map(item => item.sal)
		                                       .filter(item => item > 1200)
                                               
//		console.log("ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ")
//		console.log(resultMapFilter)	
		//map과 filter함수를 사용 -> map함수를 사용해 급여 값을 뽑는다. filter함수 사용 하여 급여가 1200이상인 값만 뽑아서 배열로 반환한다.
		//join함수를 사용하여 배열에 있는 모든 요소를 구분자로 구분하여 String으로 변환하는 함수
		const resultMapFilter1 = data.resultList.map(item => item.sal)
		                                       .filter(item => item > 1200)	
                                               .join()
//		console.log("AAAAAAAAAAAAAAAAa")
//		console.log(resultMapFilter1)
		
				$('#dtlinfo').find('#empno').val(data.empno);
				$('#dtlinfo').find('#grade').val(data.grade);
				$('#dtlinfo').find('#losal').val(data.losal);
				$('#dtlinfo').find('#hisal').val(data.hisal);
				
				$('#deptList').empty();
					
				html = "";
				$(data.resultList).each(function(idx, item){

                    html += '<tr>';
					html += '  <td><input type="text" id="empno" name="empno" value="'+ item.empno +'" readonly/></td>';
				    html += '  <td><input type="text" id="job" name="job" value="'+ item.job +'" readonly/></td>';
				    html += '  <td><input type="text" id="sal" name="sal" value="'+ item.sal +'" readonly/></td>';
                    html += '  <td><input type="text" id="comm" name="comm" value="'+ item.comm +'" readonly/></td>';
				    html += '</tr>';
				});
					
				$('#deptList').append(html);
						
    	 	 },
         	 error:function(request, status, error){
         		alert("관리자에게 문의하세요.");
          	}
		});
});




let delFun = (pThis) => {

    //그리드에 있는 삭제 버튼 클릭 시 this로 가지고 와서 필요한 값을 찾으면 된다.
	let pEmpno = $(pThis).parent().parent().find('#empno').val();
	
	data = {empno : pEmpno}
	$.ajax({
	        url : 'deleteMap.do',
	        type : 'post',
	        dataType : 'json',
	        data : JSON.stringify(data),
	        contentType : "application/json",
	          success : function(data){
				
				init();

    	 	},
              error:function(request,status,error){
         		alert("관리자에게 문의하세요.");
          }
	});
}

//div 추가 삭제
let divAddDelFun = () =>{
	$('#addDelViewFrm').attr("action","/divAddDelView.do").submit();
}

//div 추가 삭제
let gridAddDelFun = () =>{
	$('#addDelViewFrm').attr("action","/gridAddDelView.do").submit();
}

$(document).ready(function(){	
	init();	
});

