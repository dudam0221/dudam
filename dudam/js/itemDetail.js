//$(function(){
//	$("h1").text($('#item_nm').val() + ' 상세정보');
//});

$(document).ready(function(){	
	var articleObject = '${adminSession }';
console.log("===================");
console.log(articleObject)
});
	


window.onload = function(){
	
	$("h1").text($('#item_nm').val() + ' 상세정보');
	
	  let target = $('.target');
	  let zoom = target.data('zoom');

	  $(".left_side")
	    .on('mousemove', magnify)
	    .prepend("<div class='magnifier'></div>")
	    .children('.magnifier').css({
	    "background": "url('" + target.attr("src") + "') no-repeat",
	    "background-size": target.width() * zoom + "px " + target.height() * zoom+ "px"
	  });

	  let magnifier = $('.magnifier');

	  function magnify(e) {

	    // 마우스 위치에서 .magnify의 위치를 차감해 컨테이너에 대한 마우스 좌표를 얻는다.
	    let mouseX = e.pageX - $(this).offset().left;
	    let mouseY = e.pageY - $(this).offset().top;

	    // 컨테이너 밖으로 마우스가 벗어나면 돋보기를 없앤다.
	    if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
	      magnifier.fadeIn(100);
	    } else {
	      magnifier.fadeOut(100);
	    }

	    //돋보기가 존재할 때
	    if (magnifier.is(":visible")) {

	      // 마우스 좌표 확대될 이미지 좌표를 일치시킨다.
	      let rx = -(mouseX * zoom - magnifier.width() /2 );
	      let ry = -(mouseY * zoom - magnifier.height() /2 );

	      //돋보기를 마우스 위치에 따라 움직인다.
	      //돋보기의 width, height 절반을 마우스 좌표에서 차감해 마우스와 돋보기 위치를 일치시킨다.
	      let px = mouseX - magnifier.width() / 2;
	      let py = mouseY - magnifier.height() / 2;

	      //적용
	      magnifier.css({
	        left: px,
	        top: py,
	        backgroundPosition: rx + "px " + ry + "px"
	      });
	    }
	  }
	};