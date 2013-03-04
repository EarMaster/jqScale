jqScale (v0.1.1)
=======

a jQuery plugin that will GET / CALCULATE (including inherited scaling from parent Nodes) / SET the css-scale factor (via transform: matrix) of dom-elements 


examples:

* getting the scale of ONE element

   ``jQuery('#myDomElement').jqScale();``

    this will return     [ 1, 1 ];     (scale for x-axis, scale for y-axis)


* getting the 'TRUE' scale of an element (meaning the element's scale multiplied with all its parents' scales!)

    ``jQuery('#myDomElement').jqScale(true);``

* setting the scale for an element:

    ``jQuery('#myDomElement').jqScale(0.5);``

* setting different scale values for x and y axis:

    ``jQuery('#myDomElement').jqScale(0.5, 0.7);``

		
