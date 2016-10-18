var interval_slide_global;

function slideshow(obj){   	
	if( obj.state==='stop' ){
		clearInterval(interval_slide_global);
	}else{
		var index = 0;
		$("#slide").hide();
		load_image(obj.filename[index]).then(function(result){	
			$("#slide").show(obj.effect_show, obj.duration_show);
		});	
		interval_slide_global = setInterval(function(){
			$("#slide").hide(obj.effect_show, obj.duration_show,function(){
				index++;
				if(index==obj.filename.length){index=0;}	   
				load_image(obj.filename[index]).then(function(result){	
					$("#slide").show(obj.effect_show, obj.duration_show);
				});
			});					   
		},obj.duration_interval);	
	}
}

function load_image(filename){
	return new Promise(function(response){
		$("#slide").empty();
		$("#slide").removeAttr('style');
		var img = new Image();
		img.src = filename;
		img.onload = function(){		
			$("#slide").html(img);	
			var h = $("#slide img").height();
			var w = $("#slide img").width();	
			resize(w,h);
			response('ok');
		};
	});
}

function resize(w,h){	
	var frame_w = $("#frame").width();
	var frame_h = $("#frame").height();
	if( w>=h ){
		var calcolo = w;
		var costante = frame_w;
	}else{
		var calcolo = h;
		var costante = frame_h;
	}	
	var risultato = costante * (100 / calcolo);
	w = (w/100)*risultato;
	h = (h/100)*risultato;	
	$("#slide img").width(w).height(h);
	$("#slide").width(w).height(h);
	var px = frame_w - w;
	var py = frame_h - h;	
	if(px>0){
		px = Math.abs(px/2);		
	}
	if(py>0){
		py = Math.abs(py/2);		
	}
	px+="px";
	py+="px";	
	$("#slide").css({"position":"absolute","left":px,"top":py});
}

function set_frame(obj){
	if(obj.resizable ){
		$("#frame").resizable({ disabled: false, resize: function( event, ui ){
			var h = $("#slide img").height();
			var w = $("#slide img").width();	
			resize(w,h);
		} });
	}else{
		$("#frame").resizable({ disabled: true });
	}
	if(obj.draggable ){
		$("#frame").draggable({ disabled: false });
	}else{
		$("#frame").draggable({ disabled: true });
	}
}