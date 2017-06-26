$(document).ready(function(){

	$("#hide").click(function(){
		$("#image").hide();
	});

	    $("#show").click(function(){
			$("#image").show();
		});

$("#explode").click(function(){
		$("#image").hide("explode",{pieces:16},2000);
	});


});



