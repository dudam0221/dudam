$(function(){
  $(window).scroll(function(){
    var scr = $(window).scrollTop();
    $(".product_item > span:last-child").css("cursor", "pointer");
    if(scr >= 40){
      $('header').css('background-color', 'black');
      $('header a').css('color', 'white');
      $('#gnb > div').css('border', '1px solid lightgray')
    }else{
      $('header').css('background-color', '');
      $('header a').css('color', '');
      $('#gnb > div').css('border', '');
    }
    $(".product_item > span:last-child").click(function(){
      $(this).parent().toggleClass('cart')
    })
    $("#top_btn").click(function(event){
      event.preventDefault();
      $('body').stop().animate({scrollTop:0}, 300);
    })
  })
})

$(document).ready(function(){
	
	  var $slider = $('.slider'),
	      $firstSlide = $slider.find('li').first() // 첫번째 슬라이드
	      .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기

	  function PrevSlide(){ // 이전버튼 함수
	    stopSlide();startSlide(); //타이머 초기화
	    var $lastSlide = $slider.find('li').last() //마지막 슬라이드
	    .prependTo($slider); //마지막 슬라이드를 맨 앞으로 보내기  
	    $secondSlide = $slider.find('li').eq(1)//두 번째 슬라이드 구하기
	    .stop(true).animate({'opacity':0},400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
	    $firstSlide = $slider.find('li').first() //맨 처음 슬라이드 다시 구하기
	    .stop(true).animate({'opacity':1},400);//새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
	  }
	  
	  function NextSlide(){ // 다음 버튼 함수
	    stopSlide();startSlide(); //타이머 초기화
	    $firstSlide = $slider.find('li').first() // 첫 번째 슬라이드
	    .appendTo($slider); // 맨 마지막으로 보내기
	    var $lastSlide = $slider.find('li').last() // 맨 마지막으로 보낸 슬라이드
	    .stop(true).animate({'opacity':0},400); // fadeOut시키기
	    $firstSlide = $slider.find('li').first()// 맨 처음 슬라이드
	    .stop(true).animate({'opacity':1},400);// fadeIn 시키기
	  }
	  
	  $('#next').on('click', function(){ //다음버튼 클릭
	    NextSlide();
	  });
	  $('#prev').on('click', function(){ //이전 버튼 클릭
	    PrevSlide();
	  });

	  startSlide(); // 자동 슬라이드 시작
	  
	  var theInterval;

	  function startSlide() {
	    theInterval = setInterval(NextSlide, 5000); //자동 슬라이드 설정
	  }

	  function stopSlide() { //자동 멈추기
	    clearInterval(theInterval);
	  }
	  
	  $('.slider').hover(function(){ //마우스 오버시 슬라이드 멈춤
	    stopSlide();
	  }, function (){
	    startSlide();
	  });
	

	//공지사항 롤링  
	function tick(){
		$('#ticker_01 li:first').slideUp( function () { $(this).appendTo($('#ticker_01')).slideDown(); });
	}
	setInterval(function(){ tick () }, 5000);
	
 });
	
    //케이크 더 보기 클릭
	$(document).on('click',"#cakeMoreList",function(){
		
		let startNum = $("#cakeProduct li").length; 
	
		 $.ajax({
	             url : 'cakeMoreList.do',
	             type : 'post',
	             dataType : 'json',
	             data : {productClsCd:'D0001', startNum:startNum},
	             success : function(data){
				
				 // 더보기 버튼 숨기기	
				 if(data.more == 'N'){
					$('#cakeMoreList').hide();
				 }
	
 	           	 let a= '';
                     a+= '<ul  id="k_product">';
 	           		$(data.result).each(function(){
 		           		a+= '<li class="dudam_product">';
 		           	    a+= '  <div class="scale">';
                        a+= '    <img src="'+ (this.productUrl)+'">';
                        a+='   </div>';
 		           		a+= '  <p class="scale_tx"><a href="productDetail.do?productCd='+ (this.productCd) + '">' + (this.productNm) + '</a></p>';
					    a+= '</li>';
                       
 	           		});
                      a+= '</ul>';
         		$("#k_product").append(a);
    	 	 },
          error:function(request,status,error){
         		alert("관리자에게 문의하세요.");
          }
		});
	});
 
	//수제청 더 보기 클릭	
	$(document).on('click',"#drinkMoreList",function(){
		//let startNum = $("#cakeProduct li").length; 
		let data = {productClsCd:"D0002", startNum :  $("#drinkProduct li").length}
		console.log(data.productClsCd);
		 $.ajax({
	             url : 'drinkMoreList.do',
	             type : 'post',
	             dataType : 'json',
	             data : JSON.stringify(data),
	             contentType : "application/json",
	             success : function(data){
	            	 console.log("성공");
	            	 console.log(data);
   	             let a= '';
					 a+= '<ul  id="k_product">';
 	           		$(data).each(function(){
						if(!this.more){
	 		           		a+= '<li class="dudam_product">';
	 		           	    a+= '  <div class="scale">';
	                        a+= '    <img src="'+ (this.productUrl)+'">';
	                        a+='   </div>';
	 		           		a+= '  <p class="scale_tx"><a href="productDetail.do?productCd='+ (this.productCd) + '">' + (this.productNm) + '</a></p>';
	                        a+= '</li>';
						}
						 // 더보기 버튼 숨기기	
						 if(this.more == 'N'){
							$('#drinkMoreList').hide();
						 }
 	           		});
 					a+= '</ul>';
         		$("#d_product").append(a);
       	 	 },
             error:function(request,status,error){
            	 console.log("실폐");
            		alert("관리자에게 문의하세요.");
             }
   		});
	});
	
	//답례품 더 보기 클릭	
	$(document).on('click',"#thanksMoreList",function(){
		let data = {productClsCd:"D0003", startNum :  $("#thanksProduct li").length}
		 $.ajax({
	             url : 'thanksMoreList.do',
	             type : 'post',
	             dataType : 'json',
	             data : JSON.stringify(data),
	             contentType : "application/json",
	             success : function(data){
	            	 console.log("성공11");
	            	 console.log(data);

				let a= '';
					a+= '<ul  id="k_product">';
 	           	$(data).each(function(){
					if(!this.more){
 		           		a+= '<li class="dudam_product">';
 		           	    a+= '  <div class="scale">';
                        a+= '    <img src="'+ (this.productUrl)+'">';
                        a+='   </div>';
 		           		a+= '  <p class="scale_tx"><a href="productDetail.do?productCd='+ (this.productCd) + '">' + (this.productNm) + '</a></p>';
                        a+= '</li>';
					}
					 // 더보기 버튼 숨기기	
					 if(this.more == 'N'){
						$('#thanksMoreList').hide();
					 }
 	           	});
				    a+= '</ul>';
         		$("#t_product").append(a);
       	 	 },
             error:function(request,status,error){
            		alert("관리자에게 문의하세요.");
             }
   		});
	});
	
	//main 화면으로 이동
 function goBack(){
        $("#homeFrm").attr("action","/main.do").submit();
    }



 	function popUp(){
	console.log("1");
            let url = "itemDetailView.jsp";
            let name = "제품 상세";
            let option = "width = 500, height = 500, top = 100, left = 200, location = no"
            window.open(url, name, option);
        }	
