$(function(){
	let data = {};
	
// 부모창에서 id가 parent_val인 요소(태그)의 값 가져오기(opener함수를 사용하여)
var parent_val = opener.$("#srcText").val(); 

// 자식창(팝업창)에서 id가 child_val인 요소(태그)의 값에 부모창에서 가져온 값 넣기
$('#child_val').val(parent_val);

});

function srcPopUp(){
	let param = $('#child_val').val();
	
	data = {productClsCd : param}
	$.ajax({
	         url : 'selectPopUpList.do',
	         type : 'post',
	         dataType : 'json',
			 data : JSON.stringify(data),
			 contentType : "application/json",
	         success : function(data){

				let a = "";
				$(data).each(function(){
					a += '<tr>';
					a += '<td class="tb_no">' + (this.rowNum) + '</td>';
					a += '<td id="clsCd1" class="tb_nm">' + (this.productCd) + '</td>'
					a += '<td class="tb_reg">' + (this.productNm) + '</td>'
					a += '</tr>'
				});
				
				$("#popUpList").html(a);
    	 	 },
         	 error:function(request, status, error){
         		alert("관리자에게 문의하세요.");
          	}
		});
}

//팝업창에서 선택한 값 부모창으로 전달
// 자식창 테이블에서 행 선택시 이벤트 발생
//2023-03-04
$(document).on('click', '#popUpList tr', function(){
	
	$( this ).css( "background-color", "#f4f4f4" );
    $( this).children("td").css( "cursor", "pointer" );

//td안에는 value=""값을 줄 수 없다. 그래서 text()로 값을 가지고 와야한다.
//상위 테이블에서 특정 행 선택시 값 가져오기(find('td:eq(1)')은 몇번째 열 값을 가지고 올건지 찾는것)
//	let param = $(this).find('td:eq(1)').val();     "X" 
//  2023-03-04
let param = $(this).find('td:eq(1)').text();      //"O"

//팝업창(자식창)에서 선택된 값을 부모창에서 받는 부분 -> 받아서 그 값을 해당 부분에 넣는다
$("#parent_val", opener.document).val(param);

//팝업창 닫기
close();
});




