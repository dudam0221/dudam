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
   <script src="js/gridAddDel.js"></script>
<style>
input:focus {  /* 인풋 박스 클릭시 테두리 없애기*/
  outline: none;
}

input,
 button{ /* input, button 테두리 없애기 */
 	border:none; 
 } 
</style>
</head>
<body>
<header>
    <jsp:include page="header.jsp"></jsp:include>
 </header>
 <h1>gridAddDel</h1>
  <form name="addDelViewFrm" id="addDelViewFrm" method="post"></form>
  <div>
  	<table>
  		<thead>
  			<colgroup>
  			</colgroup>
  			<tr>
  				<th>chk</th>
  				<th>부서번호</th>
  				<th>부서명</th>
  				<th>지역</th>
  				<th>사번</th>
  				<th>이름</th>
  				<th>업무</th>
  				<th>메니저</th>
  				<th>고용일자</th>
  				<th>급여</th>
  				<th>커미션</th>
  				<th>삭제</th>
  			</tr>
  		</thead>
  		<tbody id="resultList">
  		<tr>
  			<td><input type="checkbox" id="chk" name="chk" value="" /></td>
  			<td><input type="text" id="deptno" name="" value="" /></td>
  			<td><input type="text" id="dname" name="" value="" /></td>
  			<td><input type="text" id="loc" name="" value="" /></td>
  			<td><input type="text" id="empno" name="" value="" /></td>
  			<td><input type="text" id="ename" name="" value="" /></td>
  			<td><input type="text" id="job" name="" value="" /></td>
  			<td><input type="text" id="mgr" name="" value="" /></td>
  			<td><input type="text" id="hiredate" name="" value="" /></td>
  			<td><input type="text" id="sal" name="" value="" /></td>
  			<td><input type="text" id="comm" name="" value="" /></td>
  			<td><input type="button" id="delBtn" name="" value="삭제"/></td>
  		</tr>
  		</tbody>
  	</table>
  </div>
  <div>
    <input type="button" id="addFun" name="" value="그리드 추가" onclick="addFun();" />
    <input type="button" id="delFun" name="" value="그리드 삭제" onclick="delFun();" />
    <input type="button" id="delFun" name="" value="로또번호 추출" onclick="lottonFun();" />
    <input type="button" id="chkInsertFun" name="" value="체트된것만 저장" onclick="chkInsertFun();" />
    <input type="button" id="chkdeleteFun" name="" value="체크된것만 삭제" onclick="chkdeleteFun();" />
  </div>
  
</body>
</html>