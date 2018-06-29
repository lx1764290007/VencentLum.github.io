	$(function(){
  	 $.ajax({url:"json.json",async:true,success:function(result){
	       console.log(result.name)
	 }})
  })
