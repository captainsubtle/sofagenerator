$(document).ready(function() {
	var bg_canvas = document.getElementById("background");
	var bg_context = bg_canvas.getContext("2d");
	
	var text_canvas = document.getElementById("textLayer");
    var text_context = text_canvas.getContext("2d");
    text_context.clearRect(0, 0, text_canvas.width, text_canvas.height);
    text_context.fillStyle = "#999999";
    text_context.fillRect(0, 0, text_canvas.width, text_canvas.height);

	var bg_img = new Image();
	bg_img.src = "images/background-base.jpg";
	bg_img.onload = function() {
		bg_context.drawImage(bg_img, 0, 0, bg_canvas.width, bg_canvas.height);
		text_context.blendOnto(bg_context, 'overlay');
	};
	
	$('.lines').each(function() {
		$(this).keyup(function() {
			redrawImage();
		});
	});
	
	function redrawImage() {
		bg_context.drawImage(bg_img, 0, 0, bg_canvas.width, bg_canvas.height);
		text_context.clearRect(0, 0, text_canvas.width, text_canvas.height);
		
		text_context.fillStyle = "#999999";
		text_context.fillRect(0, 0, text_canvas.width, text_canvas.height);
		
		text_context.fillStyle = "#ffffff";
		text_context.font = "bold 5.5em BoycottRegular";
		
		if($('#line1').val() != "put your text here")
			text_context.fillText($('#line1').val(), 10, 95, 350);
			
		if($('#line2').val() != "and here")
			text_context.fillText($('#line2').val(), 100, 155);
			
		if($('#line3').val() != "also here")
			text_context.fillText($('#line3').val(), 140, 225);
		
		text_context.blendOnto(bg_context, 'overlay');		
	}
	
	$('#line1').focusin(function() {
		if($(this).val() == "put your text here") {
			this.value = "";	
		}
	});
	$('#line2').focusin(function() {
		if($(this).val() == "and here") {
			this.value = "";	
		}
	});
	$('#line3').focusin(function() {
		if($(this).val() == "also here") {
			this.value = "";	
		}
	});	
	
	$('#generator').submit(function() {
    	window.open(bg_canvas.toDataURL("image/png"));
	});
});


