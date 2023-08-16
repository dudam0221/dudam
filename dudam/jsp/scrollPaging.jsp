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
   <script src="js/scrollPaging.js"></script>
</head>
<body>
<header>
    <jsp:include page="header.jsp"></jsp:include>
 </header>

  <form name="regViewFrm" id="regViewFrm" method="post"></form>
  <h1>스크롤페이징 목록</h1>
  <div class="notice" id="div01">
  	<table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody  id="list-guestbook">
       <c:forEach var="item" items="${resultList}" varStatus="status">
         <tr>
           <td class="tb_no">${item.rowNum}</td>
           <td class="tb_nm"><a href="noticeDetail.do?noticeNo=${item.noticeNo}">${item.noticeTitle}</a></td>
           <td class="tb_reg">${item.noticeReg}</td>
           <td class="tb_dt"><fmt:formatDate  value="${item.noticeRegDt}" type="DATE" pattern="yyyy-MM-dd"/></td>
           <input type="hidden" id="noti_no" name="noti_no" value="${item.noticeNo }" />
         </tr>
       </c:forEach>
      </tbody>
    </table>
  </div>
</body>
</html>