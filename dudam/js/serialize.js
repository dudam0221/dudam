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
	        url : 'selectSerialize.do',
	        type : 'post',
	        dataType : 'json',
	        data : JSON.stringify(data),
	        contentType : "application/json",
	          success : function(data){


				$('#resultList').empty();
					
				html = "";
				$(data).each(function(idx, item){
					//html += '<tr>';
				    //html += '  <td><input type="checkbox" id="chk" name="chk"/></td>';
				    //html += '  <td id="deptno" name="deptno">'+ item.deptno +'</td>';
				    //html += '  <td id="dname" name="dname">'+ item.dname +'</td>';
				    //html += '  <td id="loc" name="loc">'+ item.loc +'</td>';
				    //html += '  <td id="empno" name="empno">'+ item.empno +'</td>';
				    //html += '  <td id="ename" name="ename">'+ item.ename +'</td>';
				    //html += '  <td id="job" name="job">'+ item.job +'</td>';
				    //html += '  <td id="mgr" name="mgr">'+ item.mgr +'</td>';
				    //html += '  <td id="hiredate" name="hiredate">'+ item.hiredate +'</td>';
				    //html += '  <td id="sal" name="sal">'+ item.sal +'</td>';
				    //html += '  <td id="comm" name="comm">'+ item.comm +'</td>';
                    //html += '</tr>';

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
	         url : 'selectDtlSerialize.do',
	         type : 'post',
	         dataType : 'json',
			 data : JSON.stringify(data),
			 contentType : "application/json",
	         success : function(data){
		
				$('#dtlinfo').find('#deptno').val(data.deptno);
				$('#dtlinfo').find('#dname').val(data.dname);
				$('#dtlinfo').find('#loc').val(data.loc);
				$('#dtlinfo').find('#empno').val(data.empno);
				$('#dtlinfo').find('#ename').val(data.ename);
				$('#dtlinfo').find('#job').val(data.job);
				$('#dtlinfo').find('#mgr').val(data.mgr);
				$('#dtlinfo').find('#hiredate').val(data.hiredate);
				$('#dtlinfo').find('#sal').val(data.sal);
				$('#dtlinfo').find('#comm').val(data.comm);
				
				$('#deptList').empty();
					
				html = "";
				$(data.resultList).each(function(idx, item){

                    html += '<tr>';
					html += '  <td><input type="text" id="deptno" name="deptno" value="'+ item.deptno +'" readonly/></td>';
				    html += '  <td><input type="text" id="dname" name="dname" value="'+ item.dname +'" readonly/></td>';
				    html += '  <td><input type="text" id="loc" name="loc" value="'+ item.loc +'" readonly/></td>';
				    html += '</tr>';
				});
					
				$('#deptList').append(html);
							
    	 	 },
         	 error:function(request, status, error){
         		alert("관리자에게 문의하세요.");
          	}
		});
});

//체크된 row에 자바로 넘길 변수를 뽑아서 JSON.stringfy로 넘긴다.
let chkFun = () =>{
	
	    let dnameList = "";
        let empnoList = "";
		let chk = $('input[name="chk"]:checked');
		
		$(chk).each(function(i){
			let tr = chk.parent().parent().eq(i);
			let td = tr.children();
			
			let dname = td.eq(1).find('input').val();
			let empno = td.eq(4).find('input').val();
			
			dnameList += ',' + dname;
			empnoList += ',' + empno;
		});
		
		//	dnameList.substr(1)는 첫번째 인덱스인 ,를 제거 한다는 의미
		let data = {dname : dnameList.substr(1), empno : empnoList.substr(1)}
		
		//JSON.stringify(data),의 의미는 JSON형태인 것을 스트링으로 변환 하는것을 의미
		//"dname" : "20,30" 이형태로 변경이 된다.
		//이때 VO파일이 int 타입일 때는 넘어가지가 않는다. VO파일에 타입을 String으로 해야지만 넘어간다. 
		// VO파일이 int일때 "dname" : "20"는 넘어간다. 환장 하겠다. 20230620
		$.ajax({
	             url : 'insertCheckSerialize.do',
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

//자바에서 다건에 단건을 추가 또는 다건에 다건 추가, 단건에 다건 추가 하여 화면으로 값을 가져오는 방법
let salary = () =>{
	
	let empno = $('#dtlinfo').find('#empno').val();
	
	data = {empno : empno}
	
	$.ajax({
	        url : 'selectBonusList.do',
	        type : 'post',
	        dataType : 'json',
	        data : JSON.stringify(data),
			contentType : "application/json",
	        success : function(data){
					console.log("성공");
					console.log(data);
					console.log(data[0].result1);
						
						
				$('#bonusList').empty();
					
				html = "";
				$(data).each(function(idx, item){

                    html += '<tr>';
					html += '  <td><input type="text" id="empno" name="empno" value="'+ item.empno +'" readonly/></td>';
				    html += '  <td><input type="text" id="job" name="job" value="'+ item.job +'" readonly/></td>';
				    html += '  <td><input type="text" id="sal" name="sal" value="'+ item.sal +'" readonly/></td>';
                    html += '  <td><input type="text" id="comm" name="comm" value="'+ item.comm +'" readonly/></td>';
				    html += '</tr>';
				});
					
				$('#bonusList').append(html);
				
				$('#salgradeInfo').empty();
					
				htmlInfo = "";
				$(data[0].result1).each(function(idx, item){

                    htmlInfo += '<tr>';
					htmlInfo += '<th>사번</th>'
					htmlInfo += '  <td><input type="text" id="empno" name="empno" value="'+ item.empno +'" readonly/></td>';
					htmlInfo += '<th>등급</th>'
				    htmlInfo += '  <td><input type="text" id="grade" name="grade" value="'+ item.grade +'" readonly/></td>';
				    htmlInfo += '</tr>';
					htmlInfo += '<tr>';
					htmlInfo += '<th>최저연봉</th>'
					htmlInfo += '  <td><input type="text" id="losal" name="losal" value="'+ item.losal +'" readonly/></td>';
					htmlInfo += '<th>최고연봉</th>'
				    htmlInfo += '  <td><input type="text" id="hisal" name="hisal" value="'+ item.hisal +'" readonly/></td>';
				    htmlInfo += '</tr>';
				});
					
				$('#salgradeInfo').append(htmlInfo);
				
					
    	 	 },
          error:function(request,status,error){
         		alert("관리자에게 문의하세요.");
          }
	});
	
}


// 공지사항 목록 조회
function mapMove(){
        $("#mapViewFrm").attr("action","/moveMapView.do").submit();
    }

$(document).ready(function(){	
	init();	
	

});

