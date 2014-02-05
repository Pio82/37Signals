$(document).ready(function(){
		
	$("#basecamp").hover(function() {
		$(this).css("cursor", "pointer");
		$(".main_statement").css("display", "none");
		$(".basecamp_statement").css("display", "block");
	},function(){
		$(".main_statement").css("display", "block");
		$(".basecamp_statement").css("display", "none");
	});	
	$("#highrise").hover(function() {
		$(this).css("cursor", "pointer");
		$(".main_statement").css("display", "none");
		$(".highrise_statement").css("display", "block");
	},function(){
		$(".main_statement").css("display", "block");
		$(".highrise_statement").css("display", "none");
	});
	$("#campfire").hover(function() {
		$(this).css("cursor", "pointer");
		$(".main_statement").css("display", "none");
		$(".campfire_statement").css("display", "block");
	},function(){
		$(".main_statement").css("display", "block");
		$(".campfire_statement").css("display", "none");
	});
})