let isEnd = false;
    
    $(function(){
        $(window).scroll(function(){
            let $window = $(this);
console.log("===========")
console.log($window)
            let scrollTop = $window.scrollTop();
            let windowHeight = $window.height();
            let documentHeight = $(document).height();
            
            console.log("documentHeight:" + documentHeight + " | scrollTop:" + scrollTop + " | windowHeight: " + windowHeight );
            
            // scrollbar의 thumb가 바닥 전 30px까지 도달 하면 리스트를 가져온다.
            if( scrollTop + windowHeight + 30 > documentHeight ){
	console.log(">>>>>>>>>>>>>>>>>>>>>")
                fetchList();
            }
        });
console.log("<<<<<<<<<<<<<<<<<<<<<<<")
        fetchList();
    })
    
    let fetchList = () => {
	
	console.log("???????????????????????????????")
        if(isEnd == true){
            return;
        }
        
        // 방명록 리스트를 가져올 때 시작 번호
        // renderList 함수에서 html 코드를 보면 <li> 태그에 data-no 속성이 있는 것을 알 수 있다.
        // ajax에서는 data- 속성의 값을 가져오기 위해 data() 함수를 제공.
        let startNum = $("#list-guestbook tr").length || 0;

		console.log(">>>>>>>>>>>>>>>")
		console.log(startNum)

		data = {startNum : startNum}
        $.ajax({
            url:"scrollPagingResult.do",
            type : 'post',
	        dataType : 'json',
 			data : JSON.stringify(data),
			contentType : "application/json",
            success: function(result){
                // 컨트롤러에서 가져온 방명록 리스트는 result.data에 담겨오도록 했다.
                // 남은 데이터가 5개 이하일 경우 무한 스크롤 종료
console.log("||||||||||||||||||||||||||||||")
console.log(result)
                /*let length = result.data.length;
                if( length < 5 ){
                    isEnd = true;
                }
                $.each(result.data, function(index, vo){
                  //  renderList(false, vo);
                })*/

					let a= '';
 	           		$(data.result).each(function(){
 		           		a+= '<tr>';
 		           	    a+= '  <td class="tb_no">' + (this.rowNum) + '</td>';
                        a+= '  <td class="tb_nm"><a href="productDetail.do?productCd=' + (this.noticeTitle) + '">' + (this.noticeTitle) + '</td>';
                        a+= '  <td class="tb_reg">' + (this.noticeReg) + '</td>';
						a+= '  <td class="tb_dt">' + (this.noticeReg) + '</td>';
					    a+= '</tr>';
                       
 	           		});
         		$("#list-guestbook").append(a);
            }
        });
    }
    /*
    let renderList = function(mode, vo){
        // 리스트 html을 정의
        let html = "<li data-no='"+ vo.no +"'>" +
            "<strong>"+ vo.name +"</strong>" +
            "<p>"+ vo.content.replace(/\n/gi, "<br>") +"</p>" +
            "<strong></strong>" +
            "<a href='#' data-no='"+ vo.no +"'>삭제</a>" +
            "</li>"
        
        if( mode ){
            $("#list-guestbook").prepend(html);
        }
        else{
            $("#list-guestbook").append(html);
        }
    }*/