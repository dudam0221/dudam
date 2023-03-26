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
</head>
<body>
<header>
    <jsp:include page="header.jsp"></jsp:include>
 </header>

  <form name="regViewFrm" id="regViewFrm" method="post"></form>
  <h1>두손에 담다 공지사항 목록</h1>
  <div class="notice">
  	<table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
       <c:forEach var="item" items="${resultList}" varStatus="status">
         <tr>
           <td class="tb_no">${item.rowNum}</td>
           <td class="tb_nm"><a href="noticeDetail.do?noticeNo=${item.noticeNo}">${item.noticeTitle}</a></td>
           <td class="tb_reg">${item.noticeReg}</td>
<%--            <td class="tb_reg" id="temp_noti_reg" style="cursor:pointer;">${item.noticeReg}</td> --%>
           <td class="tb_dt"><fmt:formatDate  value="${item.noticeRegDt}" type="DATE" pattern="yyyy-MM-dd"/></td>
           <input type="hidden" id="noti_no" name="noti_no" value="${item.noticeNo }" />
         </tr>
       </c:forEach>
      </tbody>
    </table>
    <c:set var="adminSession" value="${memberId }"/>
    <c:if test="${'admin' eq adminSession}">
    	<img src="images/images/regBtn.png" onclick="goNoticeRegView();" style="cursor:pointer;" alt="LIST" id="tt">
    </c:if>
  </div>
  <div>
  <form id="testFrm" name="testFrm" method="post">
	  <div>
	  	<input type="text" id="noti_row" name="noti_row" value="" />
	  	<input type="text" id="noti_nm" name="noti_nm" value="" />
	  	<input type="text" id="noti_reg" name="noti_reg" value="" />
	  	<input type="text" id="noti_dt" name="noti_dt" value="" />
	  </div>
	  <div id="temp">
	  		<input type="radio" name="txtRd" value="1" />
	  		<input type="radio" name="txtRd" value="2" />
	  		<input type="radio" name="txtRd" value="3" />
	  	</div>
	  <div>
	  	<select name="resv_program" id="resv_program" class="form-control" style="width:500px"/></select>
	  	<input type="button" id="selectBtn" name="" onclick="" value="셀렉트박스 전송" />
	  </div>
	  <div>
	    <sapan>라디오버튼</sapan>
	  	<input type="radio" name="rd" value="1" />
	  	<input type="radio" name="rd" value="2" />
	  	<input type="radio" name="rd" value="3" />
	  	<input type="button" id="radioBtn" name="" value="라디오버튼 전송" />
	  </div>
	  <div>
	    <sapan>체크박스</sapan>
	    <label><input type="checkbox" name="chkAll" value="" />전체</label>
	  	<label><input type="checkbox" name="chk" value="1" />blue</label>
	  	<label><input type="checkbox" name="chk" value="2" />yellow</label>
	  	<label><input type="checkbox" name="chk" value="3" />red</label>
	  	<input type="button" id="checkBtn" name="" value="체크박스 전송" />
	  </div>
	  <button type="button" id="" name="allBtn" onclick="allBtnFun();" value="form_ajax_전송" style="width:100px; height:30px;">전송</button>
  </form>
  </div>
  <div>
  	<select name="selectProdMaster" id="selectProdMaster" class="form-control" style="width:500px"/></select>
  	<select name="selectProdDetail" id="selectProdDetail" class="form-control" style="width:500px"/></select>
  </div>
  <div>
  	<label><input type="checkbox" id="disChk" name="disChk" value="" />체크시 비활성화</label>
  </div>
  <div>
  <select nema="" id="selectUpperClsCd" class="form-control" style="width:500px"/></select>
  <select nema="" id="selectMiddleClsCd" class="form-control" style="width:500px"/></select>
  <select nema="" id="selectLowerClsCd" class="form-control" style="width:500px"/></select>
  <input type="text" id="srcClsCd" name="srcClsCd" value="" />
  <input type="button" id="resetBtn" name="resetBtn" onclick="resetFun();" value="초기화" />
  <input type="button" id="searchBtn" name="searchBtn" value="조회" />
  	<table>
      <thead>
        <tr>
          <th>번호</th>
          <th>분류코드</th>
          <th>분류명</th>
        </tr>
      </thead>
      <tbody id="upper"></tbody>
    </table>
  </div>
  <div>
  	<table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제품코드</th>
          <th>제품명</th>
        </tr>
      </thead>
      <tbody id="lower"></tbody>
    </table>
  </div>
  <div>
  	<input type="text" id="srcText" name="srcText" value=""/>
  	<input type="button" id="srcBtn" name="srcBtn" onclick="showPopUp();" value="조회">
  	<input type="text" id="parent_val" name="parent_val" value="" /> 
  </div>
  <div>
  <input type="text" id="num" name="num" value="0" />
  <input type="button" id="plusBtn" name="plusBtn" onclick="plusFunc();" value="증감" />
  <input type="button" id="minusBtn" name="minusBtn" onclick="minusFunc();" value="차감" />
  </div>
  <div>
  	<input type="button" id="" name="" onclick="scrollFunc();" value="스크롤페이징"/>
  </div>
</body>
</html>