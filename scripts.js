$(document).ready(function(){
	
	setInterval(changeItems, 10000);
	var curSlide = 0;
	var array = $(".slide");
	$(".slide:gt(0)").hide();
	
	// EXPAND INFO
	$(".info").mouseenter(function(){
		this.style.height="100%";
	
		var info = this.getElementsByTagName("p");
		var par = info[0];
	
		par.style.display="initial";
	});
	
	// COMPRESS INFO
	$(".info").mouseleave(function(){
		this.style.height="initial";
	
		var info = this.getElementsByTagName("p");
		var par = info[0];
	
		par.style.display="none";
	});
	
	$(".navigation").click(function(){
		
		
		var dd = "#"+$(this).attr("id").replace("BT","DD");
		if($(dd).is(":visible")){
			$(".dropdown").hide();
		}
		else{
			$(".dropdown").hide();
			$(dd).toggle();
		}
	});
	
	function changeItems(){
		
		array.eq(curSlide).toggle();
		curSlide++;
		
		if(curSlide >= array.length){
			curSlide = 0;
		}
		array.eq(curSlide).toggle();
	};
});