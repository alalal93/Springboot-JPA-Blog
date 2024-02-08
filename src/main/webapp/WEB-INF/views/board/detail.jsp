<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="../layout/header.jsp"%>
<div class="container">

		
			<br/><br/>
			
		<div>
			<h3>${board.title}</h3>	
			<br />
			</div>
						<div>
			 <span id="id"  style="display:none;"><i>${board.id }</i></span>
			 <i><b>${board.user.username} </b> </i></span>
			 <i> ${board.user.createDate} </i></span>
			</div>
			<hr />
			<br />
			<br />
	<div>
	<br />
	<br />
  		<div>${board.content }</div>
	</div>
	<hr />
</div>
	<div class= "d-flex justify-content-center">
	<button class="btn btn-secondary" onclick="history.back()">돌아가기</button>
			<button id="btn-update" class="btn-warning">수정</button>
			<c:if test="${board.user.id == principal.user.id}">
			<button id="btn-delete" class="btn-danger">삭제</button>
			</c:if>
			</div>

<script src="/js/board.js"> </script>
<%@include file="../layout/footer.jsp"%>

</body>
</html>


