<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <link rel="stylesheet" href="css/notice.css">
  <script src="js/notice.js"></script>
<script>

</script>
</head>
<body>
<header>
    <jsp:include page="header.jsp"></jsp:include>
 </header>
 <h1>두손에 담다 공지사항 상세</h1>
  <div class="notice">
  <form id="noticeListFrm" name="noticeListFrm" method="post"></form>
  <form id="noticeUpdFrm" name="noticeUpdFrm" method="post">
<%--   	<c:out value="${result}"/> --%>
  		제목 : <input type="text" id="noticeTitle" name="noticeTitle" value="${result.noticeTitle }" /></br>
  		내용 : <textarea id="noticeCn" name="noticeCn" rows="5" cols="33" >${result.noticeCn }</textarea>
  		<input type="hidden" id="" name="noticeNo" value="${result.noticeNo }" />
  		<input type="hidden" id="memberId" name="memberId" value="${memberId }" />
  </form>	
  		<c:set var="adminSession" value="${memberId }"/>
    	<c:if test="${'admin' eq adminSession}">
  			<img src="images/images/saveBtn.png" onclick="goNoticeUpd();" style="cursor:pointer;" alt="SAVE">
  			<img src="images/images/delBtn.png" onclick="goNoticeDel();" style="cursor:pointer;" alt="DELTE">
  			<img src="images/images/listBtn.png" onclick="goNoticeList();" style="cursor:pointer;" alt="LIST">
  		</c:if>
  </div>
  
</body>

</html>