(function($) {
	$.fn.jqScale = function(option) {
		var action = 'get';
		if (typeof option === 'number') {
			action = 'setScale';
			var scale = option;
		} else if (typeof option === 'boolean' && option === true)  {
			action = 'calculate'
		}
			
		return this.each(
			function() {
				var $element = $(this);
				
				var setScale = function() {		
					$element
				};
				
				var getScale = function() {
				};
				
				var calculateScale = function() {
				};
				
			}
		);
	};
})(jQuery);