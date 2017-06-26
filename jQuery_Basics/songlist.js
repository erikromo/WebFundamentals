//alert("What up")

$(document).ready(function(){
	
$("#add").on("click",function(){
	var animal=$("#animal").val();
	console.log(animal);

	var listItem="<li>"+ animal + "</li>";
	console.log(listItem);

	$("#animal-list").append(listItem);
	})
});