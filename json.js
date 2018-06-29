	$(function(){
  	$.get(url:'json.json',async:true,success:function(date){
	       console.log(date.name)
	})
  })
