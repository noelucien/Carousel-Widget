# jQuery UI Widget Carousel
A simple jQuery Plugin based on jQuery UI Widget for a carousel of image. 
Options:
* images
* effects
* timeShow
* timeInterval
* state
* width
* height
* arrows
* draggable
* resizable

__________________________________________________________________________________

###images
Type: Array

Default: empty


Set the images to display into the carousel.

Code examples:

Initialize the widget:
```
$( ".selector" ).carousel({
		'images':[
			'img/1.jpg',
			'img/2.jpg',  			
			...
		]
});
```
Get or set the images option, after initialization:
```
// Getter
var images = $( ".selector" ).carousel( "option", "images" );
 
// Setter
$( ".selector" ).carousel( "option", "images", array );
```

__________________________________________________________________________________

###effects
Type: String

Default: "fade"

Set the effect used for the transiction of the images into the carousel. The value can be the name of a [jQuery UI effect](http://api.jqueryui.com/category/effects/).

Code examples:

Initialize the widget:
```
$( ".selector" ).carousel({
		'effects':'fade'
});
```
Get or set the effects option, after initialization:
```
// Getter
var images = $( ".selector" ).carousel( "option", "effects" );
 
// Setter
$( ".selector" ).carousel( "option", "effects", "fade" );
```

__________________________________________________________________________________

###timeShow
Type: Number

Default: 500

Set the specified duration in milliseconds of the effects.

Code examples:

Initialize the widget:
```
$( ".selector" ).carousel({
		'timeShow':500
});
```
Get or set the timeShow option, after initialization:
```
// Getter
var images = $( ".selector" ).carousel( "option", "timeShow" );
 
// Setter
$( ".selector" ).carousel( "option", "timeShow", 500 );
```

__________________________________________________________________________________

###timeInterval
Type: Number

Default: 4000

Set the specified duration in milliseconds of the interval.

Code examples:

Initialize the widget:
```
$( ".selector" ).carousel({
		'timeInterval':4000
});
```
Get or set the timeInterval option, after initialization:
```
// Getter
var images = $( ".selector" ).carousel( "option", "timeInterval" );
 
// Setter
$( ".selector" ).carousel( "option", "timeInterval", 4000 );
```

__________________________________________________________________________________

###state
Type: String

Default: "run"

Set the state of the carousel. The value ca be "run" or "stop".

Code examples:

Initialize the widget:
```
$( ".selector" ).carousel({
		'state':'run'
});
```
Get or set the state option, after initialization:
```
// Getter
var images = $( ".selector" ).carousel( "option", "state" );
 
// Setter
$( ".selector" ).carousel( "option", "state", "run" );
```

__________________________________________________________________________________

###width
Type: Number

Default: 300

The width of the carousel, in pixels.

Code examples:

Initialize the widget:
```
$( ".selector" ).carousel({
		'width':300
});
```
Get or set the width option, after initialization:
```
// Getter
var images = $( ".selector" ).carousel( "option", "width" );
 
// Setter
$( ".selector" ).carousel( "option", "width", 300 );
```

__________________________________________________________________________________

###height
Type: Number

Default: 300

The height of the carousel, in pixels.

Code examples:

Initialize the widget:
```
$( ".selector" ).carousel({
		'height':300
});
```
Get or set the height option, after initialization:
```
// Getter
var images = $( ".selector" ).carousel( "option", "height" );
 
// Setter
$( ".selector" ).carousel( "option", "height", 300 );
```

__________________________________________________________________________________

###arrows
Type: Boolean

Default: true

Set the display of the arrows for move to the next or previous image.

Code examples:

Initialize the widget:
```
$( ".selector" ).carousel({
		'arrows':true
});
```
Get or set the arrows option, after initialization:
```
// Getter
var images = $( ".selector" ).carousel( "option", "arrows" );
 
// Setter
$( ".selector" ).carousel( "option", "arrows", true );
```

__________________________________________________________________________________

###draggable
Type: Boolean

Default: false

Set the carousel draggable.

Code examples:

Initialize the widget:
```
$( ".selector" ).carousel({
		'draggable':false
});
```
Get or set the draggable option, after initialization:
```
// Getter
var images = $( ".selector" ).carousel( "option", "draggable" );
 
// Setter
$( ".selector" ).carousel( "option", "draggable", false );
```

__________________________________________________________________________________

###resizable
Type: Boolean

Default: false

Set the carousel resizable.

Code examples:

Initialize the widget:
```
$( ".selector" ).carousel({
		'resizable':false
});
```
Get or set the resizable option, after initialization:
```
// Getter
var images = $( ".selector" ).carousel( "option", "resizable" );
 
// Setter
$( ".selector" ).carousel( "option", "resizable", false );
```
__________________________________________________________________________________
