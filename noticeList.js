<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html>

<head>
<title>두손에 담다</title>
</head>
<body>
<header>
  <jsp:include page="header.jsp"></jsp:include>
</header>
<!--메인 이미지 롤링  --> 
  <div class="main">
   <section class="slider_section">
  <ul class="slider">
    <li>
      <div style="background-image:url('images/images/IMG_2113.jpg');"></div>
    </li>
    <li>
      <div style="background-image:url('images/images/IMG_0608.jpg');"></div>
    </li>
    <li>
      <div style="background-image:url('images/images/IMG_2684.jpg');"></div>
    </li>
    <li>
      <div style="background-image:url('images/images/IMG_3029.jpg');"></div>
    </li>
  </ul>
  <div class="btn">
    <button type="button" id="prev"><</button>
    <button type="button" id="next">></button>
  </div>
</section>
    
<!-- 상품리스트  -->  
  <%-- <c:out value="${resultList}"/> --%>
 <c:out value="${resultCnt}"/>
 <c:out value="${resultCnt.cakecnt}"/>
<div class="center" id="cakeProduct">
			<span class="scale_tit">케이크</span>
		<ul  id="k_product">
			<c:forEach var="item" items="${resultList}" begin="0" end="100" step="1" varStatus="status">
			<c:if test = "${item.productClsCd eq 'D0001'}">
				<li class="dudam_product">
					<div class="scale"><img src="${item.productUrl}"></div>
					<p class="scale_tx"><a href="productDetail.do?productCd=${item.productCd}">${item.productNm}</a></p>
					<input type="hidden" id="cakeTotcnt" name="cakeTotcnt" value="${resultCnt.cakecnt}"/>
				</li>
			</c:if>
			</c:forEach>
		</ul>
			<span class="scale_more" id="cakeMoreList"><img src="images/images/moreBtn.png" /></span>	
</div>
<div class="center" id="drinkProduct">
		
			<span class="scale_tit">수제청</span>
		
		<ul id="d_product">
			<c:forEach var="item" items="${resultList}" begin="0" end="100" step="1" varStatus="status">
			<c:if test = "${item.productClsCd eq 'D0002'}">
				<li class="dudam_product">
					<div class="scale"><img src="${item.productUrl}"></div>
					<p class="scale_tx"><a href="productDetail.do?productCd=${item.productCd}">${item.productNm}</a></p>
				</li>
			</c:if>
			</c:forEach>
		</ul>
		<span class="scale_more" id="drinkMoreList"><img src="images/images/moreBtn.png" /></span>
</div>
<div class="center" id="thanksProduct">
			<span class="scale_tit">답례품</span>
		<ul id="t_product">
			<c:forEach var="item" items="${resultList}" begin="0" end="100" step="1" varStatus="status">
			<c:if test = "${item.productClsCd eq 'D0003'}">
				<li class="dudam_product">
					<div class="scale"><img src="${item.productUrl}"></div>
					<p class="scale_tx"><a href="productDetail.do?productCd=${item.productCd}">${item.productNm}</a></p>
				</li>
			</c:if>
			</c:forEach>
		</ul>
		<span class="scale_more" id="thanksMoreList"><img src="images/images/moreBtn.png" /></span>
</div>

</body>

<footer>
  <jsp:include page="footer.jsp"></jsp:include>
</footer>

</html>