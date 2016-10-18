# image-carousel
simple carousel of image create with jQuery . With transitions effects , draggable and resizable frame , create with jQuery UI

HTML STRUCTURE
create a div with id 'frame' and a child div with id 'slide'
<html><div id="frame"><div id="slide"></div></div></html>

CSS STYLE
define the dimension , position and any style of your frame
#frame{width:480px;height:480px;overflow:hidden;}

JavaScript Action
set the frame propriety with an two boolean attribute 
set_frame({'resizable':true/false,'draggable':true/false});

set the slide show 
slideshow({'filename':[],'duration_show':milliseconds,'effect_show':ui effects,'duration_interval':milliseconds,'state':action}); 
arguments:
filename -> an array of string that define the image path
duration_show -> the time of the effect
effect_show -> one of the effect of jQuery UI http://api.jqueryui.com/category/effects/
duration_interval -> the time of the interval of the carousel show
state -> a string that define the status of the carousel : 'run' or 'stop'
