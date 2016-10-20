$.widget( "custom.carousel", {
    options: {
		images: [],
		effects: 'fade',
		timeShow: 500,
		timeInterval: 4000,
		state: 'run',
		width: 300,
		height: 300,
		arrows: true,
		draggable: false,
		resizable: false
    },
	variables:{
		frame: {},
		slide: {},
		arrowRight: {},
		arrowLeft: {},
		interval_event: null,
		index_images: 0
	},
    _create: function(){
		frame = $('<div></div>').appendTo(this.element).addClass( "ui_widget_frame_carousel" );
		frame.width(this.options.width).height(this.options.height);
		slide = $('<div></div>').appendTo(frame).addClass( "ui_widget_slide_carousel" );		
		arrowRight = $('<div></div>').appendTo(frame).addClass( "arrow arrow_right" );
		arrowLeft = $('<div></div>').appendTo(frame).addClass( "arrow arrow_left" );
		var that = this;
		arrowRight.click(function(){ that._RightArrowAction(); });
		arrowLeft.click(function(){ that._LeftArrowAction(); });
		this._slideshow();
    },	
	_destroy: function(){
		clearInterval(interval_event);
		interval_event = null;
		frame.remove();
	},
	_setOption: function( key, value ) {

    },
	_RightArrowAction: function(){
		index_images++;
		var that = this;
		if(index_images==this.options.images.length){index_images=0;}
		this._load_image(this.options.images[index_images]).then(function(result){	
			slide.show(that.options.effects,  that.options.timeShow);
		});
	},
	_LeftArrowAction: function(){
		index_images--;
		var that = this;
		if(index_images<0){index_images=this.options.images.length;}
		this._load_image(this.options.images[index_images]).then(function(result){	
			slide.show(that.options.effects,  that.options.timeShow);
		});
	},
	_slideshow: function (){   	
		if( this.options.arrows ){
			arrowRight.show();
			arrowLeft.show();
		}else{
			arrowRight.hide();
			arrowLeft.hide();
		}
		if( this.options.state==='stop' ){
			clearInterval(interval_event);
			interval_event =  null;
		}	
		if( this.options.state==='run' ){
			if(this.options.images.length>0){				
				var that = this;
				index_images = 0;
				slide.hide();			
				this._load_image(this.options.images[index_images]).then(function(result){	
					slide.show(that.options.effects,  that.options.timeShow);
				});								
				interval_event = setInterval(function(){
					slide.hide(that.options.effects,  that.options.timeShow, function(){
						index_images++;
						if(index_images==that.options.images.length){index_images=0;}	   
						that._load_image(that.options.images[index_images]).then(function(result){	
							slide.show(that.options.effects,  that.options.timeShow);
						});
					});					   
				},this.options.timeInterval);							
			}	
		}		
	},
	_load_image: function (filename){		
		var that = this;
		return new Promise(function(response){
			slide.empty();
			var img = new Image();
			img.src = filename;
			img.onload = function(){		
				slide.html(img);	
				var h = img.height;
				var w = img.width;			
				that._resize_image(w,h);			
				response('ok');
			};
		});
	},
	_resize_image: function (w,h){	
		var frame_w = frame.width();
		var frame_h = frame.height();
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
		slide.find("img").width(w).height(h);
		slide.width(w).height(h);
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
		slide.css({"position":"absolute","left":px,"top":py});
		var posHarrow = frame_h / 2;
		posHarrow += "px";
		arrowRight.css({"top":posHarrow});
		arrowLeft.css({"top":posHarrow});
	},
	_setOption: function( key, value ) {
		switch(key){
			case "images":
				if(value === undefined ){
					return this.options.images;
				}else{
					this.options.images = value;
					this._slideshow();
				}				
			break;
			case "effects":
				if(value === undefined ){
					return this.options.effects;
				}else{
					this.options.effects = value;
					this._slideshow();
				}
			break;
			case "timeShow":
				if(value === undefined ){
					return this.options.timeShow;
				}else{
					this.options.timeShow = value;
					this._slideshow();
				}
			break;
			case "timeInterval":
				if(value === undefined ){
					return this.options.timeInterval;
				}else{
					this.options.timeInterval = value;
					this._slideshow();
				}
			break;
			case "state":
				if(value === undefined ){
					return this.options.state;
				}else{
					this.options.state = value;
					this._slideshow();					
				}
			break;
			case "arrows":
				if(value === undefined ){
					return this.options.arrows;
				}else{
					this.options.arrows = value;
					if( value ){
						arrowRight.show();
						arrowLeft.show();
					}else{
						arrowRight.hide();
						arrowLeft.hide();
					}
				}
			break;
			case "dialog":
				if(value === undefined ){
					return this.options.dialog;
				}else{
					this.options.dialog = value;
				}
			break;
			case "width":
				if(value === undefined ){
					return this.options.width;
				}else{
					this.options.width = value;
					frame.width(this.options.width).height(this.options.height);
					var h =slide.find("img").height();
					var w = slide.find("img").width();	
					this._resize_image(w,h);	
				}
			break;
			case "height":
				if(value === undefined ){
					return this.options.height;
				}else{
					this.options.height = value;
					frame.width(this.options.width).height(this.options.height);
					var h =slide.find("img").height();
					var w = slide.find("img").width();	
					this._resize_image(w,h);
				}
			break;
			case "draggable":
				if(value === undefined ){
					return this.options.draggable;
				}else{
					this.options.draggable = value;
					if( value ){
						frame.draggable({ disabled: false, containment: "document", cursor: "grabbing", opacity: 0.75 });
					}else{
						frame.draggable({ disabled: true, containment: "document", cursor: "grabbing", opacity: 0.75 });
					}					
				}
			break;
			case "resizable":
				var that = this;
				if(value === undefined ){
					return this.options.resizable;
				}else{
					this.options.resizable = value;
					if( value ){
						frame.resizable({ disabled: false, resize: function( event, ui ){ 
							var h = slide.find("img").height();
							var w = slide.find("img").width();	
							that._resize_image(w,h);
						} });
					}else{
						frame.resizable({ disabled: true });
					}					
				}
			break;
			default:
				 this._super( key, value );
		}
    },
    _setOptions: function( options ) {		  
		  var that = this;
		  $.each( options, function( key, value ) {
			that._setOption( key, value );
		  });
    }
	
});