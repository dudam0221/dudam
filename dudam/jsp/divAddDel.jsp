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
   <script src="js/divAddDel.js"></script>
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
 <h1>divAddDel</h1>
  <div>
    <input type="button" id="addBtn" name="" value="추가" onclick="addFun();"/>
  </div>
  <form id="insertFrm" name="insertFrm" method="post">
  <div id="upper">
    <div id="dtlInfo" class="info">
    	<table>
    	  <thead>
    		<colgroup>
    		</colgroup>
    		</thead>
    		<tbody>
    		  <tr>
    		  	<th>사번</th>
    		  	<td><input type="text" id="empno" name="empno" value="" /></td>
    		  	<th>등급</th>
    		  	<td><input type="text" id="grade" name="grade" value="" /></td>
    		  </tr>	
    		  <tr>
    		    <th>최저임금</th>
    		  	<td><input type="text" id="losal" name="losal" value="" /></td>
    		  	<th>최고임금</th>
    		  	<td><input type="text" id="hisal" name="hisal" value="" /></td>
    		  </tr>
<!--   		  <input type="button" id="delBtn" name="" value="삭제" onclick="delFun(this);"/> -->
    		</tbody>
    	</table>
    </div>
  </div>
  <div>
  </form>
    <input type="button" id="" name="" value="저장" onclick="insertFun();" />
  </div>
</body>
</html>