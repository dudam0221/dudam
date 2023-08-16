<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <link rel="stylesheet" href="css/itemDetail.css">
  <script src="js/itemDetail.js"></script>

<title>두손에 담다 상세정보</title>
</head>
<body>
  <header>
    <jsp:include page="header.jsp"></jsp:include>
  </header>
  <div class="notice">
  <form name="homeFrm" id="homeFrm" method="post"></form>
    <input type="hidden" id="item_nm" name="item_nm" value="${resultList.productNm }" />
       <h1 class="tit_info">상품 상세정보</h1>
         <div class="left_side">
		    <img class="target" src="${resultList.productUrl }" data-zoom="3" />
		</div>
         <div class="right_side">
           <span class="title">상품명 :</span>
           <span class="content">${resultList.productNm }</span><br><br>
           <span class="title">상품설명 :</span>
           <span class="content">${resultList.productDesc }</span><br><br>
         </div>
         <div class="home">
          	<img src="images/images/homeBtn.png" onclick="goBack();" style="cursor:pointer;" alt="HOME" />
          </div>
  </div>
</body>
</html>