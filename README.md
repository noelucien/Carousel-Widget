# image-carousel
simple carousel of image create with jQuery . With transitions effects , draggable and resizable frame , create with jQuery UI

HTML STRUCTURE
create a div with id 'frame' and a child div with id 'slide'

CSS STYLE
define the dimension , position and any style of your frame

JavaScript Action
function set_frame()
set the frame propriety with an two boolean arguments: 
resizable -> true/false
draggable -> true/false

function slideshow()
set the slide show 
arguments:
filename -> an array of string that define the image path
duration_show -> the time of the effect (milliseconds)
effect_show -> one of the effect of jQuery UI http://api.jqueryui.com/category/effects/
duration_interval -> the time of the interval of the carousel show (milliseconds)
state -> a string that define the status of the carousel : 'run' or 'stop'
