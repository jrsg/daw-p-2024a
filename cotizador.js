$(document).ready(function(){
	$("#confirmacion").dialog({
	  width: 600,
	  height:650,
	  autoOpen:false,
	  modal:true
	});
});

function mostrarResumen(){
	$("#confirmacion").dialog("open");
}