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
		
}

/*
$(document).on('click', '#addBtn', () => {
	console.log("추가버튼")

//clone() 함수를 사용시 입력된 값도 복사가 된다. 
//추가시 빈값으로 해야 하는데.... 
$('#dtlInfo').clone().appendTo('#upper');
});
*/

let addFun = () => {
	console.log("추가버튼")

    //clone() 함수를 사용시 입력된 값도 복사가 된다. 
    // 이 함수는 입력된 값(input)도 복사해서 추가 될때 사용해야 함
    //$('#dtlInfo').clone().appendTo('#upper');
    
    //추가시 input 값이 ""로 초기화 하기 위해 그냥 태그로 만들었음
    html = "";
    html += '<div id="dtlInfo" class="info">';
    html += '  <table>';
    html += '    <thead>';
    html += '      <colgroup>';
    html += '      </colgroup>';
    html += '    </thead>';
    html += '    <tbody>';
    html += '      <tr>';
    html += '        <th>사번</th>';
    html += '        <td><input type="text" id="empno" name="empno" value="" /></td>';
    html += '        <th>등급</th>';
    html += '        <td><input type="text" id="grade" name="grade" value="" /></td>';
    html += '      </tr>';
    html += '      <tr>';
    html += '        <th>최저임금</th>';
    html += '        <td><input type="text" id="losal" name="losal" value="" /></td>';
    html += '        <th>최고임금</th>';
    html += '        <td><input type="text" id="hisal" name="hisal" value="" /></td>';
    html += '      </tr>';
    html += '      <input type="button" id="delBtn" name="" value="삭제" onclick="delFun(this);"/>';
    html += '    </tbody>';
    html += '  </table>';
    html += '</div>';
    
    $('#upper').append(html);
}

//html안에 function을 선언 했을 경우 document안에 함수를 선언하지 않고
//그냥 스크립트에 선언하면 된다.
//20230626
let delFun = (pThis) => {
		console.log("삭제버튼")
		
		console.log($(pThis).parent())
		$(pThis).parent().remove();
}

let insertFun = () => {
     //다건으로 되어 있는 div가 있을때 다건에 있는 div안에 있는 input의 벨류 값을
     // String으로 , 구분자로 묶어서 자바로 보낼때
     //20230627

     let empno = "";
	 let grade = "";
     
     //length를 구할때 ID로 찾으면 1만 나온다. 그래서 ID가 아닌 class로 구해야 한다.
     //20230626
     
     for(let i=0; i < ($('.info').length); i++){
     	let obj = $('.info').eq(i);
     	
     	empno += ',' + (obj.find('#empno').val());
        grade += ',' + (obj.find('#grade').val());
      }

	data = {empno : empno, grade : grade}
	
	$.ajax({
	             url : 'insertDivAddDel.do',
	             type : 'post',
	             dataType : 'json',
				 data : JSON.stringify(data),
				 contentType : "application/json",
	             success : function(data){
					console.log("다건의 div로 되어 있는 것을 자바로 넘길때")
    	 		 },
         		 error:function(request, status, error){
         			alert("관리자에게 문의하세요.");
          		}
			});

}


$(document).ready(function(){	
	init();	
	
	
});

