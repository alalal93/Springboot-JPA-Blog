let index = {
	
		init: function(){
		$("#btn-save").on("click",()=>{
			this.save();
			});
		
			$("#btn-delete").on("click",()=>{
				this.deleteById();
			});
			
				$("#btn-update").on("click",()=>{
				this.update();
			});
			
				$("#btn-reply-save").on("click", ()=>{
				this.replySave();
			});
	},	
		
	
	save: function(){
			let data = {
				title: $("#title").val(),
				content: $("#content").val(),
		};
		
		/*		console.log(data);*/
		//.ajax호출시 default가 비동기 호출
		// ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청!!
		// ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환해줌
		
		$.ajax({
			type:"POST",
			url:"/api/board",
			data:JSON.stringify(data) ,
			contentType:"application/json; charset=utf-8", 
			dataType:"json"
		}).done(function(resp){
			alert("글쓰기가 완료되었습니다.");
			console.log(resp);
			location.href = "/"
		}).fail(function(error){
			alert(JSON.stringify(error));
					})
	},		
	
	
	
		deleteById: function(){
				let id = $("#id").text();
			
					$.ajax({
			type:"DELETE",
			url:"/api/board/"+id,
			dataType:"json"
		}).done(function(resp){
			alert("삭제가 완료되었습니다.");
			location.href = "/"
		}).fail(function(error){
			alert(JSON.stringify(error));
					}); 
		
	},
	
	update: function(){
			let id  = $("#id").val();
			
			let data = {
				title: $("#title").val(),
				content: $("#content").val(),
		};
				
		$.ajax({
			type:"PUT",
			url:"/api/board/"+id,
			data:JSON.stringify(data) ,
			contentType:"application/json; charset=utf-8", 
			dataType:"json"
		}).done(function(resp){
			alert("글수정이 완료되었습니다.");
			console.log(resp);
			location.href = "/"
		}).fail(function(error){
			alert(JSON.stringify(error));
					})
	},		
	
	replySave: function(){
			let data = {
						userId:$("#userId").val(),
						boardId:$("#boardId").val(),
						content: $("#reply-content").val()
		};

	
		$.ajax({
			type:"POST",
			url:`/api/board/${data.boardId}/reply`,
			data:JSON.stringify(data) ,
			contentType:"application/json; charset=utf-8", 
			dataType:"json"
		}).done(function(resp){
			alert("댓글작성이 완료되었습니다.");
			console.log(resp);
			location.href = `/board/${data.boardId}`;
		}).fail(function(error){
			alert(JSON.stringify(error));
					})
	},		
	
		
		replyDelete : function(boardId, replyId){
		$.ajax({
			type:"DELETE",
			url:`/api/board/${boardId}/reply/${replyId}`,
			dataType:"json"
		}).done(function(resp){
			alert("댓글삭제 성공");
			location.href = `/board/${boardId}`;
		}).fail(function(error){
			alert(JSON.stringify(error));
			});
	},
										
}
			
				
index.init();