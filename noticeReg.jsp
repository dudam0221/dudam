<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html>
<head>
   <link rel="stylesheet" href="css/notice.css">
   <script src="js/notice.js"></script>
<script>

</script>
</head>
<body>
<header>
    <jsp:include page="header.jsp"></jsp:include>
 </header>
 <h1>두손에 담다 공지사항 등록</h1>
  <div class="notice">
  <form id="noticeListFrm" name="noticeListFrm" method="post"></form>
  <form id="noticeRegFrm" name="noticeRegFrm" method="post">
  		제목 : <input type="text" id="noticeTitle" name="noticeTitle" value="" /></br>
  		내용 : <textarea id="noticeCn" name="noticeCn" rows="5" cols="33" placeholder="입력하세요"></textarea>
  </form>	
	<img src="images/images/saveBtn.png" onclick="goNoticeReg();" style="cursor:pointer;" alt="SAVE">
  	<img src="images/images/listBtn.png" onclick="goNoticeList();" style="cursor:pointer;" alt="LIST">
  </div>
  
</body>
</html>