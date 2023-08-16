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
	   <script src="js/showPopUp.js"></script>
	</head>
	<body>
	  <input type="text" id="child_val" name="child_val" value="" />
	<input type="button" id="srcPopUpBtn" name="srcPopUpBtn" onclick="srcPopUp();" value="조회" />
	<div>
	  	<table>
	      <thead>
	        <tr>
	          <th>번호</th>
	          <th>제품코드</th>
	          <th>제품명</th>
	        </tr>
	      </thead>
	      <tbody id="popUpList"></tbody>
	    </table>
	  </div>
	</body>
</html>