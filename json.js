	$(function(){
  	$.get('json.json',async:true,success:function(date){
	       console.log(date.name)
	})
  })
