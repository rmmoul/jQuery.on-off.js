jQuery.on-off.js
================

Common jQuery \_on/\_off swap with automatic hover-state image preloader

To use:
	
1. create your hover and non-hover state images, and save the hover
state image with \_off at the end of the file name before the 
extension, and save the hover state with \_on at the end.

2. Add the images to your page, and give them a class of rollover.

3. Include this script somewhere on your page

This script requires jQuery to also be included 

No need to call any this script, it will run after the page loads
and take care of preloading the hover state images, and do the swap.

Credits: I'm not sure who first shared the \_on/\_off method used,
but I modified a preloader script from http://stackoverflow.com/a/7560247/901502
to handle the auto loading of the hover state images.

Examples:

You've created apply_button_on.jpg and apply_button_off.jpg.

applybutton_on.jpg is the hover state image
applybutton_off.jpg is the normail, non-hover state image

You would include the image in your html like this:

    <img src="images/apply_button_off.jpg" class="rollover">
