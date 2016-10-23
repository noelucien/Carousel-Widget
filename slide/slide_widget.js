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
		resizable: false,
		interval_event: null,
		index_images: 0
    },
	carousel_element:{
		frame: {},
		slide: {},
		picture: {},
		arrowRight: {},
		arrowLeft: {}
	},
    _create: function(){
		var that = this;
		frame = $('<div></div>').appendTo(this.element).addClass( "ui_widget_frame_carousel" );	
		slide = $('<div></div>').appendTo(frame).addClass( "ui_widget_slide_carousel" );		
		arrowRight = $('<div></div>').appendTo(frame).addClass( "arrow arrow_right" );
		arrowLeft = $('<div></div>').appendTo(frame).addClass( "arrow arrow_left" );				
		frame.width(this.options.width).height(this.options.height);		
		arrowRight.click(function(){ that._RightArrowAction(); });
		arrowLeft.click(function(){ that._LeftArrowAction(); });
		this._slideshow();
    },	
	_destroy: function(){
		clearInterval(this.options.interval_event);
		this.options.interval_event = null;
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
		if( this.options.draggable ){
			frame.draggable({ disabled: false, containment: "document", cursor: "grabbing", opacity: 0.75 });
		}else{
			frame.draggable({ disabled: true, containment: "document", cursor: "grabbing", opacity: 0.75 });
		}
		if( this.options.resizable ){
			var that = this;
			frame.resizable({ disabled: false, resize: function( event, ui ){ 
				that.options.width = ui.size.width;
				that.options.height = ui.size.height;
				var h = slide.find("img").height();
				var w = slide.find("img").width();	
				that._resize_image(w,h);
			} });
		}else{
			frame.resizable({ disabled: true });
		}
		if( this.options.state==='stop' ){
			clearInterval(this.options.interval_event);
			this.options.interval_event =  null;
		}	
		if( this.options.state==='run' ){
			if(this.options.images.length>0){		
				if(this.options.interval_event!=null){
					clearInterval(this.options.interval_event);
					this.options.interval_event =  null;
				}
				var that = this;
				index_images = 0;
				slide.hide();			
				this._load_image(this.options.images[index_images]).then(function(result){	
					slide.show(that.options.effects,  that.options.timeShow);
				});								
				this.options.interval_event = setInterval(function(){
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
		if(w<h){			
			var w = w * (frame_h/h);
			var h = frame_h;			
			var px = (frame_w - w)/2;
			var py = 0;
		}else{
			var h = h * (frame_w/w);
			var w = frame_w;			
			var py = (frame_h - h)/2;
			var px = 0;
		}
		slide.find("img").width(w).height(h);
		slide.width(w).height(h);
		slide.find("img").css({"position":"absolute","left":px,"top":py});		
		var posHarrow = frame_h / 2;
		arrowRight.css({"top":posHarrow});
		arrowLeft.css({"top":posHarrow});
	},
	_setOption: function( key, value ) {
		var that = this;
		switch(key){
			case "images":
				if(value === undefined ){
					that.options.images = value;
				}else{
					that.options.images = value;
					that._slideshow();
				}				
			break;
			case "effects":
				if(value === undefined ){
					return that.options.effects;
				}else{
					that.options.effects = value;
					that._slideshow();
				}
			break;
			case "timeShow":
				if(value === undefined ){
					return that.options.timeShow;
				}else{
					that.options.timeShow = value;
					that._slideshow();
				}
			break;
			case "timeInterval":
				if(value === undefined ){
					return that.options.timeInterval;
				}else{
					that.options.timeInterval = value;
					that._slideshow();
				}
			break;
			case "state":
				if(value === undefined ){
					return that.options.state;
				}else{
					that.options.state = value;
					that._slideshow();					
				}
			break;
			case "arrows":
				if(value === undefined ){
					return that.options.arrows;
				}else{
					that.options.arrows = value;
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
					return that.options.dialog;
				}else{
					that.options.dialog = value;
				}
			break;
			case "width":
				if(value === undefined ){
					return  that.options.width;
				}else{
					that.options.width = value;
					frame.width(that.options.width).height(that.options.height);
					var h =slide.find("img").height();
					var w = slide.find("img").width();	
					that._resize_image(w,h);	
				}
			break;
			case "height":
				if(value === undefined ){
					return that.options.height;
				}else{
					that.options.height = value;
					frame.width(that.options.width).height(that.options.height);
					var h =slide.find("img").height();
					var w = slide.find("img").width();	
					that._resize_image(w,h);
				}
			break;
			case "draggable":
				if(value === undefined ){
					return that.options.draggable;
				}else{
					that.options.draggable = value;
					if( value ){
						frame.draggable({ disabled: false, containment: "document", cursor: "grabbing", opacity: 0.75 });
					}else{
						frame.draggable({ disabled: true, containment: "document", cursor: "grabbing", opacity: 0.75 });
					}					
				}
			break;
			case "resizable":
				if(value === undefined ){
					return that.options.resizable;
				}else{
					that.options.resizable = value;
					if( value ){
						frame.resizable({ disabled: false, resize: function( event, ui ){ 
							that.options.width = ui.size.width;
							that.options.height = ui.size.height;							
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
				 that._super( key, value );
		}
    },
    _setOptions: function( options ) {		  
		  var that = this;
		  $.each( options, function( key, value ) {
			that._setOption( key, value );
		  });
    },
	option: function( key, value ) {
		return this._setOption( key, value );
    }
});