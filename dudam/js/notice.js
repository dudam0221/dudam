//$(document).ready 안에 function name() 함수를 선언하면 DOM 생성 후 사라지게 된다.
//$(document).ready 안에 있는 함수는 window에 있는 상위 스코프에서 찾는다. 이것을 상위 스코프에
//할당을 해버린다. 
//그 후에 버튼을 클릭을 하면 그 함수를 찾을 수 없으니 undefined라고 한다.
//$(document).ready 밖에 있는 함수는 전역 스코프이기 때문에 찾을 수 있다.
//함수를 변수에 담아 놓은 경우에는 $(document).ready 밖에 만들고  $(document).ready안에
//함수 호출 하면 정상 작동 한다. 예로 selectBox() 함수이다
//2023-02-23
let data= {};

$(document).ready(function(){	
	let data = $('#memberId').val();
	
	/*if(data !== "admin"){
		$("img").css("display", "none")	
	}*/

    //체이닝(로딩시 셀렉트 바스 값 조회)
	initFun();
	
	//라디오버튼 선택, 선택해제
	$('input:radio[name=rd]').is('checked');
	
	//아작스로 라디오 버튼 값 가져와서 자바로 값 넘기기
	$('#radioBtn').click(() => {
		let radioVal = $('input[name="rd"]:checked').val();
		let data = {radioVal:radioVal}
		
		$.ajax({
	             url : 'insertRadio.do',
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
		
	});
	
	//전체체크 박스 클릭시 전체 선택 및 전체 해제
	$('input[name=chkAll]').click(function(){
		
		var checked = $(this).is(':checked');
		
		if(checked){
			$('input:checkbox').prop('checked',true);
		}else{
			$('input:checkbox').prop('checked',false);
		}
	});
	
	//아작스로 체크박스에 값 가져와서 자바로 값 넘기기
	//그리드에 있는게 아니라
	$('#checkBtn').click(() => {
		const arr = [];
		let chk = $('input[name="chk"]:checked');
		
		$(chk).each(function(){
			arr.push($(this).val());
		});
		
		let data = {chk:arr}
		
		$.ajax({
	             url : 'insertCheck.do',
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
		
	});
	
	//체크박스 선택시 셀렉트 박스, 텍스트 라디오 버튼 비활성화
	$('#disChk').click(() =>{

		//셀렉트 박스 비활성
		$("select[name=resv_program]").attr("disabled", true);
		
		//버튼 비활성
		$("#selectBtn").attr("disabled", true);
		
		//라디오버튼 비활성
		$('input[name="rd"]').attr("disabled", true);
		
		//체크박스 비활성
		$('input[name="chk"]').attr("disabled", true);
	});	
	
	
	$('#btnAdd').click(() => {
		console.log("==========")
		console.log(1)
		let html = "";
		    html += '<table>';
            html += '  <tbody>';
            html += '    <tr>';
            html += '      <th>번호</th>';
            html += '      <td>';
            html += '        <input type="text" id="" name="" value="" />';
            html += '      </td>';
            html += '    </tr>';
            html += '    <tr>';
            html += '      <th>제품코드</th>';
            html += '      <td>';
            html += '        <input type="text" id="" name="" value="" />';
            html += '      </td>';
            html += '    </tr>';
            html += '  </tbody>';
            html += '</table>';
 $("#list").append(html);
	});
	

});

// 공지사항 목록 조회
function goNoticeList(){
        $("#noticeListFrm").attr("action","/noticeList.do").submit();
    }

//공지사항 등록 화면 이동
function goNoticeRegView(){
        $("#regViewFrm").attr("action","/noticeRegView.do").submit();
    }

//공지사항 등록
function goNoticeReg(){
		if($('#noticeTitle').val().length == 0){
			alert("공지사항 제목을 입력 하세요!!");
		}else if(document.querySelector('#noticeCn').value.length == 0){
			alert("공지사항 내용을 입력 하세요!!")
		}else{
       		 $("#noticeRegFrm").attr("action","/noticeReg.do").submit();
		}
    }

//공지사항 수정
function goNoticeUpd(){
		if($('#noticeTitle').val().length == 0){
			alert("공지사항 제목을 입력 하세요!!");
		}else if(document.querySelector('#noticeCn').value.length == 0){
			alert("공지사항 내용을 입력 하세요!!")
		}else{
			$("#noticeUpdFrm").attr("action","/noticeUpd.do").submit();
		}
    }

//공지사항 삭제
function goNoticeDel(){
        $("#noticeUpdFrm").attr("action","/noticeDel.do").submit();
    }


//동적(for문으로 생성된 테이블) 생성된 것은 $(document).on('click', '#id', function())
//이렇게 사용 해야 한다.
//정적으로 생성된 것은 $('#id').click(function()) 사용해라
//2023-02-18 	
$(document).on('click','#temp_noti_reg',function(){
		let row = $(this).closest('tr').find('#noti_no').val();
		/*let row = $(this).parent().find('#noti_no').val()*/
	
		$.ajax({
	             url : 'noticeDetailInfo.do',
	             type : 'post',
	             dataType : 'json',
	             data : {noticeNo:row},
	             success : function(data){
					$('#noti_row').val(data.NOTICE_NO);	
					$('#noti_nm').val(data.NOTICE_TITLE);
					$('#noti_reg').val(data.NOTICE_REG);
					$('#noti_dt').val(data.NOTICE_REG_DT);
	
				// 선택된 조건에 맞을 때 라디오버튼 체크 하기
				// 2023-02-23
				let a = '';
				a += '<input type="radio" name="txtRd" value="1"'
				if(data.NOTICE_NO == "1"){
					a +=  'checked'
				}
				a += '/>';
				a += '<input type="radio" name="txtRd" value="2"'
				if(data.NOTICE_NO == "2"){
					a +=  'checked'
				}
				a += '/>';
				a += '<input type="radio" name="txtRd" value="3"'
				if(data.NOTICE_NO == "3"){
					a +=  'checked'
				}
				a += '/>';
	
				$("#temp").html(a);

    	 	 },
          error:function(request,status,error){
         		alert("관리자에게 문의하세요.");
          }
	});
});
	
	//아작스에서 java 호출 시 
	//자바 : @RequestBody, @ResponseBody, @PostMapping
	//아작스 : data를 JSON.stringify(data), contentType : "application/json", 있어야한다.
	//2023-02-22 위에 조건이 충족이 되어야함
	let selectBox = () => {
	let data = {}
		$.ajax({
	             url : 'selectBoxNoticeList.do',
	             type : 'post',
	             dataType : 'json',
			     data : JSON.stringify(data),
				 contentType : "application/json",
	             success : function(data){
					
					let a = "";
					$(data).each(function(){
						a += '<option value="' + (this.rowNum) + '">' + (this.noticeTitle) + '</option>'
					});
					
					$("#resv_program").append(a);
    	 		 },
         		 error:function(request, status, error){
         			alert("관리자에게 문의하세요.");
          		}
			});
		};

	//셀렉트 박스 값을 자바로 넘기기
	$(document).on('click','#selectBtn',function(){	
	
	let param = $(this).parent().find('#resv_program').val();
	
	data = {selectBox : param}
	
	$.ajax({
	             url : 'selectBoxInsert.do',
	             type : 'post',
	             dataType : 'json',
			     data : JSON.stringify(data),
				 contentType : "application/json",
	             success : function(data){
					console.log("셀렉트 박스 성공")
    	 		 },
         		 error:function(request, status, error){
         			alert("관리자에게 문의하세요.");
          		}
			});
	});
		
	//form태그안에 있는 값을 아작스로 자바로 넘기기
	function allBtnFun(){
			
			//한글이 특수문자가 나왔다. 그래서 이것을 decodeURI로 decode를 해주어야 한글이 나온다.
			//form 태그에 있는 값을 serialize로 직렬화 하여 param 담는다.
			//ajax에서 form의 값을 한번에 받아 data값을 세팅할때 사용한다.
			//2023-02-24
			
			//20230627
			//serialize와 serializeArray의 차이점
			
			//serialize는 쿼리스트링으로 생성
			//serializeArray는 키,밸류로 배열을 생성 한다.
			
			//let param11 =  decodeURI($("#testFrm").serialize());
			let param =  $("#testFrm").serializeArray();
		
			let len = param.length;
            let dataObj = {};
 
			for (i=1; i < len; i++) {
 			 dataObj[param[i].name] = param[i].value;
			}
			
			console.log("ㅎㅎㅎㅎㅎㅎㅎㅎㅎ")
			console.log(dataObj)
			//배열을 for문을 사용 하여 키,밸류 값으로 dataObj 변수에 담는다.
			//dataObj 변수를 아작스 data에 봐로 보내야 한다.
			//20230606
			
			//20230629
			//체크박스는 멀티로 선택을 해서 자바로 넘긴다.
			//이때 테이블은 blue, yellow, red 값이 선택이 되어 값이 저장 되기 때문에 테이블에 각 컬럼을 만들어야 한다
			//html에서는 각 컬럼 마다 name를 다르게 주어야 한다.
			//serializeArray로 한번에 불러 와서 자바로 넘겨 주면 된다.
	
		$.ajax({
	             url : 'allBtnFunInsert.do',
	             type : 'post',
	             dataType : 'json',
				 data : JSON.stringify(dataObj),
				 contentType : "application/json",
	             success : function(data){
					console.log("form태그안에 있는 값을 아작스로 자바로 넘기기 성공")
    	 		 },
         		 error:function(request, status, error){
         			alert("관리자에게 문의하세요.");
          		}
			});
			
		}
		
	let serializeFun = () => {
		$("#regViewFrm").attr("action","/serialize.do").submit();
	}	
		
	//화면 로딩시 상위 상품 조회
	let selectProd = () =>{
		$.ajax({
	             url : 'selectProdMasterList.do',
	             type : 'post',
	             dataType : 'json',
			     data : JSON.stringify(data),
				 contentType : "application/json",
	             success : function(data){
					
					let a = "";
					$(data).each(function(){
						a += '<option value="' + (this.productClsCd) + '">' + (this.productClsNm) + '</option>'
					});
					
					$("#selectProdMaster").append(a);
					
					selectProdDetail();
    	 		 },
         		 error:function(request, status, error){
         			alert("관리자에게 문의하세요.");
          		}
			});
	}
	
	//상위 상품 조회 후 하위 상품 조회
	function selectProdDetail(param){
		
		if(param != null){
			data = {productClsCd : param}
		}else{
			data = {productClsCd : 'D0001'}	
		}
		
		$.ajax({
	             url : 'selectProdDetailList.do',
	             type : 'post',
	             dataType : 'json',
			     data : JSON.stringify(data),
				 contentType : "application/json",
	             success : function(data){
					
					//셀렉트 박스 자체를 삭제한다.
					/*$('select').remove('#selectProdDetail');*/
					
					//셀렉트 박스 안에 있는 option을 삭제한다.
					$("#selectProdDetail option").remove();
					
					let a = "";
					$(data).each(function(){
						a += '<option value="' + (this.productCd) + '">' + (this.productNm) + '</option>'
					});
					
					$("#selectProdDetail").append(a);
    	 		 },
         		 error:function(request, status, error){
         			alert("관리자에게 문의하세요.");
          		}
			});
	}
	
	//상위 셀렉트 박스 변경시 하위 셀렉트 박스 값 변경
	$(document).on('change','#selectProdMaster', function(){
		
		//셀렉트 박스 선택한 값을 가져온다.
		let param = $('#selectProdMaster option:selected').val();
		
		selectProdDetail(param);
	});
	
	
	//체이닝(로딩시 셀렉트 바스 값 조회)
let initFun = () => {
	return new Promise((resolve, reject) =>{
		resolve();
	}).then(() => {
		//셀렉트박스 호출
		selectBox();
	}).then(() => {
		//상위 셀렉트 박스 호출
	    selectProd();	
    }).then(() => {
	    ininCmmn();
	}).catch(() =>{
		console.log("오류발생");
	});
}

let codeList = [];
let codeD0001 = [];
let codeD0002 = [];
let codeD0003 = [];
let ininCmmn = () => {
		//data를 전역변수로 선언을 하였기 때문에 각 메소드 마다 선언 할 필요 없다.
		//data에 값을 담을 것이 없을 경우 그냥 없어도 된다.
		//2023-02-27
		/*data = {}*/
		
		$.ajax({
	             url : 'selectInitcmmnList.do',
	             type : 'post',
	             dataType : 'json',
			     data : JSON.stringify(data),
				 contentType : "application/json",
	             success : function(data){
					
					//배열 내 객체를 reduce함수를 사용 하여 특성 속성으로 그룹화를 하기 위해 사용함
					//그룹화 후 각 셀렉트 박스에 값을 넣어 줌
					//2023-02-27
					codeList = data.reduce((v,c) => {
						v[c.productClsCd] = v[c.productClsCd] || [];
						v[c.productClsCd].push(c);
						return v
					}, {});
					
					let a = "";
					codeList.D0001.forEach((e,i) => {
						/*codeD0001.push({value:e.productCd,label:e.productNm})*/	
						a += '<option value="' + (e.productCd) + '">' + (e.productNm) + '</option>'
					});
					$("#selectUpperClsCd").append(a);
					
					
					let b = "";
					codeList.D0002.forEach((e,i) => {
						/*codeD0002.push({value:e.productCd,label:e.productNm})*/	
						b += '<option value="' + (e.productCd) + '">' + (e.productNm) + '</option>'
					});
					$("#selectMiddleClsCd").append(b);
					
					
					let c = "";
					codeList.D0003.forEach((e,i) => {
						/*codeD0003.push({value:e.productCd,label:e.productNm})*/	
						c += '<option value="' + (e.productCd) + '">' + (e.productNm) + '</option>'
					});
					$("#selectLowerClsCd").append(c);
					
    	 		 },
         		 error:function(request, status, error){
         			alert("관리자에게 문의하세요.");
          		}
			});
}

//조회 버튼 클릭
$(document).on('click', '#searchBtn', function(){
	
	//선택된 셀렉드 박스 값 가져오기
	let param1 = $('#selectUpperClsCd option:selected').val();
	let param2 = $('#selectMiddleClsCd option:selected').val();
	let param3 = $('#selectLowerClsCd option:selected').val();
	
	//텍스트 박스 값 가져오기
	let param = $('#srcClsCd').val();
	data = {srcClsCd : param, selectUpperClsCd:param1, selectMiddleClsCd:param2, selectLowerClsCd:param3}
	$.ajax({
	         url : 'selectUpperMainList.do',
	         type : 'post',
	         dataType : 'json',
			 data : JSON.stringify(data),
			 contentType : "application/json",
	         success : function(data){
				
				let a = "";
				$(data).each(function(){
					a += '<tr>';
					a += '<td class="tb_no">' + (this.rowNum) + '</td>';
					a += '<td id="clsCd" class="tb_nm" value="'+ (this.productClsCd) +'">' + (this.productClsCd) + '</td>'
					a += '<td class="tb_reg">' + (this.productClsNm) + '</td>'
					a += '</tr>'
				});
				
				$("#upper").html(a);
    	 	 },
         	 error:function(request, status, error){
         		alert("관리자에게 문의하세요.");
          	}
		});
});

//상위 그리드 클릭시 조회 후 하위 그리드에 값 표시
$(document).on('click', '#upper tr', function(){
	
	$( this ).css( "background-color", "#f4f4f4" );
    $( this).children("td").css( "cursor", "pointer" );

    //인덱스를 통해서 값을 가져오는 경우
    //상위 테이블에서 특정 행 선택시 값 가져오기(find('td:eq(1)')은 몇번째 열 값을 가지고 올건지 찾는것)
	let param = $(this).find('td:eq(1)').text()

	data = {productClsCd : param}
	$.ajax({
	         url : 'selectLowerMainList.do',
	         type : 'post',
	         dataType : 'json',
			 data : JSON.stringify(data),
			 contentType : "application/json",
	         success : function(data){
				
				let a = "";
				$(data).each(function(){
					a += '<tr>';
					a += '<td class="tb_no">' + (this.rowNum) + '</td>';
					a += '<td class="tb_nm">' + (this.productCd) + '</td>'
					a += '<td class="tb_reg">' + (this.productNm) + '</td>'
					a += '</tr>'
				});
				
				$("#lower").html(a);
    	 	 },
         	 error:function(request, status, error){
         		alert("관리자에게 문의하세요.");
          	}
		});
});

//초기화 버튼 클릭
function resetFun(){

	//셀렉트 박스 첫번째 항목 선택이 되도록
	$('#selectUpperClsCd').find('option:first').prop('selected',true)
	$('#selectMiddleClsCd').find('option:first').prop('selected',true)
	$('#selectLowerClsCd').find('option:first').prop('selected',true)
	
	//텍스트 박스 값 삭제
	$('#srcClsCd').val('');
	
}

//조회 팝업창 함수
function showPopUp() {
	 window.open("showPopUp.do", "testpop", "width=400, height=300, left=100, top=50"); 

}	

let count = 0;
//버튼클릭시 num 증감 이벤트
let plusFunc = () => {
	count += 1;
	$('#num').val(count);
}

//버튼클릭시 num 감소 이벤트
let minusFunc = () => {
	count -= 1;
	$('#num').val(count);
}

// 일반함수 , 리터럴 방식의 익명함수 차이 2023-03-04
// 일반함수와 리터럴 방싱의 익명함수의 차이는 호이스팅과 관련 있다.
// 일반함수는 화면 로딩시 호이스팅으로 상위에 위치 하면서 메모리를 할당 받는다. 익명함수는 화면에서
// 한번 호출 하기 위해서 호이스팅으로 메모리 할당을 받으면 불필요한 메모리가 사용되게 된다.
// 그래서 리터럴 방식의 익명함수를 사용 하면 호이스팅으로 변수만 상위에 위치하고 익명함수의 메모리는 할당
// 되지 않는다. 호이스팅으로 인한 메모리 사용에 차이점이다.

//스크롤페이징 화면이동2023-03-15
function scrollFunc(){
	$("#regViewFrm").attr("action","/scrollPaging.do").submit();
}
