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
   <script src="js/serialize.js"></script>
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
 <h1>serialize</h1>
 <form name="mapViewFrm" id="mapViewFrm" method="post"></form>
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
  		</tr>
  		</tbody>
  	</table>
  </div>
  
  <div>
  	<table>
  		<thead>
  			<colgroup>
  			</colgroup>
  		</thead>
  		<tbody id="dtlinfo">
  		  <tr>
  		      <th>부서번호</th>
  			  <td><input type="text" id="deptno" name="" value="" /></td>
  			  <th>부서명</th>
  			  <td><input type="text" id="dname" name="" value="" /></td>
  			</tr>
  			<tr>
  			  <th>지역</th>
  			  <td><input type="text" id="loc" name="" value="" /></td>
  			  <th>사번</th>
  			  <td><input type="text" id="empno" name="" value="" onclick="salary();"/></td>
  			</tr>	
  			<tr>
  			  <th>이름</th>
  			  <td><input type="text" id="ename" name="" value="" /></td>
  			  <th>업무</th>
  			  <td><input type="text" id="job" name="" value="" /></td>
  			</tr>	
  			<tr>
  			  <th>메니저</th>
  			  <td><input type="text" id="mgr" name="" value="" /></td>
  			  <th>고용일자</th>
  			  <td><input type="text" id="hiredate" name="" value="" /></td>
  			</tr>	
  			<tr>
  			  <th>급여</th>
  			  <td><input type="text" id="sal" name="" value="" /></td>
  			  <th>커미션</th>
  			  <td><input type="text" id="comm" name="" value="" /></td>
  			</tr>	
  		</tbody>
  	</table>
  </div>
  
  <div>
  	<table>
  		<thead>
  			<colgroup>
  			</colgroup>
  			<tr>
  				<th>부서번호</th>
  				<th>부서명</th>
  				<th>지역</th>
  			</tr>
  		</thead>
  		<tbody id="deptList">
  		<tr>
  			<td><input type="text" id="deptno" name="" value="" /></td>
  			<td><input type="text" id="dname" name="" value="" /></td>
  			<td><input type="text" id="loc" name="" value="" /></td>
  		</tr>
  		</tbody>
  	</table>
  </div>
  
  <div>
    <input type="button" id="resetBtn" name="" value="초기화" />
    <input type="button" id="regBtn" name="" value="등록" />
    <input type="button" id="updBtn" name="" value="수정" />
    <input type="button" id="delBtn" name="" value="삭제" />
    <input type="button" id="chkBtn" name="" onclick="chkFun();" value="체크박스 자바로 넘기기" />
    <input type="button" id="" name="" onclick="mapMove();" value="자바 map" />
  </div>
  
  <div>
  	<table>
  		<thead>
  			<colgroup>
  			</colgroup>
  			<tr>
  				<th>사번</th>
  				<th>업무</th>
  				<th>급여</th>
  				<th>커미션</th>
  			</tr>
  		</thead>
  		<tbody id="bonusList">
  		<tr>
  			<td><input type="text" id="empno" name="" value="" /></td>
  			<td><input type="text" id="job" name="" value="" /></td>
  			<td><input type="text" id="sal" name="" value="" /></td>
  			<td><input type="text" id="comm" name="" value="" /></td>
  		</tr>
  		</tbody>
  	</table>
  </div>
  
  <div>
  	<table>
  		<thead>
  			<colgroup>
  			</colgroup>
  		</thead>
  		<tbody id="salgradeInfo">
  			<tr>
  			  <th>사번</th>
  			  <td><input type="text" id="empno" name="" value="" /></td>
  			  <th>등급</th>
  			  <td><input type="text" id="ename" name="" value="" /></td>
  			</tr>	
  			<tr>
  			  <th>최저연봉</th>
  			  <td><input type="text" id="mgr" name="" value="" /></td>
  			  <th>최고연봉</th>
  			  <td><input type="text" id="hiredate" name="" value="" /></td>
  			</tr>	
  		</tbody>
  	</table>
  </div>
  
</body>
</html>